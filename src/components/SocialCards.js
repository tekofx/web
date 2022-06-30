import * as React from 'react';
import { FaTwitter } from 'react-icons/fa';

import { Grid } from '@mui/material';
import Deviantart from './Icons/Deviantart'
import Mastodon from './Icons/Mastodon'
import Github from './Icons/Github'
import Instagram from './Icons/Instagram'
import Icon500px from './Icons/500px';
import FurAffinity from './Icons/FurAffinity';

import AnimatedCard from './AnimatedCard';

export default function SocialCards() {

    return (
        <Grid container spacing={1} >
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard icon={<FaTwitter />} content="Twitter" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard icon={<FaTwitter />} content="Mastodon" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard icon={<FaTwitter />} content="Github" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard icon={<FaTwitter />} content="DeviantArt" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard icon={<FaTwitter />} content="500px" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard icon={<FaTwitter />} content="Instagram" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={2} sm={2} xmd={2} lg={2}>
                <AnimatedCard icon={<FaTwitter />} content="FurAffinity" url="https://twitter.com/teko_fx" />
            </Grid>
        </Grid>
    );
}

