import "../styles/globals.css";
import "../styles/Experience.css";
import "../styles/Popup.css";
import "../styles/Interests.css";

import type { Metadata, Viewport } from "next";
import { Inter, Pinyon_Script, Victor_Mono } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "400", "500", "600"],
	variable: "--font-inter",
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
				className={`${inter.variable} ${pinyon.variable} ${victormono.variable}`}
			>
				{children}
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	title: "Rishabh's Profile",
	description: "My personal profile on the web!",
	metadataBase: new URL("https://gh-profile-rishabh-os.vercel.app"),
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

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	minimumScale: 1,
	maximumScale: 10,
	themeColor: "#23a6d5",
};
