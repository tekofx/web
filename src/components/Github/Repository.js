import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';


function Repository(props) {
    const { t } = useTranslation();
    return (
        <Card className="card" >
            <CardMedia
                component="img"
                width="auto"
                image={props.img}
            />
            <CardContent className='cardContent' sx={{ minHeight: 100 }}>
                <Typography gutterBottom variant="h4" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions className='cardContent'>
                <Button className='button' variant='contained' target="_blank" href={props.url} size="small">{t('githubButton')}</Button>
            </CardActions>
        </Card >

    );
}

export default Repository;