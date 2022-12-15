import React from "react";
import RepositoryList from "../../components/Github/RepositoryList";
import { Typography, Grid } from "@mui/material";
import Head from "next/head";

import getLang from "../../components/Language/Lang";


function Projects() {
  const t = getLang().projects;

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Projects | Teko Tundra</title>

      </Head>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">{t.title}</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1">Card Creator</Typography>
          <Typography variant="body1">Create your fursona custom card and download it</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1">Github</Typography>
          <RepositoryList />

        </Grid>


      </Grid>

    </div>
  );
}

export default Projects;
