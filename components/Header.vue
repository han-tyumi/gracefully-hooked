<template>
  <div
    class="bg-blue-light flex text-white py-2 px-6 items-center justify-between"
  >
    <NuxtLink to="/">
      <h1 class="font-logo text-3xl">Gracefully Hooked</h1>
    </NuxtLink>

    <div class="flex space-x-6 items-center">
      <div class="flex items-center">
        <FontAwesomeIcon :icon="['fas', 'search']" />
        <input class="rounded text-black px-2 mx-2" />

        <div ref="cartIcon" class="relative">
          <component :is="numItems ? 'NuxtLink' : 'div'" to="/checkout">
            <FontAwesomeIcon :icon="['fas', 'shopping-bag']" size="lg" />
            <span
              v-if="numItems"
              class="
                bg-blue-darker
                rounded-full
                font-semibold
                text-center text-white text-xs
                -right-4
                -bottom-2
                w-6
                absolute
              "
            >
              {{ numItems }}
            </span>
          </component>
        </div>
        <div v-show="numItems" ref="cart" class="pt-2 pr-2 pb-1 pl-1">
          <Cart />
        </div>
      </div>
    </div>
  </div>
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

    const numItems = computed(() => Object.keys(store.state.cart.items).length)

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
