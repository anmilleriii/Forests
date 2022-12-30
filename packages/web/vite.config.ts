/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // @ts-ignore
    alias: [{ find: "@", replacement: path.resolve(__dirname, "/src") }],
  },
  test: {
    /**
     * Ignore integration tests
     */
    exclude: ["./tests/**"],
    globals: true,
  },
});
