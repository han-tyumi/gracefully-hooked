<template lang="pug">
ul
  span(:class="{ 'cursor-pointer': hasChildren }", @click="toggle")
    FontAwesomeIcon.mr-2.transition-transform.duration-300.ease-out(
      :class="{ 'text-transparent': !hasChildren }",
      :icon="['fas', 'caret-right']",
      :rotation="expanded ? '90' : undefined"
    )
    span {{ category }}
  TransitionStaggered(
    v-for="(category, index) in subCategories",
    :key="category"
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
  },
})
</script>
