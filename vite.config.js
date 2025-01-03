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
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        modulePreload: false,
        rollupOptions: {
            output: {
                format: 'es',
                entryFileNames: "assets/[name].[hash].mjs",
                chunkFileNames: "assets/[name].[hash].mjs",
                assetFileNames: function (_a) {
                    var name = _a.name;
                    if (/\.(js|ts|jsx|tsx)$/.test(name !== null && name !== void 0 ? name : '')) {
                        return 'assets/[name].[hash].mjs';
                    }
                    return 'assets/[name].[hash].[ext]';
                }
            }
        }
    }
});
