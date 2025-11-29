import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: "static",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    copyPublicDir: true,
    emptyOutDir: false
  },

  server: {
    historyApiFallback: {
      rewrites: [
        // Serve admin CMS normally, not through React router
        { from: /^\/admin\/.*$/, to: "/admin/index.html" }
      ],
    },
  },
});
