import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ArchitecturalArtifact = () => {
  const outerRingRef = useRef<THREE.Group>(null);
  const coreIcosahedronRef = useRef<THREE.Mesh>(null);
  const latticeRingRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (outerRingRef.current) {
      outerRingRef.current.rotation.y = t * 0.18;
      outerRingRef.current.rotation.x = Math.sin(t * 0.1) * 0.2;
    }
    if (coreIcosahedronRef.current) {
      coreIcosahedronRef.current.rotation.x = -t * 0.25;
      coreIcosahedronRef.current.rotation.z = t * 0.15;
    }
    if (latticeRingRef.current) {
      latticeRingRef.current.rotation.z = t * 0.12;
      latticeRingRef.current.rotation.y = -t * 0.08;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Intelligent Core: Textured Polyhedron */}
      <mesh ref={coreIcosahedronRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#1A1816"
          roughness={0.25}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>

      {/* Internal Distorted Lattice reflecting computational dynamic state */}
      <mesh>
        <octahedronGeometry args={[1.1, 2]} />
        <MeshDistortMaterial
          color="#B3542B"
          speed={1.4}
          distort={0.22}
          roughness={0.3}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Structural Wireframe Boundary: Systems Engineering Metaphor */}
      <mesh ref={latticeRingRef}>
        <dodecahedronGeometry args={[2.0, 0]} />
        <meshStandardMaterial
          color="#C8C2B7"
          wireframe
          transparent
          opacity={0.35}
          roughness={0.2}
          metalness={1.0}
        />
      </mesh>

      {/* Rotating Mechanical Girdle */}
      <group ref={outerRingRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="#8E401E" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Orbital Node Points */}
        {[0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2].map((angle, idx) => (
          <mesh
            key={idx}
            position={[
              2.8 * Math.cos(angle),
              0,
              2.8 * Math.sin(angle),
            ]}
          >
            <boxGeometry args={[0.12, 0.12, 0.12]} />
            <meshStandardMaterial color="#EDE8E1" metalness={0.95} roughness={0.1} />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export const HeroCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none md:pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} color="#EDE8E1" />
        <directionalLight position={[6, 8, 5]} intensity={2.2} color="#FFFDF8" />
        <pointLight position={[-5, -4, -2]} intensity={1.5} color="#B3542B" />
        <spotLight
          position={[0, 7, 0]}
          angle={0.6}
          penumbra={0.9}
          intensity={2.8}
          color="#EDE8E1"
        />

        <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
          <ArchitecturalArtifact />
        </Float>
      </Canvas>
    </div>
  );
};