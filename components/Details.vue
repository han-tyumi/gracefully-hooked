<template lang="pug">
.flex.flex-col.space-y-10
  .flex.flex-col
    h1.text-3xl.font-semibold {{ item.name }}
    h3.text-2xl ${{ item.price }}

  .flex.flex-col
    label.font-semibold Description
    p {{ item.description }}

  .flex.flex-col
    label.font-semibold Size
    p {{ item.size }}

  .flex.flex-col
    label.font-semibold Materials
    p {{ materials }}

  Button.max-w-max Add to Bag
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@nuxtjs/composition-api'
import { Item } from '~/firebase/types'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true,
    },
  },

  setup(props) {
    const materials = computed(() => props.item.materials.join(', '))

    return {
      materials,
    }
  },
})
</script>
