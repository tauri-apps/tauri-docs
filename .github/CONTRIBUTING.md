# Contributing

## Writing/fixing docs

Feel free to open an issue/a PR if you find something weird in the docs.

Once you have submitted your PR, Netlify automatically deploys a temporary preview.

## Style

A few style guidelines to help us keep a common style across documents:

1. Use [Reference-style Links]. This makes reading the raw markdown and updating links easier.
2. Prefer plain markdown over HTML/MDX. This makes reading the markdown easier.
3. Use present tense rather than future tense. This makes the text easier to comprehend.
    Make an exception for planned or obsolete features, using future or past tense, as appropriate.
4. Use active voice rather than passive voice. This makes the text more engaging and easier to comprehend.

## Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

To develop in another language, use this command (setting your desired language):
```
$ yarn start --locale fr
```

## Build

```
$ yarn build
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
- all files in docs/getting-started;
- all files in docs/development;

[Reference-style Links]: https://www.markdownguide.org/basic-syntax/#reference-style-links
[Docusaurus Admonitions]: https://docusaurus.io/docs/markdown-features/admonitions