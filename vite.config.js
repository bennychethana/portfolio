import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Served from https://bennychethana.github.io/portfolio/ — a project page,
  // so all asset URLs must be prefixed with the repo name.
  base: '/portfolio/',
  plugins: [react()],
})
