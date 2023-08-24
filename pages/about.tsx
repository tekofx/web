import React from "react";
import Avatar from "@mui/material/Avatar";
import { Paper, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import SocialCards from "../components/Social/SocialCards";
import Head from "next/head";

function About() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>About | Teko Tundra</title>

        <meta name="og:title" content="About | Teko Tundra" />
        <meta
          name="og:description"
          content="Teko is an arctic fox with blue hair and green and yellow eyes"
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://tekofx.github.io/web/about" />
        <meta
          name="og:image"
          content="https://tekofx.github.io/web/img/meta/about.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tekofx.github.io" />
        <meta name="twitter:title" content="Teko's Tundra | About" />
        <meta name="twitter:description" content="Welcome to my webpage" />
        <meta
          property="twitter:image"
          content="https://tekofx.github.io/web/img/meta/about.jpg"
        />
      </Head>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper sx={{ marginTop: 2 }}>
            <Typography variant="h1">About</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} md={3} lg={2}>
                <Avatar
                  style={{ alignSelf: "center" }}
                  alt="Remy Sharp"
                  src={process.env.PUBLIC_URL + "img/logo-color.png"}
                  sx={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={12} sm={9} md={9} lg={9}>
                <Typography variant="body1" paragraph>
                  Welcome to my webpage!
                </Typography>
                <Typography variant="body1" paragraph>
                  I'm Teko, a computer engineering student from Spain.
                </Typography>
                <Typography variant="body1" paragraph>
                  I am a learning computer engineer and programmer, who likes to
                  code simple projects like Discord bots or this webpage.
                </Typography>
                <Typography variant="body1" paragraph>
                  Besides that I also enjoy photography and drawing furries and
                  cute stuff.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper sx={{ marginBottom: 2, p: 2 }}>
            <Typography variant="h2" align="center">
              Socials
            </Typography>
          </Paper>
          <SocialCards />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
