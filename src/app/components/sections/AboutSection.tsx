'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'

const founders = [
  {
    name: 'Bahadar Ali',
    role: 'Founder',
    bio: 'With over 4 years in design and Development, bahadar brings a visionary approach to every project, ensuring stunning visual experiences that resonate with audiences.',
    skills: ['UI/UX Design', 'App developer', 'Motion Design', 'Full stack'],
    image: '/images/founders/bahadar.jpg',
  },
  {
    name: 'Abdul Rheem',
    role: 'Founder',
    bio: 'Abdul Raheem combines deep technical expertise with creative problem-solving to build robust, innovative digital solutions that stand the test of time.',
    skills: ['Web Development', 'Mobile Apps', 'Python', 'System Architecture'],
    image: '/images/founders/raheem.jpg',
  },
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-orange">Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray dark:text-light/80 max-w-3xl mx-auto">
            Mintellic was founded by two friends who shared a passion for
            creating exceptional digital experiences. We combine technical
            excellence with creative vision to deliver results that matter.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col lg:flex-row gap-8 items-center"
            >
              <div className="relative w-full max-w-xs aspect-square">
                <div className="absolute inset-0 bg-orange/10 rounded-full blur-xl"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-light/20 dark:border-dark/20">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                <span className="text-orange text-sm font-medium mb-4 block">
                  {founder.role}
                </span>
                <p className="text-gray dark:text-light/80 mb-4">{founder.bio}</p>
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray dark:text-light/70 mb-2">
                    Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-light/5 dark:bg-dark/5 text-gray dark:text-light/70 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}