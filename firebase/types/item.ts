export interface Category {
  [name: string]: Category | null
}

export interface Item {
  name: string
  description?: string
  category: Category
  images: string[]
  tags?: string[]
  price: number
  size?: string
  materials: string[]
}
