<template>
  <header>
    <div class="container h-full mx-auto py-6 flex items-center justify-between">
      <NuxtLink to="/" class="text-xl text-stone-900 font-semibold hover:text-pink-400">
        Jamstack blog
      </NuxtLink>
      <nav>
        <ul class="flex gap-6 md:gap-10 text-sm text-stone-700 font-semibold">
          <li v-for="link in ['blog', 'about']">
            <NuxtLink :to="`/${link}`" class="capitalize hover:text-pink-400">{{ link }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header .router-link-active:after {
  @apply content-['.'] block text-4xl leading-[0] text-pink-400 text-center -mt-1.5;
}
</style>