'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  { icon: '🔬', label: '4+ Years SDET', sub: 'Enterprise automation' },
  { icon: '🤖', label: 'AI-Assisted QA',  sub: 'MCP Server & GenAI' },
  { icon: '📊', label: 'Data Pipelines',  sub: 'Python, Kafka, DOMO' },
  { icon: '🏆', label: '3 Awards',        sub: "Leader's Choice & TII Drive" },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-pad bg-white dark:bg-dark-surface" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left: image placeholder + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* Avatar */}
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-3xl overflow-hidden
                              bg-gradient-to-br from-accent-purple/20 to-accent-teal/20
                              border border-accent-purple/20 dark:border-accent-purple/30">
                {/* Profile photo — place your photo at /public/images/profile.jpg */}
                <img
                  src="/images/profile.jpg"
                  alt="Leelaprasad R M"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback initials avatar if no photo
                    const el = e.target as HTMLImageElement
                    el.style.display = 'none'
                  }}
                />
                {/* Fallback initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-700 text-6xl gradient-text select-none">LP</span>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:-right-4 bg-white dark:bg-dark-card
                              border border-black/5 dark:border-white/10 rounded-2xl px-4 py-3 shadow-xl">
                <div className="font-display font-700 text-lg gradient-text">4+ yrs</div>
                <div className="font-body text-xs text-gray-500 dark:text-gray-400">Enterprise SDET</div>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 mt-6">
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

          {/* Right: text */}
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
                I'm a results-driven SDET with <strong className="text-gray-900 dark:text-gray-200 font-500">4+ years</strong> of
                experience designing and implementing scalable test automation frameworks for enterprise web applications
                at <strong className="text-gray-900 dark:text-gray-200 font-500">Target Corporation of India</strong>.
              </p>
              <p>
                My work has directly saved over <strong className="text-gray-900 dark:text-gray-200 font-500">60,000 hours annually</strong> through
                automation bots, and reduced manual reporting cycles by 70% via React dashboards and data pipelines.
              </p>
              <p>
                Beyond testing, I'm passionate about the intersection of <strong className="text-gray-900 dark:text-gray-200 font-500">AI and quality engineering</strong> —
                using MCP server and GenAI to auto-generate test cases, and building structured evaluation frameworks for
                AI-powered products.
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
                See My Work →
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
    </section>
  )
}
