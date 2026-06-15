import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'demo-spa-source-code-02-github-pages',
  plugins: [react()],
})
