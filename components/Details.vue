<template>
  <div class="flex flex-col space-y-10">
    <div class="flex flex-col">
      <h1 class="font-semibold text-3xl">{{ item.name }}</h1>
      <h3 class="text-2xl">${{ item.price }}</h3>
    </div>

    <div class="flex flex-col">
      <label class="font-semibold">Description</label>
      <p class="whitespace-pre-wrap">{{ item.description }}</p>
    </div>

    <div class="flex flex-col">
      <label class="font-semibold">Size</label>
      <p class="whitespace-pre-wrap">{{ item.size }}</p>
    </div>

    <div class="flex flex-col">
      <label class="font-semibold">Materials</label>
      <p>{{ materials }}</p>
    </div>

    <Button class="max-w-max" :disabled="disabled" @click="addItem">
      Add to Bag
    </Button>
  </div>
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
