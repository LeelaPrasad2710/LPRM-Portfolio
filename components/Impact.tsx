'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import content from '@/data/content.json'

function useCounter(target: number, duration: number, isActive: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isActive, target, duration])

  return count
}

function ImpactCard({ item, index, isInView }: { item: typeof content.impact[0], index: number, isInView: boolean }) {
  const raw = item.raw
  const count = useCounter(raw, 1800, isInView)

  const displayNum = () => {
    if (item.suffix === '+') return count.toLocaleString() + '+'
    if (item.suffix === '%') return count + '%'
    return count + item.suffix
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group card-hover"
    >
      <div className="relative overflow-hidden bg-white dark:bg-dark-card rounded-3xl p-7
                      border border-black/5 dark:border-white/7
                      hover:border-accent-purple/30 dark:hover:border-accent-purple/30
                      transition-colors duration-300">
        {/* Top gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-teal" />

        {/* Glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        bg-gradient-to-br from-accent-purple/3 to-accent-teal/3 rounded-3xl" />

        <div className="relative">
          <div className="font-display font-700 text-4xl gradient-text mb-2">{displayNum()}</div>
          <div className="font-body font-500 text-sm text-gray-900 dark:text-gray-100 mb-2">{item.label}</div>
          <p className="font-body text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>

          {item.award && (
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium
                            bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400
                            border border-amber-200 dark:border-amber-500/25">
              🏆 {item.award}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Impact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="impact" className="section-pad bg-white dark:bg-dark-surface" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-body text-xs font-600 tracking-widest text-accent-teal uppercase mb-3">Impact</div>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-gray-900 dark:text-white mb-2">
            Numbers that matter
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-accent-teal to-accent-purple rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.impact.map((item, i) => (
            <ImpactCard key={item.label} item={item} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Awards row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-accent-purple/5 to-accent-teal/5
                     border border-accent-purple/10 dark:border-accent-purple/15"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {content.certifications.filter(c => c.color === 'amber').map(cert => (
              <div
                key={cert.name + cert.year}
                className="flex items-center gap-2 px-4 py-2 rounded-xl
                           bg-white dark:bg-dark-card border border-black/5 dark:border-white/8
                           font-body text-sm text-gray-700 dark:text-gray-300"
              >
                <span>{cert.icon}</span>
                <span className="font-500">{cert.name}</span>
                <span className="text-gray-400 dark:text-gray-500">·</span>
                <span className="text-gray-400 dark:text-gray-500 text-xs">{cert.issuer}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
