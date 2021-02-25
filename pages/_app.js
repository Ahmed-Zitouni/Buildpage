import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const theme = {
    mobile: `(max-width: 476px)`,
    tablet: `(max-width: 765px)`,
    laptop: `(max-width: 990px)`,
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          Buildpage | Drag and Drop Website Builder for eCommerce Stores on
          Shopify
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
