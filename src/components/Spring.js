import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

export default function Text() {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        onRest: () => set(!flip),
    })

    return (
        <animated.h1 style={props}>Texto que parpadea</animated.h1>
    )
}