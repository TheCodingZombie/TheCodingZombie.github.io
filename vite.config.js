import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        aboutme: resolve(import.meta.dirname, 'aboutme.html'),
        projects: resolve(import.meta.dirname, 'projects.html'),
        videos: resolve(import.meta.dirname, 'videos.html'),
      }
    }
  }
})