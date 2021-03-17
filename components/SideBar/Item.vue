<template lang="pug">
ul
  span(:class="{ 'cursor-pointer': hasChildren }", @click="toggle")
    FontAwesomeIcon.mr-2.transition-transform(
      :class="{ 'text-transparent': !hasChildren }",
      :icon="['fas', 'caret-right']",
      :rotation="expanded ? '90' : undefined"
    )
    span {{ category }}
  transition(
    v-for="category in subCategories",
    :key="category",
    enter-class="opacity-0",
    leave-to-class="opacity-0",
    enter-active-class="transition-opacity duration-200 ease-out",
    leave-active-class="transition-opacity duration-200 ease-out"
  )
    li.ml-8(v-show="expanded") {{ category }}
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
  },
})
</script>
