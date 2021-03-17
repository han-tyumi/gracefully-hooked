import { IContentDocument } from '@nuxt/content/types/content'

export interface CategoriesDocument extends IContentDocument {
  categories: Record<string, string[] | null | undefined>
}
