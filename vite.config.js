import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    copyPublicDir: true,
  },

  server: {
    historyApiFallback: {
      rewrites: [
        // Allow admin to be served as raw static files
        { from: /^\/admin\/.*$/, to: "/admin/index.html" }
      ],
    },
  },
});
