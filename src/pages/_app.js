import Head from "next/head";

import { createGlobalStyle } from "styled-components";
import { UserModalContextProvider } from "../contexts/UserModalContext";
import { UserContextProvider } from "../contexts/UserContext";
import { TopicContextProvider } from "../contexts/TopicContext";
import { SearchContextProvider } from "../contexts/SearchContext";
import { UtilsContextProvider } from "../contexts/UtilsContext";
import { theme } from "../theme/theme.ts";
import { ThemeProvider } from "@mui/material";

import { ToastContainer } from "react-toastify";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    
  }
   body{
    background-color: #131313;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #ff9900;
    &::-webkit-scrollbar {
      width: 3px;
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
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <UserModalContextProvider>
        <UtilsContextProvider>
          <UserContextProvider>
            <TopicContextProvider>
              <SearchContextProvider>
                <ThemeProvider theme={theme}>
                  <Component {...pageProps} />
                </ThemeProvider>
              </SearchContextProvider>
            </TopicContextProvider>
          </UserContextProvider>
        </UtilsContextProvider>
      </UserModalContextProvider>
      <ToastContainer />
    </>
  );
}
