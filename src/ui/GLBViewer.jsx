import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function GLBViewer({ modelUrl }) {
  return (
    <div className="w-full h-full bg-black/90">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 100, 10]} intensity={25} />
        <Suspense fallback={null}>
          <Model url={modelUrl} />
          <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default GLBViewer;