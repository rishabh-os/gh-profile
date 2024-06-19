/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "pastel", "dracula"],
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				mono: ["Victor Mono", "monospace"],
			},
		},
	},
};
