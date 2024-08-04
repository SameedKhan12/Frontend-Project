/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
	plugins: [],
}
