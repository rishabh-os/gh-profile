const { nextui } = require("@nextui-org/react");
module.exports = {
	darkMode: "class",
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				victormono: ["var(--font-victormono)", "monospace"],
				inter: ["var(--font-inter)", "sans-serif"],
				pinyon: ["var(--font-pinyon)", "cursive"],
			},

			colors: {
				cat: {
					rosewater: "#f4dbd6",
					flamingo: "#f0c6c6",
					pink: "#f5bde6",
					mauve: "#c6a0f6",
					red: "#ed8796",
					maroon: "#ee99a0",
					peach: "#f5a97f",
					yellow: "#eed49f",
					green: "#a6da95",
					teal: "#8bd5ca",
					sky: "#91d7e3",
					sapphire: "#7dc4e4",
					blue: "#8aadf4",
					lavender: "#b7bdf8",
					text: "#cad3f5",
					subtext1: "#b8c0e0",
					subtext0: "#a5adcb",
					overlay2: "#939ab7",
					overlay1: "#8087a2",
					overlay0: "#6e738d",
					surface2: "#5b6078",
					surface1: "#494d64",
					surface0: "#363a4f",
					base: "#24273a",
					mantle: "#1e2030",
					crust: "#181926",
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		nextui({
			themes: {
				dark: {
					colors: {
						background: "#24273A", // Base
						foreground: "#CAD3F5", // Light foreground for readability
						divider: "#494D64", // Overlay color for subtle dividers
						overlay: "#363A4F", // Surface for modal/popup
						focus: "#B7BDF8", // Lavender for focus states
						content1: "#1E2030", // Dark background for content blocks (cards, modals)
						content2: "#292C3C", // Slightly lighter than content1
						content3: "#363A4F", // Used for subtle distinctions (hover, etc.)
						content4: "#51576D", // Even lighter content

						// Brand colors
						default: "#CAD3F5", // Default text color
						primary: "#8AADF4", // Sapphire
						secondary: "#C6A0f6", // Mauve
						success: "#A6DA95", // Green
						warning: "#EED49F", // Yellow
						danger: "#ED8796", // Red
					},
				},
			},
		}),
	],
};
