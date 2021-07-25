<template>
  <div class="flex flex-col">
    <NuxtLink class="w-max" :to="item.link">
      <img
        class="border border-black object-cover h-36 mb-1 w-36"
        :src="item.images[0]"
      />
    </NuxtLink>
    <NuxtLink class="w-max" :to="item.link">{{ item.name }}</NuxtLink>
    <NuxtLink class="w-max" :to="item.link">${{ item.price }}</NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Item } from '~/firebase/item'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true,
    },
  },
})
</script>
