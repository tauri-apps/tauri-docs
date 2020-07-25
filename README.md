# Tauri Docs

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

[![Deploys By Netlify](https://www.netlify.com/img/global/badges/netlify-light.svg)](https://www.netlify.com)

You can check the state of a PR by looking at the Deploy preview that Netlify builds and is mentioned in its bot's comment.

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

Feel free to open an issue/a PR if you find something weird in the docs, your feedback is more than welcome!

We're working with Crowdin to manage translations, if you feel like you want to lend a hand for translations, take a look at our project: https://tauri.crowdin.com/

## License
MIT License

Copyright (c) 2020 Tauri Team
