import * as React from "react";
import Seasons from "../components/Seasons";
import { Grid, Paper, Typography } from "@mui/material";
import Head from "next/head";
import getLang from "../components/Language/Lang";
import Presentation from "../components/Presentation";


export default function Index() {
  const t = getLang().home
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Home | Teko Tundra</title>
        <link rel="canonical" href="http://mysite.com/example" />


        <meta name="og:title" content="Home" />
        <meta name="og:description" content="Home page" />
        <meta name="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tekofx.github.io" />
        <meta name="twitter:title" content="Teko's Tundra" />
        <meta name="twitter:description" content="Home" />
        <meta property="twitter:image" content={process.env.PUBLIC_URL + "img/ref-small.jpg"} />
      </Head>
      <Paper sx={{ marginTop: 4 }} >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h1">{t.title}</Typography>

          </Grid>
          <Grid item lg={12}>

            <Presentation />
          </Grid>


        </Grid>
      </Paper >
    </div>
  );
}

