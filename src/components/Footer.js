import * as React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import SocialIcons from './SocialIcons';
import Theme from '../Theme';
import { ThemeProvider } from '@mui/material';

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <Grid container spacing={2}
            sx={{ paddingBottom: '1%', paddingTop: '1%' }}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography display='inline' variant='body2'>Teko's Tundra {year} </Typography>
                <SocialIcons />
            </Grid>
        </Grid>
    );
}

