<template lang="pug">
.flex.flex-col
  img.mb-1.w-36.h-36.border.border-black.object-cover(:src="image")
  span {{ name }}
  span ${{ price }}
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
  },

  setup(props) {
    const image = computed<string>(() => {
      try {
        return require(`~/assets/img/items/${props.images[0]}`)
      } catch (error) {
        return ''
      }
    })

    return {
      image,
    }
  },
})
</script>
