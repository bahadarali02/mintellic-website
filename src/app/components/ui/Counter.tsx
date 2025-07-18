'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Counter({ 
  target, 
  suffix = '', 
  label 
}: {
  target: number
  suffix?: string
  label: string
}) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      })
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="bg-white/5 dark:bg-black/5 p-4 rounded-xl border border-white/10 dark:border-black/10"
    >
      <div className="flex items-end gap-1">
        <span className="text-3xl font-bold text-orange">
          {target}
        </span>
        {suffix && (
          <span className="text-orange-400/80">{suffix}</span>
        )}
      </div>
      <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">{label}</p>
    </motion.div>
  )
}