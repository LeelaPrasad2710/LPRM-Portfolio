'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import content from '@/data/content.json'

const cardColorMap: Record<string, { bg: string; border: string }> = {
  amber:  { bg: 'from-amber-500/5 to-orange-500/5',   border: 'border-amber-200 dark:border-amber-500/20' },
  purple: { bg: 'from-accent-purple/5 to-violet-500/5', border: 'border-violet-200 dark:border-violet-500/20' },
  teal:   { bg: 'from-accent-teal/5 to-cyan-500/5',   border: 'border-teal-200 dark:border-teal-500/20' },
}

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certs" className="section-pad bg-light-bg dark:bg-dark-bg" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-body text-xs font-600 tracking-widest text-accent-amber uppercase mb-3">
            Recognition
          </div>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-gray-900 dark:text-white mb-2">
            Certifications &amp; Awards
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-accent-amber to-accent-purple rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.certifications.map((cert, i) => {
            const colors = cardColorMap[cert.color] || cardColorMap.purple
            return (
              <motion.div
                key={cert.name + cert.year}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group card-hover bg-gradient-to-br ${colors.bg} bg-white dark:bg-dark-card
                            rounded-3xl p-6 border ${colors.border}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0
                               bg-white dark:bg-dark-surface border border-black/5 dark:border-white/8"
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-600 text-[15px] text-gray-900 dark:text-white mb-1 leading-tight">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="font-body text-xs text-gray-500 dark:text-gray-400">{cert.issuer}</span>
                      <span className="text-gray-300 dark:text-gray-600">·</span>
                      <span className="font-mono text-xs text-gray-400 dark:text-gray-500">{cert.year}</span>
                    </div>
                    <p className="font-body text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
