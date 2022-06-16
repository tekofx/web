import React from "react";
import ImageList from '../components/ImageList';
import { ThemeProvider } from "@emotion/react";
import Theme from '../Theme';
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

function Gallery() {
  const { t } = useTranslation();

  return (

    <Container maxWidth='xl'>
      <Typography variant="h1">{t('galleryTitle')}</Typography>
      <Typography variant='body1'>{t('galleryText')}</Typography>
      <ImageList />
    </Container>
  )
}

export default Gallery;