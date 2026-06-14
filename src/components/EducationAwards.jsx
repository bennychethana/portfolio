import { education, awards, algorithms } from '../data/portfolio.js'
import { LeetIcon, ArrowIcon } from './icons.jsx'

export default function EducationAwards() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <div className="two-col">
          <div>
            <div className="section-head"><h2>Education</h2></div>
            {education.map((e) => (
              <div className="edu-item" key={e.school}>
                <h3>{e.school}</h3>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-meta">{e.detail} · {e.period} · {e.location}</div>
              </div>
            ))}

            <div className="algo-card">
              <p>{algorithms.blurb}</p>
              <a className="repo-link" href={algorithms.leetcode} target="_blank" rel="noreferrer">
                <LeetIcon /> LeetCode profile <ArrowIcon />
              </a>
            </div>
          </div>

          <div>
            <div className="section-head"><h2>Awards & Certifications</h2></div>
            <ul className="award-list">
              {awards.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
