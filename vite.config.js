import { defineConfig } from "vite";

export default defineConfig({
  base: "/portofolio",
  build: {
    minify: "terser",
  },
});