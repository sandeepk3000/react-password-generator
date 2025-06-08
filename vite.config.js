import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  content: ["./src/**/*.{html,js}"],
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: true,
  },
});
