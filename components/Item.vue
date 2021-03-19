<template lang="pug">
.flex.flex-col
  img.mb-1.w-36.h-36.border.border-black(:src="image")
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
    const image = computed<string>(() =>
      props.images.length ? require(`~/assets/img/${props.images[0]}`) : ''
    )

    return {
      image,
    }
  },
})
</script>
