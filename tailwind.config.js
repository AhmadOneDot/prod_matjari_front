const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	purge: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				'sans-latin-base-en': ['Fira Sans', ...defaultTheme.fontFamily.sans],
				'sans-latin-heading-en': [
					'Josefin Sans',
					...defaultTheme.fontFamily.sans,
				],
			},
			spacing: {
				'v-1/2-screen': '50vh',
				'v-2/3-screen': '75vh',
				'h-1/2-screen': '50vw',
				'h-2/3-screen': '75vw',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('daisyui')],

	daisyui: {
		themes: [
			{
				mtTheme: {
					'primary': '#2f50e9',
					'primary-focus': '#1537b9',
					'primary-content': '#ffffff',
					'secondary': '#f000b8',
					'secondary-focus': '#bd0091',
					'secondary-content': '#ffffff',
					'accent': '#37cdbe',
					'accent-focus': '#2aa79b',
					'accent-content': '#ffffff',
					'neutral': '#3d4451',
					'neutral-focus': '#2a2e37',
					'neutral-content': '#ffffff',
					'base-100': '#ffffff',
					'base-200': '#f9fafb',
					'base-300': '#d1d5db',
					'base-content': '#1f2937',
					'info': '#2094f3',
					'success': '#009485',
					'warning': '#ff9900',
					'error': '#ff5724',
				},
			},
		],
	},
}
