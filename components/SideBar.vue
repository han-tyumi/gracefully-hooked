<template lang="pug">
.space-y-4
  NuxtLink.text-blue-dark.hover_text-blue.hover_underline(to="/shop/") Shop All
  ul.space-y-2.w-52.capitalize.text-md
    SideBarItem(
      v-for="(subcategories, category) in categories",
      :key="category",
      v-bind="{category, subcategories}"
    )
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { categories } from '~/data/categories'

export default defineComponent({
  setup() {
    return {
      categories,
    }
  },
})
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply font-semibold text-blue-darker;
}
</style>
