'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const contactLinks = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 89515 13146',
    href: 'tel:+918951513146',
    color: 'hover:border-accent-teal/40',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'LeelaPrasad2710@gmail.com',
    href: 'mailto:LeelaPrasad2710@gmail.com',
    color: 'hover:border-accent-purple/40',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://linkedin.com/in/leelaprasad-r-m',
    color: 'hover:border-blue-400/40',
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'LeelaPrasad2710',
    href: 'https://github.com/LeelaPrasad2710',
    color: 'hover:border-accent-teal/40',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Bangalore, India',
    href: '#',
    color: 'hover:border-accent-amber/40',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    // mailto fallback — swap for EmailJS if you configure it
    const subject = encodeURIComponent(form.subject || 'Portfolio enquiry')
    const body = encodeURIComponent(
      `Hi Leelaprasad,\n\nMy name is ${form.name}.\n\n${form.message}\n\nBest,\n${form.name}`
    )
    window.location.href = `mailto:LeelaPrasad2710@gmail.com?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(errs => ({ ...errs, [e.target.name]: '' }))
  }

  return (
    <section id="contact" className="section-pad bg-light-bg dark:bg-dark-bg" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-body text-xs font-600 tracking-widest text-accent-purple uppercase mb-3">Contact</div>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-gray-900 dark:text-white mb-2">
            Let's work together
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-accent-purple to-accent-teal rounded-full mb-5" />
          <p className="font-body text-sm text-gray-500 dark:text-gray-400 max-w-md">
            Open to SDET, automation engineering, and AI quality roles. Drop me a message or reach out on LinkedIn.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl text-sm font-body
                                bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100
                                border placeholder-gray-400 dark:placeholder-gray-600
                                outline-none transition-colors duration-200
                                focus:border-accent-purple/60
                                ${errors.name ? 'border-red-400 dark:border-red-500' : 'border-black/8 dark:border-white/10'}`}
                  />
                  {errors.name && <p className="font-body text-xs text-red-500 mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl text-sm font-body
                                bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100
                                border placeholder-gray-400 dark:placeholder-gray-600
                                outline-none transition-colors duration-200
                                focus:border-accent-purple/60
                                ${errors.email ? 'border-red-400 dark:border-red-500' : 'border-black/8 dark:border-white/10'}`}
                  />
                  {errors.email && <p className="font-body text-xs text-red-500 mt-1.5">{errors.email}</p>}
                </div>
              </div>

              <input
                name="subject"
                type="text"
                placeholder="Subject (optional)"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl text-sm font-body
                           bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100
                           border border-black/8 dark:border-white/10 placeholder-gray-400 dark:placeholder-gray-600
                           outline-none transition-colors duration-200 focus:border-accent-purple/60"
              />

              <div>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-2xl text-sm font-body resize-none
                              bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100
                              border placeholder-gray-400 dark:placeholder-gray-600
                              outline-none transition-colors duration-200
                              focus:border-accent-purple/60
                              ${errors.message ? 'border-red-400 dark:border-red-500' : 'border-black/8 dark:border-white/10'}`}
                />
                {errors.message && <p className="font-body text-xs text-red-500 mt-1.5">{errors.message}</p>}
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-6 py-3 rounded-xl text-sm font-medium text-white
                             bg-gradient-to-r from-accent-purple to-accent-teal
                             hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200
                             disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-accent-purple/20"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>

                {status === 'sent' && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-body text-sm text-accent-teal"
                  >
                    ✓ Opening your email client…
                  </motion.span>
                )}
              </div>

              <p className="font-body text-xs text-gray-400 dark:text-gray-500">
                Uses mailto — no data is stored. Alternatively, connect on LinkedIn.
              </p>
            </form>
          </motion.div>

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl
                            bg-white dark:bg-dark-card border border-black/5 dark:border-white/8
                            transition-all duration-200 ${link.color}
                            hover:-translate-y-0.5 group`}
              >
                <span className="text-xl">{link.icon}</span>
                <div>
                  <div className="font-body text-xs text-gray-400 dark:text-gray-500 mb-0.5">{link.label}</div>
                  <div className="font-body text-sm font-500 text-gray-800 dark:text-gray-200">{link.value}</div>
                </div>
                {link.href !== '#' && (
                  <span className="ml-auto text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 text-sm transition-colors">
                    →
                  </span>
                )}
              </a>
            ))}

            {/* Availability badge */}
            <div className="mt-2 p-5 rounded-2xl bg-gradient-to-br from-accent-purple/8 to-accent-teal/8
                            border border-accent-purple/15 dark:border-accent-purple/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                <span className="font-body text-xs font-600 text-accent-teal">Available for hire</span>
              </div>
              <p className="font-body text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Open to SDET, QA Automation, and AI quality engineering roles. Based in Bangalore — open to remote.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
