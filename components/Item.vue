<template lang="pug">
.flex.flex-col
  NuxtLink.w-max(:to="link")
    img.mb-1.w-36.h-36.border.border-black.object-cover(:src="image")
  NuxtLink.w-max(:to="link") {{ name }}
  NuxtLink.w-max(:to="link") ${{ price }}
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@nuxtjs/composition-api'

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
    const image = computed<string>(() => {
      try {
        return require(`~/assets/img/items/${props.images[0]}`)
      } catch (error) {
        return ''
      }
    })

    const link = computed(() => `/item/${props.slug}`)

    return {
      image,
      link,
    }
  },
})
</script>
