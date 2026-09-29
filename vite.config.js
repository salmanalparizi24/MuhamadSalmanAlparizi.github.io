import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative base so the site works at https://<user>.github.io/<repo>/
  // and on a custom domain (CNAME) without extra config.
  base: './',
})
