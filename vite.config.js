import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.avifs'],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://lifequests.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})