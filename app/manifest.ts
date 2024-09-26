import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Rishabh's Profile",
		short_name: "RP",
		description:
			"My personal website, hosted on Vercel. Made with React, Next, and Tailwind.",
		start_url: "/",
		display: "standalone",
		background_color: "#24273A",
		theme_color: "#24273A",
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
		],
	};
}
