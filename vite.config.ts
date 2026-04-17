import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [
    react(),

    viteImagemin({
      mozjpeg: {
        quality: 65,
      },
      pngquant: {
        quality: [0.6, 0.8],
      },
      webp: {
        quality: 75,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
        },
      },
    },

    assetsInlineLimit: 4096,
  },
});