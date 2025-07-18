'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Glassmorphism Navbar Container */}
        <div className={`
          backdrop-blur-sm
          bg-white/70 dark:bg-black/60
          border border-white/20 dark:border-white/10
          shadow-lg shadow-black/5 dark:shadow-black/20
          rounded-xl px-6 py-3
          flex justify-between items-center
          transition-all duration-300
          ${scrolled ? 'py-3' : 'py-4'}
        `}>
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-orange">Mintellic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group text-gray-800 hover:text-orange transition-colors dark:text-gray-100 dark:hover:text-orange"
                >
                  {item.name}
                  <motion.span
                    layoutId={`nav-${item.name}`}
                    className="absolute left-0 -bottom-1 h-0.5 bg-orange w-0 group-hover:w-full transition-all duration-300"
                    initial={false}
                  />
                </Link>
              ))}
            </nav>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="
                p-2 rounded-full 
                hover:bg-white/30 dark:hover:bg-white/10 
                transition-colors duration-200
              "
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-orange" />
              ) : (
                <Moon className="w-5 h-5 text-orange" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="
              md:hidden p-2 rounded-lg 
              hover:bg-white/30 dark:hover:bg-white/10
              transition-colors duration-200
              text-gray-800 dark:text-gray-100
            "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (with Glassmorphism) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="
                md:hidden 
                backdrop-blur-xl
                bg-white/70 dark:bg-black/60
                border border-white/20 dark:border-white/10
                shadow-lg shadow-black/5 dark:shadow-black/20
                rounded-b-xl mt-2
              "
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="
                        py-3 px-4 rounded-lg 
                        hover:bg-white/30 dark:hover:bg-white/10
                        transition-colors duration-200
                        text-gray-800 dark:text-gray-100
                      "
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-2">
                    <button
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className="
                        w-full py-3 px-4 rounded-lg 
                        hover:bg-white/30 dark:hover:bg-white/10
                        transition-colors duration-200
                        flex items-center gap-2
                        text-gray-800 dark:text-gray-100
                      "
                    >
                      {theme === 'dark' ? (
                        <>
                          <Sun className="w-5 h-5" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="w-5 h-5" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </button>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}