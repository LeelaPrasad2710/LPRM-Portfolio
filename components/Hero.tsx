'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const stats = [
  { num: '4+',    label: 'Years Experience' },
  { num: '60K+',  label: 'Hours Automated' },
  { num: '40+',   label: 'Bots Built' },
  { num: '70%',   label: 'Reporting Reduction' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden
                 bg-light-bg dark:bg-dark-bg pt-16"
    >
      {/* Orb blobs */}
      <div className="orb w-[600px] h-[600px] bg-accent-purple/8 dark:bg-accent-purple/12 -top-40 -left-40 animate-float" />
      <div className="orb w-[500px] h-[500px] bg-accent-teal/6 dark:bg-accent-teal/10 -bottom-20 -right-20"
           style={{ animationDelay: '3s', animation: 'float 8s ease-in-out infinite' }} />
      <div className="orb w-[300px] h-[300px] bg-accent-amber/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(124,111,255,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(124,111,255,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-8">
          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium font-body
                           bg-accent-purple/10 dark:bg-accent-purple/15 text-accent-purple
                           border border-accent-purple/25 dark:border-accent-purple/30">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse-slow" />
            Open to Opportunities · Bangalore, India
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display font-800 text-5xl md:text-7xl leading-[1.08] tracking-tight mb-4"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Leelaprasad</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          {...fadeUp(0.2)}
          className="font-body text-base md:text-lg text-gray-500 dark:text-gray-400 mb-5 tracking-wide"
        >
          SDET &nbsp;·&nbsp; Automation Engineer &nbsp;·&nbsp; AI &amp; Data Enthusiast
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.3)}
          className="font-body text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building test frameworks that don't just find bugs —
          <br className="hidden md:block" />
          <span className="gradient-text"> they prevent them at scale.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 justify-center mb-16">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl text-sm font-medium text-white
                       bg-gradient-to-r from-accent-purple to-accent-teal
                       hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-accent-purple/25"
          >
            View Projects →
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-xl text-sm font-medium
                       bg-white dark:bg-dark-card text-gray-800 dark:text-gray-200
                       border border-black/8 dark:border-white/10
                       hover:border-accent-purple/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            Download Resume ↓
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl text-sm font-medium
                       bg-white dark:bg-dark-card text-gray-800 dark:text-gray-200
                       border border-black/8 dark:border-white/10
                       hover:border-accent-teal/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5 dark:bg-white/5 rounded-2xl overflow-hidden
                     border border-black/5 dark:border-white/8"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="bg-white dark:bg-dark-card px-6 py-5 text-center"
            >
              <div className="font-display font-700 text-2xl md:text-3xl gradient-text mb-1">{s.num}</div>
              <div className="font-body text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-xs text-gray-400 dark:text-gray-500 font-body">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-accent-purple to-transparent"
        />
      </motion.div>
    </section>
  )
}
