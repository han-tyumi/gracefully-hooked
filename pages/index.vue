<template lang="pug">
div(class="flex flex-col items-center min-h-screen")
  div(class="flex flex-col items-center w-full")
    div(
      class="w-full h-20 bg-repeat-round bg-blue-light sm_h-24 md_h-28 lg_h-32 xl_h-36 bg-flowers"
    )
      div(class="absolute top-4 right-4 px-1 space-x-2 text-3xl text-white md_text-4xl")
        FontAwesomeIcon(
          :icon="['fab', 'facebook-square']",
          class="px-1 text-6xl rounded-md bg-blue-darker"
        )
        FontAwesomeIcon(
          :icon="['fab', 'instagram']",
          class="px-1 text-6xl rounded-md bg-blue-darker"
        )
    h1(
      class="py-4 px-12 -mt-9 text-4xl text-center bg-white rounded-full font-logo sm_px-24 sm_py-6 sm_-mt-12 sm_text-5xl md_px-32 md_py-8 md_-mt-16 md_text-6xl lg_text-7xl"
    ) Gracefully Hooked

  div(class="flex flex-col items-center w-full h-full bg-no-repeat bg-basket bg-x-5")
    div(
      class="grid grid-cols-2 auto-cols-max gap-x-4 gap-y-4 mt-4 w-max sm_text-lg md_text-xl md_mt-12 md_gap-x-12"
    )
      NuxtLink(to="/shop/", class="col-span-2 mx-auto"): Button Shop All

      NuxtLink(
        v-for="category in categories",
        :key="category",
        :to="`/shop/${category}`"
      ): Button(
        class="w-full capitalize"
      ) {{ category }}

      Button(class="col-span-2 mx-10 mt-5") Custom
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { categories } from '~/data/categories'

export default defineComponent({
  layout: 'no-header',

  setup() {
    return {
      categories: Object.keys(categories),
    }
  },
})
</script>
