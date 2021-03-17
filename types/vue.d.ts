import { contentFunc } from '@nuxt/content/types/content'
import Velocity from 'velocity-animate'

declare module '@nuxt/types' {
  interface Context {
    $content: contentFunc
    Velocity: Velocity
  }
}
