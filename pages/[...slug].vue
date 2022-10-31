<script setup>
const { slug } = useRoute().params;

const resolveRelations = ['popular-articles.articles']

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  {
    version: 'draft',
    resolve_relations: resolveRelations, // Resolved for the API request
  },
  {
    resolveRelations, // Resolved for the Storyblok Bridge
  }
);
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>