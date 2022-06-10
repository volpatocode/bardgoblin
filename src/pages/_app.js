import { createGlobalStyle } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
   body{
    background-color: #171717;
   }
  

`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Bard Goblin</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
