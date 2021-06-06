<template>
  <div class="flex flex-col space-y-4">
    <ul class="space-y-2">
      <li v-for="item in items" :key="item.slug">
        <CartItem :item="item" />
      </li>
    </ul>

    <h5 class="text-right text-lg font-semibold">Subtotal: ${{ total }}</h5>
  </div>
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
