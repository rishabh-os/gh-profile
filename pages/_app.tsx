import "../styles/globals.css";
import "../styles/Experience.css";
import "../styles/Popup.css";
import "../styles/Interests.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
      <Head>
        <title>Rishabh&apos;s Profile</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>
      <AnyComponent {...pageProps} />
    </>
  );
}

export default MyApp;
