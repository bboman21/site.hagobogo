import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

// Vite 기본 설정 파일
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: {
    open: '/app.html',
  },
  build: {
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'app.html'),
      },
    },
  },
})
