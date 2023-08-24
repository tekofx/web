import React from "react";
import RepositoryList from "../../components/Github/RepositoryList";
import { Typography, Grid, Paper } from "@mui/material";
import Head from "next/head";

function Projects() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Projects | Teko Tundra</title>

        <meta name="og:title" content="Teko | Projects" />
        <meta name="og:description" content="Personal projects" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://tekofx.github.io/web/projects" />
        <meta
          name="og:image"
          content="https://tekofx.github.io/web/img/meta/about.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tekofx.github.io" />
        <meta name="twitter:title" content="Teko's Tundra | Projects" />
        <meta
          name="twitter:description"
          content="List of projects related to computers and programming"
        />
        <meta
          property="twitter:image"
          content="https://tekofx.github.io/web/img/meta/about.jpg"
        />
      </Head>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper sx={{ marginTop: 2 }}>
            <Typography variant="h1">Projects</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <RepositoryList />
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
