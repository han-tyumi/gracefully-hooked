<template lang="pug">
.flex.flex-col
  img.mb-1.w-36.h-36.border.border-black(:src="image")
  span {{ name }}
  span ${{ price }}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    image: {
      type: String,
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
})
</script>
