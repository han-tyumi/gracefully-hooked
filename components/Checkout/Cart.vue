<template lang="pug">
ul.space-y-6
  li(v-for="item in items")
    CheckoutItem(:item="item")
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { CartItem } from '~/store/cart'

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<CartItem[]>,
      default: [],
    },
  },
})
</script>
