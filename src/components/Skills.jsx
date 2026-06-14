import { skillGroups } from '../data/portfolio.js'

export default function Skills({ groups }) {
  const keys = groups && groups.length ? groups : Object.keys(skillGroups)
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {keys.map((key) => {
            const group = skillGroups[key]
            if (!group) return null
            return (
              <div className="skill-block" key={key}>
                <h4>{group.label}</h4>
                <div className="stack-row">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
