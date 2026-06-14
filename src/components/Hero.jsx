import { profile } from '../data/portfolio.js'
import { GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from './icons.jsx'

export default function Hero({ role }) {
  return (
    <header className="hero">
      <div className="wrap">
        <span className="hero-eyebrow">{role.label}</span>
        <h1>{profile.name}</h1>
        <div className="role-line">{role.label}</div>
        <p className="tagline">{role.tagline}</p>
        <p className="summary">{role.summary}</p>

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
  )
}
