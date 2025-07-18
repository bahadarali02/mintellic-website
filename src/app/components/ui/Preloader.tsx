'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import loadingAnimation from '../../../../public/lottie/loading.json'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 10
      })
    }, 200)

    const timeout = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = 'auto'
    }, 3000)

    document.body.style.overflow = 'hidden'

    return () => {
      clearInterval(timer)
      clearTimeout(timeout)
      document.body.style.overflow = 'auto'
    }
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-dark flex flex-col items-center justify-center"
    >
      <div className="w-40 h-40">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
        className="h-1 bg-orange/50 mt-8 max-w-xs rounded-full"
      >
        <div className="h-full bg-orange rounded-full"></div>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-gray-400"
      >
        Loading {progress}%
      </motion.p>
    </motion.div>
  )
}