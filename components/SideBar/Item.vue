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
import { defineComponent, PropType, toRefs, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    category: {
      type: String,
      required: true,
    },

    subCategories: {
      type: [Array, null] as PropType<string[] | null>,
      default: () => [],
    },

    active: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const { category, active, subCategories } = toRefs(props)

    const expanded = ref(category.value === active.value)
    const hasChildren = !!subCategories.value?.length

    const toggle = hasChildren
      ? () => (expanded.value = !expanded.value)
      : () => {}

    return {
      expanded,
      hasChildren,
      toggle,
    }
  },
})
</script>

<style scoped>
.nuxt-link-active {
  @apply font-semibold text-blue-darker;
}
</style>
