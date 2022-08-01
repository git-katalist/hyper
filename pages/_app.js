import { ThemeProvider } from "styled-components";
import { prefix } from "utils/prefix";

import { Theme } from "../styles/Theme";
import { Global } from "styles/Global";
import NavBar from "@Components/navbar";
import Meta from "@Components/Meta";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <NavBar />
      <Meta />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
