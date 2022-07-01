import * as React from 'react';
import { FaMastodon } from 'react-icons/fa';
import AnimatedIcon from '../Icon';

export default function Mastodon() {

    return (
        <AnimatedIcon icon={< FaMastodon />} url="https://twitter.com/teko_fx" color1="#2a8bd2" color2="#f542b5" />
    );
}