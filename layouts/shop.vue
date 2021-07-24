<template>
  <div>
    <Header />
    <div class="flex space-x-14 py-8 px-10">
      <SideBar class="mt-3" />
      <div class="flex flex-col space-y-14 w-full">
        <h1 class="font-semibold text-4xl capitalize">{{ title }}</h1>
        <Nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()

    const categories = computed(
      () => route.value.params.pathMatch?.split('/').filter(Boolean) ?? []
    )
    const title = computed(() =>
      categories.value.length ? categories.value.join(' / ') : 'Shop All'
    )

    return {
      categories,
      title,
    }
  },
})
</script>
