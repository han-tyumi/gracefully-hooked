<template lang="pug">
.flex.flex-col.space-y-10
  .flex.flex-col
    h1.text-3xl.font-semibold {{ item.name }}
    h3.text-2xl ${{ item.price }}

  .flex.flex-col
    label.font-semibold Description
    p.whitespace-pre-wrap {{ item.description }}

  .flex.flex-col
    label.font-semibold Size
    p.whitespace-pre-wrap {{ item.size }}

  .flex.flex-col
    label.font-semibold Materials
    p {{ materials }}

  Button.max-w-max(@click="addItem") Add to Bag
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@nuxtjs/composition-api'
import { Item } from '~/firebase/types'
import { useStore } from '~/store'
import { CartItem } from '~/store/cart'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true,
    },
  },

  setup(props) {
    const store = useStore()

    const addItem = () =>
      store.commit('cart/add', {
        slug: props.item.slug,
        name: props.item.name,
        image: props.item.images[0],
        price: props.item.price,
      } as CartItem)

    const materials = computed(() => props.item.materials.join(', '))

    return {
      addItem,
      materials,
    }
  },
})
</script>
