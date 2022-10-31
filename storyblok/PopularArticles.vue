<template>
  <div v-editable="blok" class="container py-12">
    <h2 class="text-xl text-stone-800 font-semibold pb-6 flex items-center">
      <span class="block w-10 h-10 rounded-full bg-pink-200 -mr-3"></span>
      {{ blok.headline }}
    </h2>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-start">
      <ArticleCard
        v-for="article in blok.articles"
        :key="article.uuid"
        :article="article.content"
        :slug="article.full_slug"
      />
    </div>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>