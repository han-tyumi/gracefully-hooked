<template>
  <div class="flex flex-col items-center min-h-screen">
    <div class="flex flex-col items-center w-full">
      <div
        class="
          sm_h-24
          md_h-28
          lg_h-32
          xl_h-36
          w-full
          h-20
          bg-blue-light bg-flowers bg-repeat-round
        "
      >
        <div
          class="
            md_text-4xl
            absolute
            right-4
            top-4
            px-1
            text-white text-3xl
            space-x-2
          "
        >
          <FontAwesomeIcon
            class="px-1 text-6xl bg-blue-darker rounded-md"
            :icon="['fab', 'facebook-square']"
          />
          <FontAwesomeIcon
            class="px-1 text-6xl bg-blue-darker rounded-md"
            :icon="['fab', 'instagram']"
          />
        </div>
      </div>

      <h1
        class="
          sm_px-24 sm_py-6 sm_-mt-12 sm_text-5xl
          md_px-32 md_py-8 md_-mt-16 md_text-6xl
          lg_text-7xl
          -mt-9
          px-12
          py-4
          text-center
          font-logo
          text-4xl
          bg-white
          rounded-full
        "
      >
        Gracefully Hooked
      </h1>
    </div>

    <div
      class="
        flex flex-col
        items-center
        w-full
        h-full
        bg-basket bg-x-5 bg-no-repeat
      "
    >
      <div
        class="
          sm_text-lg
          md_text-xl md_mt-12 md_gap-x-12
          grid
          gap-x-4 gap-y-4
          grid-cols-2
          mt-4
          w-max
          auto-cols-max
        "
      >
        <NuxtLink class="col-span-2 mx-auto" to="/shop/">
          <Button>Shop All</Button>
        </NuxtLink>

        <NuxtLink
          v-for="category in categories"
          :key="category"
          :to="`/shop/${category}`"
        >
          <Button class="w-full capitalize">{{ category }}</Button>
        </NuxtLink>

        <Button class="col-span-2 mt-5 mx-10">Custom</Button>
      </div>
    </div>
  </div>
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
