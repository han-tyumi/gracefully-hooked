<template lang="pug">
ul.space-y-2.w-52.capitalize.text-md
  SideBarItem(
    v-for="(subCategories, category) in categories",
    :key="category",
    v-bind="{category, subCategories}"
  )
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'
import { CategoriesDocument } from '~/content/categories'

export default defineComponent({
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
