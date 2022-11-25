import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Attributes from "../components/Fursona/Attributes";
import Reference from "../components/Fursona/Reference";

export default function Fursona() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fursona</title>
      </Helmet>
      <br />

      {/** Fursona information */}
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Typography align="center" variant="h3">
            Teko Fresnes Xaiden
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} order={{ xs: 1, lg: 2 }}>
          <Avatar
            style={{ alignSelf: "center" }}
            alt="Remy Sharp"
            src="avatar.jpg"
            sx={{
              width: "80%",
              height: "auto",
              marginLeft: "10%",
              marginRigth: "10%",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          lg={4}
          order={{ xs: 2, lg: 1 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography align="center" variant="body1">
            <b>{t("aboutSpecies")}: </b>
            {t("aboutSpeciesValue")}
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("aboutGender")}: </b>
            {t("aboutGenderValue")}
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("aboutHeight")}: </b>1.80m
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("aboutBirth")}: </b>22/09
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("aboutPersonality")}: </b>
            {t("aboutPersonalityValue")}
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("aboutAbilities")}: </b>
            {t("aboutAbilitiesValue")}
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("aboutLikes")}: </b>
            {t("aboutLikesValue")}
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("aboutDislikes")}: </b>
            {t("aboutDislikesValue")}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          lg={4}
          order={{ xs: 5, lg: 5 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Attributes />
        </Grid>
      </Grid>

      {/** Reference */}
      <Reference />
    </div>
  );
}
