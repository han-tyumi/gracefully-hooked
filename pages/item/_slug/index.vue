<template lang="pug">
pre {{ item }}
</template>

<script lang="ts">
import {
  defineComponent,
  onUnmounted,
  ref,
  useContext,
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

    onUnmounted(() => unsubscribe)

    return {
      item,
    }
  },
})
</script>
