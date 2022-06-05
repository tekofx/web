import React from "react";
import ImageList from '../components/ImageList';
import { ThemeProvider } from "@emotion/react";
import Theme from '../Theme';
import { Container, Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';

function Gallery() {
  const { t } = useTranslation();

  return (

    <Container maxWidth='xl'>
      <ThemeProvider theme={Theme}>
        <Typography variant="h1">{t('galleryTitle')}</Typography>
        <Typography variant='body1'>{t('galleryText')}</Typography>
        <ImageList />
      </ThemeProvider>
    </Container>
  )
}

export default Gallery;