<template>
  <div class="flex items-center justify-center space-x-4">
    <div class="flex w-full space-x-4">
      <div class="relative">
        <NuxtLink :to="link">
          <img
            class="w-32 h-32 border border-black object-cover"
            :src="image"
          />
        </NuxtLink>

        <div
          class="
            absolute
            -left-3
            -top-3
            px-2
            bg-turquoise
            rounded-full
            cursor-pointer
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
        <NuxtLink class="w-max text-xl font-semibold" :to="link">
          {{ item.name }}
        </NuxtLink>
        <NuxtLink class="w-max text-lg" :to="link">${{ item.price }}</NuxtLink>
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
