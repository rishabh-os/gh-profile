import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/site.webmanifest" />
          {/* //? Content for social share */}
          <meta property="og:image" content="/website.png" key="ogimage" />
          <meta name="twitter:card" content="summary_large_image"></meta>

          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#23a6d5" />
          <meta name="msapplication-TileColor" content="#23a6d5" />
          <meta
            name="description"
            content="Rishabh's personal website on the Internet"
          ></meta>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
