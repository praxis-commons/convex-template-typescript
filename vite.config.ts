import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3000,
    hmr: {
      // Avoid 431 Request Header Fields Too Large
      path: "hmr",
      protocol: "ws",
    },
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart(),
    viteReact(),
  ],
});
