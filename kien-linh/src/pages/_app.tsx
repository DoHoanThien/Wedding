import "aos/dist/aos.css";
import "@/styles/globals.scss";
import { useEffect } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 200,
      duration: 2000
    });
  }, []);

  return (
    <>
      <Head>
        <meta
          id="wedding-viewport"
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <title>Kiên Linh Wedding</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
