<template lang="pug">
ul.space-y-2
  li(v-for="item in items")
    CartItem(:item="item")
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useStore } from '~/store'

export default defineComponent({
  setup() {
    const store = useStore()

    const items = computed(() => Object.values(store.state.cart.items))

    return {
      items,
    }
  },
})
</script>
