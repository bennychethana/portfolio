import { experience } from '../data/portfolio.js'
import { ArrowIcon } from './icons.jsx'

// Pick the role-tailored bullet set, falling back to the default.
function bulletsFor(job, role) {
  return job.bullets[role] || job.bullets.default || []
}

export default function Experience({ role }) {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head">
          <h2>Experience</h2>
          <span className="count">5+ years</span>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <div className="exp-item" key={job.id}>
              <div className="exp-head">
                <h3>
                  {job.title} <span className="exp-company">· {job.company}</span>
                </h3>
                <span className="exp-period">{job.period}</span>
              </div>
              <div className="exp-loc">{job.location}</div>
              {job.website && (
                <a className="exp-website" href={job.website} target="_blank" rel="noreferrer">
                  {job.website.replace('https://', '')} <ArrowIcon />
                </a>
              )}
              <ul>
                {bulletsFor(job, role).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
