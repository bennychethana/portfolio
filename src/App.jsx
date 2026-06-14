import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home.jsx'
import RolePage from './pages/RolePage.jsx'
import { roles } from './data/portfolio.js'

// Scroll to top on route change (or to an anchor if one is present).
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        {Object.values(roles).map((role) => (
          <Route
            key={role.slug}
            path={`/${role.slug}`}
            element={<RolePage slug={role.slug} />}
          />
        ))}
        {/* Unknown paths fall back to the main landing page. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
