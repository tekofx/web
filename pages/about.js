import React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import SocialCards from "../components/SocialCards";
import { Helmet } from "react-helmet";

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <Typography variant="h1">{t("aboutTitle1")}</Typography>

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
            {t("aboutText1")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("aboutText2")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("aboutText3")}{" "}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("aboutText4")}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2">Social networks</Typography>
          <SocialCards />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
