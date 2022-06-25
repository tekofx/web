import * as React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const pride = require('./summer - lgtb.jpg')
const halloween = require('./juaguelin.png')
const christmas = require('./Merry Foxmas.png')


export default function Footer() {
    const { t } = useTranslation();

    const today = new Date();
    const month = today.getMonth();
    const day = parseInt(String(today.getDate()).padStart(2, '0'));

    switch (month) {
        case 5:
            return (
                <div >
                    <Typography>{t('prideText')}</Typography>
                    {/* <Confetti className="particles" /> */}
                    <img alt="" src={pride} width='100%' />
                </div >
            )
            break;

        case 9:
            if (day === 31) {
                return (
                    <div >
                        <Typography>{t('halloweenText')}</Typography>
                        {/* <Confetti className="particles" /> */}
                        <img alt="" src={halloween} width='100%' />
                    </div >
                )

            }
            break

        case 11:
            if (23 < day < 30) {
                return (
                    <div >
                        <Typography>{t('christmasText')}</Typography>
                        {/* <Confetti className="particles" /> */}
                        <img alt="" src={christmas} width='100%' />
                    </div >
                )

            }
            break


        default:
            break;
    }
}