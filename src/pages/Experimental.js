import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useTranslation } from 'react-i18next';
import '../index.css'
import Container from '@mui/material/Container';
import ThreeFiber from '../components/ThreeFiber'
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

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant='h2'>ThreeFiber</Typography>
                    <ThreeFiber />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant='h2'>TsParticles</Typography>
                    <AmongUS />
                </Grid>
            </Grid>
        </Container >
    );
}
export default Home;