import PropTypes from "prop-types";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Layout from "../components/Layout/layout";
import "../styles/styles.css";
import Transition from "../components/Layout/Transition";
import Page from "../components/Layout/page";
import Cookies from "universal-cookie";
import { Container } from "@mui/material";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// Set language cookie
const cookies = new Cookies();
if (cookies.get("lang") === undefined) {
  cookies.set("lang", "es");
}

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/tekofx/web/main/public/favicon.ico"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Transition>
            <Container maxWidth="xl">
              <Page>
                <Component {...pageProps} />
              </Page>
            </Container>
          </Transition>
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

// @ts-ignore
export default MyApp;
