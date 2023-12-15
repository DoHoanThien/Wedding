import { FC, memo } from "react";
import Head from "next/head";

const MIN_WIDTH_PAGE = 500;

const DefaultMeta = () => {
  const innerWidth = typeof window !== "undefined" ? window.innerWidth : 1000;

  return (
    <Head>
      <meta
        name="viewport"
        content={
          innerWidth <= MIN_WIDTH_PAGE
            ? `width=${MIN_WIDTH_PAGE}, user-scalable=no`
            : "initial-scale=1.0, width=device-width"
        }
      />
    </Head>
  );
};

export default memo(DefaultMeta);
