'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import content from '@/data/content.json'

const tagColorMap: Record<string, string> = {
  purple: 'tag-purple',
  teal:   'tag-teal',
  amber:  'tag-amber',
  blue:   'tag-blue',
}

const accentMap: Record<string, string> = {
  purple: 'group-hover:border-accent-purple/30 dark:group-hover:border-accent-purple/25',
  teal:   'group-hover:border-accent-teal/30 dark:group-hover:border-accent-teal/25',
  amber:  'group-hover:border-accent-amber/30 dark:group-hover:border-accent-amber/25',
  blue:   'group-hover:border-blue-400/30 dark:group-hover:border-blue-400/25',
}

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blog" className="section-pad bg-white dark:bg-dark-surface" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="font-body text-xs font-600 tracking-widest text-accent-purple uppercase mb-3">Blog</div>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-gray-900 dark:text-white mb-2">
              Thoughts on testing &amp; AI
            </h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-accent-purple to-accent-teal rounded-full" />
          </div>
          <p className="font-body text-sm text-gray-500 dark:text-gray-400 max-w-xs">
            Practical writing on QA patterns, automation frameworks, and AI-assisted quality engineering.
          </p>
        </motion.div>

        {/* Featured post (first one) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group card-hover mb-5"
        >
          <div
            className={`bg-light-bg dark:bg-dark-card rounded-3xl p-8 border border-black/5 dark:border-white/7
                        transition-colors duration-300 ${accentMap[content.blog[0].color]}`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium font-body ${tagColorMap[content.blog[0].color]}`}>
                    {content.blog[0].tag}
                  </span>
                  <span className="font-body text-xs text-gray-400 dark:text-gray-500">
                    {content.blog[0].readTime} · {content.blog[0].date}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium font-body
                                   bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                    Featured
                  </span>
                </div>
                <h3 className="font-display font-600 text-xl text-gray-900 dark:text-white mb-3 leading-snug">
                  {content.blog[0].title}
                </h3>
                <p className="font-body text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {content.blog[0].excerpt}
                </p>
              </div>
              <div className="md:shrink-0">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium font-body
                                   bg-accent-purple text-white hover:opacity-90 transition-opacity">
                  Read article →
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rest of posts */}
        <div className="grid md:grid-cols-3 gap-5">
          {content.blog.slice(1).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="group card-hover"
            >
              <div
                className={`h-full bg-light-bg dark:bg-dark-card rounded-3xl p-6 border border-black/5 dark:border-white/7
                            transition-colors duration-300 ${accentMap[post.color]} flex flex-col`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-medium font-body ${tagColorMap[post.color]}`}>
                    {post.tag}
                  </span>
                </div>
                <h3 className="font-display font-600 text-[15px] text-gray-900 dark:text-white mb-3 leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="font-body text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                  <span className="font-body text-xs text-gray-400 dark:text-gray-500">
                    {post.readTime} · {post.date}
                  </span>
                  <span className="text-sm text-accent-purple group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
