import "../styles/globals.css";
import type { AppProps } from "next/app";
import Body from "../components/body/Body";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Body>
      <Component {...pageProps} />
    </Body>
  );
}
