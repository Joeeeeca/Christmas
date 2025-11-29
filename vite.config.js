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

    historyApiFallback: {
      rewrites: [
        // Serve EXACT admin file
        { from: /^\/admin\/index\.html$/, to: '/admin/index.html' },

        // Any admin sub-path should bypass React routing
        { from: /^\/admin\/.*$/, to: '/admin/index.html' },
      ],
      disableDotRule: true,
    },
  },

  optimizeDeps: {
    exclude: ['decap-cms-app'],
  },
})
