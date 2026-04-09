import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface EggProps {
  mousePosition: { x: number; y: number };
}

export default function Egg({ mousePosition }: EggProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;

      const targetY = mousePosition.y * 0.3;
      const targetZ = mousePosition.x * 0.15;
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetY * 0.2,
        0.05
      );
      
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        targetZ * 0.1,
        0.05
      );
    }

    if (materialRef.current) {
      materialRef.current.emissiveIntensity = 0.15 + Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={[1, 1.2, 1]}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial
          ref={materialRef}
          color="#F5C242"
          emissive="#E8944A"
          emissiveIntensity={0.15}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}
