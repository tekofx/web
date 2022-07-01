import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import { IconButton } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import Theme from '../../../Theme';
import FurAffinityIcon from '../../Icons/FurAffinity';

export default function FurAffinity() {
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
        <IconButton href='https://www.furaffinity.net/user/teko.' target="_blank">
            <AnimatedSVGIcon onMouseEnter={() => toggle(!state)} onMouseLeave={() => toggle(!state)} style={styles}  >
                <FurAffinityIcon />
            </AnimatedSVGIcon>
        </IconButton>
    )
}