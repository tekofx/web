import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import "../index.css";
import Container from "@mui/material/Container";
import Seasons from "../components/Seasons/Seasons";
import { Helmet } from "react-helmet";

function Home() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Helmet>

        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />

        <meta name="og:title" content="Home" />
        <meta name="og:description" content="Home page" />
        <meta name="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tekofx.github.io" />
        <meta property="twitter:url" content={window.location.href} />
        <meta name="twitter:title" content="Teko's Tundra" />
        <meta name="twitter:description" content="Home" />
        <meta
          name="twitter:image"
          content={window.location.href + "ref-small.jpg"}
        />
      </Helmet>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">{t("homeTitle")}</Typography>
          <Typography variant="body1">{t("homeText")}</Typography>
          <Grid container>
            <Grid item xs={12} sm={10} md={6} lg={6}>
              <Seasons />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Home;
