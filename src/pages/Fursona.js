import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ColorsTable from "../components/Fursona/Colors/ColorsTable";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Dialog } from "@mui/material";
import Slide from "@mui/material/Slide";
import { Helmet } from "react-helmet";
import Attributes from "../components/Fursona/Attributes";
import ColorPalette from "../components/Fursona/Colors/ColorPalette";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Fursona() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Container maxWidth="xl">
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
        <Grid item xs={12} lg={4} order={{ xs: 1, lg: 2 }}>
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <br />
          <Typography variant="h2">Reference</Typography>
          <Typography variant="body1">{t("aboutText5")}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
          <img
            align="left"
            src="ref-small.jpg"
            alt=""
            width={"100%"}
            onClick={toggleOpen}
          />
          <Dialog fullScreen TransitionComponent={Transition} open={open}>
            <img align="left" src="ref.png" alt="" onClick={toggleOpen} />
          </Dialog>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
          <Typography variant="h3">Color Reference</Typography>
          <ColorPalette />
          <ColorsTable />
          <br />
        </Grid>
      </Grid>
    </Container>
  );
}
