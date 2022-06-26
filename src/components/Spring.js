import { useSpring, animated, config } from 'react-spring';
import { useState } from 'react';
import Button from '@mui/material/Button';


export default function Text() {
    const [flip, set] = useState(false)
    const [counter, setCounter] = useState(false)
    const [counterBefore, setCounterBefore] = useState(0);
    const [counterAfter, setCounterAfter] = useState(0);

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
    })


    function handleClick() {
        setCounterBefore(counterAfter)
        setCounterAfter(counterAfter + 10)
    }

    const { number } = useSpring({

        reset: true,
        reverse: counter,
        from: { counterBefore },
        number: counterAfter,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!counter),
    })

    return (
        <>
            <animated.h1 style={props}>Texto que parpadea</animated.h1>
            <animated.div>{number.to(n => n.toFixed())}</animated.div>
            <Button onClick={handleClick}>Sumar 10</Button>
        </>

    )
}