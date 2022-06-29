import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import { IconButton } from '@mui/material';

export default function AnimatedIcon(props) {
    const [state, toggle] = useState(true);
    const AnimatedIconButton = animated(IconButton);

    const styles = useSpring({
        loop: false,
        from: { scale: 1, color: props.color1 },
        to: {
            scale: state ? 1 : 2,
            color: state ? props.color1 : props.color2
        },

        config: { duration: 200 }
    })

    return (
        <AnimatedIconButton onMouseEnter={() => toggle(!state)} onMouseLeave={() => toggle(!state)} style={styles} target="_blank" href={props.url}>
            {props.icon}
        </AnimatedIconButton>
    )
}