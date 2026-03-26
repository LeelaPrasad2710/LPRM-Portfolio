'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const highlights = [
  { icon: '🔬', label: '5+ Years SDET', sub: 'Enterprise automation' },
  { icon: '🤖', label: 'AI-Assisted QA', sub: 'MCP Server & GenAI' },
  { icon: '📊', label: 'Data Pipelines', sub: 'Kafka, DOMO, PostgreSQL' },
  { icon: '🏆', label: '3 Awards', sub: "Leader's Choice & TII Drive" },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="about" className="section-pad bg-white dark:bg-dark-surface" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left col: photo + video button + stat cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* Profile photo */}
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-3xl overflow-hidden
                              bg-gradient-to-br from-accent-purple/20 to-accent-teal/20
                              border border-accent-purple/20 dark:border-accent-purple/30">
                <img
                  src="/images/profile.jpg"
                  alt="Leelaprasad R M"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-700 text-6xl gradient-text select-none">LP</span>
                </div>
              </div>
            </div>

            {/* Video intro button */}
            <button
              onClick={() => setVideoOpen(true)}
              className="group relative flex items-center gap-3 w-fit mx-auto md:mx-0
                         px-5 py-3 rounded-2xl font-body text-sm font-500 cursor-pointer
                         bg-gradient-to-r from-accent-purple/10 to-accent-teal/10
                         border border-accent-purple/25 dark:border-accent-purple/35
                         text-gray-800 dark:text-gray-200
                         hover:from-accent-purple/20 hover:to-accent-teal/20
                         hover:-translate-y-0.5 hover:border-accent-purple/55
                         transition-all duration-200 shadow-sm"
            >
              <span className="relative flex items-center justify-center w-9 h-9 rounded-full
                               bg-gradient-to-br from-accent-purple to-accent-teal flex-shrink-0 shadow-md">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-purple to-accent-teal
                                 animate-ping opacity-40 group-hover:opacity-70" />
                <svg width="12" height="13" viewBox="0 0 12 12" fill="none" className="relative ml-0.5">
                  <path d="M3 1.5L10.5 6L3 10.5V1.5Z" fill="white" />
                </svg>
              </span>
              <span>Watch My Introduction Clip</span>
            </button>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {highlights.map(h => (
                <div
                  key={h.label}
                  className="bg-light-bg dark:bg-dark-card rounded-2xl p-4
                             border border-black/5 dark:border-white/7"
                >
                  <div className="text-2xl mb-2">{h.icon}</div>
                  <div className="font-body font-500 text-sm text-gray-900 dark:text-gray-100">{h.label}</div>
                  <div className="font-body text-xs text-gray-500 dark:text-gray-400 mt-0.5">{h.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right col: text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="font-body text-xs font-600 tracking-widest text-accent-purple uppercase mb-3">
              About Me
            </div>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-gray-900 dark:text-white mb-2 leading-tight">
              The person behind
              <br /><span className="gradient-text">the automation.</span>
            </h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-accent-purple to-accent-teal rounded-full mb-7" />

            <div className="flex flex-col gap-4 font-body text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
              <p>
                I'm a results-driven SDET with{' '}
                <strong className="text-gray-900 dark:text-gray-200 font-500">5+ years</strong> of
                experience designing scalable test automation frameworks for enterprise web applications
                at <strong className="text-gray-900 dark:text-gray-200 font-500">Target Corporation of India</strong>.
              </p>
              <p>
                My work has directly saved over{' '}
                <strong className="text-gray-900 dark:text-gray-200 font-500">60,000 hours annually</strong> through
                automation bots, and reduced manual reporting cycles by 70% via React dashboards and data pipelines.
              </p>
              <p>
                Beyond testing, I'm passionate about the intersection of{' '}
                <strong className="text-gray-900 dark:text-gray-200 font-500">AI and quality engineering</strong> —
                using MCP server and GenAI to auto-generate test cases, and building structured evaluation frameworks
                for AI-powered products.
              </p>
              <p>
                When I'm not automating, I build full-stack personal projects in React and PostgreSQL, and write about
                QA patterns that actually scale.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-white
                           bg-gradient-to-r from-accent-purple to-accent-teal
                           hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
              >
                See My Work
              </a>
              <a
                href="mailto:LeelaPrasad2710@gmail.com"
                className="px-5 py-2.5 rounded-xl text-sm font-medium
                           bg-light-bg dark:bg-dark-card text-gray-700 dark:text-gray-300
                           border border-black/8 dark:border-white/10
                           hover:border-accent-purple/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video intro modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.88)' }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: '#0f1220' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div
                className="flex items-center justify-between px-5 py-3.5"
                style={{ background: '#161927', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="ml-3 font-body text-sm font-500 text-white/80">
                    Leelaprasad R M — Personal Introduction
                  </span>
                </div>
                <button
                  onClick={() => setVideoOpen(false)}
                  className="w-8 h-8 rounded-xl flex items-center justify-center
                             text-white/50 hover:text-white hover:bg-white/10
                             transition-all duration-150 text-sm"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Video player */}
              <div className="aspect-video bg-black">
                <video
                  src="/videos/demo.mp4"
                  className="w-full h-full"
                  controls
                  autoPlay
                  playsInline
                  controlsList="nodownload"
                />
              </div>

              {/* Footer */}
              <div
                className="px-5 py-3 text-center"
                style={{ background: '#161927' }}
              >
                <p className="font-body text-xs text-white/30">
                  Click anywhere outside to close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
