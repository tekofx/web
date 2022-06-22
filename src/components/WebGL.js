import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'


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

export default function App() {
    return (
        <div style={{ width: "50vw", height: "50vh" }}>
            <Canvas>
                <OrbitControls />
                <Stars />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 15, 10]} angle={0.3} />
                <Box />
                <Plane />
            </Canvas>
        </div>
    )
}