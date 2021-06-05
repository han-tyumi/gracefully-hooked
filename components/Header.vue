<template lang="pug">
div(class="flex justify-between items-center py-2 px-6 text-white bg-blue-light")
  NuxtLink(to="/"): h1(class="text-3xl font-logo") Gracefully Hooked

  div(class="flex items-center space-x-6")
    div(class="flex items-center space-x-2")
      FontAwesomeIcon(:icon="['fas', 'search']")
      input(class="px-2 text-black rounded")

      div(class="relative", ref="cartIcon")
        component(:is="numItems ? 'NuxtLink' : 'div'", to="/checkout")
          FontAwesomeIcon(:icon="['fas', 'shopping-bag']", size="lg")
          span(
            v-if="numItems",
            class="rounded-full bg-blue-darker text-white absolute -bottom-2 -right-4 font-semibold text-xs w-6 text-center"
          ) {{ numItems }}
      div(v-show="numItems", class="pl-1 pr-2 pt-2 pb-1", ref="cart"): Cart
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

    const numItems = computed(
      () => Object.values(store.state.cart.items).length
    )

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
          if (!numItems.value) {
            return false
          }
        },
        plugins: [sticky],
        sticky: true,
        theme: 'light',
      })

      watchEffect(() => {
        if (!numItems.value) {
          hideAll({ duration: 0 })
        }
      })

      onUnmounted(instance.destroy)
    })

    return {
      numItems,
      cartIcon,
      cart,
    }
  },
})
</script>
