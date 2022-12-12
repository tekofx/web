import React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
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

      </Head>
      <Typography variant="h1">{t.title}</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={3} lg={2}>
          <Avatar
            style={{ alignSelf: "center" }}
            alt="Remy Sharp"
            src="img/logo-color.png"
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
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2"> {t.subtitle}</Typography>
          <SocialCards />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
