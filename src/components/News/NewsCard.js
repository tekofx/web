import * as React from 'react';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Grid } from '@mui/material';
import { Dialog } from '@mui/material';
import { Button } from '@mui/material';
import { DialogTitle } from '@mui/material';
import { DialogContent } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { CardActions } from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export default function NewsCard(props) {
    const [open, setOpen] = React.useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <Grid item key={props.index} >
                <Card>
                    <CardContent>
                        <Typography variant="h6" component="h2">{props.title}</Typography>
                        <Typography variant="body2" component="h2">{props.date}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={toggleOpen}>More</Button>
                    </CardActions>
                    <Dialog open={open} PaperProps={{ sx: { left: '50%', m: 0 } }} sx={{ width: '50%', alignSelf: 'center' }}>
                        <DialogTitle>
                            <Typography variant='h6'>{props.title} </Typography>
                            <IconButton aria-label="close" onClick={toggleOpen} sx={{ position: 'absolute', right: 8, top: 8, }}>
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent>
                            <Typography variant='body1'>{props.text}</Typography>
                            {props.changes}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={toggleOpen}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </Card>
            </Grid>
        </ >
    );
}

