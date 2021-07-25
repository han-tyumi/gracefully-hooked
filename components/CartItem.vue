<template>
  <div class="flex space-x-4 items-center justify-between">
    <div class="flex space-x-2 items-center">
      <NuxtLink :to="item.link">
        <img
          class="border border-black object-cover h-12 w-12"
          :src="item.image"
        />
      </NuxtLink>

      <div class="flex flex-col">
        <NuxtLink class="font-semibold w-max" :to="item.link">
          {{ item.name }}
        </NuxtLink>
        <NuxtLink class="text-sm w-max" :to="item.link">
          ${{ item.price }}
        </NuxtLink>
      </div>
    </div>

    <FontAwesomeIcon
      class="cursor-pointer"
      :icon="['fas', 'times']"
      size="lg"
      @click="removeItem"
    />
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
