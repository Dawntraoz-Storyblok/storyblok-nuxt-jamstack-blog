// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      {
				accessToken: 'Vk7gZ5zGwddWRQbvQilSZAtt',
				apiOptions: { region: 'us' }
			}
    ],
    '@nuxtjs/tailwindcss'
  ],
})
