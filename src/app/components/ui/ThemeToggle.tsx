// src/app/components/ui/ThemeToggle.tsx
'use client'

import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10" />
    )
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-light-200 dark:bg-dark-800 text-dark dark:text-light transition-colors duration-300 hover:bg-light-300 dark:hover:bg-dark-700"
      aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
      whileTap={{ scale: 0.95 }}
    >
      {theme === 'light' ? (
        <FiMoon size={20} className="text-dark" />
      ) : (
        <FiSun size={20} className="text-light" />
      )}
    </motion.button>
  )
}