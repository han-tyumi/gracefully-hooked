<template lang="pug">
ul.text-blue-dark
  NuxtLink.group(:to="`/shop/${category}`")
    FontAwesomeIcon.mr-2.transition-transform.duration-300.ease-out(
      :class="{ 'text-transparent': !hasChildren }",
      :icon="['fas', 'caret-right']",
      :rotation="expanded ? '90' : undefined"
    )
    span.group-hover_text-blue.group-hover_underline(@click="toggle") {{ category }}
  TransitionStaggered(
    v-for="(subCategory, index) in subCategories",
    :key="subCategory"
  )
    li.ml-8.w-min.hover_text-blue.hover_underline(
      v-show="expanded",
      :data-index="index"
    ): NuxtLink(
      :to="`/shop/${category}/${subCategory}`"
    ) {{ subCategory }}
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
      type: Array as PropType<string[]>,
      default: () => [],
    },

    active: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      expanded: this.active === this.category,
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

<style scoped>
.nuxt-link-active {
  @apply font-semibold text-blue-darker;
}
</style>
