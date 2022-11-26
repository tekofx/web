import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Layout from "../components/layout";
import "../styles/transition.css";
import Transition from "../components/Transition";
import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "../ni18n.config";
import Page from "../components/page";
import Cookies from "universal-cookie";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// Set language cookie
const cookies = new Cookies();
if (cookies.get("lang") === undefined) {
  cookies.set("lang", "es");
}

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useSyncLanguage(cookies.get("lang"));

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={emotionCache}>
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
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default appWithI18Next(MyApp, ni18nConfig);
