<template lang="pug">
.flex.py-8.px-10.space-x-14
  SideBar.mt-12

  .flex.flex-col.space-y-4
    h1.text-4xl.font-semibold Shop All
    Item(
      :image="require('~/assets/flowers.svg')",
      name="Flowers",
      :price="3.99"
    )
</template>
