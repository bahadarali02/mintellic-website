'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Taylor Morgan',
    role: 'Senior Designer',
    bio: 'Specializes in creating visually stunning interfaces that are both beautiful and functional.',
    image: '/images/team/team1.jpg',
  },
  {
    name: 'Jordan Lee',
    role: 'Frontend Developer',
    bio: 'Passionate about building responsive, accessible web applications with modern technologies.',
    image: '/images/team/team2.jpg',
  },
  {
    name: 'Casey Smith',
    role: 'Backend Developer',
    bio: 'Focuses on building robust, scalable server architectures and APIs.',
    image: '/images/team/team3.jpg',
  },
  {
    name: 'Riley Chen',
    role: 'Motion Designer',
    bio: 'Creates captivating animations and micro-interactions that bring products to life.',
    image: '/images/team/team4.jpg',
  },
]

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="team" className="py-24 bg-light/5 dark:bg-dark/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-orange">Team</span>
          </h2>
          <p className="text-lg md:text-xl text-gray dark:text-light/80 max-w-2xl mx-auto">
            Meet the talented individuals who bring our projects to life with
            their expertise and creativity.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-light dark:bg-dark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <span className="text-orange text-sm font-medium mb-3 block">
                  {member.role}
                </span>
                <p className="text-gray dark:text-light/70">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}