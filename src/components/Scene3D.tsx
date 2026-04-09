import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Egg from './Egg';
import Lights from './Lights';

interface Scene3DProps {
  mousePosition: { x: number; y: number };
}

function SceneContent({ mousePosition }: Scene3DProps) {
  return (
    <>
      <Lights />
      <Egg mousePosition={mousePosition} />
    </>
  );
}

export default function Scene3D({ mousePosition }: Scene3DProps) {
  return (
    <div className="absolute inset-0 z-0 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent mousePosition={mousePosition} />
        </Suspense>
      </Canvas>
    </div>
  );
}
