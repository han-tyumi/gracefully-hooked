<template>
  <div class="py-12 px-8">
    <div v-if="item" class="flex w-full space-x-12">
      <ImageViewer class="w-7/12" :images="item.images" />
      <Details class="w-5/12" :item="item" />
    </div>
    <h2 v-else class="flex w-full justify-center text-lg">Loading...</h2>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  ref,
  onUnmounted,
} from '@nuxtjs/composition-api'
import { Item } from '~/firebase/types'
import { basicConverter } from '~/utils/firestore'

export default defineComponent({
  setup() {
    const { $fire, params } = useContext()

    const item = ref<Item>()

    const unsubscribe = $fire.firestore
      .collection('items')
      .doc(params.value.slug)
      .withConverter(basicConverter<Item>())
      .onSnapshot((snapshot) => {
        item.value = snapshot.data()
      })

    onUnmounted(unsubscribe)

    return {
      item,
    }
  },
})
</script>
