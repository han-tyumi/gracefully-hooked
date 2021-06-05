<template lang="pug">
div(class="flex py-8 px-10 space-x-14")
  SideBar(class="mt-3")

  div(class="flex flex-col space-y-14 w-full")
    h1(class="text-4xl font-semibold capitalize") {{ title }}
    NuxtChild(v-bind="{ categories }")
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
