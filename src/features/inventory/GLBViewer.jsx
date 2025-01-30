import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls, Environment, OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function GLBViewer({ modelUrl }) {
  return (
    <div className="w-full h-full bg-stone-900">
      <Canvas shadows camera={{ position: [-15, 10, 15], fov: 10 }}>
        <ambientLight intensity={Math.PI / 2} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={5}
          castShadow
        />
        <hemisphereLight 
          groundColor="#fff" 
          intensity={1} 
        />
        <Suspense fallback={null}>
          <Environment preset="studio" blur={1} />
          <Model url={modelUrl} />
          <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
          {/* <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default GLBViewer;