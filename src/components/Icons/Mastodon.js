import * as React from 'react';
import { FaDeviantart, FaGithub, FaTwitter, FaMastodon, Fa500Px, FaInstagram } from 'react-icons/fa';
import AnimatedIcon from '../AnimatedIcon';

export default function Mastodon() {

    return (
        <AnimatedIcon icon={< FaMastodon />} url="https://twitter.com/teko_fx" color1="#2a8bd2" color2="#f542b5" />
    );
}