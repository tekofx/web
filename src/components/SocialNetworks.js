import * as React from 'react';
import { IconButton } from '@mui/material';
import { FaDeviantart, FaGithub, FaTwitter, FaMastodon, Fa500Px, FaInstagram } from 'react-icons/fa';


export default function SocialNetworks() {

    return (
        < >
            <IconButton lg={12} target="_blank" href="https://twitter.com/teko_fx">
                <FaTwitter color='white' />
            </IconButton>
            <IconButton target="_blank" href="https://github.com/tekofx">
                <FaGithub color='white' />
            </IconButton>
            <IconButton target="_blank" href="https://www.deviantart.com/tekofx">
                <FaDeviantart color='white' />
            </IconButton>
            <IconButton target="_blank" href="https://meow.social/web/@teko">
                <FaMastodon color='white' />
            </IconButton>
            <IconButton target="_blank" href="https://500px.com/p/tekofx">
                <Fa500Px color='white' />
            </IconButton>
            <IconButton target="_blank" href="https://instagram.com/teko_fx">
                <FaInstagram color='white' />
            </IconButton>

        </>
    );
}

