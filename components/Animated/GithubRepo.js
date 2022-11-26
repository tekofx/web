import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export default function AnimatedIcon(props) {
    const [state, toggle] = useState(true);
    const AnimatedCard = animated(Card);
    const { t } = useTranslation();


    const styles = useSpring({
        loop: false,
        from: { scale: 1 },
        to: {
            scale: state ? 1 : 1.05,
        },

        config: { duration: 200 }
    })

    return (
        <AnimatedCard className="card" style={styles} onMouseEnter={() => toggle(!state)} onMouseLeave={() => toggle(!state)}>
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
        </AnimatedCard >
    )
}