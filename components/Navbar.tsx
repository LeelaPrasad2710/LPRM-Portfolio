'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Impact',   href: '#impact' },
  { label: 'Projects', href: '#projects' },
  { label: 'Career',   href: '#career' },
  { label: 'Blog',     href: '#blog' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection observer for active section
  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1))
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-dark-surface/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="font-display font-800 text-xl gradient-text select-none">
            LP.
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-sm font-body transition-colors duration-200 rounded-lg
                  ${active === link.href.slice(1)
                    ? 'text-accent-purple dark:text-accent-purple'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-accent-purple/10 dark:bg-accent-purple/15 rounded-lg"
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right: theme + resume + mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-dark-card border border-black/5 dark:border-white/10
                         flex items-center justify-center text-base transition-all duration-200
                         hover:bg-gray-200 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Resume CTA */}
            <a
              href="/resume.pdf"
              download="Leelaprasad_SDET_Resume.pdf"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-white
                         bg-gradient-to-r from-accent-purple to-accent-teal
                         hover:opacity-90 transition-opacity duration-200"
            >
              Resume ↓
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-xl bg-gray-100 dark:bg-dark-card border border-black/5 dark:border-white/10
                         flex items-center justify-center text-sm transition-all"
              aria-label="Mobile menu"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-dark-surface border-b border-black/5 dark:border-white/5
                       shadow-xl md:hidden"
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300
                             hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Leelaprasad_SDET_Resume.pdf"
                className="mt-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white text-center
                           bg-gradient-to-r from-accent-purple to-accent-teal"
              >
                Download Resume ↓
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
