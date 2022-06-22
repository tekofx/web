import * as React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const pride = require('./summer - lgtb.jpg')

export default function Footer() {
    const { t } = useTranslation();

    const month = new Date().getMonth();
    const day = new Date().getDay();

    switch (month) {
        case 5:
            return (
                <div >
                    <Typography>{t('prideText')}</Typography>
                    {/* <Confetti className="particles" /> */}
                    <img alt="" src={pride} width='50%' />
                </div >
            )
            break;

        case 9:
            if (day === 31) {
                return (
                    <div >
                        <Typography>{t('halloweenText')}</Typography>
                        {/* <Confetti className="particles" /> */}
                        <img alt="" src={pride} width='50%' />
                    </div >
                )

            }
            break


        default:
            break;
    }
}