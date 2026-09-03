import { defineConfig } from "@rsbuild/core";

const host = process.env.TAURI_DEV_HOST;

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  source: {
    // create-tauri-app keeps the entry in src/, not rsbuild's default location
    entry: { index: "./src/main.ts" },
  },
  html: {
    // reuse the scaffold's page; rsbuild injects the bundle script itself
    template: "./index.html",
  },
  server: {
    // Tauri expects a fixed port, fail if that port is not available
    strictPort: true,
    // if the host Tauri is expecting is set, use it
    host: host || undefined,
  },
  dev: {
    client: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
  },
  output: {
    // don't minify for debug builds
    minify: !process.env.TAURI_ENV_DEBUG,
    // produce sourcemaps for debug builds
    sourceMap: !!process.env.TAURI_ENV_DEBUG,
  },
  tools: {
    rspack: {
      watchOptions: {
        // .git and node_modules are ignored by rsbuild by default
        // src-tauri usually does not contain frontend files so it's ignored here as well
        ignored: ["**/.git", "**/node_modules", "**/src-tauri/**"],
      },
    },
  },
});
