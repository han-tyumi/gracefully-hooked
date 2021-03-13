<template lang="pug">
.flex.flex-col
  img.mb-1.w-36.h-36.border.border-black(:src="image")
  span {{ name }}
  span ${{ price }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
