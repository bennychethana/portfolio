import { useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import Experience from '../components/Experience.jsx'
import Skills from '../components/Skills.jsx'
import EducationAwards from '../components/EducationAwards.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import { roles, profile } from '../data/portfolio.js'

const projectIntros = {
  fullstack: 'Things I’ve shipped end to end — from data model to deployed UI. The first few lean full-stack, but the whole set is here.',
  ai: 'LLM-powered work leads here — RAG, agents, and evals — followed by everything else I’ve built.',
  cpp: 'Systems and real-time work first: memory, concurrency, and robotics. The rest of my projects follow.',
  frontend: 'Interface-heavy work leads — design systems, real-time UI, data viz — with the full project set below.',
}

export default function RolePage({ slug }) {
  const role = roles[slug]

  // Apply this role's warm accent to the whole page via CSS variables.
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--accent', role.accent)
    root.style.setProperty('--accent-soft', role.accentSoft)
    document.title = `${profile.name} — ${role.label}`
    return () => {
      root.style.setProperty('--accent', roles.fullstack.accent)
      root.style.setProperty('--accent-soft', roles.fullstack.accentSoft)
    }
  }, [role])

  return (
    <>
      <Nav />
      <Hero role={role} />
      <Projects featuredIds={role.featuredProjects} intro={projectIntros[slug]} />
      <Experience role={slug} />
      <Skills groups={role.skillGroups} />
      <EducationAwards />
      <Contact />
      <Footer />
    </>
  )
}
