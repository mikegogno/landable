import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  },
  server: {
    port: 3000,
    host: true
  }
})
