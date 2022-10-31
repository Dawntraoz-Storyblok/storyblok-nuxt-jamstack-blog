/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'storyblok/**/*.{vue,js}',
		'components/**/*.{vue,js}',
		'pages/**/*.vue'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
  }
}