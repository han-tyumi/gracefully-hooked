<template lang="pug">
.flex.flex-col.space-y-4
  ul.space-y-2
    li(v-for="item in items")
      CartItem(:item="item")
  h5.text-lg.font-semibold.text-right Total: ${{ total }}
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
