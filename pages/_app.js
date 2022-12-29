import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Layout from "../components/Layout/layout";
import "../styles/transition.css";
import Transition from "../components/Layout/Transition";
import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "../ni18n.config";
import SnowComponent from "../components/Particles/Snow";
import Leafs from "../components/Particles/Leafs";
import Page from "../components/Layout/page";
import Cookies from "universal-cookie";
import CommandExecutor from "../components/CommandExecutor"
import { useHotkeys } from "react-hotkeys-hook";
import { useState } from "react";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// Set language cookie
const cookies = new Cookies();
if (cookies.get("lang") === undefined) {
  cookies.set("lang", "es");
}

function Seasons() {
  // If it is winter, snow
  const date = new Date();
  const month = date.getMonth();
  if (month === 11 || month === 0 || month === 1) {
    return <SnowComponent />;
  }

  // If it is autumn, leafs
  if (month === 9 || month === 10) {
    return <Leafs />;
  }

}

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useSyncLanguage(cookies.get("lang"));
  const [open, setOpen] = useState(false)
  useHotkeys('ctrl+k', () => setOpen(!open), [open])





  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="https://raw.githubusercontent.com/tekofx/web/main/public/favicon.ico" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <CommandExecutor />

          <Layout>
            <Transition>
              <Container maxWidth="xl">
                <Seasons />

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
