// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	colorMode: {
		preference: "system", // default theme
		dataValue: "theme", // activate data-theme in <html> tag
		classSuffix: "",
	},
	googleFonts: {
		preload: true,
		download: true,
		families: {
			Inter: "200..700",
			"Victor Mono": "200..700",
		},
	},
	modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
        "@nuxtjs/seo",
        "@nuxtjs/google-fonts",
        "@nuxtjs/color-mode",
        "nuxt-icon",
        "@vite-pwa/nuxt",
        "@vueuse/motion/nuxt",
        "nuxt-split-type",
        "nuxt-locomotive-scroll"
    ],
	site: {
		name: "Rishabh's Profile",
		description: "My personal website",
		url: "https://gh-profile-rishabh-os.vercel.app",
		defaultLocale: "en",
	},
	pwa: {
		manifest: {
			name: "Rishabh's Profile",
			short_name: "RP",
			start_url: "/",
			id: "/",
			description: "My personal website",
			background_color: "#23a6d5",
			display: "standalone",
			theme_color: "#23a6d5",
			icons: [
				{
					src: "/icon-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "/icon-512x512.png",
					sizes: "512x512",
					type: "image/png",
				},
				{
					src: "/icon-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "any maskable",
				},
			],
		},
		devOptions: { enabled: false },
	},
});