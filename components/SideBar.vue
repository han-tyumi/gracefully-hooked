<template lang="pug">
div(class="space-y-4")
  NuxtLink(to="/shop/", class="text-blue-dark hover_text-blue hover_underline") Shop All
  ul(class="space-y-2 w-52 capitalize")
    SideBarItem(
      v-for="(subcategories, category) in categories",
      :key="category",
      v-bind="{ category, subcategories }"
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
