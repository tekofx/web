import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ColorsTable from "../components/Colors/ColorsTable";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Dialog } from "@mui/material";
import Slide from "@mui/material/Slide";
import { Helmet } from "react-helmet";
import QRCode from "../components/QRCode";
import Fab from "@mui/material/Fab";
import ShareIcon from "@mui/icons-material/Share";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

function About() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [qrCodeOpen, setQrCodeOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleQRCode = () => {
    setQrCodeOpen(!qrCodeOpen);
  };

  return (
    <Container maxWidth="xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <Fab
        color="primary"
        aria-label="share"
        style={style}
        onClick={toggleQRCode}
      >
        <ShareIcon />
      </Fab>

      <Dialog
        TransitionComponent={Transition}
        open={qrCodeOpen}
        onClick={toggleQRCode}
        /* PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }} */
        sx={{ width: "100%" }}
      >
        <Grid container>
          <Grid item lg={7}>
            <QRCode size={500} />
          </Grid>
        </Grid>
      </Dialog>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">{t("aboutTitle2")}</Typography>
          <Typography variant="body1">{t("aboutText5")}</Typography>
        </Grid>
        <Grid item xs={8} lg={8} className={"test"}>
          <Typography variant="body1">
            <b>{t("aboutName")}: </b>Teko
          </Typography>
          <Typography variant="body1">
            <b>{t("aboutSpecies")}: </b>
            {t("aboutSpeciesValue")}
          </Typography>
          <Typography variant="body1">
            <b>{t("aboutGender")}: </b>
            {t("aboutGenderValue")}
          </Typography>
          <Typography variant="body1">
            <b>{t("aboutHeight")}: </b>1.80m
          </Typography>
          <Typography variant="body1">
            <b>{t("aboutBirth")}: </b>22/09
          </Typography>
          <Typography variant="body1">
            <b>{t("aboutPersonality")}: </b>
            {t("aboutPersonalityValue")}
          </Typography>
          <Typography variant="body1">
            <b>{t("aboutLikes")}: </b>
            {t("aboutLikesValue")}
          </Typography>
          <Typography variant="body1">
            <b>{t("aboutDislikes")}: </b>
            {t("aboutDislikesValue")}
          </Typography>
          <Typography variant="body1">
            <b>{t("aboutAbilities")}: </b>
            {t("aboutAbilitiesValue")}
          </Typography>
        </Grid>
        <Grid item lg={4} className="QRCode"></Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant="h2">{t("aboutTitle3")}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
          <img
            align="left"
            src="ref-small.jpg"
            alt=""
            width={"100%"}
            onClick={toggleOpen}
          />
          <Dialog
            fullScreen="true"
            TransitionComponent={Transition}
            open={open}
          >
            <img align="left" src="ref.png" alt="" onClick={toggleOpen} />
          </Dialog>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
          <ColorsTable />
          <br />
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
