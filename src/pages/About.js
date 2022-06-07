import React from "react";
import Avatar from '@mui/material/Avatar';
import avatar from '../img/avatar.png';
import ref from '../img/ref.png';
import { ThemeProvider } from "@emotion/react";
import Theme from '../Theme';
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ColorsTable from '../components/Colors/ColorsTable';
import { useTranslation } from 'react-i18next';
import { Container } from "@material-ui/core";


function About() {
  const { t } = useTranslation();

  return (
    <Container maxWidth='xl'>
      <ThemeProvider theme={Theme}>
        <Typography variant="h1">{t('aboutTitle1')}</Typography>

        <Grid container spacing={2}>
          <Grid item xs={4} sm={3} md={2} lg={2} >
            <Avatar alt="Remy Sharp" src={avatar} sx={{ width: "90%", height: "auto" }} />
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={10}>
            <Typography variant='body1' paragraph>{t('aboutText1')}</Typography>
            <Typography variant='body1' paragraph>{t('aboutText2')}</Typography>
            <Typography variant='body1' paragraph>{t('aboutText3')} </Typography>
            <Typography variant='body1' paragraph>{t('aboutText4')}</Typography>
          </Grid>
        </Grid>

        <br />

        <Grid container spacing={2} >
          <Grid item xs={12} >
            <Typography variant="h2">{t('aboutTitle2')}</Typography>
            <Typography variant="body1">{t('aboutText5')}</Typography>
          </Grid>
          <Grid item xs={8} >
            <Typography variant="body1"><b>{t('aboutName')}: </b>Teko</Typography>
            <Typography variant="body1"><b>{t('aboutSpecies')}: </b>{t('aboutSpeciesValue')}</Typography>
            <Typography variant="body1"><b>{t('aboutGender')}: </b>{t('aboutGenderValue')}</Typography>
            <Typography variant="body1"><b>{t('aboutHeight')}: </b>1.80m</Typography>
            <Typography variant="body1"><b>{t('aboutBirth')}: </b>22/09</Typography>
            <Typography variant="body1"><b>{t('aboutPersonality')}: </b>{t('aboutPersonalityValue')}</Typography>
            <Typography variant="body1"><b>{t('aboutLikes')}: </b>{t('aboutLikesValue')}</Typography>
            <Typography variant="body1"><b>{t('aboutDislikes')}: </b>{t('aboutDislikesValue')}</Typography>
            <Typography variant="body1"><b>{t('aboutAbilities')}: </b>{t('aboutAbilitiesValue')}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h2">{t('aboutTitle3')}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
            <img align="left" src={ref} alt="" width={"100%"} />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
            <ColorsTable />
            <br />
            {/* <ColorsThing /> */}
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  )
}

export default About;