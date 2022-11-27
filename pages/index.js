import * as React from "react";
import Seasons from "../components/Seasons";
import { useTranslation } from "react-i18next";
import { Grid, Typography } from "@mui/material";
import Head from "next/head";
import { ni18nConfig } from "../ni18n.config";
import { loadTranslations } from 'ni18n'
import Cookies from "universal-cookie";
import { useContext } from "react";
import es from "../public/locales/es.json"
import en from "../public/locales/en.json"
import getLang from "../components/Lang";


export default function Index() {
  const t = getLang()
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />


        <meta name="og:title" content="Home" />
        <meta name="og:description" content="Home page" />
        <meta name="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tekofx.github.io" />
        <meta name="twitter:title" content="Teko's Tundra" />
        <meta name="twitter:description" content="Home" />
      </Head>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">{t.learn_react}</Typography>
          <Typography variant="body1">{t.learn_react}</Typography>
          <Grid container>
            <Grid item xs={12} sm={10} md={6} lg={6}>
              <Seasons />
              {t.learn_react}
              <Typography variant="body1">test</Typography>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

