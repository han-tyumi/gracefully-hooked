<template lang="pug">
button.py-3.px-8.font-semibold.rounded-full.bg-turquoise.hover_bg-turquoise-dark(
  @click="$emit('click')"
): slot
</template>
