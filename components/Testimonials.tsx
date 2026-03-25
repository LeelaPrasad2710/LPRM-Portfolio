'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import content from '@/data/content.json'

const avatarColors = [
  'from-accent-purple/80 to-violet-500/80',
  'from-accent-teal/80 to-cyan-500/80',
  'from-accent-amber/80 to-orange-500/80',
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="section-pad bg-white dark:bg-dark-surface" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="font-body text-xs font-600 tracking-widest text-accent-purple uppercase mb-3">
            Testimonials
          </div>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-gray-900 dark:text-white mb-2">
            What colleagues say
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-accent-purple to-accent-teal rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {content.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card-hover"
            >
              <div
                className="h-full bg-light-bg dark:bg-dark-card rounded-3xl p-6
                           border border-black/5 dark:border-white/7
                           hover:border-accent-purple/25 transition-colors duration-300 flex flex-col"
              >
                {/* Quote mark */}
                <div className="font-display text-5xl gradient-text leading-none mb-4 select-none">"</div>

                <p className="font-body text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic flex-1 mb-6">
                  {t.quote}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-black/5 dark:border-white/5">
                  {/* Avatar */}
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${avatarColors[i % avatarColors.length]}
                                flex items-center justify-center font-display font-700 text-sm text-white flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-body font-500 text-sm text-gray-900 dark:text-gray-100">{t.name}</div>
                    <div className="font-body text-xs text-gray-400 dark:text-gray-500">{t.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center font-body text-xs text-gray-400 dark:text-gray-500 mt-8"
        >
          Testimonials reflect real feedback from colleagues at Target Corporation of India.
        </motion.p>
      </div>
    </section>
  )
}
