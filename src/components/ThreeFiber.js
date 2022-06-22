import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Container } from '@mui/material'
import { PerspectiveCamera } from 'three';

function Box() {
    return (
        <mesh position={[0, 1, 0]}>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

function Plane() {
    return (
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshLambertMaterial attach='material' color="lightblue" />

        </mesh>
    )
}

export default function ThreeFiber() {
    return (
        <Container sx={{ height: '50vh' }}>
            <Canvas>
                <OrbitControls autoRotate='true' />
                <Stars />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 15, 10]} angle={0.3} />
                <Box />
                <Plane />
            </Canvas>
        </Container>
    )
}