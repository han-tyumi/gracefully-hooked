<template lang="pug">
.py-8
  .flex.flex-col.items-center.space-y-8(v-if="items.length")
    CheckoutCart(:items="items")
    h1.text-xl.font-semibold Subtotal: ${{ total }}
  .flex.flex-col.items-center.space-y-4(v-else)
    p.text-xl No Items In Your Bag
    NuxtLink(to="/shop/"): Button Shop All
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
