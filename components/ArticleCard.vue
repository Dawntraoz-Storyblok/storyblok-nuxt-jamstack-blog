<template>
  <article v-editable="article" class="w-full">
    <img
      v-if="article.image?.filename"
      :src="`${article.image?.filename}/m/0x200`"
      :alt="article.image?.alt"
      class="w-full h-32 object-cover shadow mb-4"
    />
    <h3 class="text-base text-stone-700 font-semibold">
      {{ article.title }}
    </h3>
    <p class="text-sm text-stone-600 pt-1">
      {{ article.teaser }}
    </p>
    <NuxtLink :to="localePath(`/${slug}${slug.slice(-1) !== '/' ? '/' : ''}`)" class="block text-right text-pink-400 text-sm underline pt-2">Read more</NuxtLink>
  </article>
</template>

<script setup>
defineProps({ article: Object, slug: String })

const localePath = useLocalePath()
</script>