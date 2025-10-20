import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { vitePluginErrorOverlay } from "@hiogawa/vite-plugin-error-overlay";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => ({
  assetsInclude: ["**/*.glb"],
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    tailwindcss(),
    mode === "development" ? vitePluginErrorOverlay() : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",

  build: {
    chunkSizeWarningLimit: 1000, // ubah batas peringatan jadi 1MB
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Pisahkan setiap library di node_modules jadi chunk sendiri
          if (id.includes("node_modules")) {
            const parts = id
              .toString()
              .split("node_modules/")[1]
              .split("/");
            // contoh: node_modules/framer-motion/dist/index.js → framer-motion
            const name = parts[0].startsWith("@") ? `${parts[0]}/${parts[1]}` : parts[0];
            return name;
          }
        },
      },
    },
  },
}));
