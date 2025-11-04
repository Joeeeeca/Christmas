import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        admin: path.resolve(__dirname, 'public/admin/index.html'),
      },
    },
  },

  server: {
    watch: {
      ignored: ['**/public/admin/**'],
    },
    // 👇 this tells Vite to serve /public/admin files as plain static assets
    middlewareMode: false,
    fs: {
      allow: ['public'],
    },
  },

  optimizeDeps: {
    exclude: ['decap-cms-app'], // 👈 prevent Vite from touching this script
  },
})
