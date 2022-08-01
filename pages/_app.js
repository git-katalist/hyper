import { ThemeProvider } from "styled-components";

import { Theme } from "../styles/Theme";
import { Global } from "styles/Global";
import NavBar from "@Components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
