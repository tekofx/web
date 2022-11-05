import React from "react";
import ImageGallery from "../components/ImageGallery";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function Gallery() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery</title>
      </Helmet>
      <Typography variant="h1">{t("galleryTitle")}</Typography>
      <Typography variant="body1">{t("galleryText")}</Typography>
      <ImageGallery />
    </Container>
  );
}

export default Gallery;
