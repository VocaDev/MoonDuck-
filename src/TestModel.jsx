import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function DuckModel() {
  const { scene } = useGLTF("/models/base_basic_pbr.glb"); // served from public
  return <primitive object={scene} scale={2} />;
}

export default function TestModel() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#111" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <DuckModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
