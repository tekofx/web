import React from "react";
import { Typography } from "@mui/material";
import NewsList from "../components/News/NewsList";
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
        <title>Teko's Tundra</title>
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
        <Grid item xs={12} sm={8} md={9} lg={10}>
          <Typography variant="h1">{t("homeTitle")}</Typography>
          <Typography variant="body1">{t("homeText")}</Typography>
          <Grid container>
            <Grid item xs={12} sm={10} md={6} lg={6}>
              <Seasons />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={10} sm={4} md={3} lg={2}>
          <Typography variant="h2">{t("homeNews")}</Typography>
          <NewsList />
        </Grid>
      </Grid>
    </Container>
  );
}
export default Home;
