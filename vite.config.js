import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        proxy: {
            "/api/gemini": {
                target: "https://generativelanguage.googleapis.com", // Gemini endpoint
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/gemini/, ""), // strips the /api/gemini prefix
            },
        },
    },
});