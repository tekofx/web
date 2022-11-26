import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import ThreeFiber from "../components/ThreeFiber";
import AmongUS from "../components/AmongUS";
import Timeline from "../components/Fursona/Timeline";
import { Helmet } from "react-helmet";
import Head from "next/head";

import Items from "../components/Fursona/Items";
import Abilities from "../components/Fursona/Abilities";
import CardCreator from "../components/CardCreator";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Experimental</title>
      </Head>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">{t("experimentalTitle")}</Typography>
          <Typography variant="body1">{t("experimentalText")}</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h2">ThreeFiber</Typography>
          <ThreeFiber />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h2">TsParticles</Typography>
          <AmongUS />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h2">Timeline</Typography>
          <Timeline />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Items />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Abilities />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CardCreator />
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;