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
          label: "Getting Started",
          items: [
            { label: "What is Tauri?", link: "/getting-started" },
            { label: "Prerequisites", link: "/getting-started/prerequisites" },
            {
              label: "Create a Project",
              link: "/getting-started/create-a-project",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Development", link: "/guides/example/" },
            { label: "Debugging", link: "/guides/example/" },
            { label: "Testing", link: "/guides/example/" },
            { label: "Building", link: "/guides/example/" },
            { label: "Distribution", link: "/guides/example/" },
          ],
        },
        {
          label: "Plugins",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "What are Plugins?", link: "/guides/example/" },
            { label: "Plugin List", link: "/guides/example/" },
            { label: "Create a Plugin", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
