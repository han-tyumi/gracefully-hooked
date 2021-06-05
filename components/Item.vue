<template>
  <div class="flex flex-col">
    <NuxtLink class="w-max" :to="link">
      <img
        class="mb-1 w-36 h-36 border border-black object-cover"
        :src="image"
      />
    </NuxtLink>
    <NuxtLink class="w-max" :to="link">{{ name }}</NuxtLink>
    <NuxtLink class="w-max" :to="link">${{ price }}</NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@nuxtjs/composition-api'
import { loadImage } from '~/utils/item'

export default defineComponent({
  props: {
    images: {
      type: Array as PropType<string[]>,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const image = computed(() => loadImage(props.images[0]))
    const link = computed(() => `/item/${props.slug}`)

    return {
      image,
      link,
    }
  },
})
</script>
