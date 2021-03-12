<template lang="pug">
.flex.flex-col.items-center.min-h-screen
  .flex.flex-col.items-center.w-full
    .w-full.h-24.bg-repeat-round.bg-blue-light.sm_h-28.md_h-36.lg_h-44.xl_h-52.bg-flowers
      .absolute.top-4.right-4.px-1.space-x-2.text-3xl.md_text-4xl
        FontAwesomeIcon.px-1.text-6xl.bg-white.rounded-md(
          :icon="['fab', 'facebook-square']"
        )
        FontAwesomeIcon.px-1.text-6xl.bg-white.rounded-md(
          :icon="['fab', 'instagram']"
        )
    h1.py-4.px-10.-mt-9.text-4xl.text-center.bg-white.rounded-full.font-logo.md_text-7xl.md_px-32.md_py-8.md_-mt-16 Gracefully Hooked

  .flex.flex-col.items-center.w-full.h-full
    .grid.grid-cols-2.auto-cols-max.gap-x-4.gap-y-4.mt-4.w-max.text-md.sm_text-lg.md_text-xl.md_mt-12.md_gap-x-12
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
