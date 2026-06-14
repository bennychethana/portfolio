import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p style={{ margin: 0 }}>
          © {profile.name} · {profile.location} · Built with React + Vite
        </p>
      </div>
    </footer>
  )
}
