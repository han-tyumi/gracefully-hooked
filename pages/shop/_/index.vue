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
import Vue from 'vue'
import { ItemsDocument } from '~/content/items'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const categories = params.pathMatch.split('/').filter(Boolean)

    let doc: ItemsDocument | ItemsDocument[] = []
    try {
      doc = (await $content('items', ...categories, {
        deep: true,
      }).fetch()) as ItemsDocument | ItemsDocument[]
    } catch (error) {}

    const items = Array.isArray(doc)
      ? doc.flatMap(({ items }) => items)
      : doc.items

    return {
      items,
    }
  },
})
</script>
