<template>
  <ul class="text-blue-dark">
    <NuxtLink class="group" :to="`/shop/${category}`">
      <FontAwesomeIcon
        class="mr-2 transition-transform ease-out duration-300"
        :class="{ 'text-transparent': !hasChildren }"
        :icon="['fas', 'caret-right']"
        :rotation="expanded ? '90' : undefined"
      />
      <span class="group-hover:(text-blue underline)">
        {{ category }}
      </span>
    </NuxtLink>

    <TransitionStaggered
      v-for="(subcategory, index) in subcategories"
      :key="subcategory"
    >
      <li
        v-show="expanded"
        class="ml-8 w-max hover:(text-blue underline)"
        :data-index="index"
      >
        <NuxtLink :to="`/shop/${category}/${subcategory}`">
          {{ subcategory }}
        </NuxtLink>
      </li>
    </TransitionStaggered>
  </ul>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  toRefs,
  computed,
} from '@nuxtjs/composition-api'
import { useStore } from '~/store'

export default defineComponent({
  props: {
    category: {
      type: String,
      required: true,
    },

    subcategories: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },

  setup(props) {
    const { category, subcategories } = toRefs(props)

    const store = useStore()

    const expanded = computed(() => category.value === store.state.active)
    const hasChildren = !!subcategories.value?.length

    return {
      expanded,
      hasChildren,
    }
  },
})
</script>

<style scoped>
.nuxt-link-active {
  @apply text-blue-darker font-semibold;
}
</style>
