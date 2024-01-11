import "../styles/globals.css";
import "../styles/Experience.css";
import "../styles/Popup.css";
import "../styles/Interests.css";
import type { AppProps } from "next/app";
import Head from "next/head";

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

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
      <Head>
        <title>Rishabh&apos;s Profile</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=10"
        />
      </Head>
      <main
        className={`${inter.variable} ${manrope.variable} ${pinyon.variable} ${victormono.variable}`}
      >
        <AnyComponent {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
