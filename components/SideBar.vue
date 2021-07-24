<template>
  <div class="space-y-4">
    <NuxtLink class="text-blue-dark hover:(text-blue underline)" to="/shop">
      Shop All
    </NuxtLink>

    <ul class="space-y-2 w-52 capitalize">
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
