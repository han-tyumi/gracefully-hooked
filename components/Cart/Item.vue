<template lang="pug">
div(class="flex justify-between items-center space-x-4")
  div(class="flex space-x-2 items-center")
    NuxtLink(:to="link"): img(
      :src="image",
      class="w-12 h-12 object-cover border border-black"
    )
    div(class="flex flex-col")
      NuxtLink(:to="link", class="font-semibold w-max") {{ item.name }}
      NuxtLink(:to="link", class="text-sm w-max") ${{ item.price }}
  FontAwesomeIcon(
    class="cursor-pointer",
    :icon="['fas', 'times']",
    size="lg",
    @click="removeItem"
  )
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
