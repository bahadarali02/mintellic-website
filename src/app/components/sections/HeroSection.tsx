'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, useGLTF } from '@react-three/drei'
import { FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

// Register GSAP plugins
gsap.registerPlugin(TextPlugin, useGSAP)

const roles = [
  'Digital Creators',
  'UI/UX Designers',
  'Web Developers',
  'Brand Strategists',
  '3D Artists'
]

// 3D Model Components
const ReactModel = () => {
  const model = useGLTF('/models/react_logo.glb')
  return <primitive object={model.scene} />
}

const NextModel = () => {
  const model = useGLTF('/models/nextjs.glb')
  return <primitive object={model.scene} />
}

const TailwindModel = () => {
  const model = useGLTF('/models/tailwind.glb')
  return <primitive object={model.scene} />
}

const ThreeModel = () => {
  const model = useGLTF('/models/three.js.glb')
  return <primitive object={model.scene} />
}

const TechIcons = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* React Logo */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16"
        animate={{
          x: cursorPosition.x * 0.5,
          y: cursorPosition.y * 0.5
        }}
        transition={{ type: 'spring', damping: 10 }}
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <ReactModel />
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </motion.div>

      {/* Next.js Logo */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16"
        animate={{
          x: cursorPosition.x * 0.3,
          y: cursorPosition.y * 0.3
        }}
        transition={{ type: 'spring', damping: 10 }}
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
            <NextModel />
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
        </Canvas>
      </motion.div>

      {/* Tailwind Logo */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-16 h-16"
        animate={{
          x: cursorPosition.x * 0.4,
          y: cursorPosition.y * 0.4
        }}
        transition={{ type: 'spring', damping: 10 }}
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.9}>
            <TailwindModel />
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
        </Canvas>
      </motion.div>

      {/* Three.js Logo */}
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-16 h-16"
        animate={{
          x: cursorPosition.x * 0.2,
          y: cursorPosition.y * 0.2
        }}
        transition={{ type: 'spring', damping: 10 }}
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Float speed={2.2} rotationIntensity={0.6} floatIntensity={1.1}>
            <ThreeModel />
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const roleRef = useRef<HTMLSpanElement>(null)
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0
  })

  // Hero animation timeline
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
    .fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.4'
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      '-=0.3'
    )

    // Animate counters
    gsap.to(counters, {
      projects: 120,
      clients: 45,
      years: 8.5,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        setCounters({
          projects: Math.floor(counters.projects),
          clients: Math.floor(counters.clients),
          years: parseFloat(counters.years.toFixed(1))
        })
      }
    })

    // Role text animation
    const roleTl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
    
    roles.forEach((role, i) => {
      roleTl.to(roleRef.current, {
        duration: 1,
        text: role,
        ease: 'none'
      })
      if (i < roles.length - 1) {
        roleTl.to(roleRef.current, {
          duration: 0.5,
          opacity: 0,
          y: -20,
          ease: 'power1.in'
        })
        roleTl.to(roleRef.current, {
          duration: 0,
          text: '',
          y: 20
        })
        roleTl.to(roleRef.current, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: 'power1.out'
        })
      }
    })

    return () => {
      tl.kill()
      roleTl.kill()
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      id="home"
    >
      {/* Background ambient light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 dark:bg-blue-900 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20 blur-3xl"></div>
      </div>

      {/* 3D Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh>
              <torusGeometry args={[2, 0.5, 16, 32]} />
              <meshStandardMaterial color="#FF6B00" roughness={0.2} metalness={0.3} />
            </mesh>
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-orange-600 dark:text-orange-400">Mintellic</span> — <br />
              <span 
                ref={roleRef} 
                className="inline-block min-h-[1em] bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-300 dark:to-orange-500 bg-clip-text text-transparent"
              ></span>
            </h1>
            
            <p ref={subtitleRef} className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl mb-8 max-w-2xl">
              We craft immersive digital experiences that tell your brand&apos;s story
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {counters.projects}+
                </div>
                <div className="text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {counters.clients}+
                </div>
                <div className="text-gray-500 dark:text-gray-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  {counters.years}
                </div>
                <div className="text-gray-500 dark:text-gray-400">Years</div>
              </div>
            </div>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-full transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
                <FiArrowRight />
              </motion.a>
              <motion.a
                href="#work"
                className="px-8 py-3 border border-gray-300 dark:border-gray-600 hover:border-orange-500 text-gray-800 dark:text-gray-200 font-medium rounded-full transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View our work
              </motion.a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Floating tech icons around the image */}
              <TechIcons />
              
              {/* Founder image */}
              <motion.div 
                className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
                whileHover={{ rotateY: 10, rotateX: 5 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <Image
                  src="/images/founders/founder1.png"
                  alt="Mintellic Founders"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}