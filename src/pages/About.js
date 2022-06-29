import React from "react";
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ColorsTable from '../components/Colors/ColorsTable';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import { useState } from "react";
import { Dialog } from "@mui/material";
import Slide from '@mui/material/Slide';
import AnimatedIcon from '../components/AnimatedIcon'
import { FaDeviantart, FaGithub, FaTwitter, FaMastodon, Fa500Px, FaInstagram } from 'react-icons/fa';
const Fa = () => {

  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <title>fur-affinity</title>
      <path d="M22.427 6.844l-0.344 2.656 3.245 0.958 0.042 2.865 2.974 0.057-0.073 3.005 2.891-0.188c0.005-1.010 0.068-6.724 0.839-9.354zM15.141 24.318c0.073-0.281 0-1.203 0-1.526l-0.063-1.948c-2.698-0.115-5.604 0.427-5.604 2.911 0 0.542 0.229 1.026 0.568 1.401h4.417c0.333-0.188 0.578-0.448 0.682-0.839zM27.188 17.422l0.068-2.995-2.938-0.057-0.047-3.229-3.37-1.151 0.453-3.146h-12.573c-5.094 0-8.781 4.339-8.781 9.089v9.224h5.49c-0.036-0.333-0.047-0.672-0.031-1.005 0.198-4.891 5.599-5.729 9.656-5.609v-1.406c-0.068-1.135-0.99-2.141-3.656-2.141-1.776 0-3.885 0.229-5.25 0.724l0.359-3.182c1.307-0.365 2.776-0.724 5.938-0.724 6.099 0 6.771 2.703 6.724 5.844l-0.031 7.5h3.307v-0.005l0.125 0.005c4.406 0 8.031-3.589 8.484-7.891z"></path>
    </svg>

  )
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function About() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);


  const toggleOpen = () => {
    console.log("toggleOpen");
    setOpen(!open);
  };


  return (
    <Container maxWidth='xl'>
      <Typography variant="h1">{t('aboutTitle1')}</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={3} lg={2} >
          <Avatar style={{ alignSelf: 'center' }} alt="Remy Sharp" src='avatar.jpg' sx={{ width: "100%", height: "auto" }} />
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9}>
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

          <img align="left" src="ref-small.jpg" alt="" width={"100%"} onClick={toggleOpen} />
          <Dialog fullScreen='true' TransitionComponent={Transition} open={open} >
            <img align="left" src="ref.png" alt="" onClick={toggleOpen} />

          </Dialog>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
          <ColorsTable />
          <br />
        </Grid>
      </Grid>
    </Container>
  )
}

export default About;