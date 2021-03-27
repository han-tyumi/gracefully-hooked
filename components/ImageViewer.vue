<template lang="pug">
.flex.space-x-4
  .flex.flex-col.space-y-2(v-if="hasMultiple")
    img.w-36.h-36.border-black.object-cover(
      v-for="path in imagePaths",
      :key="path",
      :class="isSelected(path) ? 'border-2' : 'border cursor-pointer hover_opacity-95'",
      @click="select(path)",
      :src="path"
    )

  img.flex-grow.w-0.object-cover.border.border-black(:src="selected")
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  ref,
} from '@nuxtjs/composition-api'
import { loadImage } from '~/utils/item'

export default defineComponent({
  props: {
    images: {
      type: Array as PropType<string[]>,
      default: [],
    },
  },

  setup(props) {
    const imagePaths = computed(() => props.images.map(loadImage))
    const selected = ref(imagePaths.value[0])
    const hasMultiple = computed(() => imagePaths.value.length > 1)

    const isSelected = (path: string) => path === selected.value

    const select = (path: string) => (selected.value = path)

    return {
      imagePaths,
      selected,
      hasMultiple,
      isSelected,
      select,
    }
  },
})
</script>
