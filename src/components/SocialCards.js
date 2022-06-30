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
        <Grid container spacing={2} >
            <Grid item xs={4} sm={4} xmd={4} lg={4}>
                <AnimatedCard icon={<FaTwitter />} content="Twitter" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={4} sm={4} xmd={4} lg={4}>
                <AnimatedCard content="Social Network" />
            </Grid>
            <Grid item xs={4} sm={4} xmd={4} lg={4}>
                <AnimatedCard content="Social Network" />
            </Grid>
        </Grid>
    );
}

