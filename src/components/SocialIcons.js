import * as React from 'react';
import { IconButton } from '@mui/material';
import { FaDeviantart, FaGithub, FaTwitter, FaMastodon, Fa500Px, FaInstagram } from 'react-icons/fa';
import AnimatedIcon from './AnimatedIcon';
import Twitter from './Icons/Twitter'
import Deviantart from './Icons/Deviantart'
import Mastodon from './Icons/Mastodon'
import Github from './Icons/Github'
import Instagram from './Icons/Instagram'
import Icon500px from './Icons/500px';

export default function SocialIcons() {

    return (
        < >
            <Twitter />
            <Mastodon />
            <Github />
            <Deviantart />
            <Icon500px />
            <Instagram />
        </>
    );
}

