<template lang="pug">
transition(
  :css="false",
  @beforeEnter="beforeEnter",
  @enter="enter",
  @leave="leave"
)
  slot
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { Velocity } = useContext()

    const beforeEnter = (el: HTMLElement) => {
      el.style.opacity = '0'
      el.style.height = '0'
    }
    const enter = (el: HTMLElement, done: () => void) => {
      const delay = parseInt(el.dataset.index || '0', 10) * 60
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { duration: 200, complete: done }
        )
      }, delay)
    }
    const leave = (el: HTMLElement, done: () => void) => {
      const delay = parseInt(el.dataset.index || '0', 10) * 50
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { duration: 150, complete: done }
        )
      }, delay)
    }

    return {
      beforeEnter,
      enter,
      leave,
    }
  },
})
</script>
