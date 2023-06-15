import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import AmongUS from "../components/Particles/AmongUS";
import Leafs from "../components/Particles/Leafs";
import Timeline from "../components/Fursona/Timeline";
import Presentation from "../components/Presentation";
import Head from "next/head";

import Items from "../components/Fursona/Items";
import getLang from "../components/Language/Lang";
function Home() {
  const t = getLang().experimental;


  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Experimental | Teko Tundra</title>

      </Head>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">{t.title}</Typography>
          <Typography variant="body1">{t.text}</Typography>
        </Grid>


        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h2">TsParticles</Typography>
          <AmongUS />
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Typography variant="h2">Timeline</Typography>
          <Timeline />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Items />
        </Grid>
        


      </Grid>
    </div>
  );
}
export default Home;
