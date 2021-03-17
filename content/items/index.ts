import { IContentDocument } from '@nuxt/content/types/content'

export interface Items {
  name: string
  description?: string
  image: string
  tags?: string[]
  price: number
  size?: string
  materials: string[]
}

export interface ItemsDocument extends IContentDocument {
  items: Items[]
}
