/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens:{
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			colors:{
				strongCyan: 'hsl(171,66%,44%)',
				lightBlue: 'hsl(233,100%,69%)',
				darkGrayishBlue: 'hsl(210,10%,33%)',
				grayishBlue: 'hsl(201,11%,66%)',
			},
			fontFamily:{
				sans: ['Bai Jamjuree','sans-serif'],
			},
			backgroundImage: () => ({
				'header-desktop': "url('/img/bg-header-desktop.png')",
				'header-mobile': "url('/img/bg-header-mobile.png')",
				
			 }),
		},
		varients:{
			fill: ['hover']
		}
	},
	plugins: [],
}
