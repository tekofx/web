import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Curiosities from "../components/Fursona/Curiosities";
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
        <Grid item xs={12}>
          <Info />

        </Grid>

        {/** Reference */}
        <Grid item xs={12}>
          <Reference />
        </Grid>
        {/* <Grid item xs={12}>
          <Curiosities />
        </Grid> */}
      </Grid>
    </div>
  );
}
