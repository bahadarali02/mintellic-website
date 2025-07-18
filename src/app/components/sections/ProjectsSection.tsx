'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Nova Financial Dashboard',
    description: 'Modern banking dashboard with real-time analytics and data visualization',
    category: 'Web App',
    tags: ['React', 'Next.js', 'Tailwind'],
    image: '/images/projects/project1.jpg',
  },
  {
    id: 2,
    title: 'Lumina Studios Website',
    description: 'Portfolio website for creative photography studio with animated galleries',
    category: 'Website',
    tags: ['GSAP', 'Three.js', 'Framer'],
    image: '/images/projects/project2.jpg',
  },
  {
    id: 3,
    title: 'EcoMarket E-Commerce',
    description: 'Sustainable e-commerce platform with AR product preview functionality',
    category: 'E-Commerce',
    tags: ['Node.js', 'MongoDB', 'Stripe'],
    image: '/images/projects/project3.jpg',
  },
  {
    id: 4,
    title: 'Pulse Fitness Mobile',
    description: 'Mobile app for personalized workout tracking and health monitoring',
    category: 'Mobile App',
    tags: ['React Native', 'Firebase', 'Expo'],
    image: '/images/projects/project4.jpg',
  },
  {
    id: 5,
    title: 'UrbanStyle Branding',
    description: 'Complete brand identity for modern fashion retailer',
    category: 'Branding',
    tags: ['Illustrator', 'Photoshop', 'Figma'],
    image: '/images/projects/project5.jpg',
  },
  {
    id: 6,
    title: 'Bloom & Grow CMS',
    description: 'Custom content management system for gardening blog network',
    category: 'Web App',
    tags: ['Next.js', 'Sanity', 'Tailwind'],
    image: '/images/projects/project6.jpg',
  },
]

const categories = ['All', 'Web App', 'Website', 'E-Commerce', 'Mobile App', 'Branding']

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="work" className="py-24 bg-light/5 dark:bg-dark/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-orange">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-gray dark:text-light/80 max-w-2xl mx-auto">
            Explore our portfolio of innovative digital solutions crafted with
            precision and passion.
          </p>
        </motion.div>

        <div ref={ref} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-orange text-white'
                    : 'bg-light/10 dark:bg-dark/10 text-gray dark:text-light/70 hover:bg-light/20 dark:hover:bg-dark/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-orange text-sm font-medium mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-light/80">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-light/10 dark:bg-dark/10 text-light/80 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full h-80 bg-dark rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3 bg-orange hover:bg-orange/90 text-white font-medium rounded-full transition-colors"
          >
            Explore More Projects
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
              <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}