<template lang="pug">
div(class="flex justify-center items-center space-x-4")
  div(class="flex space-x-4 w-full")
    div(class="relative")
      NuxtLink(:to="link"): img(
        :src="image",
        class="w-32 h-32 object-cover border border-black"
      )
      div(class="absolute -top-3 -left-3 bg-turquoise rounded-full cursor-pointer px-2")
        FontAwesomeIcon(
          :icon="['fas', 'times']",
          size="md",
          @click="removeItem"
        )
    div(class="flex flex-col")
      NuxtLink(:to="link", class="text-xl font-semibold w-max") {{ item.name }}
      NuxtLink(:to="link", class="text-lg w-max") ${{ item.price }}
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
