import React from "react";
import ImageGallery from "../components/ImageGallery";
import { Paper, Typography } from "@mui/material";
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


        <meta name="og:title" content="Teko | Gallery" />
        <meta name="og:description" content="Art and photographies" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://tekofx.github.io/web/gallery" />
        <meta name="og:image" content="https://tekofx.github.io/web/img/meta/about.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tekofx.github.io" />
        <meta name="twitter:title" content="Teko's Tundra | Gallery" />
        <meta name="twitter:description" content="A gallery containing my art and photographies" />
        <meta property="twitter:image" content="https://tekofx.github.io/web/img/meta/about.jpg" />

      </Head>
      <Paper sx={{ marginTop: 2, marginBottom: 2, p: 2 }}>
        <Typography variant="h1">{t.title}</Typography>
        <Typography variant="body1">{t.text}</Typography>
      </Paper>
      <ImageGallery />
    </div>
  );
}

export default Gallery;
