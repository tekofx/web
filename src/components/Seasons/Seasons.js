import * as React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Confetti from './Confetti'
const pride = require('./summer - lgtb.jpg')



export default function Footer() {

    const month = new Date().getMonth();

    switch (month) {
        case 5:
            return (
                <div >
                    <Typography>Happy Pride!</Typography>
                    {/* <Confetti className="particles" /> */}
                    <img src={pride} width='50%' />
                </div >
            )


        default:
            break;
    }
}