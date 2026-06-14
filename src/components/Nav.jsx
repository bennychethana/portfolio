import { Link, NavLink } from 'react-router-dom'
import { roles, roleOrder } from '../data/portfolio.js'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-brand">
          Chethana Benny<span className="dot">.</span>
        </Link>
        <div className="nav-roles">
          <NavLink to="/" end className={({ isActive }) => 'nav-pill' + (isActive ? ' active' : '')}>
            Home
          </NavLink>
          {roleOrder.map((slug) => (
            <NavLink
              key={slug}
              to={`/${slug}`}
              className={({ isActive }) => 'nav-pill' + (isActive ? ' active' : '')}
            >
              {roles[slug].short}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
