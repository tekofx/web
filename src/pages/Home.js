import React from "react";
import { Typography } from "@mui/material";
import NewsList from "../components/News/NewsList";
import { Grid } from "@mui/material";
import { useTranslation } from 'react-i18next';
import '../index.css'
import Container from '@mui/material/Container';

function Home() {
  const { t } = useTranslation();

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={4} >
        <Grid item xs={12} sm={8} md={9} lg={10}>
          <Typography variant="h1">{t('homeTitle')}</Typography>
          <Typography variant='body1'>{t('homeText')}</Typography>
          <WebGL />
        </Grid>
        <Grid item xs={10} sm={4} md={3} lg={2}>
          <Typography variant="h2">{t('homeNews')}</Typography>
          <NewsList />
        </Grid>
      </Grid>
    </Container>
  );
}
export default Home;