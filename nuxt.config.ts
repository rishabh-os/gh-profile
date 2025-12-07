// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: [
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxt/ui',
		'@vite-pwa/nuxt',
		'motion-v/nuxt',
		"@nuxtjs/mdc",
		"@nuxt/content",
	],
	css: ['~/assets/css/main.css'],
	app: {
		head: {
			title: "Rishabh's Profile",
		},
	},
	runtimeConfig: {
		public: {
			date: new Date().toLocaleDateString('en-US', {
				month: 'long',
				year: 'numeric'
			}),
		},
	},
	pwa: {
		client: {
			periodicSyncForUpdates: 3600,
		},
		workbox: {
			navigateFallback: "/",
		},
		devOptions: {
			enabled: false,
			type: "module",
		},
		manifest: {
			id: "gh-profile-rishabh-os",
			name: "Rishabh's Profile",
			short_name: "Rishabh's Profile",
			description: "My personal website!",
			theme_color: "#ffffff",
			background_color: "#ffffff",
			launch_handler: {
				client_mode: ["navigate-existing", "auto"],
			},
			orientation: "portrait",
			display: "standalone",
			display_override: ["window-controls-overlay", "standalone"],
			edge_side_panel: {},
			file_handlers: [],
			categories: ["portfolio", "personal"],
			dir: "ltr",
			scope_extensions: [],
			start_url: "/",
			protocol_handlers: [],
			icons: [
				{
					src: "icon-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "icon-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "any",
				},
				{
					src: "icon-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "maskable",
				},
			],
		},
	},
})