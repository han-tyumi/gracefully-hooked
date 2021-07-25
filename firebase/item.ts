import firebase from 'firebase'

export type Category = {
  [name: string]: Category | null
}

export type FSItem = {
  name: string
  slug: string
  description?: string
  category: Category
  images: string[]
  tags?: string[]
  price: number
  size?: string
  materials: string[]
}

export type Item = FSItem & {
  _images: string[]
  link: string
  categories: string[]
}

function loadImage(filename: string): string {
  try {
    return require(`~/assets/img/items/${filename}`)
  } catch (error) {
    return ''
  }
}

function unwrapCategory(category: Category | null) {
  const unwrapped: string[] = []
  while (category) {
    const [parent, children] = Object.entries(category)[0]
    unwrapped.push(parent)
    category = children
  }
  return unwrapped
}

export const itemConverter: firebase.firestore.FirestoreDataConverter<Item> = {
  toFirestore(value: Item) {
    const { _images, images, link, categories, ...rest } = value
    return {
      ...rest,
      images: _images,
    }
  },
  fromFirestore(snapshot, options) {
    const { images, ...rest } = snapshot.data(options) as FSItem
    return {
      ...rest,
      _images: images,
      images: images.map(loadImage),
      link: `/item/${rest.slug}`,
      categories: unwrapCategory(rest.category),
    }
  },
}
