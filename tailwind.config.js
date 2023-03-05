/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			'light-red': 'hsl(var(--light-red) / <alpha-value>)',
			'orangey-yellow': 'hsl(var(--orangey-yellow) / <alpha-value>)',
			'green-teal': 'hsl(var(--green-teal) / <alpha-value>)',
			'cobalt-blue': 'hsl(var(--cobalt-blue) / <alpha-value>)',

			/* Gradients */
			'light-slate-blue': 'hsl(var(--light-slate-blue) / <alpha-value>)',
			'light-royal-blue': 'hsl(var(--light-royal-blue) / <alpha-value>)',
			'violet-blue': 'hsl(var(--violet-blue) / <alpha-value>)',
			'persian-blue': 'hsl(var(--persian-blue) / <alpha-value>)',

			/* Neutral */
			white: 'hsl(var(--white) / <alpha-value>)',
			'pale-blue': 'hsl(var(--pale-blue) / <alpha-value>)',
			'light-lavender': 'hsl(var(--light-lavender) / <alpha-value>)',
			'dark-grey-blue': 'hsl(var(--dark-grey-blue) / <alpha-value>)',
		},
		extend: {},
	},
	plugins: [],
};
