<template lang="pug">
div(class="flex flex-col")
  NuxtLink(:to="link", class="w-max")
    img(:src="image", class="mb-1 w-36 h-36 border border-black object-cover")
  NuxtLink(:to="link", class="w-max") {{ name }}
  NuxtLink(:to="link", class="w-max") ${{ price }}
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
