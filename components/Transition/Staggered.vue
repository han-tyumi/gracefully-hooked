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
import Vue from 'vue'

export default Vue.extend({
  methods: {
    beforeEnter(el: HTMLElement) {
      el.style.opacity = '0'
      el.style.height = '0'
    },
    enter(el: HTMLElement, done: () => void) {
      const delay = parseInt(el.dataset.index || '0', 10) * 60
      setTimeout(() => {
        this.$nuxt.context.Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { duration: 200, complete: done }
        )
      }, delay)
    },
    leave(el: HTMLElement, done: () => void) {
      const delay = parseInt(el.dataset.index || '0', 10) * 50
      setTimeout(() => {
        this.$nuxt.context.Velocity(
          el,
          { opacity: 0, height: 0 },
          { duration: 150, complete: done }
        )
      }, delay)
    },
  },
})
</script>
