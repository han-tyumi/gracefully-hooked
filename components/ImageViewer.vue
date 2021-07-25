<template>
  <div class="flex space-x-4">
    <div v-if="hasMultiple" class="flex flex-col space-y-2 flex-shrink-0">
      <img
        v-for="image in images"
        :key="image"
        class="border-black object-cover h-36 w-36"
        :class="
          isSelected(image)
            ? 'border-2'
            : 'border cursor-pointer hover:opacity-95'
        "
        :src="image"
        @click="select(image)"
      />
    </div>

    <div class="full-image">
      <img
        class="border border-black h-full object-cover w-full inset-0 absolute"
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

export default defineComponent({
  props: {
    images: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },

  setup(props) {
    const { images } = props
    const selected = ref(images[0])
    const hasMultiple = computed(() => images.length > 1)

    const isSelected = (image: string) => image === selected.value

    const select = (image: string) => (selected.value = image)

    return {
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
  @apply relative inline-block flex-grow w-full;
}
.full-image::after {
  @apply block;

  content: '';
  margin-top: 100%;
}
</style>
