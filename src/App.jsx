import { useState } from 'react'
import './App.css'

const SKILLS = {
  Languages: ['JavaScript', 'Python', 'PowerShell', 'Bash'],
  Frontend: ['React', 'Vite', 'HTML', 'CSS'],
  Backend: ['Node.js', 'Firebase', 'REST APIs'],
  Tools: ['Git', 'Linux', 'VS Code'],
}

const PROJECTS = [
  {
    name: 'AD Security Audit Script',
    desc: 'PowerShell script that audits an Active Directory environment for common blue-team risks: stale accounts, non-expiring passwords, privileged group membership, disabled-but-still-privileged users, and service accounts. Exports findings to CSV reports.',
    tags: ['PowerShell', 'Active Directory', 'Security'],
    github: 'https://github.com/Tyson-Potter/powershell-ad-audit-script',
  },
  {
    name: 'Phishing Email Rater',
    desc: 'Python tool that triages .eml files with three layers: rule-based checks (SPF/DKIM/DMARC, display-name spoofing, URL defang, WHOIS), a HuggingFace DistilBERT classifier, and a local LLM verdict. Combines all three into a Low/Medium/High score with explicit rationale.',
    tags: ['Python', 'Security', 'ML', 'LLM'],
    github: 'https://github.com/Tyson-Potter/phishing-email-rater',
  },
  {
    name: 'Full-Stack To-Do',
    desc: 'To-do app with auth and persistence. React frontend, Express + MongoDB API split into routes/controllers/models. Built it to learn how a real client/server app fits together.',
    tags: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/Tyson-Potter/todo-fullstack-app',
  },
  {
    name: 'TysonPotter.com',
    desc: 'This site. Vite + React on Firebase Hosting. Hand-written CSS, no UI framework.',
    tags: ['React', 'Vite', 'Firebase'],
    github: 'https://github.com/Tyson-Potter/tysonpotter.com',
  },
]

function scrollToTop(e) {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">

      {/* ── Nav ── */}
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#top" onClick={scrollToTop} className="nav-logo">
            TP<span className="accent">.</span>
          </a>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['About', 'Skills', 'Projects', 'Contact'].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="grid-bg" />
        <div className="hero-glow" />
        <div className="container hero-content">
          <h1 id="hero-title" className="hero-name">Tyson Potter</h1>
          <p className="hero-role">Software developer · Utah</p>
          <p className="hero-desc">
            I build web apps with JavaScript, React, and Node. Right now I'm
            shifting focus toward security and learning networking, Linux,
            and pen-testing fundamentals.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              download="Tyson_Potter_Resume.pdf"
              className="btn-ghost"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="section" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-left">
            <picture>
              <source srcSet="/headshot.webp" type="image/webp" />
              <img
                src="/headshot.jpg"
                alt="Tyson Potter"
                className="headshot"
                width="220"
                height="220"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <div className="about-text">
            <p className="section-label mono accent">01. about</p>
            <h2 id="about-title" className="section-title">
              About <span className="accent">Me</span>
            </h2>
            <p>
              Self-taught developer from Utah. Started messing with JavaScript
              back in 2020 and have been building stuff ever since: small
              full-stack apps, a chess engine, a poker tracker for myself.
            </p>
            <p>
              I'm moving toward security because I like the under-the-hood
              stuff. How networks actually work, how operating systems work,
              how things break. Honestly more interesting to me than picking a
              CSS framework. Outside of code I hike a lot and play chess.
            </p>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="section section-alt" aria-labelledby="skills-title">
        <div className="container">
          <p className="section-label mono accent center">02. skills</p>
          <h2 id="skills-title" className="section-title center">
            Tech <span className="accent">Stack</span>
          </h2>
          <div className="skills-grid">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} className="skill-card">
                <h3 className="skill-cat mono">{cat}</h3>
                <div className="skill-tags">
                  {items.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="section" aria-labelledby="projects-title">
        <div className="container">
          <p className="section-label mono accent center">03. projects</p>
          <h2 id="projects-title" className="section-title center">
            Featured <span className="accent">Work</span>
          </h2>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <a
                key={p.name}
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <div className="project-top">
                  <h3 className="project-name">{p.name}</h3>
                  <span className="project-link" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </span>
                </div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag small">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section section-alt" aria-labelledby="contact-title">
        <div className="container contact-wrap">
          <p className="section-label mono accent center">04. contact</p>
          <h2 id="contact-title" className="section-title center">
            Get In <span className="accent">Touch</span>
          </h2>
          <p className="contact-sub">
            Looking for entry-level software and security roles. Happy to chat.
          </p>
          <div className="contact-links">
            <a href="mailto:tysonpottersd@gmail.com" className="contact-card">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              <span>tysonpottersd@gmail.com</span>
            </a>
            <a href="https://github.com/Tyson-Potter" target="_blank" rel="noreferrer" className="contact-card">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/tyson-potter-6859aa288/" target="_blank" rel="noreferrer" className="contact-card">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="mono">
          <span className="accent">//</span> Tyson Potter &nbsp;·&nbsp; TysonPotter.com
        </p>
      </footer>

    </div>
  )
}
