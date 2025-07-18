// src/app/components/sections/FloatingIcons.tsx
'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {  useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const TechIcon = ({ modelPath, position, scale }: { modelPath: string; position: [number, number, number]; scale: number }) => {
  const ref = useRef<THREE.Mesh>(null)
  const { scene } = useGLTF(modelPath)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.5
    }
  })

  return <primitive ref={ref} object={scene} position={position} scale={scale} />
}

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* React Logo */}
        <TechIcon 
          modelPath="/models/react_logo.glb" 
          position={[-5, 2, 0]} 
          scale={0.8} 
        />
        
        {/* Next.js Logo */}
        <TechIcon 
          modelPath="/models/nextjs_logo.glb" 
          position={[5, -1, 0]} 
          scale={0.7} 
        />
        
        {/* Tailwind Logo */}
        <TechIcon 
          modelPath="/models/tailwind_logo.glb" 
          position={[0, 3, -2]} 
          scale={0.6} 
        />
        
        {/* Three.js Logo */}
        <TechIcon 
          modelPath="/models/threejs_logo.glb" 
          position={[3, -3, 1]} 
          scale={0.5} 
        />
      </Canvas>
    </div>
  )
}

export default FloatingIcons