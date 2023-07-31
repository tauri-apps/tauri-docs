![README Banner](https://github.com/tauri-apps/tauri-docs/assets/61861940/ab6fd2f5-07b7-46b2-9125-77cba0064c1b)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6dc81a5e-32ac-46f4-80c5-198f4a536e26/deploy-status)](https://app.netlify.com/sites/tauri-docs-starlight/deploys)

- Tutorials: Blog post
- How-to Guides: `/src/content/docs/v2/guides`
- Explanation: Blog post
- Reference: `/src/content/docs/v2/reference`

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
