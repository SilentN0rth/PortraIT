/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans, sans-serif'],
			},
			backgroundImage: {
				heroImage: "url('/img/pexelsphoto.jpg')",
				womanOne: "url('/img/pexelsphoto1627936.jpeg')",
			},
			colors: {
				mainBlue: '#0049ff',
				gray: '#999',
				darkGray: '#111',
				blueWhite: '#e6edff',
				grayWhite: '#f0f0f0',
			},
			height: {
				screen: '100svh',
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [],
}
