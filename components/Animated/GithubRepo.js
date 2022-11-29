import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import getLang from "../Lang";
import { useState } from 'react';




export default function AnimatedIcon(props) {
    const t = getLang().projects;

    return (
        <Card className="card" component={motion.div} whileHover={{ scale: 1.080 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
            <CardMedia
                component="img"
                width="auto"
                image={props.img}

            />
            <CardContent className='cardContent' sx={{ minHeight: 100 }}>
                <Grid container>
                    <Grid item sx={{ paddingBottom: "2%", height: 80 }} lg={12} >
                        <Typography gutterBottom variant="h4" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2">
                            {props.description}
                        </Typography>
                    </Grid>
                    <br />
                    <Grid item lg={12} >
                        {props.topics.map((element) =>
                            <Chip label={element} sx={{ marginRight: 1 }} />
                        )
                        }
                    </Grid>
                </Grid>




            </CardContent>
            <CardActions className='cardContent'>
                <Button className='button' variant='contained' target="_blank" href={props.url} size="small">{t.button}</Button>
            </CardActions>
        </Card >
    )
}