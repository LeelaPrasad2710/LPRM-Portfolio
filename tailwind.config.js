/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        accent: {
          purple: '#7c6fff',
          teal: '#00d4aa',
          amber: '#f59e0b',
          pink: '#f472b6',
        },
        dark: {
          bg: '#0a0c12',
          surface: '#10131c',
          card: '#161927',
          border: 'rgba(255,255,255,0.07)',
          border2: 'rgba(255,255,255,0.12)',
        },
        light: {
          bg: '#f4f5fa',
          surface: '#ffffff',
          card: '#ffffff',
          border: 'rgba(0,0,0,0.07)',
          border2: 'rgba(0,0,0,0.12)',
        },
      },
      backgroundImage: {
        'grad-main': 'linear-gradient(135deg, #7c6fff 0%, #00d4aa 100%)',
        'grad-amber': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        'grad-card': 'linear-gradient(135deg, rgba(124,111,255,0.08) 0%, rgba(0,212,170,0.08) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
