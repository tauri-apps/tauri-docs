# Contributing

## Writing/fixing docs

Feel free to open an issue/a PR if you find something weird in the docs.

Once you have submitted your PR, Netlify automatically deploys a temporary preview.

## Style

A few style guidelines to help us keep a common style across documents:

1. Use [Reference-style Links]. This makes reading the raw markdown and updating links easier.
2. Prefer plain markdown over HTML/MDX. This makes reading the markdown easier.
3. Use present tense rather than future tense. This makes the text easier to comprehend.
   Make an exception for planned or obsolete features, using future or past tense as appropriate.
4. Use active voice rather than passive voice. This makes the text more engaging and easier to comprehend.

## Installation

```
yarn
```

## Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

To develop in another language, use this command (setting your desired language):

```
yarn start --locale fr
```

## Build

```
yarn build
```

This command generates static content and can be served using any static content hosting service.

To build for only a specific language use:

```
yarn build --locale fr
```

## Internationalization (i18n)

We're working with Crowdin to manage translations; if you feel like you want to lend a hand for translations, take a look at the documentation project: https://tauri.crowdin.com/documentation

To add a language to the site, add it to `docusaurus.config.js`'s `siteconfig.i18n.locales` object.

The following items should be translated before enabling a language:

- strings in i18n/[language] json files
- docs/about/intro.md and docs/about/security.md;
- all files in docs/guides/getting-started;
- all files in docs/guides/development;

## Versioning

Additional versioning resources: [Docusaurus](https://docusaurus.io/docs/versioning)

Only files in `/docs/` will be "versioned".

There are 2 scenarios noted below. More information can be found on [Docusaurus](https://docusaurus.io/docs/versioning#configuring-versioning-behavior) for both of these cases

### Continue Working on Released Version's Docs

You are "releasing" a version but aren't planning to start working on a new version's docs yet. This could be if you've just released v1 and would like to continue working on the guides or updating API documentation for v1. You'd like this current version to be the default served to site visitors.

Nothing needs to be done! As long as you've set `unreleasedTauriVersion` in `docusaurus.config.js`, it will re-write the url to that value

### Start Working on Unreleased Version's docs

You want to begin working on unreleased or beta docs. You would like to begin updating guides and APIs against the beta version. You would still like the non-beta version to be the default version served to site visitors.

For example, if you've launched v1 and would like to work on v2 docs but not serve them as the default, you would do the following:

1. Update `unreleasedTauriVersion` in `docusaurus.config.js` to 'v2'
2. Run the following command to version the current docs:

```shell
yarn docusaurus docs:version 'v1'
```

This value above should match what was previously in the `unreleasedTauriVersion` variable

[reference-style links]: https://www.markdownguide.org/basic-syntax/#reference-style-links
[docusaurus admonitions]: https://docusaurus.io/docs/markdown-features/admonitions
