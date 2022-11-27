import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import { Paper } from "@mui/material";
import { useRef } from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from "react";

function Box() {
  return (
    <mesh position={[0, 1, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}




export default function ThreeFiber() {
  function Scene() {
    const gltf = useLoader(GLTFLoader, 'model.gltf')
    return (
      <Suspense fallback={null}>
        <primitive object={gltf.scene} />
      </Suspense>
    )
  }
  return (
    <Paper sx={{ height: "400px" }}>
      <Canvas style={{ background: "hotpink" }}>
        <OrbitControls autoRotate="true" />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Scene />
        <Plane />
      </Canvas>
    </Paper>
  );
}
