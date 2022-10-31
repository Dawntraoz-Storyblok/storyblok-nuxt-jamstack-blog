<template>
  <div v-editable="blok" class="py-16 sm:w-2/3 md:w-1/2 mx-auto px-4">
    <h1 class="text-5xl text-stone-800 font-semibold">
      {{ blok.headline.slice(0, -1) }}<span class="text-pink-400">{{ blok.headline.slice(-1) }}</span>
    </h1>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>