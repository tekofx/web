import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Attributes from "../components/Fursona/Attributes";
import Reference from "../components/Fursona/Reference";

export default function Fursona() {
  const { t } = useTranslation("fursona");

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
            src="img/avatar.jpg"
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
            <b>{t("species.title")}: </b>
            {t("species.value")}
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("gender.title")}: </b>
            {t("gender.value")}
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("height")}: </b>1.80m
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("birth")}: </b>22/09
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("personality.title")}: </b>
            {t("personality.value")}
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("abilities.title")}: </b>
            {t("abilities.value")}
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("likes.title")}: </b>
            {t("likes.value")}
          </Typography>
          <Typography align="center" variant="body1">
            <b>{t("dislikes.title")}: </b>
            {t("dislikes.value")}
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
