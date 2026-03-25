'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import skillsData from '@/data/skills.json'

const colorMap: Record<string, string> = {
  purple: 'tag-purple',
  teal:   'tag-teal',
  amber:  'tag-amber',
  pink:   'tag-pink',
  blue:   'tag-blue',
}

const barColorMap: Record<string, string> = {
  purple: 'from-accent-purple to-violet-400',
  teal:   'from-accent-teal to-cyan-400',
  amber:  'from-accent-amber to-orange-400',
  pink:   'from-accent-pink to-rose-400',
  blue:   'from-blue-500 to-sky-400',
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const active = skillsData[activeTab]

  return (
    <section id="skills" className="section-pad bg-light-bg dark:bg-dark-bg" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-body text-xs font-600 tracking-widest text-accent-purple uppercase mb-3">Core Skills</div>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-gray-900 dark:text-white mb-2">
            What I work with
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-accent-purple to-accent-teal rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-2"
          >
            {skillsData.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(i)}
                className={`relative text-left px-5 py-4 rounded-2xl font-body text-sm font-500 transition-all duration-200
                  ${activeTab === i
                    ? 'bg-white dark:bg-dark-card border border-black/8 dark:border-white/10 text-gray-900 dark:text-white shadow-md'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-white/3'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{cat.icon}</span>
                  <div>
                    <div>{cat.category}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{cat.skills.length} skills</div>
                  </div>
                </div>
                {activeTab === i && (
                  <motion.div
                    layoutId="skill-indicator"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-purple"
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Skills panel */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-dark-card rounded-3xl p-8 border border-black/5 dark:border-white/7"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{active.icon}</span>
              <div>
                <h3 className="font-display font-600 text-xl text-gray-900 dark:text-white">{active.category}</h3>
                <p className="font-body text-sm text-gray-500 dark:text-gray-400">{active.skills.length} technologies</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {active.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-body text-sm font-500 text-gray-800 dark:text-gray-200">{skill.name}</span>
                    <span className="font-mono text-xs text-gray-400 dark:text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-100 dark:bg-white/6 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${barColorMap[active.color]}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.06, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Badge cloud */}
            <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5">
              <p className="font-body text-xs text-gray-400 dark:text-gray-500 mb-3 uppercase tracking-wider">Quick reference</p>
              <div className="flex flex-wrap gap-2">
                {active.skills.map(skill => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 rounded-lg text-xs font-medium font-body ${colorMap[active.color]}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
