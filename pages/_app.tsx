import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Body from "../components/body/Body";
import { useCallback } from "react";

import { ClientProvider } from "@micro-stacks/react";
import { destroySession, saveSession } from "../helpers/wallet/fetchers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClientProvider
      appName="My sick app"
      appIconUrl="/vercel.svg"
      dehydratedState={pageProps?.dehydratedState}
      onPersistState={useCallback(async (dehydratedState: string) => {
        await saveSession(dehydratedState);
      }, [])}
      onSignOut={useCallback(async () => {
        await destroySession();
      }, [])}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Component {...pageProps} />
      </Body>
    </ClientProvider>
  );
}
