# Tauri Docs

This website is built using [Docusaurus 2](https://v2.docusaurus.io/) with [MeiliSearch](https://github.com/meilisearch/) for the docs indexation and is deployed by Netlify.

[![Deploys By Netlify](https://www.netlify.com/img/global/badges/netlify-light.svg)](https://www.netlify.com)

If you seek to change something from **our guides**, please refer to [the docs folder from the Core repository](https://github.com/tauri-apps/tauri/tree/dev/docs). \
When browsing the website, you will find edit links at the bottom of these docs.

The **API docs** are generated from our [Rust](https://github.com/tauri-apps/tauri/tree/dev/core/tauri) and [TypeScript](https://github.com/tauri-apps/tauri/tree/dev/tooling/api) source code.

In the end, as the guides and the API live in the Core repository, tauri-docs just holds the components and various pages that don't need to follow the Core repository version; this way, we don't pollute the Core repository with commits, PRs or issues related to the website only.


## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

Note that only English language is supported during development phase in order to keep a small build time.

## Build

```
$ LANGUAGE=${language} yarn build --out-dir ./build/${language}
```

This command generates static content for a given language (default is "en") into the `build/${language}` directory and can be served using any static contents hosting service.

To build for all enabled languages, use:

```
node build.js
```

supported-languages.js is the module containing the enabled/targeted languages for Tauri documentation site.

Uncomment a language when at least "Get started" and most of "Usage" docs are translated.

## Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Contributing

### Writing/fixing docs

Feel free to open an issue/a PR if you find something weird in the docs.

Your PR once submitted to us, will automatically deploy to a temporary Netlify instance for us or you to review through GitHub's CI/CD checks: you will be able to click on a preview link once the build is ready.

### Internationalization (i18n)

We're working with Crowdin to manage translations, if you feel like you want to lend a hand for translations, take a look at the documentation project: https://tauri.crowdin.com/documentation

To enable a language on the documentation website, we need to (at least) have the following items translated:

- strings from en.json;
- docs/about/intro.md and docs/about/security.md;
- all files in docs/get-started;
- all files in docs/usage/development;

Please ignore the following items for now since breaking changes may happen frequently:

- docs/api;
- docs/tips;
- all files in docs/usage/ci-cd;
- docs/usage/contributor-guide.

## License

MIT License

Copyright (c) 2020-2021 Tauri Programme within The Commons Conservancy
