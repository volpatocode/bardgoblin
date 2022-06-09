import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import "../config/firebaseClient";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bard Goblin</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
