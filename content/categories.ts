import { IContentDocument } from '@nuxt/content/types/content'

export type Categories = Record<string, string[] | null | undefined>

export interface CategoriesDocument extends IContentDocument {
  categories: Categories
}
