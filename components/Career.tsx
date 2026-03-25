'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import experienceData from '@/data/experience.json'

const dotColorMap: Record<string, string> = {
  purple: 'bg-accent-purple border-accent-purple/30 shadow-accent-purple/40',
  teal:   'bg-accent-teal border-accent-teal/30 shadow-accent-teal/40',
  amber:  'bg-accent-amber border-accent-amber/30 shadow-accent-amber/40',
  blue:   'bg-blue-500 border-blue-400/30 shadow-blue-400/40',
}

const periodColorMap: Record<string, string> = {
  purple: 'text-accent-purple',
  teal:   'text-accent-teal',
  amber:  'text-accent-amber',
  blue:   'text-blue-400',
}

const arrowColorMap: Record<string, string> = {
  purple: 'text-accent-purple',
  teal:   'text-accent-teal',
  amber:  'text-accent-amber',
  blue:   'text-blue-400',
}

export default function Career() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="career" className="section-pad bg-white dark:bg-dark-surface" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="font-body text-xs font-600 tracking-widest text-accent-teal uppercase mb-3">Career</div>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-gray-900 dark:text-white mb-2">
            Where I've been
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-accent-teal to-accent-purple rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-px timeline-line opacity-30" />

          <div className="flex flex-col gap-10">
            {experienceData.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl border-2 flex items-center justify-center
                                ${dotColorMap[job.color]} shadow-lg z-10 bg-white dark:bg-dark-surface`}
                  >
                    <div className={`w-3 h-3 rounded-full ${dotColorMap[job.color].split(' ')[0]}`} />
                  </div>
                  {job.current && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-teal animate-ping opacity-60" />
                  )}
                </div>

                {/* Content card */}
                <div className="flex-1 pb-2">
                  <div
                    className="bg-light-bg dark:bg-dark-card rounded-3xl p-6 border border-black/5 dark:border-white/7
                               hover:border-accent-purple/20 transition-colors duration-300 group"
                  >
                    {/* Period + current badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`font-mono text-xs font-500 ${periodColorMap[job.color]}`}>
                        {job.period}
                      </span>
                      {job.current && (
                        <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium font-body
                                         bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400
                                         border border-emerald-200 dark:border-emerald-500/25">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Role & company */}
                    <h3 className="font-display font-600 text-lg text-gray-900 dark:text-white mb-0.5">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-1.5 mb-5">
                      <span className="font-body text-sm text-gray-500 dark:text-gray-400">{job.company}</span>
                      <span className="text-gray-300 dark:text-gray-600">·</span>
                      <span className="font-body text-xs text-gray-400 dark:text-gray-500">{job.location}</span>
                    </div>

                    {/* Highlights */}
                    <ul className="flex flex-col gap-2.5">
                      {job.highlights.map((point, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className={`mt-[3px] text-xs flex-shrink-0 ${arrowColorMap[job.color]}`}>→</span>
                          <span className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
