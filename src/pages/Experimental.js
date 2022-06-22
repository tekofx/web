import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useTranslation } from 'react-i18next';
import '../index.css'
import Container from '@mui/material/Container';
import WebGL from '../components/WebGL'
import AmongUS from '../components/AmongUS/AmongUS'

function Home() {
    const { t } = useTranslation();

    return (
        <Container maxWidth='xl'>
            <Grid container spacing={1} >
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h1">{t('experimentalTitle')}</Typography>
                    <Typography variant='body1'>{t('experimentalText')}</Typography>
                </Grid >

                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Typography variant='h3'>ThreeFiber</Typography>
                    <WebGL />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Typography variant='h3'>TsParticles</Typography>
                    <AmongUS />
                </Grid>
            </Grid>
        </Container>
    );
}
export default Home;