import * as React from 'react';
import { FaTwitter, FaDeviantart, FaMastodon, Fa500Px, FaInstagram, FaGithub } from 'react-icons/fa';

import { Grid } from '@mui/material';
import FurAffinity from '../Icons/FurAffinity';

import AnimatedCard from './Card';

export default function SocialCards() {

    return (
        <Grid container spacing={1} >
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <AnimatedCard icon={<FaTwitter />} content="Twitter" subContent="@Teko_fx" url="https://twitter.com/teko_fx" />
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <AnimatedCard icon={<FaMastodon />} content="Mastodon" subContent="meow.social@teko" url="https://meow.social/@teko" />
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <AnimatedCard icon={<FaGithub />} content="Github" subContent="tekofx" url="https://github.com/tekofx" />
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <AnimatedCard icon={<FaDeviantart />} content="DeviantArt" subContent="tekofx" url="https://www.deviantart.com/tekofx" />
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <AnimatedCard icon={<Fa500Px />} content="500px" subContent="tekofx" url="https://500px.com/p/tekofx" />
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <AnimatedCard icon={<FaInstagram />} content="Instagram" subContent="teko_fx" url="https://www.instagram.com/teko_fx/" />
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <AnimatedCard icon={<FurAffinity />} content="FurAffinity" subContent="teko." url="https://www.furaffinity.net/user/teko." />
            </Grid>
        </Grid>
    );
}

