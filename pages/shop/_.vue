<template>
  <div v-if="items.length" class="grid gap-4 grid-cols-4">
    <Item v-for="item in items" :key="item.slug" :item="item" />
  </div>
  <p v-else class="text-lg">No Items</p>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  computed,
  ref,
  watch,
} from '@nuxtjs/composition-api'
import { Item, itemConverter } from '~/firebase/item'
import { useStore } from '~/store'

export default defineComponent({
  layout: 'shop',

  setup() {
    const { params, $fire } = useContext()
    const store = useStore()

    const categories = computed(
      () => params.value.pathMatch?.split('/').filter(Boolean) ?? []
    )

    const items = ref<Item[]>([])

    watch(
      () => categories.value[0],
      (value) => store.commit('setActive', value ?? null),
      { immediate: true }
    )

    watch(
      () => ['category', ...categories.value].join('.'),
      (value, _prev, onInvalidate) => {
        const unsubscribe = $fire.firestore
          .collection('items')
          .orderBy(value)
          .withConverter(itemConverter)
          .onSnapshot((snapshot) => {
            const data = snapshot.docs.map((d) => d.data())
            items.value = data
            store.commit('cache/add', data)
          })
        onInvalidate(unsubscribe)
      },
      { immediate: true }
    )

    return {
      items,
    }
  },
})
</script>
