<template>
  <div class="flex justify-center items-center space-x-4">
    <div class="flex space-x-4 w-full">
      <div class="relative">
        <NuxtLink :to="link">
          <img
            class="w-32 h-32 object-cover border border-black"
            :src="image"
          />
        </NuxtLink>

        <div
          class="
            absolute
            -top-3
            -left-3
            bg-turquoise
            rounded-full
            cursor-pointer
            px-2
          "
        >
          <FontAwesomeIcon
            :icon="['fas', 'times']"
            size="md"
            @click="removeItem"
          />
        </div>
      </div>

      <div class="flex flex-col">
        <NuxtLink class="text-xl font-semibold w-max" :to="link">
          {{ item.name }}
        </NuxtLink>
        <NuxtLink class="text-lg w-max" :to="link">${{ item.price }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@nuxtjs/composition-api'
import { CartItem } from '~/store/cart'
import { useStore } from '~/store'
import { loadImage } from '~/utils/item'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<CartItem>,
      required: true,
    },
  },

  setup(props) {
    const store = useStore()

    const image = computed(() => loadImage(props.item.image))
    const link = computed(() => `/item/${props.item.slug}`)

    const removeItem = () => store.commit('cart/remove', props.item)

    return {
      image,
      link,
      removeItem,
    }
  },
})
</script>
