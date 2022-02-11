# Tauri Docs

This website is built using [Docusaurus 2](https://v2.docusaurus.io/) with [MeiliSearch](https://github.com/meilisearch/) for the docs indexation and is deployed by Netlify.

[![Deploys By Netlify](https://www.netlify.com/img/global/badges/netlify-light.svg)](https://www.netlify.com)

If you seek to change something from **our guides**, please refer to [the docs folder](https://github.com/tauri-apps/tauri-docs/tree/dev/docs). \
When browsing the website, you will find edit links at the bottom of these docs.

The **API docs** are generated from our [Rust](https://github.com/tauri-apps/tauri/tree/dev/core/tauri) and [TypeScript](https://github.com/tauri-apps/tauri/tree/dev/tooling/api) source code.

## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

To develop in another language, use this command (setting your desired language):
```
$ yarn start --locale fr
```

## Build

```
$ yarn build
```

This command generates static content and can be served using any static contents hosting service.

To build for only a specific language use:

```
yarn build --locale fr
```

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

To add a language to the site, add it to `docusaurus.config.js`'s `siteconfig.i18n.locales` object.

The following items should be translated before enabling a language:

- strings in i18n/[language] json files
- docs/about/intro.md and docs/about/security.md;
- all files in docs/getting-started;
- all files in docs/development;



## License

MIT License

Copyright (c) 2020-2021 Tauri Programme within The Commons Conservancy
