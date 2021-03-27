<template lang="pug">
.flex.justify-between.items-center.py-2.px-6.text-white.bg-blue-light
  NuxtLink(to="/"): h1.text-3xl.font-logo Gracefully Hooked

  .flex.items-center.space-x-6
    .flex.items-center.space-x-2
      FontAwesomeIcon(:icon="['fas', 'search']")
      input.px-2.text-black.rounded

    FontAwesomeIcon(:icon="['fas', 'shopping-bag']", size="lg")
    span {{ items }}
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useStore } from '~/store'

export default defineComponent({
  setup() {
    const store = useStore()

    const items = computed(() => Object.values(store.state.cart.items).length)

    return {
      items,
    }
  },
})
</script>
