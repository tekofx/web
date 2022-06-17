import * as React from 'react';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Dialog } from '@mui/material';
import { Button } from '@mui/material';
import { DialogTitle } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { CardActions } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function NewsCard(props) {
    const [open, setOpen] = React.useState(false);
    const { t } = useTranslation();

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h6" component="h2">{props.title}</Typography>
                    <Typography variant="body2" component="h2">{props.date}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={toggleOpen}>{t('newsButtonMore')}</Button>
                </CardActions>
                <Dialog open={open} maxWidth={'lg'}>
                    <DialogTitle>
                        <Typography variant='h6'>{props.title} </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <Typography variant='body1'>
                            {props.changes}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={toggleOpen}>{t('newsButtonClose')}</Button>
                        <Button target="_blank" href={props.url}>{t('homeNewsButton')}</Button>

                    </DialogActions>
                </Dialog>
            </Card>
        </ >
    );
}

