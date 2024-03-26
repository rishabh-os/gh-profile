import "../styles/globals.css";
import "../styles/Experience.css";
import "../styles/Popup.css";
import "../styles/Interests.css";

import { Inter, Manrope, Pinyon_Script, Victor_Mono } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "400", "500", "600"],
	variable: "--font-inter",
});

const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
	weight: "300",
	variable: "--font-manrope",
});

//? For Arch BTW */
const pinyon = Pinyon_Script({
	subsets: ["latin"],
	display: "swap",
	weight: "400",
	variable: "--font-pinyon",
});

const victormono = Victor_Mono({
	subsets: ["latin"],
	display: "swap",
	weight: "400",
	variable: "--font-victormono",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${manrope.variable} ${pinyon.variable} ${victormono.variable}`}
			>
				{children}
			</body>
		</html>
	);
}

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Rishabh's Profile",
	description: "Welcome to Next.js",
	metadataBase: new URL("https://gh-profile-rishabh-os.vercel.app"),
	manifest: "/site.webmanifest",
	twitter: {
		card: "summary_large_image",
	},
	openGraph: {
		images: [
			{
				url: "/website.png",
			},
		],
	},
};

import type { Viewport } from "next";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	minimumScale: 1,
	maximumScale: 10,
	themeColor: "#23a6d5",
};
