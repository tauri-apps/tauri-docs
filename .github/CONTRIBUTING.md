# Contributing

> **Warning**
> We're currently shifting focus to Tauri 2.0 documentation.  
> [Check out the `next` branch](https://github.com/tauri-apps/tauri-docs/tree/next) if you're interested in getting involved and contributing.

## Writing/Fixing Docs

Feel free to open an issue/a PR if you find something wrong in the docs.

Once you have submitted your PR, GitHub automatically builds the site and deploys a temporary preview to Netlify.

## Style

A few style guidelines to help us keep a common style across documents:

1. Use [Reference-style Links]. This makes reading the raw markdown and updating links easier.
2. Prefer plain markdown over HTML/MDX. This makes reading the markdown easier.
3. Use present tense rather than future tense. This makes the text easier to comprehend.
   Make an exception for planned or obsolete features, using future or past tense as appropriate.
4. Use active voice rather than passive voice. This makes the text more engaging and easier to comprehend.
5. Use [Title Case] for section headers.

## Local Development

Install the dependencies by running:

```
yarn
```

The below command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```
yarn start
```

To develop in another language, use this command (setting your desired language):

```
yarn start --locale fr
```

This command generates static content and can be served using any static content hosting service.

```
yarn build
```

To build for only a specific language use:

```
yarn build --locale fr
```

## Continuous Integration (CI)

We use a matrix of GitHub CI runners to build each locale in parallel. This enables us to keep build times down and also makes it easier to see the deploy logs live in GitHub.

On a PR being submitted, GitHub will then build the site then sent the results to Netlify to preview. The URL will be added to a comment in the PR upon a successful build.

On a push to the main branch, a build is triggered and then the resulting files will be sent to Netlify for publishing to prod.

## Internationalization (i18n)

Translation efforts are currently frozen while we prepare a new documentation system to prepare for Tauri 2.0. Keep an eye on [Discord](https://discord.com/invite/tauri) and this repo for when we're ready to start accepting translations.

## Versioning

Additional versioning references: [Docusaurus](https://docusaurus.io/docs/versioning)

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
3. Update .github/workflows/build.yml environment LATEST_VERSION to 'v2'

```shell
yarn docusaurus docs:version 'v1'
```

This value above should match what was previously in the `unreleasedTauriVersion` variable

[reference-style links]: https://www.markdownguide.org/basic-syntax/#reference-style-links
[title case]: https://en.wikipedia.org/wiki/Title_case
[docusaurus admonitions]: https://docusaurus.io/docs/markdown-features/admonitions
