import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import { IconButton } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import Theme from '../../Theme';
import FurAffinity from './FurAffinity';

export default function AnimatedFurAffinity() {
    const [state, toggle] = useState(true);
    const AnimatedSVGIcon = animated(SvgIcon);

    const styles = useSpring({
        loop: false,
        from: { scale: 1, color: '#faaf3a' },
        to: {
            scale: state ? 1 : 1.5,
            color: state ? '#faaf3a' : Theme.palette.secondary.main,
        },

        config: { duration: 200 }
    })

    return (
        <IconButton sx={{}}>
            <AnimatedSVGIcon onMouseEnter={() => toggle(!state)} onMouseLeave={() => toggle(!state)} style={styles} target="_blank" href='https://www.furaffinity.net/user/teko.'>
                <FurAffinity />
            </AnimatedSVGIcon>
        </IconButton>
    )
}