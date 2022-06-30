import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import { Card, CardContent, ThemeProvider, Button, IconButton } from '@mui/material';
import { Fa500Px, FaInstagram } from 'react-icons/fa';

import Theme from '../Theme';

export default function AnimatedCard(props) {
    const [state, toggle] = useState(true);
    const AnimatedCard = animated(Card);

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
                onClick={() => window.open('https://stackoverflow.com/')}
                style={styles} sx={{ bgcolor: styles.bgcolor.animation.to }}>
                <CardContent>
                    <Fa500Px /> CardContent <FaInstagram />
                </CardContent>
            </AnimatedCard>
        </ThemeProvider >
    )
}