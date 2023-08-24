import React from "react";
import { Grid } from "@mui/material";
import Head from "next/head";
import Info from "../components/Fursona/Info";
import Reference from "../components/Fursona/Reference/Reference";
import About from "../components/Fursona/About";
import Gallery from "../components/Fursona/Gallery";
import Stats from "../components/Fursona/Stats";
export default function Fursona() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Fursona | Teko Tundra</title>

        <meta name="og:title" content="Teko | Fursona" />
        <meta
          name="og:description"
          content="Teko is an arctic fox with blue hair and green and yellow eyes"
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://tekofx.github.io/web/fursona" />
        <meta
          name="og:image"
          content="https://tekofx.github.io/web/img/meta/fursona.jpg"
        />
        <meta name="og:site_name" content="Teko's Tundra" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tekofx.github.io" />
        <meta
          name="twitter:title"
          content="Teko's Tundra | Fursona Information"
        />
        <meta
          name="twitter:description"
          content="Teko is an arctic fox with blue hair and green and yellow eyes. He loves plants, animals, anime and videogames"
        />
        <meta
          property="twitter:image"
          content="https://tekofx.github.io/web/img/meta/fursona.jpg"
        />
      </Head>
      <br />

      {/** Fursona information */}
      <Grid
        container
        spacing={2}
        paddingRight={{ xs: "0%", md: "10%", lg: "15%" }}
        paddingLeft={{ xs: "0%", md: "10%", lg: "15%" }}
      >
        {/*  <Grid item xs={12} sm={12} md={12} lg={12} >
          <Info />

        </Grid> */}
        {/** Reference */}
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ paddingTop: 0 }}>
          <Reference />
        </Grid>

        {/** About */}
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ paddingTop: 0 }}>
          <About />
        </Grid>

        {/** Info */}
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ paddingTop: 0 }}>
          <Info />
        </Grid>

        {/** Stats */}
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ paddingTop: 0 }}>
          <Stats />
        </Grid>

        {/* <Grid item xs={12} sm={12} md={12} lg={6}>
          <Curiosities />
          <Likes />
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={6}>
          <Timeline />
        </Grid> */}
        {/** Gallery */}
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ paddingTop: 0 }}>
          <Gallery />
        </Grid>
      </Grid>
    </div>
  );
}
