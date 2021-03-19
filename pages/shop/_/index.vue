<template lang="pug">
.grid.grid-cols-4.gap-4(v-if="items.length")
  Item(
    v-for="item in items",
    :key="item.name",
    :image="require(`~/assets/img/${item.image}.svg`)",
    :name="item.name",
    :price="item.price"
  )
p.text-lg(v-else) No Items
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { basicConverter } from '~/utils/firestore'

export interface Category {
  [name: string]: Category | null
}

export interface Item {
  name: string
  description?: string
  category: Category
  images: string[]
  tags?: string[]
  price: number
  size?: string
  materials: string[]
}

export default defineComponent({
  async asyncData({ params, store, $fire }) {
    const categories = params.pathMatch.split('/').filter(Boolean)

    store.commit('setActive', categories[0] ?? null)

    const snap = await $fire.firestore
      .collection('items')
      .orderBy(['category', ...categories].join('.'))
      .withConverter(basicConverter<Item>())
      .get()

    const items = snap.docs.map((d) => d.data())

    return {
      items,
    }
  },
})
</script>
