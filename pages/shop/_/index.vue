<template>
  <div v-if="items.length" class="grid gap-4 grid-cols-4">
    <Item
      v-for="item in items"
      :key="item.slug"
      :images="item.images"
      :name="item.name"
      :price="item.price"
      :slug="item.slug"
    />
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
import { basicConverter } from '~/utils/firestore'
import { Item } from '~/firebase/types'

export default defineComponent({
  setup() {
    const { params, store, $fire } = useContext()

    const categories = computed(() =>
      params.value.pathMatch.split('/').filter(Boolean)
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
          .withConverter(basicConverter<Item>())
          .onSnapshot((snapshot) => {
            items.value = snapshot.docs.map((d) => d.data())
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
