<template lang="pug">
.flex.justify-between.items-center.py-2.px-6.text-white.bg-blue-light
  NuxtLink(to="/"): h1.text-3xl.font-logo Gracefully Hooked

  .flex.items-center.space-x-6
    .flex.items-center.space-x-2
      FontAwesomeIcon(:icon="['fas', 'search']")
      input.px-2.text-black.rounded

    FontAwesomeIcon(:icon="['fas', 'shopping-bag']", size="lg")
</template>
