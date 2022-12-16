import React from "react";
import { Avatar, Typography, Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Info from "../components/Fursona/Info";
import Reference from "../components/Fursona/Reference";
import getLang from "../components/Language/Lang";

export default function Fursona() {
  const t = getLang().fursona;


  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Fursona | Teko Tundra</title>

      </Head>
      <br />

      {/** Fursona information */}
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={12} lg={12} >
          <Info />

        </Grid>


        {/** Reference */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Reference />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Curiosities />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Curiosities />
        </Grid>
      </Grid>
    </div>
  );
}



function Curiosities() {
  return (
    <Paper sx={{ paddingLeft: 2, paddingRight: 2 }}>
      <Typography variant="h2">Curiosities</Typography>

      <ul>
        <Typography variant="body1">Curiosity 1</Typography>
        <Typography variant="body1">Fugiat voluptate eiusmod ullamco irure minim deserunt nulla eiusmod nisi tempor nostrud.</Typography>
        <Typography variant="body1">Curiosity 3</Typography>
        <Typography variant="body1">Curiosity 4</Typography>
      </ul>
    </Paper>
  )
}