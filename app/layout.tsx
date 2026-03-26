import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Leelaprasad R M — SDET & Automation Engineer',
  description: 'Portfolio of Leelaprasad R M — 5+ years building scalable test automation frameworks, AI-assisted testing, and data pipelines. Based in Bangalore, India.',
  keywords: ['SDET', 'Selenium', 'Playwright', 'Automation Engineer', 'QA', 'Java', 'Bangalore'],
  authors: [{ name: 'Leelaprasad R M' }],
  openGraph: {
    title: 'Leelaprasad R M — SDET & Automation Engineer',
    description: 'Automation frameworks that don\'t just find bugs — they prevent them at scale.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
