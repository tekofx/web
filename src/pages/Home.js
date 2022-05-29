import React from "react";
import { ThemeProvider } from '@emotion/react';
import Theme from '../Theme';
import { Typography } from "@mui/material";
import NewsList from "../components/News/NewsList";
import { Grid } from "@mui/material";
import { useTranslation } from 'react-i18next';
import '../index.css'
import { Container } from "@material-ui/core";


function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <ThemeProvider theme={Theme} >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8} md={9} lg={10}>
            <Typography variant="h1">{t('homeTitle')}</Typography>
            <Typography variant='body1'>{t('homeText')}</Typography>
          </Grid>
          <Grid item xs={10} sm={4} md={3} lg={2}>
            <Typography variant="h3">{t('homeNews')}</Typography>
            <NewsList />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}
export default Home;