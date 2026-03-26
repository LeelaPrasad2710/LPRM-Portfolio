'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import projectsData from '@/data/projects.json'

const allTechs = ['All', ...Array.from(new Set(projectsData.flatMap(p => p.tech)))]

const statusLabel: Record<string, { label: string; color: string }> = {
  live:       { label: 'Live', color: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/25' },
  'in-dev':   { label: 'In Dev', color: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/25' },
  enterprise: { label: 'Enterprise', color: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/25' },
}

function ProjectCard({ project, index }: { project: typeof projectsData[0], index: number }) {
  const [videoOpen, setVideoOpen] = useState(false)
  const status = statusLabel[project.status]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group card-hover bg-white dark:bg-dark-card rounded-3xl border border-black/5 dark:border-white/7
                 hover:border-accent-purple/30 dark:hover:border-accent-purple/25 overflow-hidden"
    >
      {/* Top gradient accent */}
      {project.featured && (
        <div className="h-0.5 bg-gradient-to-r from-accent-purple to-accent-teal" />
      )}

      <div className="p-7">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{project.emoji}</span>
            <div>
              <h3 className="font-display font-600 text-[15px] text-gray-900 dark:text-white leading-tight">
                {project.title}
              </h3>
              <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-lg text-[11px] font-medium font-body border ${status.color}`}>
                {status.label}
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-2 shrink-0">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg text-xs font-medium font-body
                           bg-accent-purple/10 text-accent-purple border border-accent-purple/20
                           hover:bg-accent-purple/20 transition-colors"
              >
                Live ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg text-xs font-medium font-body
                           bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400
                           border border-black/8 dark:border-white/10
                           hover:border-accent-purple/30 transition-colors"
              >
                GitHub ↗
              </a>
            )}
            {project.video && (
              <button
                onClick={() => setVideoOpen(true)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium font-body
                           bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400
                           border border-red-200 dark:border-red-500/25
                           hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors"
              >
                ▶ Demo
              </button>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg text-xs font-body font-500
                         bg-gray-50 dark:bg-white/4 text-gray-500 dark:text-gray-400
                         border border-black/5 dark:border-white/8"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {videoOpen && project.video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden bg-black"
              onClick={e => e.stopPropagation()}
            >
              {/* Local MP4 / WebM — any path not starting with http */}
              {!project.video.startsWith('http') ? (
                <video
                  src={project.video}
                  className="w-full h-full"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <iframe
                  src={project.video}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              )}
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 w-9 h-9 bg-black/60 text-white rounded-xl
                           flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.tech.includes(filter))

  return (
    <section id="projects" className="section-pad bg-light-bg dark:bg-dark-bg" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="font-body text-xs font-600 tracking-widest text-accent-purple uppercase mb-3">Projects</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-display font-700 text-3xl md:text-4xl text-gray-900 dark:text-white mb-2">
                Things I've built
              </h2>
              <div className="w-10 h-0.5 bg-gradient-to-r from-accent-purple to-accent-teal rounded-full" />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {['All', 'React', 'Java', 'Python', 'AI Testing'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-medium font-body transition-all duration-200
                    ${filter === f
                      ? 'bg-accent-purple text-white shadow-md shadow-accent-purple/25'
                      : 'bg-white dark:bg-dark-card text-gray-500 dark:text-gray-400 border border-black/8 dark:border-white/10 hover:border-accent-purple/40'
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 dark:text-gray-500 font-body">
            No projects match that filter.
          </div>
        )}
      </div>
    </section>
  )
}
