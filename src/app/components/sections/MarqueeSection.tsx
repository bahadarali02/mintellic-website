'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const skills = [
  'React', 'Next.js', 'Three.js', 'TypeScript', 'Tailwind CSS',
  'Framer Motion', 'GSAP', 'Node.js', 'Express', 'MongoDB',
  'Figma', 'Adobe CC', 'Blender', 'WebGL', 'GraphQL',
  'UI/UX Design', 'Motion Graphics', 'Brand Identity', 'Web Animation',
  'Responsive Design', 'Performance Optimization'
]

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })
  
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 15])

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        toggleActions: 'play none none none'
      }
    })
  })

  return (
    <section ref={containerRef} className="py-16 bg-orange-500/5 dark:bg-orange-500/10 overflow-hidden">
      <motion.div 
        className="flex whitespace-nowrap"
        style={{ x, rotateY }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="inline-flex items-center mx-8 group">
            <span className="text-4xl md:text-5xl font-bold font-satoshi text-dark dark:text-light/90 group-hover:text-orange transition-colors">
              {skill}
            </span>
            <div className="w-3 h-3 rounded-full bg-orange mx-8 group-hover:scale-150 transition-transform"></div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}