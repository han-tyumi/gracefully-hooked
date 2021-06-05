<template lang="pug">
div(class="flex flex-col space-y-10")
  div(class="flex flex-col")
    h1(class="text-3xl font-semibold") {{ item.name }}
    h3(class="text-2xl") ${{ item.price }}

  div(class="flex flex-col")
    label(class="font-semibold") Description
    p(class="whitespace-pre-wrap") {{ item.description }}

  div(class="flex flex-col")
    label(class="font-semibold") Size
    p(class="whitespace-pre-wrap") {{ item.size }}

  div(class="flex flex-col")
    label(class="font-semibold") Materials
    p {{ materials }}

  Button(class="max-w-max", @click="addItem", :disabled="disabled") Add to Bag
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

    const disabled = computed(() =>
      Object.keys(store.state.cart.items).includes(props.item.slug)
    )

    const addItem = () =>
      !disabled.value &&
      store.commit('cart/add', {
        slug: props.item.slug,
        name: props.item.name,
        image: props.item.images[0],
        price: props.item.price,
      } as CartItem)

    const materials = computed(() => props.item.materials.join(', '))

    return {
      disabled,
      addItem,
      materials,
    }
  },
})
</script>
