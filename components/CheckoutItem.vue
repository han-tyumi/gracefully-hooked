<template>
  <div class="flex space-x-4 items-center justify-center">
    <div class="flex space-x-4 w-full">
      <div class="relative">
        <NuxtLink :to="item.link">
          <img
            class="border border-black object-cover h-32 w-32"
            :src="item.image"
          />
        </NuxtLink>

        <div
          class="
            bg-turquoise
            rounded-full
            cursor-pointer
            px-2
            -top-3
            -left-3
            absolute
          "
        >
          <FontAwesomeIcon :icon="['fas', 'times']" @click="removeItem" />
        </div>
      </div>

      <div class="flex flex-col">
        <NuxtLink class="font-semibold text-xl w-max" :to="item.link">
          {{ item.name }}
        </NuxtLink>
        <NuxtLink class="text-lg w-max" :to="item.link">
          ${{ item.price }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { CartItem } from '~/store/cart'
import { useStore } from '~/store'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<CartItem>,
      required: true,
    },
  },

  setup(props) {
    const store = useStore()

    const removeItem = () => store.commit('cart/remove', props.item)

    return {
      removeItem,
    }
  },
})
</script>
