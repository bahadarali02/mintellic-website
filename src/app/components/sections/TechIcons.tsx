'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

const icons = [
  { src: '/icons/react.svg', alt: 'React', size: 40, position: { x: -50, y: -50 } },
  { src: '/icons/next.svg', alt: 'Next.js', size: 40, position: { x: 50, y: -30 } },
  { src: '/icons/threejs.svg', alt: 'Three.js', size: 50, position: { x: -60, y: 30 } },
  { src: '/icons/figma.svg', alt: 'Figma', size: 35, position: { x: 60, y: 20 } },
  { src: '/icons/tailwind.svg', alt: 'Tailwind CSS', size: 45, position: { x: 0, y: 60 } },
]

export default function TechIcons() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.from(containerRef.current.children, {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out',
    })

    // Floating animation
    gsap.to(containerRef.current.children, {
      y: '+=10',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2,
    })
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 z-10 pointer-events-none">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute text-orange-400/80 hover:text-orange-500 transition-colors"
          style={{
            left: `calc(50% + ${icon.position.x}px)`,
            top: `calc(50% + ${icon.position.y}px)`,
            width: icon.size,
            height: icon.size,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={icon.size}
            height={icon.size}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  )
}