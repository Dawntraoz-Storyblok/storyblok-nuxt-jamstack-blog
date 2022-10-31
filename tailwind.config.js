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
    extend: {
      backgroundImage: {
        'main': "linear-gradient(to bottom, #EDEAE4 0, #EDEAE4 400px, #F4F2ED 400px, #F4F2ED 100%)"
      }
    }
  }
}