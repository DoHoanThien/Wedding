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
      once: false,
      offset: 200,
      duration: 1500
    });
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        <title>Kiên Linh Wedding</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
