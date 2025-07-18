'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const skills = [
  'React', 'Next.js', 'Three.js', 'TypeScript', 'Tailwind CSS',
  'Framer Motion', 'GSAP', 'Node.js', 'Express', 'MongoDB',
  'Figma', 'Adobe CC', 'Blender', 'WebGL', 'GraphQL'
]

export default function MarqueeElements() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-12 bg-orange/5 dark:bg-orange/10 overflow-hidden">
      <div className="relative">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={isInView ? { x: ['0%', '-50%'] } : {}}
          transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="inline-flex items-center mx-8">
              <span className="text-4xl md:text-5xl font-bold font-satoshi text-dark dark:text-light/90">
                {skill}
              </span>
              <div className="w-3 h-3 rounded-full bg-orange mx-8"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}