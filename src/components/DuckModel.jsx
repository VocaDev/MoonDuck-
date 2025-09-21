// src/components/DuckModel.jsx
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function DuckModel() {
  const { scene } = useGLTF("/models/base_basic_pbr.glb");
  const ref = useRef();

  useFrame(({ clock }) => {
    // gentle rotation & float
    ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.15;
    ref.current.position.y = 0.2 + Math.sin(clock.getElapsedTime() * 0.2) * 0.1; // float in the middle
  });

  return (
    <group ref={ref} scale={[0.8, 0.8, 0.8]} position={[0, 0, 0]}>
      <primitive object={scene} position={[0, -1.4, 0]} />
    </group>
  );
}
