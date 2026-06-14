import { profile } from '../data/portfolio.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons.jsx'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <h2>Let's build something.</h2>
        <p>
          I'm based in {profile.location} and {profile.relocate.toLowerCase()}. Whether you're
          hiring across the stack, in AI, in systems, or on the frontend — I'd love to talk.
        </p>
        <div className="contact-links">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <MailIcon /> {profile.email}
          </a>
          <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon /> LinkedIn
          </a>
          <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer">
            <GitHubIcon /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
