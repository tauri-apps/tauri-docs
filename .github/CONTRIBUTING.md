# Contributing

Welcome to Tauri Docs! We're excited to have you 🥳

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/tauri-apps/tauri-docs/tree/v2)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/tauri-apps/tauri-docs/tree/v2)

There are a number of ways to get involved:

- See if there are any [good first issues](https://github.com/tauri-apps/tauri-docs/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) that catch your eye
- [Write a guide or recipe](#write-documentation)
- [Translating existing documentation](#translations-i18n)

Reach out to us on [Discord](https://discord.com/invite/tauri) on the [`#docs` channel](https://discord.com/channels/616186924390023171/662624589037436928) if you have any questions!

## Getting Started

1. Clone this repo
2. Run `pnpm i && pnpm dev:setup`
3. Run `pnpm dev` to start the local server

Note: Dynamically generated pages will result in a 404 error until you run `pnpm build` for the first time.

### Gitpod

[Allow Gitpod to open new tabs](https://www.gitpod.io/docs/configure/user-settings/browser-settings) so you immediately when the environment is done loading get a new tab popping up with the documentation.

## Write Documentation

We have the following types of documents that roughly follow the types defined by [Diátaxis](https://diataxis.fr/):

- **[Guide](#guide)**: Learning-oriented
- **[Recipe](#recipe)**: Task-oriented
- **[Reference](#recipe)**: Information-oriented
- **[Blog Post](#blog-post)**: Understanding-oriented

Use this chart to help you figure out where the right place for your content is:

| If the content describes… | …and serves the user's… | …then it must belong to…  |
| ------------------------- | ----------------------- | ------------------------- |
| practical steps           | study                   | [a guide](#guide)         |
| practical steps           | work                    | [a recipe](#recipe)       |
| theoretical knowledge     | work                    | [a reference](#reference) |
| theoretical knowledge     | study                   | [a blog post](#blog-post) |

### Writing Style

**Dictionary**

| Word     | Description                          |
| -------- | ------------------------------------ |
| app      | A Tauri app, prefer over application |
| web view | Where the UI is rendered             |

- Use an [oxford comma](https://www.grammarly.com/blog/what-is-the-oxford-comma-and-why-do-people-care-so-much-about-it/) in paragraphs, but not in headings and titles
- Use [title case](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case) for headings and titles
- Make headings as succinct as possible to help the reader quickly find the content they need
- Use [simple present tense](https://www.grammarly.com/blog/simple-present/) for verbs

### Guide

Located in [`/src/content/docs/plugin/`](https://github.com/tauri-apps/tauri-docs/tree/v2/src/content/docs/plugin)

Guides are learning-oriented and take the reader through a specific journey such as starting a new project, and overview of a specific feature, or how to follow a specific flow such as building and bundling their app. They follow a similar philosophy to [tutorials in Diátaxis](https://diataxis.fr/tutorials).

The reader should be familiar with the concepts covered by the end of the guide and should set them up with the knowledge required to being experimenting with that topic themselves.

### Recipe

Located in [`/src/content/docs/learn/`](https://github.com/tauri-apps/tauri-docs/tree/v2/src/content/docs/learn)

Recipes are designed to guide the reader through a specific task similar and have a clear outcome and objective. This could be something like setting up authentication using Firebase, adding a Python binary using sidecar, or requesting admin access on a user's machine. They are similar to [how-to guides in Diátaxis](https://diataxis.fr/how-to-guides) (not to be confused with our own guides mentioned above).

The prerequisites for a recipe should be clearly stated. If there are a lot of steps required before getting into the relevant information about the recipe then you may want to link out to another guide, recipe, or external resource and state those as a prerequisite at the top of the recipe.

### Reference

Located in [`/src/content/docs/reference/`](https://github.com/tauri-apps/tauri-docs/tree/v2/src/content/docs/reference), although they should be auto-generated when possible.

References are where all the nuts and bolts of Tauri's API are documented. These should be generated from upstream repos when possible and written following the best practices described by [references in Diátaxix](https://diataxis.fr/reference).

These should be as succinct and to the point as possible so that the reader can quickly find the relevant information.

If you'd like to view the API references locally then you must run `pnpm dev:setup` before `pnpm dev` to initialize all of the submodules. Now the `http://localhost:3000/2/reference/` routes are available to preview.

### Blog Post

Located in [`/src/content/docs/blog/`](https://github.com/tauri-apps/tauri-docs/tree/v2/src/content/docs/blog)

Topics that are around understanding something can be written as a blog post (we welcome submissions to the Tauri blog from anyone). Blog posts are a good option because they help the reader understand that information is accurate at the time of writing (and of course can always be updated later if it becomes stale). Blog posts follow the goals of [explanation in Diátaxis](https://diataxis.fr/explanation), but not all blog posts necessarily fit this specific format.

### Diagrams

We use [Astro D2](https://astro-d2.vercel.app/) to generate diagrams. Because Netlify does not support compiling the diagrams in its end we have to push the prebuilt images manually. This is annoying, but not the end of the world seeing as we've previously been pushing the images manually anyway.

If you make an update to a diagram you'll need to [install D2](https://github.com/terrastruct/d2/blob/master/docs/INSTALL.md) on your system, then when you run either the `build` or `dev` commands you'll need to enable building the diagrams by setting the environment variable `CONTEXT=d2`.

```sh
# Adapt the command as relevant for your system to define the variable
CONTEXT=d2 pnpm dev
```

## Translations (i18n)

Thanks for your interest in helping to translate the documentation! Visit the [translation status page](https://v2.tauri.app/contribute/translate-status) to see which docs are ready for translation, need updated, or need reviewed.

Read the [Translating Guide](./TRANSLATING.md) for more information.
