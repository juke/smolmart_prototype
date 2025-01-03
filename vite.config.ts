import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/smolmart_prototype/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    modulePreload: {
      polyfill: true
    },
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
