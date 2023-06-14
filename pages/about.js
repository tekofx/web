import React from "react";
import Avatar from "@mui/material/Avatar";
import { Paper, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import SocialCards from "../components/Social/SocialCards";
import getLang from "../components/Language/Lang";
import Head from "next/head";


function About() {
  const t = getLang().about;

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>About | Teko Tundra</title>


        <meta name="og:title" content="About | Teko Tundra" />
        <meta name="og:description" content="Teko is an arctic fox with blue hair and green and yellow eyes" />
        <meta name="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tekofx.github.io" />
        <meta name="twitter:title" content="Teko's Tundra | About" />
        <meta name="twitter:description" content="Welcome to my webpage" />
        <meta property="twitter:image" content={"https://tekofx.github.io/web/" + "img/twitter_image.jpg"} />

      </Head>


      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper sx={{ marginTop: 2 }}>
            <Typography variant="h1">{t.title}</Typography>
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
                  {t.text1}
                </Typography>
                <Typography variant="body1" paragraph>
                  {t.text2}
                </Typography>
                <Typography variant="body1" paragraph>
                  {t.text3}{" "}
                </Typography>
                <Typography variant="body1" paragraph>
                  {t.text4}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper sx={{ marginBottom: 2, p: 2 }}>
            <Typography variant="h2" align="center"> {t.subtitle}</Typography>

          </Paper>
          <SocialCards />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
