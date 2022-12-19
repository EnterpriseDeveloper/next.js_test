import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Body from "../components/body/Body";

import * as MicroStacks from "@micro-stacks/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MicroStacks.ClientProvider appName="My sick app" appIconUrl="vercel.svg">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Component {...pageProps} />
      </Body>
    </MicroStacks.ClientProvider>
  );
}
