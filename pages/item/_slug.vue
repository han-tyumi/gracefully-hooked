<template>
  <div class="py-12 px-8">
    <div v-if="item" class="flex space-x-12 w-full">
      <ImageViewer class="w-7/12" :images="item.images" />
      <Details class="w-5/12" :item="item" />
    </div>
    <h2 v-else class="flex text-lg w-full justify-center">Loading...</h2>
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
import { useStore } from '~/store'
import { basicConverter } from '~/utils/firestore'

export default defineComponent({
  setup() {
    const { params, $fire } = useContext()
    const store = useStore()

    const slug = params.value.slug
    const item = ref<Item | undefined>(store.state.cache[slug])

    const unsubscribe = $fire.firestore
      .collection('items')
      .doc(slug)
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
