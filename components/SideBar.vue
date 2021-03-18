<template lang="pug">
ul.space-y-2.w-52.capitalize.text-md
  SideBarItem(
    v-for="(subCategories, category) in categories",
    :key="category",
    v-bind="{category, subCategories, active}"
  )
</template>

<script lang="ts">
import Vue from 'vue'
import { CategoriesDocument } from '~/content/categories'

export default Vue.extend({
  props: {
    active: {
      type: String,
      default: '',
    },
  },

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
