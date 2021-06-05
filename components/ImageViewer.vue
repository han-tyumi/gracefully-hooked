<template>
  <div class="flex space-x-4">
    <div v-if="hasMultiple" class="flex flex-col space-y-2 flex-shrink-0">
      <img
        v-for="path in imagePaths"
        :key="path"
        class="w-36 h-36 border-black object-cover"
        :class="
          isSelected(path)
            ? 'border-2'
            : 'border cursor-pointer hover_opacity-95'
        "
        :src="path"
        @click="select(path)"
      />
    </div>

    <div class="full-image">
      <img
        class="absolute inset-0 object-cover border border-black w-full h-full"
        :src="selected"
      />
    </div>
  </div>
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
      default: () => [],
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

<style scoped>
.full-image {
  @apply inline-block w-full relative flex-grow;
}
.full-image::after {
  @apply block;

  content: '';
  margin-top: 100%;
}
</style>
