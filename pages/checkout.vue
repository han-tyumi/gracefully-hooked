<template lang="pug">
.flex.flex-col.py-8.items-center.space-y-8
  CheckoutCart(:items="items")
  h1.text-xl.font-semibold Subtotal: ${{ total }}
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useStore } from '~/store'

export default defineComponent({
  setup() {
    const store = useStore()

    const items = computed(() => Object.values(store.state.cart.items))
    const total = computed(() => store.state.cart.total)

    return {
      items,
      total,
    }
  },
})
</script>
