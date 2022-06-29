import * as React from 'react';
import { FaDeviantart, FaGithub, FaTwitter, FaMastodon, Fa500Px, FaInstagram } from 'react-icons/fa';
import AnimatedIcon from '../AnimatedIcon';

export default function Twitter() {

    return (
        <AnimatedIcon icon={< FaTwitter />} url="https://twitter.com/teko_fx" color1="#00acee" color2="#f542b5" />

    );
}