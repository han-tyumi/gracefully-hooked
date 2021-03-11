<template lang="pug">
.flex.flex-col.items-center.min-h-screen
  .flex.flex-col.items-center.w-full
    .w-full.h-44.bg-blue-light
      .absolute.top-4.right-4.space-x-2.text-white
        FontAwesomeIcon(:icon="['fab', 'facebook-square']", size="2x")
        FontAwesomeIcon(:icon="['fab', 'instagram']", size="2x")
    h1.py-7.px-24.-mt-16.text-7xl.bg-white.rounded-full.font-logo Gracefully Hooked

  .grid.grid-cols-2.auto-cols-max.gap-y-4.gap-x-12.mt-12.w-max.text-xl
    Button.col-span-2.mx-auto Shop All

    Button Animals
    Button Hats

    Button Blankets
    Button Scarves

    Button Clothing
    Button Socks

    Button.col-span-2.mx-10 Custom
    Button.col-span-2.mx-10 Inspiration
</template>
