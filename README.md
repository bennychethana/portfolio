# Chethana Benny — Portfolio

A warm, personal portfolio with **four role-tailored views** sharing one source of truth, so you
can send a recruiter the URL that matches the job.

| Route         | View                         |
| ------------- | ---------------------------- |
| `/`           | Main landing + role chooser  |
| `/fullstack`  | Full-Stack Engineer          |
| `/ai`         | AI / ML Engineer             |
| `/cpp`        | C++ / Systems / Robotics     |
| `/frontend`   | Frontend Engineer            |

Each role page reframes the summary, experience, and skills for that audience and **leads with the
most relevant projects** — but every project is shown in full detail on every page.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Editing content

Everything lives in **[`src/data/portfolio.js`](src/data/portfolio.js)** — the single source of
truth. Edit there and every page updates:

- `profile` — name, contact, social links, the landing-page intro.
- `roles` — the four views: accent color, tagline, summary, featured-project order, skill groups.
- `experience` — jobs, with optional per-role bullet sets (`bullets.fullstack`, `bullets.ai`, …,
  falling back to `bullets.default`).
- `projects` — shown in full on every page; role pages just reorder.
- `skillGroups`, `education`, `awards`, `algorithms`.

## Deploying

The app uses client-side routing, so the host must serve `index.html` for every path (so
`/ai`, `/cpp`, etc. work when pasted directly). Configs are already included:

- **Vercel** — `vercel.json` (SPA rewrite). Just import the repo.
- **Netlify** — `public/_redirects`. Build command `npm run build`, publish dir `dist`.
- Any static host — point its SPA/404 fallback at `index.html`.

## Stack

React 18 · React Router 6 · Vite 5 · plain CSS (no UI framework).
