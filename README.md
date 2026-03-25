# Leelaprasad R M — Personal Portfolio

A modern, fully responsive portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.
100% frontend-only — no backend, no database. Ready to deploy on Vercel as a static site.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework + static export |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations + scroll effects |
| TypeScript | Type safety |
| EmailJS / mailto | Contact form (no backend) |

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles + CSS variables
├── components/
│   ├── ThemeProvider.tsx   # Dark/light mode context
│   ├── Navbar.tsx          # Sticky nav with active section tracking
│   ├── Hero.tsx            # Hero section with stats
│   ├── About.tsx           # About + profile photo
│   ├── Skills.tsx          # Tabbed skills with progress bars
│   ├── Impact.tsx          # Animated counters + achievements
│   ├── Projects.tsx        # Filterable project cards + video modal
│   ├── Career.tsx          # Vertical timeline
│   ├── Certifications.tsx  # Awards + cert cards
│   ├── Blog.tsx            # Static blog posts
│   ├── AIUsage.tsx         # AI workflow showcase
│   ├── Testimonials.tsx    # Colleague testimonials
│   ├── Contact.tsx         # Contact form (mailto) + info cards
│   └── Footer.tsx          # Footer with links
├── data/
│   ├── projects.json       # Project data (edit this!)
│   ├── skills.json         # Skills + proficiency levels
│   ├── experience.json     # Career timeline data
│   └── content.json        # Impact stats, certs, blog, AI usage, testimonials
├── public/
│   ├── images/
│   │   └── profile.jpg     # ← PUT YOUR PHOTO HERE
│   ├── videos/             # ← PUT YOUR DEMO VIDEOS HERE (optional)
│   └── resume.pdf          # ← PUT YOUR RESUME HERE
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Run Locally

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Clone or download this project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

---

## 📁 Add Your Assets

Before running, add your personal assets:

```
public/
├── images/profile.jpg    ← Your profile photo (square, min 300×300px)
├── videos/               ← Demo videos for projects (MP4, max ~12MB each)
└── resume.pdf            ← Your latest resume PDF
```

**Profile photo:** The About section checks for `/images/profile.jpg` and falls back to the "LP" initials if not found.

**Project videos:** Set the `"video"` field in `data/projects.json` to the video path, e.g.:
```json
"video": "/videos/trip-tracker-demo.mp4"
```
Or use a YouTube embed URL:
```json
"video": "https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

---

## ✏️ Customise Content

All content lives in `/data/*.json` — no code changes needed for content updates.

### Update projects → `data/projects.json`
```json
{
  "id": 7,
  "title": "My New Project",
  "emoji": "🚀",
  "description": "What it does...",
  "tech": ["React", "Node.js"],
  "github": "https://github.com/...",
  "live": "https://...",
  "video": "",
  "status": "live",
  "featured": true
}
```

### Update skills → `data/skills.json`
Add/remove skills under each category. Adjust `"level"` (0–100) for progress bars.

### Update experience → `data/experience.json`
Add new roles at the top of the array.

### Update impact numbers → `data/content.json`
Edit the `"impact"` array — the `"raw"` field drives the animated counter.

---

## 📬 Contact Form Setup

The contact form currently uses **mailto** (opens the user's email client). This requires zero setup and works on Vercel.

### Optional: Switch to EmailJS (recommended for better UX)

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Create a service, template, and get your public key
3. Install: `npm install @emailjs/browser`
4. In `components/Contact.tsx`, replace the `handleSubmit` function:

```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const errs = validate()
  setErrors(errs)
  if (Object.keys(errs).length > 0) return

  setStatus('sending')
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
      'YOUR_PUBLIC_KEY'
    )
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
  } catch {
    setStatus('error')
  }
}
```

---

## 🌐 Deploy on Vercel

This project uses `output: 'export'` in `next.config.js` for fully static deployment.

### Option A: Vercel CLI (fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# From the project root
vercel

# Follow the prompts:
# → Link to your Vercel account
# → Project name: leelaprasad-portfolio (or any name)
# → Framework: Next.js (auto-detected)
# → Build command: npm run build  (auto-detected)
# → Output directory: out  (auto-detected)

# Your site is live at: https://your-project.vercel.app
```

### Option B: GitHub + Vercel Dashboard

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# 2. Go to vercel.com → New Project → Import from GitHub
# 3. Select your repo
# 4. Vercel auto-detects Next.js — click Deploy
# 5. Every git push → auto-redeploys ✅
```

### Vercel Settings (if needed)
| Setting | Value |
|---------|-------|
| Framework | Next.js |
| Build Command | `npm run build` |
| Output Directory | `out` |
| Node Version | 18.x |

---

## 🎨 Theming

The site supports dark/light mode with system preference detection.

To change accent colours, update CSS variables in `app/globals.css`:
```css
:root {
  --accent-purple: #7c6fff;  /* Primary accent */
  --accent-teal:   #00d4aa;  /* Secondary accent */
}
```
And in `tailwind.config.js` → `theme.extend.colors.accent`.

---

## 📄 License

Personal portfolio — feel free to use as a template. Please replace all personal content with your own.
