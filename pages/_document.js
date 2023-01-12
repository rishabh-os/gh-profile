import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Manrope:wght@300&family=Roboto:wght@300&family=Sora:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/victormono@latest/dist/index.min.css"
            rel="stylesheet"
          />
          {/* //? For Arch */}
          <link
            href="https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=Herr+Von+Muellerhoff&family=Lato&family=Ms+Madi&family=Pinyon+Script&display=swap"
            rel="stylesheet"
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
