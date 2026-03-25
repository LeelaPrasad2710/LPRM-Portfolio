'use client'

const footerLinks = [
  { label: 'GitHub',   href: 'https://github.com/LeelaPrasad2710' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/leelaprasad-r-m' },
  { label: 'Email',    href: 'mailto:LeelaPrasad2710@gmail.com' },
  { label: 'Resume',   href: '/resume.pdf' },
]

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Career',   href: '#career' },
  { label: 'Contact',  href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-surface border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-display font-800 text-xl gradient-text mb-2">LP.</div>
            <p className="font-body text-xs text-gray-400 dark:text-gray-500 max-w-xs leading-relaxed">
              SDET · Automation Engineer · AI & Data Enthusiast.<br />
              Building quality systems that scale.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="font-body text-xs font-600 text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
              Navigation
            </div>
            <div className="flex flex-col gap-1.5">
              {navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-body text-sm text-gray-500 dark:text-gray-400 hover:text-accent-purple transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="font-body text-xs font-600 text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
              Connect
            </div>
            <div className="flex flex-col gap-1.5">
              {footerLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="font-body text-sm text-gray-500 dark:text-gray-400 hover:text-accent-purple transition-colors"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Leelaprasad R M · Built with Next.js 14 + Tailwind CSS + Framer Motion
          </p>
          <p className="font-body text-xs text-gray-400 dark:text-gray-500">
            Deployed on <span className="text-accent-teal">Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
