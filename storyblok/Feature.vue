<template>
  <div v-editable="blok" class="w-full">
    <img v-if="optimizedImage" :src="optimizedImage" :alt="blok.image.alt" class="w-full h-32 object-cover shadow mb-4" />
    <h3 class="text-base text-stone-700 font-semibold">
      {{ blok.name }}
    </h3>
    <p class="text-sm text-stone-600 pt-1">{{ blok.description }}</p>
  </div>
</template>
 
<script setup>
const props = defineProps({ blok: Object })

const optimizedImage = computed(() => {
  const imageSrc = props.blok.image?.filename
  return imageSrc ? `${imageSrc}/m/0x200` : undefined
})
</script>