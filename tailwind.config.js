module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
	mode: 'jit', // Just in time compiler
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				main_blue: '#46AACD',
				dark_blue: '#2B4D7D',
				gray_blue: '#7DA0BA',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
