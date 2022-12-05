import * as React from "react";
import Seasons from "../components/Seasons";
import { Grid, Typography } from "@mui/material";
import Head from "next/head";
import getLang from "../components/Language/Lang";


export default function Index() {
  const t = getLang().home
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
          <Typography variant="h1">{t.title}</Typography>
          <Typography variant="body1">{t.text}</Typography>
          <Grid container>
            <Grid item xs={12} sm={10} md={6} lg={6}>
              <Seasons />

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

