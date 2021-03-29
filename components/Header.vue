<template lang="pug">
.flex.justify-between.items-center.py-2.px-6.text-white.bg-blue-light
  NuxtLink(to="/"): h1.text-3xl.font-logo Gracefully Hooked

  .flex.items-center.space-x-6
    .flex.items-center.space-x-2
      FontAwesomeIcon(:icon="['fas', 'search']")
      input.px-2.text-black.rounded

    .relative(ref="cartIcon")
      FontAwesomeIcon(:icon="['fas', 'shopping-bag']", size="lg")
      span.rounded-full.bg-blue-darker.text-white.absolute.-bottom-2.-right-4.font-semibold.text-xs.w-6.text-center(
        v-if="items"
      ) {{ items }}
    .p-2(v-show="items", ref="cart"): Cart
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  onMounted,
  watchEffect,
  onUnmounted,
} from '@nuxtjs/composition-api'
import tippy, { sticky, hideAll } from 'tippy.js'
import { useStore } from '~/store'

export default defineComponent({
  setup() {
    const store = useStore()

    const items = computed(() => Object.values(store.state.cart.items).length)

    const cartIcon = ref<HTMLElement>()
    const cart = ref<HTMLElement>()

    onMounted(() => {
      if (!cartIcon.value || !cart.value) {
        return
      }

      const instance = tippy(cartIcon.value, {
        arrow: true,
        content: cart.value,
        delay: [0, 250],
        interactive: true,
        interactiveBorder: 10,
        interactiveDebounce: 250,
        onShow() {
          if (!items.value) {
            return false
          }
        },
        plugins: [sticky],
        sticky: true,
        theme: 'light',
      })

      watchEffect(() => {
        if (!items.value) {
          hideAll({ duration: 0 })
        }
      })

      onUnmounted(instance.destroy)
    })

    return {
      items,
      cartIcon,
      cart,
    }
  },
})
</script>
