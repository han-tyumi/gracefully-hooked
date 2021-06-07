<template>
  <button
    class="rounded-full font-semibold py-3 px-8"
    :class="
      disabled
        ? 'bg-gray cursor-default'
        : 'bg-turquoise cursor-pointer hover:bg-turquoise-dark'
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
