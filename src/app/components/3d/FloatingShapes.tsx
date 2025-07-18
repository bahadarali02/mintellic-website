'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

function Sphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.rotation.y += delta * 0.15
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#FF6B00" 
        roughness={0.2} 
        metalness={0.3}
        emissive="#FF6B00"
        emissiveIntensity={0.1}
      />
    </mesh>
  )
}

function Box() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15
      meshRef.current.rotation.y += delta * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime + 2) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[3, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        color="#565656" 
        roughness={0.3} 
        metalness={0.4}
      />
    </mesh>
  )
}

function Torus() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.rotation.y += delta * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime + 4) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[-3, 0, 0]}>
      <torusGeometry args={[1, 0.4, 16, 32]} />
      <meshStandardMaterial 
        color="#EAEAEA" 
        roughness={0.1} 
        metalness={0.5}
      />
    </mesh>
  )
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 -z-10 h-screen">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Suspense fallback={null}>
          <Sphere />
          <Box />
          <Torus />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}