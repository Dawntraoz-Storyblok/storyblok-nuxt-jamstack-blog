<template>
  <div v-editable="blok" class="w-full">
    <h3 class="text-base text-stone-700 font-semibold">
      {{ blok.name }}
    </h3>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>