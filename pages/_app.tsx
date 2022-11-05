import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Container from "../components/Container/Container";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//import "../public/static/fonts/basis33.ttf";

//import { useMediaQuery } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  //const isMobile = useMediaQuery("min-width:600px)");
  const router = useRouter();
  const [mainPage, setMainPage] = useState<boolean>(false);

  useEffect(() => {
    if (router.route === "/") {
      setMainPage(true);
    } else {
      setMainPage(false);
    }
  }, [router.route]);

  if (mainPage) {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp;
