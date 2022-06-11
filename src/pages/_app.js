import { createGlobalStyle } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
  }
   body{
    background-color: #131313;
   }
   @font-face {
    font-family: 'The Wild Breath of Zelda';
    font-weight: 400;
    font-style: normal;
    src: url("../../public/fonts/thewildbreathofzelda.otf") format("woff2");
  }
  

`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Bard Goblin</title>
        <link rel="shortcut icon" href="/icon-logo.png" />
        <link
          href="../../public/fonts/thewildbreathofzelda.otf"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
