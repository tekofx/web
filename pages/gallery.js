import React from "react";
import ImageGallery from "../components/ImageGallery";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Head from "next/head";

import getLang from "../components/Language/Lang";

function Gallery() {
  const t = getLang().gallery;

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Gallery | Teko Tundra</title>

      </Head>
      <Typography variant="h1">{t.title}</Typography>
      <Typography variant="body1">{t.text}</Typography>
      <ImageGallery />
    </div>
  );
}

export default Gallery;
