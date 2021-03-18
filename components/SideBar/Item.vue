<template lang="pug">
ul.text-blue-dark
  NuxtLink.group(:to="`/shop/${category}`")
    FontAwesomeIcon.mr-2.transition-transform.duration-300.ease-out(
      :class="{ 'text-transparent': !hasChildren }",
      :icon="['fas', 'caret-right']",
      :rotation="expanded ? '90' : undefined"
    )
    span.group-hover_text-blue.group-hover_underline {{ category }}
  TransitionStaggered(
    v-for="(subCategory, index) in subCategories",
    :key="subCategory"
  )
    li.ml-8.w-max.hover_text-blue.hover_underline(
      v-show="expanded",
      :data-index="index"
    ): NuxtLink(
      :to="`/shop/${category}/${subCategory}`"
    ) {{ subCategory }}
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  toRefs,
  useStore,
  computed,
} from '@nuxtjs/composition-api'
import { State } from '~/store/index'

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
  },

  setup(props) {
    const { category, subCategories } = toRefs(props)

    const store = useStore<State>()

    const expanded = computed(() => category.value === store.state.active)
    const hasChildren = !!subCategories.value?.length

    return {
      expanded,
      hasChildren,
    }
  },
})
</script>

<style scoped>
.nuxt-link-active {
  @apply font-semibold text-blue-darker;
}
</style>
