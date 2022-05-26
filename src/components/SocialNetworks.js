import * as React from 'react';
import { Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaDeviantart, FaGithub, FaTwitter } from 'react-icons/fa';

export default function SocialNetworks() {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={12}>
                <IconButton lg={12} target="_blank" href="https://twitter.com/teko_fx">
                    <FaTwitter />
                </IconButton>

                <IconButton target="_blank" href="https://github.com/tekofx">
                    <FaGithub />
                </IconButton>

                <IconButton target="_blank" href="https://www.deviantart.com/tekofx">
                    <FaDeviantart />
                </IconButton>

            </Grid>
        </Grid>
    );
}
