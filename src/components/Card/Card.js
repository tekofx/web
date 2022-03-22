import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export default function SocialCard() {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Avatar />
                <Typography gutterBottom variant="h5" component="h2">Titulo</Typography>
                <Typography variant="body2" color="textSecondary" component="p">Descripcion</Typography>
            </CardContent>
        </Card>
    );
}
