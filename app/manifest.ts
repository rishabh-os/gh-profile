import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Rishabh's Profile",
		short_name: "RP",
		description:
			"My personal website, hosted on Vercel. Made with React, Next, and Tailwind.",
		start_url: "/",
		display: "standalone",
		background_color: "#23a6d5",
		theme_color: "#23a6d5",
		icons: [
			{
				src: "/icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-256x256.png",
				sizes: "256x256",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/icon-384x384.png",
				sizes: "384x384",
				type: "image/png",
			},
			{
				src: "/icon-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
