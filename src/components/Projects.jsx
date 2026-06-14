import { projects as allProjects } from '../data/portfolio.js'
import { ArrowIcon, GitHubIcon } from './icons.jsx'

// Orders projects so the role's featured ones lead, then shows the rest.
// Every project is rendered in full — nothing is hidden on any page.
function orderProjects(featuredIds = []) {
  const featured = featuredIds
    .map((id) => allProjects.find((p) => p.id === id))
    .filter(Boolean)
  const rest = allProjects.filter((p) => !featuredIds.includes(p.id))
  return { featured, rest, ordered: [...featured, ...rest] }
}

function ProjectCard({ project, featured }) {
  return (
    <article className={'project-card' + (featured ? ' featured' : '')}>
      <div className="pc-top">
        <div>
          <h3>{project.name}</h3>
          <div className="pc-tagline">{project.tagline}</div>
        </div>
        {featured && <span className="pc-flag">Featured</span>}
      </div>

      <div className="stack-row">
        {project.stack.map((s) => (
          <span className="chip" key={s}>{s}</span>
        ))}
      </div>

      <ul>
        {project.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      {project.repo && (
        <a className="repo-link" href={project.repo} target="_blank" rel="noreferrer">
          <GitHubIcon /> View on GitHub <ArrowIcon />
        </a>
      )}
    </article>
  )
}

export default function Projects({ featuredIds, intro }) {
  const { featured, ordered } = orderProjects(featuredIds)
  const featuredSet = new Set(featured.map((p) => p.id))

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <h2>Projects</h2>
          <span className="count">{ordered.length} total · shown in full</span>
        </div>
        {intro && <p className="section-intro">{intro}</p>}
        <div className="project-grid">
          {ordered.map((p) => (
            <ProjectCard key={p.id} project={p} featured={featuredSet.has(p.id)} />
          ))}
        </div>
      </div>
    </section>
  )
}
