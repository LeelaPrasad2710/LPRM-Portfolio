'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import content from '@/data/content.json'

const colorMap: Record<string, { accent: string; bg: string; border: string }> = {
  purple: {
    accent: 'text-accent-purple',
    bg: 'bg-accent-purple/8 dark:bg-accent-purple/12',
    border: 'border-accent-purple/20 dark:border-accent-purple/25',
  },
  teal: {
    accent: 'text-accent-teal',
    bg: 'bg-accent-teal/8 dark:bg-accent-teal/10',
    border: 'border-accent-teal/20 dark:border-accent-teal/25',
  },
}

const aiBadges = [
  { label: 'Test Case Generation', icon: '⚡' },
  { label: 'Chatbot QA Evaluation', icon: '🤖' },
  { label: 'Intent Classification Testing', icon: '🧠' },
  { label: 'Bug Pattern Recognition', icon: '🔍' },
  { label: 'Prompt Engineering', icon: '✍️' },
  { label: 'NLP Edge Case Discovery', icon: '🔬' },
]

export default function AIUsage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIdx, setActiveIdx] = useState(0)

  const active = content.aiUsage[activeIdx]
  const colors = colorMap[active.color]

  return (
    <section id="ai" className="section-pad bg-light-bg dark:bg-dark-bg" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-body text-xs font-600 tracking-widest text-accent-teal uppercase mb-3">
            AI in My Workflow
          </div>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-gray-900 dark:text-white mb-2">
            How I use AI tools
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-accent-teal to-accent-purple rounded-full mb-5" />
          <p className="font-body text-sm text-gray-500 dark:text-gray-400 max-w-xl">
            AI isn't replacing QA — it's removing the boring parts. Here's how I integrate LLMs and MCP server
            into real testing workflows to ship more coverage, faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[200px_1fr] gap-6">
          {/* Sidebar tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-row md:flex-col gap-2"
          >
            {content.aiUsage.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`text-left px-4 py-3 rounded-2xl text-xs font-medium font-body transition-all duration-200
                  ${activeIdx === i
                    ? 'bg-white dark:bg-dark-card border border-black/8 dark:border-white/10 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-white/50 dark:hover:bg-white/3'
                  }`}
              >
                <div className="font-600 text-[11px] uppercase tracking-wide mb-0.5">{item.tool}</div>
                <div className="text-[11px]">{item.useCase}</div>
              </button>
            ))}
          </motion.div>

          {/* Prompt / response display */}
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-4"
          >
            {/* Tool badge */}
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-lg text-xs font-medium font-body ${colors.bg} ${colors.accent} border ${colors.border}`}>
                {active.tool}
              </span>
              <span className="font-body text-xs text-gray-400 dark:text-gray-500">{active.useCase}</span>
            </div>

            {/* Prompt box */}
            <div className="bg-white dark:bg-dark-card rounded-2xl border border-black/5 dark:border-white/8 overflow-hidden">
              <div className="px-5 py-3 border-b border-black/5 dark:border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="font-mono text-xs text-gray-400 dark:text-gray-500 ml-2">prompt.txt</span>
              </div>
              <div className="px-5 py-5">
                <div className="font-body text-[11px] font-600 text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                  🧑‍💻 Prompt
                </div>
                <p className="font-mono text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  "{active.prompt}"
                </p>
              </div>
            </div>

            {/* Output box */}
            <div className={`bg-white dark:bg-dark-card rounded-2xl border ${colors.border} overflow-hidden`}>
              <div className={`px-5 py-3 border-b border-black/5 dark:border-white/5 ${colors.bg}`}>
                <span className="font-body text-[11px] font-600 uppercase tracking-wider ${colors.accent}">
                  🤖 AI Output
                </span>
              </div>
              <div className="px-5 py-5">
                <p className="font-body text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                  {active.output}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI use case badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <p className="font-body text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
            AI use cases in my workflow
          </p>
          <div className="flex flex-wrap gap-2">
            {aiBadges.map(b => (
              <span
                key={b.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium font-body
                           bg-white dark:bg-dark-card border border-black/5 dark:border-white/8
                           text-gray-600 dark:text-gray-400"
              >
                <span>{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
