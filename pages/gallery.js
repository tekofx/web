import React from "react";
import ImageGallery from "../components/ImageGallery";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import getLang from "../components/Lang";

function Gallery() {
  const t = getLang().projects;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery</title>
      </Helmet>
      <Typography variant="h1">{t.title}</Typography>
      <Typography variant="body1">{t.text}</Typography>
      <ImageGallery />
    </div>
  );
}

export default Gallery;
