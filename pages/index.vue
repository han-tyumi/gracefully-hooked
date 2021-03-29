<template lang="pug">
.flex.flex-col.items-center.min-h-screen
  .flex.flex-col.items-center.w-full
    .w-full.h-20.bg-repeat-round.bg-blue-light.sm_h-24.md_h-28.lg_h-32.xl_h-36.bg-flowers
      .absolute.top-4.right-4.px-1.space-x-2.text-3xl.text-white.md_text-4xl
        FontAwesomeIcon.px-1.text-6xl.rounded-md.bg-blue-darker(
          :icon="['fab', 'facebook-square']"
        )
        FontAwesomeIcon.px-1.text-6xl.rounded-md.bg-blue-darker(
          :icon="['fab', 'instagram']"
        )
    h1.py-4.px-12.-mt-9.text-4xl.text-center.bg-white.rounded-full.font-logo.sm_px-24.sm_py-6.sm_-mt-12.sm_text-5xl.md_px-32.md_py-8.md_-mt-16.md_text-6xl.lg_text-7xl Gracefully Hooked

  .flex.flex-col.items-center.w-full.h-full.bg-no-repeat.bg-basket.bg-x-5
    .grid.grid-cols-2.auto-cols-max.gap-x-4.gap-y-4.mt-4.w-max.sm_text-lg.md_text-xl.md_mt-12.md_gap-x-12
      NuxtLink.col-span-2.mx-auto(to="/shop/"): Button Shop All

      NuxtLink(
        v-for="category in categories",
        :key="category",
        :to="`/shop/${category}`"
      ): Button.w-full.capitalize {{ category }}

      Button.col-span-2.mx-10.mt-5 Custom
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
