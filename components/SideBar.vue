<template>
  <div class="space-y-4">
    <NuxtLink
      class="hover_text-blue hover_underline text-blue-dark"
      to="/shop/"
    >
      Shop All
    </NuxtLink>

    <ul class="w-52 capitalize space-y-2">
      <SideBarItem
        v-for="(subcategories, category) in categories"
        :key="category"
        v-bind="{ category, subcategories }"
      />
    </ul>
  </div>
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
  @apply text-blue-darker font-semibold;
}
</style>
