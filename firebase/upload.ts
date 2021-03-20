import fs from 'fs'
import path from 'path'
import Excel from 'exceljs'
import admin from 'firebase-admin'

import { Category } from './types/item'

type ItemRowValues = [
  _: undefined,
  name: string,
  description: string | undefined,
  category: string,
  tags: string | undefined,
  price: string,
  size: string | undefined,
  materials: string
]

const IMAGE_DIR = 'assets/img/items/'

if (!fs.existsSync(IMAGE_DIR)) {
  fs.mkdirSync(IMAGE_DIR, { recursive: true })
}

const app = admin.initializeApp()

const firestore = app.firestore()
firestore.settings({
  ignoreUndefinedProperties: true,
})
const items = firestore.collection('items')

function getCategory(path: string) {
  const category: Category = {}
  let ref = category

  const tokens = path.toLowerCase().split('/')

  let i = 0
  for (; i < tokens.length - 1; i++) {
    ref = ref[tokens[i]] = {}
  }
  ref[tokens[i]] = null

  return category
}

async function main() {
  const [excelFilePath] = process.argv.slice(2)

  const workbook = new Excel.Workbook()
  await workbook.xlsx.readFile(excelFilePath)

  const worksheet = workbook.getWorksheet(1)

  const allImages = worksheet.getImages()

  const slugs: Record<string, number | undefined> = {}

  worksheet.eachRow(async (row) => {
    if (row.number === 1) {
      return
    }

    const [
      ,
      name,
      description,
      category,
      tags,
      price,
      size,
      materials,
    ] = row.values as ItemRowValues
    const trimmedName = name.trim()
    let slug = trimmedName.toLowerCase().split(/\s/).join('-')

    if (typeof slugs[slug] === 'number') {
      slug += `-${(slugs[slug]! += 1)}`
    } else {
      slugs[slug] = 1
    }

    const imageNames: string[] = []

    let index = 1
    for (const { range, imageId } of allImages) {
      if (range.tl.row + 1 !== row.number) {
        continue
      }

      const { extension, buffer } = workbook.getImage(parseInt(imageId, 10))

      if (!buffer) {
        throw new Error(`${imageId} missing buffer`)
      }

      const filename = `${slug}-${index
        .toString()
        .padStart(3, '0')}.${extension}`

      fs.appendFileSync(path.join(IMAGE_DIR, filename), Buffer.from(buffer))

      imageNames.push(filename)

      index += 1
    }

    const item = {
      name: trimmedName,
      slug,
      description: description && description.trim(),
      category: getCategory(category),
      tags:
        tags &&
        tags
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
      price: parseInt(price, 10),
      size:
        size &&
        size
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
          .join('\n'),
      materials: materials
        .split(',')
        .map((m) => m.trim())
        .filter(Boolean),
      images: imageNames,
    }

    await items.doc(slug).set(item, {
      merge: true,
    })
  })
}

main()
