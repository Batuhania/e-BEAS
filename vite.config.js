import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/e-BEAS/',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
