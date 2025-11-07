import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs' // ✅ correct import for ESM

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        admin: path.resolve(__dirname, 'public/admin/index.html'),
      },
    },
  },

server: {
  fs: {
    allow: [__dirname, path.resolve(__dirname, 'public')],
  },
  middlewareMode: false,
  hmr: true,
  historyApiFallback: {
    rewrites: [
      // ✅ Serve the CMS page itself
      { from: /^\/admin\/?$/, to: '/admin/index.html' },
      // ✅ Serve config.yml and other admin assets directly
      { from: /^\/admin\/.*\.yml$/, to: (context) => context.parsedUrl.pathname },
      { from: /^\/admin\/.*\.js$/, to: (context) => context.parsedUrl.pathname },
      { from: /^\/admin\/.*\.css$/, to: (context) => context.parsedUrl.pathname },
    ],
    // ⛔ disable the general fallback for /admin paths
    disableDotRule: true,
  },
},


  optimizeDeps: {
    exclude: ['decap-cms-app'],
  },
})
