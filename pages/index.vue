<template>
  <div class="flex flex-col min-h-screen items-center">
    <div class="flex flex-col w-full items-center">
      <div
        class="
          bg-blue-light bg-flowers bg-repeat-round
          h-20
          w-full
          sm:h-24
          md:h-28
          lg:h-32
          xl:h-36
        "
      >
        <div
          class="
            space-x-2
            text-white
            px-1
            top-4
            right-4
            text-3xl
            absolute
            md:text-4xl
          "
        >
          <FontAwesomeIcon
            class="bg-blue-darker rounded-md px-1 text-6xl"
            :icon="['fab', 'facebook-square']"
          />
          <FontAwesomeIcon
            class="bg-blue-darker rounded-md px-1 text-6xl"
            :icon="['fab', 'instagram']"
          />
        </div>
      </div>

      <h1
        class="
          bg-white
          rounded-full
          font-logo
          -mt-9
          text-center
          py-4
          px-12
          text-4xl
          sm:px-24 sm:py-6 sm:-mt-12 sm:text-5xl
          md:px-32 md:py-8 md:-mt-16 md:text-6xl
          lg:text-7xl
        "
      >
        Gracefully Hooked
      </h1>
    </div>

    <div
      class="
        bg-basket bg-no-repeat
        flex flex-col
        h-full
        bg-x-5
        w-full
        items-center
      "
    >
      <div
        class="
          mt-4
          w-max
          auto-cols-max
          grid
          gap-x-4 gap-y-4
          grid-cols-2
          sm:text-lg
          md:text-xl md:mt-12 md:gap-x-12
        "
      >
        <NuxtLink class="mx-auto col-span-2" to="/shop">
          <Button>Shop All</Button>
        </NuxtLink>

        <NuxtLink
          v-for="category in categories"
          :key="category"
          :to="`/shop/${category}`"
        >
          <Button class="w-full capitalize">{{ category }}</Button>
        </NuxtLink>

        <Button class="mx-10 mt-5 col-span-2">Custom</Button>
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
