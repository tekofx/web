import React from "react";
import { Avatar, Typography, Grid, Paper, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Info from "../components/Fursona/Info";
import Reference from "../components/Fursona/Reference";
import getLang from "../components/Language/Lang";
import { RiPlantFill } from "react-icons/ri";
import { GrPersonalComputer } from "react-icons/gr";
import Timeline from "../components/Fursona/Timeline";

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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} >
          <Info />

        </Grid>
        {/** Reference */}
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ paddingTop: 0 }}>
          <Reference />
        </Grid>
        {/* <Grid item xs={12} sm={12} md={12} lg={6}>
          <Curiosities />
          <Likes />
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={6}>
          <Timeline />
        </Grid> */}

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


function Likes() {
  return (
    <Paper sx={{ paddingLeft: 2, paddingRight: 2 }}>
      <Typography variant="h2">Likes</Typography>
      <RiPlantFill size={"6rem"} />
      <GrPersonalComputer size={"6rem"} />

    </Paper>
  )
}