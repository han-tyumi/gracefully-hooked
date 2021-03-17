import { contentFunc } from '@nuxt/content/types/content'

declare module '@nuxt/types' {
  interface Context {
    $content: contentFunc
  }
}
