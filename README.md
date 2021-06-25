# Tauri Docs

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

[![Deploys By Netlify](https://www.netlify.com/img/global/badges/netlify-light.svg)](https://www.netlify.com)

You can check the state of a "documentation" PR by looking at it's Deploy preview on the PR in GitHub where Netlify builds and checks and is mentioned in its bot's comment.

Our current [CI/CD file](https://github.com/tauri-apps/tauri/blob/dev/.github/workflows/update-docs.yml) on GitHub builds and deploys this `tauri-apps/tauri-docs` repo automatically for our [own Docusaurus site](https://tauri.studio/en/docs/getting-started/intro)

But you can locally develop and deploy the site to help contribute following the below instructions.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

Note that only English language is supported during development phase in order to keep a small build time.

### Build

```
$ LANGUAGE=${language} yarn build --out-dir ./build/${language}
```

This command generates static content for a given language (default is "en") into the `build/${language}` directory and can be served using any static contents hosting service.

To build for all enabled languages, use:

```
node build.js
```

supported-languages.js is the module containing the enabled/targeted languages for Tauri documentation site.

Uncomment a language when at least "Getting started" and most of "Usage" docs are translated.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Contributing

Feel free to open an issue or Pull Request (PR) if you find something weird in this `tauri-docs` repo.
Your PR once submitted to us, will automatically deploy to a temporary Netlify instance for us or you to review through GitHub's CI/CD checks.
Your feedback is more than welcome!

We're working with Crowdin to manage translations, if you feel like you want to lend a hand for translations, take a look at the documentation project: https://tauri.crowdin.com/documentation

To enable a language on the documentation website, we need to (at least) have the following items translated:

- strings from en.json;
- docs/about/intro.md and docs/about/security.md;
- all files in docs/getting-started;
- all files in docs/usage/development;

Please ignore the following items for now since breaking changes may happen frequently:

- docs/api;
- docs/tips;
- all files in docs/usage/ci-cd;
- docs/usage/contributor-guide.

## License

MIT License

Copyright (c) 2020-2021 Tauri Programme within The Commons Conservancy
