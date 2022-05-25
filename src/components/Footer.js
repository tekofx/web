import * as React from 'react';
import { Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaDeviantart, FaGithub, FaTwitter } from 'react-icons/fa';
import { Typography } from '@mui/material';

export default function Footer() {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={12}>
                <Typography variant='body2'>Teko's Tundra 2022</Typography>


            </Grid>
        </Grid>
    );
}

