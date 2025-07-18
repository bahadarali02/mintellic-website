'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
})

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 bg-light/5 dark:bg-dark/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-orange">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray dark:text-light/80 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaboration?
            We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Formik
              initialValues={{ name: '', email: '', message: '' }}
              validationSchema={ContactSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                  resetForm()
                }, 400)
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1 text-gray dark:text-light/70"
                    >
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="w-full bg-light dark:bg-dark border border-light/20 dark:border-dark/20 rounded-lg px-4 py-3 focus:border-orange focus:ring-orange outline-none transition-colors"
                      placeholder="Your name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-sm text-red-400 mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1 text-gray dark:text-light/70"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="w-full bg-light dark:bg-dark border border-light/20 dark:border-dark/20 rounded-lg px-4 py-3 focus:border-orange focus:ring-orange outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-400 mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1 text-gray dark:text-light/70"
                    >
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      rows={5}
                      className="w-full bg-light dark:bg-dark border border-light/20 dark:border-dark/20 rounded-lg px-4 py-3 focus:border-orange focus:ring-orange outline-none transition-colors"
                      placeholder="Tell us about your project..."
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-sm text-red-400 mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange hover:bg-orange/90 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>
    </section>
  )
}