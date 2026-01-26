import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Spiderverse-React/', // ← Nombre de tu repositorio
})