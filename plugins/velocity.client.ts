import { Plugin } from '@nuxt/types'
import Velocity from 'velocity-animate'

const plugin: Plugin = (ctx, inject) => {
  ctx.Velocity = Velocity
  inject('Velocity', Velocity)
}

export default plugin
