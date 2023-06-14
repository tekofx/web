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
import { Snackbar, Button, IconButton, Stack, Paper, Typography, Grid } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import "../styles/gallery.css"
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// Set language cookie
const cookies = new Cookies();
if (cookies.get("lang") === undefined) {
  cookies.set("lang", "es");
}

function Seasons(props) {
  console.log(props.path)



  // If it is winter, snow
  const date = new Date();
  const month = date.getMonth();


  // When displaying amongus particles, do not display snow or leafs, because they are not compatible
  if (props.path === "/experimental") {
    return null
  }

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
  const extraSmallToMid = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const router = useRouter();



  useSyncLanguage(cookies.get("lang"));



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
          {extraSmallToMid ? "" : <Snack />}
          <CommandExecutor />
          <Layout>
            <Transition>
              <Container maxWidth="xl">
                <Seasons path={router.pathname} />

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


function Snack() {
  var random = Math.random();
  // If random is minor than 0.6 not show snack
  const [open, setOpen] = useState(random < 0.6 ? false : true);


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={10000}
      onClose={handleClose}
      message="Note archived"
    >
      <Stack bgcolor="white" padding={2} borderRadius={5}>

        <LightbulbIcon color="secondary" />


        <Typography color="black" variant="body1">Hint: If you press ctrl+k you can access a command executor</Typography>


        <IconButton
          aria-label="close"
          color="secondary"
          onClick={handleClose}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </Stack>


    </Snackbar>
  )
}