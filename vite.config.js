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
    copyPublicDir: true, // ✅ ensure /public/admin is copied to dist/admin
    rollupOptions: {
      input: {
        main: 'index.html', // ✅ relative path
      },
    },
  },

server: {
  fs: {
    allow: [__dirname, path.resolve(__dirname, 'public')],
  },
  // 👇 this stops React's history fallback for /admin
  middlewareMode: false,
  historyApiFallback: {
    rewrites: [
      { from: /^\/admin\/.*$/, to: '/admin/index.html' },
    ],
  },
},

  optimizeDeps: {
    exclude: ['decap-cms-app'],
  },
})
