"use client"

import { useState, useEffect } from "react"
import "./App.css"

// Define types for our data
type Skill = {
  name: string
  level: number
}

type SocialLink = {
  name: string
  url: string
  icon: string
}

const App = () => {
  const [activeSection, setActiveSection] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Skills data
  const skills: Skill[] = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 50 },
    { name: "JavaScript", level: 60 },
    { name: "TypeScript", level: 50 },
    { name: "React", level: 40 },
    { name: "Rust", level: 70 },
    { name: "Anchor", level: 85 },
    { name: "Web3", level: 10 },
  ]

  // Social links data
  const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/raunit-dev", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/raunit-jaiswal-189131324/", icon: "linkedin" },
    { name: "Twitter", url: "https://x.com/ig_candle", icon: "twitter" },
    { name: "Projects", url: "https://www.notion.so/POW-207d219f96048023adcec11e63e76521?pvs=21", icon: "notion" },
  ]

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 300

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="app">
      <header>
        <div className="logo">
          <span className="name">Raunit Jaiswal</span>
          <span className="title">Web3 Developer</span>
        </div>
        <div className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={isMenuOpen ? "active" : ""}>
          <ul>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeSection === "skills" ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === "projects" ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <div className="hero-content">
            <h1>
              Hello, I'm <span className="highlight">Raunit</span>
            </h1>
            <h2>Web3 & DeFi Developer</h2>
            <p>Building the future of decentralized systems on Solana</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View My Work
              </a>
              <a href="#contact" className="btn secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="geometric-shape"></div>
          </div>
        </section>

        <section id="about">
          <div className="section-header">
            <h2>About Me</h2>
            <div className="underline"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate Web3, DeFi, and systems-focused developer specializing in building decentralized
                applications on the Solana blockchain. With expertise in Rust, React, and IoT technologies, I create
                innovative solutions that bridge the gap between traditional systems and blockchain technology.
              </p>
              <p>
                My approach combines technical excellence with a deep understanding of decentralized systems, allowing
                me to develop secure, scalable, and user-friendly applications that push the boundaries of what's
                possible in the Web3 space.
              </p>
              <p>
                When I'm not coding, I'm constantly exploring new technologies and contributing to the blockchain
                community through open-source projects and knowledge sharing.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="section-header">
            <h2>My Skills</h2>
            <div className="underline"></div>
          </div>
          <div className="skills-content">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }} data-aos="width"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="section-header">
            <h2>My Projects</h2>
            <div className="underline"></div>
          </div>
          <div className="projects-content">
            <div className="notion-projects">
              <h3>View My Project Portfolio</h3>
              <p>
                I maintain a comprehensive collection of my projects on Notion, where you can explore detailed case
                studies, technical specifications, and outcomes of my work in Web3, DeFi, and systems development.
              </p>
              <a
                href="https://www.notion.so/POW-207d219f96048023adcec11e63e76521?pvs=21"
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                View Projects on Notion
              </a>
            </div>
            <div className="featured-projects">
              <div className="project-card">
                <div className="project-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h4>DeFi Protocol</h4>
                <p>Solana-based decentralized finance protocol with automated market making</p>
              </div>
              <div className="project-card">
                <div className="project-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <h4>NFT Marketplace</h4>
                <p>Custom NFT marketplace with integrated wallet and trading features</p>
              </div>
              <div className="project-card">
                <div className="project-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4>Blockchain Security</h4>
                <p>Security auditing tools for smart contracts and blockchain applications</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <div className="underline"></div>
          </div>
          <div className="contact-content">
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <div className="social-icon">
                    {link.icon === "github" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    )}
                    {link.icon === "linkedin" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    )}
                    {link.icon === "twitter" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    )}
                    {link.icon === "notion" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    )}
                  </div>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
            <div className="contact-cta">
              <h3>Let's Work Together</h3>
              <p>
                Interested in collaborating on a project or have questions about my work? Feel free to reach out through
                any of my social platforms.
              </p>
              <a href="mailto:raunitjaiswal510@gmail.com" className="btn primary">
              Send Email
              </a>

            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Raunit Jaiswal. All rights reserved.</p>
          <div className="footer-links">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                {link.icon === "github" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                )}
                {link.icon === "linkedin" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                )}
                {link.icon === "twitter" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                )}
                {link.icon === "notion" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
