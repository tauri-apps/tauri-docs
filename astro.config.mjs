import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Tauri",
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/tauri-apps/tauri",
        discord: "https://github.com/tauri-apps/tauri",
        mastodon: "https://github.com/tauri-apps/tauri",
        twitter: "https://github.com/tauri-apps/tauri",
      },
      editLink: {
        baseUrl: "https://github.com/tauri-apps/tauri-docs/edit/dev",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Quick Start",
          items: [
            { label: "Why Tauri?", link: "/2/guide/" },
            { label: "Prerequisites", link: "/2/guide/prerequisites" },
            {
              label: "Create a Project",
              link: "/2/guide/create/",
            },
            {
              label: "Plugins",
              link: "/2/plugin/",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            {
              label: "Build & Distribute",
              link: "/2/guides/build-distribute",
            },
            { label: "Customize", link: "/2/guides/customize/" },
            {
              label: "Inter-Process Communication",
              link: "#",
            },
            {
              label: "Create a Plugin",
              link: "/2/guides/build-distribute",
            },
            {
              label: "Troubleshoot",
              link: "/2/guides/troubleshoot",
            },
            {
              label: "More Guides",
              link: "/2/guides/",
            },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Project Structure",
              link: "/2/reference/customize/",
            },
            {
              label: "Command Line Interface (CLI)",
              link: "/2/reference/customize/",
            },
            {
              label: "Tauri Config",
              link: "/2/guides/troubleshoot",
            },
            {
              label: "JavaScript API",
              link: "/2/guides/build-distribute",
            },
            {
              label: "Rust API",
              link: "/2/guides/build-distribute",
            },
          ],
          // autogenerate: { directory: "v2/reference" },
        },
        {
          label: "TODO",
          autogenerate: { directory: "2/todo" },
        },
      ],
    }),
  ],
  markdown: {
    shikiConfig: {
      langs: ["powershell"],
    },
  },

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
