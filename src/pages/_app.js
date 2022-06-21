import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";

import { theme } from "../theme/theme.ts";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
   body{
    background-color: #131313;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #ff9900;
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    };

    &::-webkit-scrollbar-thumb {
      background: #ff9900;
      border-radius: 20px;
    };
   }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Bard Goblin</title>
        <link rel="shortcut icon" href="/icon-logo.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=New+Rocker&family=Uncial+Antiqua&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
