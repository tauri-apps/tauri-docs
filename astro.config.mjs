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
            { label: "Why Tauri?", link: "/v2/tutorials" },
            { label: "Prerequisites", link: "/v2/tutorials/prerequisites" },
            {
              label: "Create a Project",
              link: "/v2/tutorials/create-project/",
            },
            {
              label: "Plugins",
              link: "/v2/plugins/",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            {
              label: "Build & Distribute",
              link: "/v2/guides/build-distribute",
            },
            { label: "Customize", link: "/v2/guides/customize/" },
            {
              label: "Inter-Process Communication",
              link: "#",
            },
            {
              label: "Create a Plugin",
              link: "/v2/guides/build-distribute",
            },
            {
              label: "Troubleshoot",
              link: "/v2/guides/troubleshoot",
            },
            {
              label: "More Guides",
              link: "/v2/guides/",
            },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Project Structure",
              link: "/v2/reference/customize/",
            },
            {
              label: "Command Line Interface (CLI)",
              link: "/v2/reference/customize/",
            },
            {
              label: "Tauri Config",
              link: "/v2/guides/troubleshoot",
            },
            {
              label: "JavaScript API",
              link: "/v2/guides/build-distribute",
            },
            {
              label: "Rust API",
              link: "/v2/guides/build-distribute",
            },
            {
              label: "Error Reference",
              link: "/v2/guides/build-distribute",
            },
          ],
          // autogenerate: { directory: "v2/reference" },
        },
        {
          label: "TODO",
          autogenerate: { directory: "v2/todo" },
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
