import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-portfolio/',
  server: {
    watch: {
      usePolling: true,
    },
    host: "127.0.0.1",
    port: 3000,
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase", // Allows camelCase in CSS modules
    }
  }
})
