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
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Use .mjs extension for module files to ensure correct MIME type
        entryFileNames: 'assets/[name].[hash].mjs',
        chunkFileNames: 'assets/[name].[hash].mjs',
        assetFileNames: ({name}) => {
          if (/\.(js|mjs)$/.test(name ?? '')) {
            return 'assets/[name].[hash].mjs';
          }
          return 'assets/[name].[hash].[ext]';
        }
      }
    }
  }
})
