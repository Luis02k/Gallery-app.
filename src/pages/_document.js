import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <body>
        <Main />
        <NextScript />

        <Analytics />
      </body>
    </Html>
  );
}
