<template>
  <div class="flex px-10 py-8 space-x-14">
    <SideBar class="mt-3" />

    <div class="flex flex-col w-full space-y-14">
      <h1 class="text-4xl font-semibold capitalize">{{ title }}</h1>
      <NuxtChild v-bind="{ categories }" />
    </div>
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
