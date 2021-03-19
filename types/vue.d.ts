import Velocity from 'velocity-animate'

declare module '@nuxt/types' {
  interface Context {
    Velocity: Velocity
  }
}
