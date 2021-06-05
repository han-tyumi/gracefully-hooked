<template>
  <button
    class="py-3 px-8 font-semibold rounded-full"
    :class="
      disabled
        ? 'bg-gray cursor-default'
        : 'bg-turquoise hover_bg-turquoise-dark cursor-pointer'
    "
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
