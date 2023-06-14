import React from "react";
import RepositoryList from "../../components/Github/RepositoryList";
import { Typography, Grid, Paper, Card, Box, CardContent, IconButton, CardMedia } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Head from "next/head";
import getLang from "../../components/Language/Lang";


function Projects() {
  const t = getLang().projects;

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Projects | Teko Tundra</title>


        <meta name="og:title" content="Teko | Projects" />
        <meta name="og:description" content="Personal projects" />
        <meta name="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tekofx.github.io" />
        <meta name="twitter:title" content="Teko's Tundra | Projects" />
        <meta name="twitter:description" content="List of projects related to computers and programming" />
        <meta property="twitter:image" content={"https://tekofx.github.io/web/" + "img/twitter_image.jpg"} />

      </Head>
      <Grid container spacing={1}>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper sx={{ marginTop: 2 }}>
            <Typography variant="h1">{t.title}</Typography>
          </Paper>
        </Grid>

        {/* <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={6}>

              <Card sx={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  sx={{ height: 200, width: "auto" }}
                  image="/img/ref-small.jpg"
                  alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="h3">
                      Card Creator
                    </Typography>
                    <Typography variant="body1" >
                      Create your fursona custom card and download it
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </Grid>

        </Grid> */}

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <RepositoryList />

        </Grid>


      </Grid>

    </div>
  );
}

export default Projects;
