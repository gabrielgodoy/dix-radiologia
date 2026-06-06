import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Maps '@' to the absolute path of your 'src' folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
