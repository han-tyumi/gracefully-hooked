<template lang="pug">
.flex.justify-center.items-center.space-x-4
  .flex.space-x-4.w-full
    .relative
      NuxtLink(:to="link"): img.w-32.h-32.object-cover.border.border-black(
        :src="image"
      )
      .absolute.-top-3.-left-3.bg-turquoise.rounded-full.cursor-pointer.px-2
        FontAwesomeIcon(
          :icon="['fas', 'times']",
          size="md",
          @click="removeItem"
        )
    .flex.flex-col
      NuxtLink.text-xl.font-semibold.w-max(:to="link") {{ item.name }}
      NuxtLink.text-lg.w-max(:to="link") ${{ item.price }}
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
