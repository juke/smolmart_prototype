import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
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
            input: path.resolve(__dirname, 'index.html'),
            output: {
                format: 'es',
                entryFileNames: 'assets/[name].[hash].js',
                chunkFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash].[ext]'
            }
        }
    }
});
