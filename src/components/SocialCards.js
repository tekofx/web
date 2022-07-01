import * as React from 'react';
import { FaTwitter, FaDeviantart, FaMastodon, Fa500Px, FaInstagram, FaGithub } from 'react-icons/fa';

import { Grid } from '@mui/material';
import FurAffinity from './Icons/FurAffinity';

import AnimatedCard from './AnimatedCard';

export default function SocialCards() {

    return (
        <Grid container spacing={1} >
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard icon={<FaTwitter />} content="Twitter" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard icon={<FaMastodon />} content="Mastodon" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard icon={<FaGithub />} content="Github" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard icon={<FaDeviantart />} content="DeviantArt" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard icon={<Fa500Px />} content="500px" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard icon={<FaInstagram />} content="Instagram" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard
                    icon={<FurAffinity />}
                    content="FurAffinity"
                    url="https://twitter.com/teko_fx" />
            </Grid>
        </Grid>
    );
}

