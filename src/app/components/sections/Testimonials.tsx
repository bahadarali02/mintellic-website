'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "Mintellic transformed our digital presence completely. Their attention to detail and creative approach resulted in a website that truly represents our brand's values and has significantly increased our online engagement.",
    author: 'Sarah Johnson',
    role: 'CEO, Horizon Tech',
    image: '/images/testimonials/client1.jpg',
  },
  {
    quote: "Working with Alex and Jamie was a game-changer for our e-commerce platform. They delivered beyond our expectations with innovative solutions that improved our conversion rate by 40% in the first month.",
    author: 'Michael Tan',
    role: 'Director, UrbanStyle',
    image: '/images/testimonials/client2.jpg',
  },
  {
    quote: "The team at Mintellic understands both design and technology at a deep level. They bridge the gap between creative vision and technical execution seamlessly, which is rare to find in digital agencies.",
    author: 'Elena Rodriguez',
    role: 'Marketing Head, Bloom & Grow',
    image: '/images/testimonials/client3.jpg',
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title mb-6"
          >
            Client <span className="text-orange">Testimonials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Don't just take our word for it. Here&apos;s what our clients say about working with us.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -50, rotateY: -10 }}
              transition={{ duration: 0.5 }}
              className="glass p-8 md:p-12 rounded-2xl shadow-xl"
            >
              <blockquote className="text-xl md:text-2xl font-medium italic mb-8 text-light/90">
                &quot;{testimonials[activeIndex].quote}&quot;
              </blockquote>
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-orange/50">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonials[activeIndex].author}</p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-gray-700 hover:border-orange flex items-center justify-center transition-colors hover:bg-white/5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-orange' : 'bg-gray-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-gray-700 hover:border-orange flex items-center justify-center transition-colors hover:bg-white/5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}