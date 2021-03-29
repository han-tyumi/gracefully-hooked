<template lang="pug">
.flex.justify-between.items-center.space-x-4
  .flex.space-x-2.items-center
    img.w-12.h-12.object-cover.border.border-black(:src="image")
    .flex.flex-col
      h1.font-semibold {{ item.name }}
      h2.text-sm ${{ item.price }}
  FontAwesomeIcon.cursor-pointer(
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

    const removeItem = () => store.commit('cart/remove', props.item)

    return {
      image,
      removeItem,
    }
  },
})
</script>
