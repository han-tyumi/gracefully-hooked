<template lang="pug">
ul.space-y-2.w-52.capitalize.text-md
  SideBarItem(
    v-for="(subCategories, category) in categories",
    :key="category",
    v-bind="{category, subCategories, active}"
  )
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'
import { CategoriesDocument } from '~/content/categories'

export default defineComponent({
  props: {
    active: {
      type: String,
      default: '',
    },
  },

  setup() {
    const { $content } = useContext()

    const categories = useAsync(
      async () =>
        ((await $content('categories').fetch()) as CategoriesDocument)
          .categories
    )

    return {
      categories,
    }
  },
})
</script>
