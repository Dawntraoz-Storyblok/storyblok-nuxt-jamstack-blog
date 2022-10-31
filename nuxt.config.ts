// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      {
				accessToken: process.env.SB_API_TOKEN,
				apiOptions: { region: 'us' }
			}
    ],
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    locales: ['en', 'es'],
    defaultLocale: 'en', // default locale
  },
  nitro: {
    prerender: {
      routes: ['/es']
    }
  }
})
