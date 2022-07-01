import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Card, CardContent, ThemeProvider, Button, IconButton, Grid, Typography } from '@mui/material';
import { Fa500Px, FaInstagram } from 'react-icons/fa';


import Theme from '../Theme';

export default function AnimatedCard(props) {
    const [state, toggle] = useState(true);
    const AnimatedCard = animated(Card);
    const AnimatedTypography = animated(Typography);

    const styles = useSpring({
        loop: false,
        from: { scale: 1, color: "white", bgcolor: Theme.palette.background.paper },
        to: {
            scale: state ? 1 : 1.05,
            color: state ? "white" : "black",
            bgcolor: state ? "white" : Theme.palette.background.paper
        },
        config: { duration: 200 }
    })

    return (
        <ThemeProvider theme={Theme}>
            <AnimatedCard
                onMouseEnter={() => toggle(!state)}
                onMouseLeave={() => toggle(!state)}
                onClick={() => window.open(props.url)}
                style={styles}
                sx={{ bgcolor: styles.bgcolor.animation.to, width: '15vw' }}


            >
                <CardContent sx={{ paddingBottom: '0px', border: '1px' }}>
                    <Grid container spacing={1}>
                        <Grid item xs={2} sm={2} md={2} lg={2}>

                            {props.icon}
                        </Grid>
                        <Grid item xs={8} sm={8} md={8} lg={8} >
                            <p style={{ textAlign: 'center', padding: 0, margin: 0 }}>{props.content}</p>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2}>
                            <ArrowForwardIcon />
                        </Grid>
                    </Grid>
                </CardContent>
            </AnimatedCard>
        </ThemeProvider >
    )
}