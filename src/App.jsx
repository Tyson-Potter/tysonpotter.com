import { useState, useEffect } from 'react'
import './App.css'

const ROLES = [
  'Security Researcher',
  'Full-Stack Developer',
  'CTF Player',
  'Problem Solver',
]

const SKILLS = {
  Languages:  ['Python', 'JavaScript', 'C', 'Bash', 'SQL'],
  Security:   ['Burp Suite', 'Nmap', 'Metasploit', 'Wireshark', 'OSINT'],
  Frameworks: ['React', 'Node.js', 'Express', 'Vite', 'Firebase'],
  Platforms:  ['Linux', 'Docker', 'AWS', 'GitHub', 'Kali Linux'],
}

const PROJECTS = [
  {
    name: 'Chess Program',
    desc: 'Fully playable chess game built from scratch with move validation and game logic.',
    tags: ['JavaScript', 'Game Logic', 'CSS'],
    github: 'https://github.com/Tyson-Potter/ChessProgram',
  },
  {
    name: 'Grocery API',
    desc: 'RESTful API for managing grocery lists with full CRUD operations.',
    tags: ['Node.js', 'API', 'REST'],
    github: 'https://github.com/Tyson-Potter/Grocery-API2',
  },
  {
    name: 'Firebase Recipes App',
    desc: 'Full-stack recipe web app with Firebase authentication and real-time database.',
    tags: ['React', 'Firebase', 'Auth'],
    github: 'https://github.com/Tyson-Potter/firebase-recipes-web-app',
  },
  {
    name: 'Calculator',
    desc: 'Clean, functional calculator with a polished UI and edge-case handling.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/Tyson-Potter/Calculator-FIXED-',
  },
  {
    name: 'CSS Website',
    desc: 'Example multi-page website showcasing advanced CSS layouts and animations.',
    tags: ['HTML', 'CSS', 'Responsive'],
    github: 'https://github.com/Tyson-Potter/ExampleCSSWesbite',
  },
  {
    name: 'TysonPotter.com',
    desc: 'This site — built with Vite + React, deployed to Firebase Hosting.',
    tags: ['React', 'Vite', 'Firebase'],
    github: 'https://github.com/Tyson-Potter/Security-personel-website',
  },
]

const CTF = [
  {
    year: '2024',
    event: 'HackTheBox CTF',
    result: 'Top 5%',
    desc: 'Web exploitation and binary reversing track. Solved 12 of 14 challenges.',
  },
  {
    year: '2024',
    event: 'TryHackMe',
    result: 'Top 1%',
    desc: 'Completed 100+ rooms across web, network, forensics, and privilege escalation paths.',
  },
  {
    year: '2023',
    event: 'PicoCTF',
    result: 'Competitor',
    desc: 'Focused on cryptography and binary exploitation — strong finish in regional division.',
  },
]

const TERMINAL_LINES = [
  { prompt: '$ ', text: 'whoami', delay: 300 },
  { prompt: '',   text: 'tyson_potter', delay: 900,  type: 'green' },
  { prompt: '$ ', text: 'cat about.txt', delay: 1500 },
  { prompt: '',   text: 'Security-focused developer.', delay: 2100 },
  { prompt: '',   text: 'Break things. Learn why. Build better.', delay: 2500 },
  { prompt: '$ ', text: 'echo $AVAILABILITY', delay: 3300 },
  { prompt: '',   text: '> Open to opportunities ✓', delay: 4000, type: 'cyan' },
  { prompt: '$ ', text: '▋', delay: 4700, type: 'blink' },
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
        <span className="terminal-title">tyson@kali: ~</span>
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
            I find vulnerabilities, build secure systems, and compete in CTF challenges.
            Attacker's mindset. Developer's discipline.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact"  className="btn-ghost">Get In Touch</a>
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
          <div className="about-text">
            <p className="section-label mono accent">01. about</p>
            <h2 className="section-title">
              Who I <span className="accent">Am</span>
            </h2>
            <p>
              I'm a security-focused developer with a passion for understanding how systems
              break — and then making them bulletproof. I blend offensive security knowledge
              with modern development practices to build things that actually hold up.
            </p>
            <p>
              Whether it's hunting for CVEs, architecting auth systems, or grinding through
              CTF challenges at 2am, I'm always chasing the next hard problem.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-num accent">50+</span>
                <span className="stat-label">CTF Solves</span>
              </div>
              <div className="stat">
                <span className="stat-num accent">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-num accent">3+</span>
                <span className="stat-label">Yrs Experience</span>
              </div>
            </div>
          </div>
          <Terminal />
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

      {/* ── CTF / Research ── */}
      <section id="research" className="section section-alt">
        <div className="container">
          <p className="section-label mono accent center">04. research</p>
          <h2 className="section-title center">
            CTF <span className="accent">&amp; Research</span>
          </h2>
          <div className="timeline">
            {CTF.map((e, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year mono">{e.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{e.event}</h3>
                    <span className="badge">{e.result}</span>
                  </div>
                  <p>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
            Open to security roles, freelance projects, and CTF team invites.
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
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-card">
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
