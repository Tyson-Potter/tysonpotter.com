import { useState, useEffect } from 'react'
import './App.css'

const ROLES = [
  'Software Developer',
  'Security Enthusiast',
  'AI Explorer',
  'Full-Stack Developer',
]

const SKILLS = {
  Languages:   ['JavaScript', 'Python', 'Bash', 'HTML', 'CSS'],
  Development: ['Node.js', 'React', 'Vite', 'Firebase'],
  Security:    ['Network Troubleshooting', 'Active Directory', 'Linux', 'Security Fundamentals'],
  Interests:   ['Artificial Intelligence', 'Cybersecurity', 'Automation'],
}

const PROJECTS = [
  {
    name: 'Chess Program',
    desc: 'Fully playable chess game built from scratch with move validation and game logic.',
    tags: ['JavaScript', 'Game Logic', 'CSS'],
    github: 'https://github.com/Tyson-Potter/ChessProgram',
  },
  {
    name: 'TysonPotter.com',
    desc: 'This site — built with Vite + React, deployed to Firebase Hosting.',
    tags: ['React', 'Vite', 'Firebase'],
    github: 'https://github.com/Tyson-Potter/Security-personel-website',
  },
]

const TERMINAL_LINES = [
  { prompt: '$ ', text: 'whoami', delay: 300 },
  { prompt: '',   text: 'tyson_potter', delay: 900,  type: 'green' },
  { prompt: '$ ', text: 'cat stack.txt', delay: 1500 },
  { prompt: '',   text: 'JavaScript · React · Node.js', delay: 2100 },
  { prompt: '',   text: 'Firebase · Vite · CSS', delay: 2500 },
  { prompt: '$ ', text: '▋', delay: 3200, type: 'blink' },
]

function Typewriter({ words }) {
  const [idx, setIdx]           = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const word = words[idx]
    let t

    if (!deleting && displayed.length < word.length) {
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75)
    } else if (!deleting && displayed.length === word.length) {
      t = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else {
      setDeleting(false)
      setIdx((i) => (i + 1) % words.length)
    }

    return () => clearTimeout(t)
  }, [displayed, deleting, idx, words])

  return (
    <span className="typewriter">
      {displayed}
      <span className="tw-cursor">|</span>
    </span>
  )
}

function Terminal() {
  const [shown, setShown] = useState([])

  useEffect(() => {
    const timers = TERMINAL_LINES.map((line, i) =>
      setTimeout(() => setShown((prev) => [...prev, i]), line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="dot" style={{ background: '#ff5f56' }} />
        <span className="dot" style={{ background: '#ffbd2e' }} />
        <span className="dot" style={{ background: '#27c93f' }} />
        <span className="terminal-title">tyson — bash</span>
      </div>
      <div className="terminal-body">
        {TERMINAL_LINES.map((line, i) =>
          shown.includes(i) ? (
            <div key={i} className={`t-line ${line.type || ''}`}>
              {line.prompt && <span className="t-prompt">{line.prompt}</span>}
              {line.text}
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">

      {/* ── Nav ── */}
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#" className="nav-logo">
            TP<span className="accent">.</span>
          </a>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['About', 'Skills', 'Projects', 'Research', 'Contact'].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="menu">
            <span /><span /><span />
          </button>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="grid-bg" />
        <div className="hero-glow" />
        <div className="container hero-content">
          <p className="hero-eyebrow">
            <span className="mono accent">&gt;_</span> Hello, world
          </p>
          <h1 className="hero-name">Tyson Potter</h1>
          <p className="hero-role">
            <Typewriter words={ROLES} />
          </p>
          <p className="hero-desc">
            Developer from Utah. Into security, AI, and building things that matter.
            Always learning, always shipping.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-ghost">Download Resume</a>
          </div>
        </div>
        <div className="hero-scroll">
          <span className="mono">scroll</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="section">
        <div className="container about-grid">
          <div className="about-left">
            <img src="/headshot.jpg" alt="Tyson Potter" className="headshot" />
          </div>
          <div className="about-text">
            <p className="section-label mono accent">01. about</p>
            <h2 className="section-title">
              Who I <span className="accent">Am</span>
            </h2>
            <p>
              I'm Tyson Potter, a developer from Utah with a passion for security,
              AI, and building software that actually does something useful. When I'm
              not writing code I'm out hiking — same energy, different terrain.
            </p>
            <p>
              I work across the stack with a focus on automation, networking, and
              systems — the kind of problems where you have to understand what's
              happening under the hood to solve them right.
            </p>
          </div>
          <div className="about-right">
            <Terminal />
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <p className="section-label mono accent center">02. skills</p>
          <h2 className="section-title center">
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
      <section id="projects" className="section">
        <div className="container">
          <p className="section-label mono accent center">03. projects</p>
          <h2 className="section-title center">
            Featured <span className="accent">Work</span>
          </h2>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <div key={p.name} className="project-card">
                <div className="project-top">
                  <span className="project-icon mono accent">{'</>'}</span>
                  <a href={p.github} className="project-link" aria-label="GitHub">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a>
                </div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag small">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research ── */}
      <section id="research" className="section section-alt">
        <div className="container">
          <p className="section-label mono accent center">04. research</p>
          <h2 className="section-title center">
            CTF <span className="accent">&amp; Research</span>
          </h2>
          <p className="contact-sub">Writeups and research coming soon.</p>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section">
        <div className="container contact-wrap">
          <p className="section-label mono accent center">05. contact</p>
          <h2 className="section-title center">
            Get In <span className="accent">Touch</span>
          </h2>
          <p className="contact-sub">
            Open to new opportunities, freelance projects, and collaborations.
          </p>
          <div className="contact-links">
            <a href="mailto:tysonpottersd@gmail.com" className="contact-card">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>tysonpottersd@gmail.com</span>
            </a>
            <a href="https://github.com/Tyson-Potter" target="_blank" rel="noreferrer" className="contact-card">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/tyson-potter-6859aa288/" target="_blank" rel="noreferrer" className="contact-card">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="mono">
          <span className="accent">//</span> Built by Tyson Potter &nbsp;·&nbsp; TysonPotter.com
        </p>
      </footer>

    </div>
  )
}
