import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Projects from '../components/Projects.jsx'
import Experience from '../components/Experience.jsx'
import Skills from '../components/Skills.jsx'
import EducationAwards from '../components/EducationAwards.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import { profile, roles, roleOrder } from '../data/portfolio.js'
import { GitHubIcon, LinkedInIcon, MailIcon, PinIcon, ArrowIcon } from '../components/icons.jsx'

export default function Home() {
  // Reset to the default (full-stack) accent on the landing page.
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--accent', roles.fullstack.accent)
    root.style.setProperty('--accent-soft', roles.fullstack.accentSoft)
    document.title = `${profile.name} — Engineer`
  }, [])

  return (
    <>
      <Nav />

      <header className="hero">
        <div className="wrap">
          <span className="hero-eyebrow">Engineer · Boston, MA</span>
          <h1>{profile.name}</h1>
          <p className="summary" style={{ fontSize: '1.18rem', marginTop: '0.6em' }}>
            {profile.intro}
          </p>

          <div className="hero-meta">
            <span><PinIcon /> {profile.location} · {profile.relocate}</span>
          </div>

          <div className="btn-row">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <MailIcon /> Get in touch
            </a>
            <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub
            </a>
            <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Role chooser — each links to a tailored, shareable page. */}
      <section className="section" id="roles">
        <div className="wrap">
          <div className="section-head">
            <h2>Pick the lens</h2>
            <span className="count">four tailored views</span>
          </div>
          <p className="section-intro">
            Same career, four angles. Each page reframes my experience and skills for that role and
            leads with the most relevant projects — so you can open the one that fits the job.
          </p>
          <div className="role-grid">
            {roleOrder.map((slug) => {
              const role = roles[slug]
              return (
                <Link
                  key={slug}
                  to={`/${slug}`}
                  className="role-card"
                  style={{ '--rc-accent': role.accent }}
                >
                  <h3>{role.label}</h3>
                  <div className="rc-tag">{role.tagline}</div>
                  <span className="rc-go">Open {role.short} view →</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Projects featuredIds={[]} intro="Everything I've built — across full-stack, AI, systems, and frontend work." />
      <Experience role="fullstack" />
      <Skills groups={[]} />
      <EducationAwards />
      <Contact />
      <Footer />
    </>
  )
}
