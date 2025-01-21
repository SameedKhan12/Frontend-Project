/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	blocklist:['./src/pages/blogs/post/*.mdx'],
	theme: {
		extend: {
			fontFamily: {
				'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
			  },
			  colors: {
				'royal-blue': '#5956E9', // Your hex code here
				// ... other Tailwind colors
			  },
			  backgroundImage: {
				'app':"url('/App.png')",
				'video': "url('/Image.png')",
				"custom":"url('/background.png')"
			  }
		},
	},
	plugins: [
		
	],
}
