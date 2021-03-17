<template lang="pug">
ul.space-y-2.w-44.capitalize.text-md
  SideBarItem(
    v-for="(subCategories, category) in categories",
    :key="category",
    v-bind="{category, subCategories}"
  )
</template>

<script lang="ts">
import Vue from 'vue'
import { CategoriesDocument } from '~/content/categories'

export default Vue.extend({
  data() {
    return {
      categories: {} as CategoriesDocument['categories'],
    }
  },

  async fetch() {
    this.categories = ((await this.$nuxt.context
      .$content('categories')
      .fetch()) as CategoriesDocument).categories
  },
})
</script>
