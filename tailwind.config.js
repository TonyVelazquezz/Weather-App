module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
	mode: 'jit', // Just in time compiler
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: '460px',
			// => @media (min-width: 450px) { ... }

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }
		},

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
