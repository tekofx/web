import * as React from 'react';
import { FaMastodon } from 'react-icons/fa';
import AnimatedIcon from '../Icon';

export default function Mastodon() {

    return (
        <AnimatedIcon icon={< FaMastodon />} url="https://meow.social/@teko" color1="#2a8bd2" color2="#f542b5" />
    );
}