<template lang="pug">
ul
  span(:class="{ 'cursor-pointer': hasChildren }", @click="toggle")
    FontAwesomeIcon.mr-2.transition-transform.duration-300.ease-out(
      :class="{ 'text-transparent': !hasChildren }",
      :icon="['fas', 'caret-right']",
      :rotation="expanded ? '90' : undefined"
    )
    span {{ category }}
  transition(
    v-for="(category, index) in subCategories",
    :key="category",
    :css="false",
    @beforeEnter="beforeEnter",
    @enter="enter",
    @leave="leave"
  )
    li.ml-8(v-show="expanded", :data-index="index") {{ category }}
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    category: {
      type: String,
      required: true,
    },

    subCategories: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
  },

  data() {
    return {
      expanded: false,
    }
  },

  computed: {
    hasChildren(): boolean {
      return !!this.subCategories?.length
    },
  },

  methods: {
    toggle() {
      if (this.hasChildren) {
        this.expanded = !this.expanded
      }
    },

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
