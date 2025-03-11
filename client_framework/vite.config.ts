import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

const isTestingEnvironment = process.env.VITEST;

const plugins = isTestingEnvironment
  ? [react()]
  : [tailwindcss(), reactRouter(), tsconfigPaths()];

export default defineConfig({
  plugins,
  test: {
    environment: "jsdom",
    setupFiles: ["vitest.setup.ts"],
    globals: true,
  },
});
