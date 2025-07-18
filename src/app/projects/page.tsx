'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
    details: {
      client: 'Nova Financial',
      year: '2023',
      challenge: 'Create a modern banking interface that simplifies complex financial data',
      solution: 'Developed a responsive dashboard with interactive charts and personalized insights',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Chart.js', 'Firebase'],
    }
  },
  // Add other projects with similar structure
]

const categories = ['All', 'Web App', 'Website', 'E-Commerce', 'Mobile App', 'Branding']

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<null | number>(null)

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const openProject = (id: number) => {
    setSelectedProject(id)
    document.body.style.overflow = 'hidden'
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="py-24 bg-light dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-orange">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-gray dark:text-light/80 max-w-2xl mx-auto">
            Explore our portfolio of innovative digital solutions.
          </p>
        </div>

        <div className="mb-12">
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
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl"
              onClick={() => openProject(project.id)}
            >
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
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              onClick={closeProject}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-light dark:bg-dark rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedProject !== null && (
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">
                          {projects[selectedProject - 1].title}
                        </h2>
                        <div className="flex items-center gap-4 text-gray dark:text-light/70">
                          <span>{projects[selectedProject - 1].category}</span>
                          <span>•</span>
                          <span>{projects[selectedProject - 1].details.year}</span>
                        </div>
                      </div>
                      <button
                        onClick={closeProject}
                        className="p-2 rounded-full hover:bg-light/10 dark:hover:bg-dark/10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="rounded-xl overflow-hidden mb-6">
                          <Image
                            src={projects[selectedProject - 1].image}
                            alt={projects[selectedProject - 1].title}
                            width={800}
                            height={500}
                            className="w-full h-auto"
                          />
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {projects[selectedProject - 1].details.technologies.map(tech => (
                              <span key={tech} className="bg-orange/10 text-orange px-3 py-1 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-6">
                          <h3 className="text-xl font-bold mb-3">The Challenge</h3>
                          <p className="text-gray dark:text-light/80">
                            {projects[selectedProject - 1].details.challenge}
                          </p>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-bold mb-3">Our Solution</h3>
                          <p className="text-gray dark:text-light/80">
                            {projects[selectedProject - 1].details.solution}
                          </p>
                        </div>

                        <div className="flex gap-4 mt-8">
                          <Link
                            href="#"
                            className="px-6 py-2 bg-orange hover:bg-orange/90 text-white rounded-full transition-colors"
                          >
                            Visit Live Site
                          </Link>
                          <Link
                            href="#"
                            className="px-6 py-2 border border-gray dark:border-light/20 hover:border-orange rounded-full transition-colors"
                          >
                            View Case Study
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}