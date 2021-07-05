---
title: Updating
---
import Alert from '@theme/Alert'

<Alert title="Please note" type="warning" icon="alert">
    Especially during the alpha and beta phases, you are expected to keep all tauri dependencies and toolchains up to date. There is no support for any versions other than latest.
</Alert>

## Current Latest Versions
| Component | Description  | Version |
|-----------|---------|------|
| [**tauri.js**](https://github.com/tauri-apps/tauri/tree/dev/cli/tauri.js) | CLI and imports | [![](https://img.shields.io/npm/v/tauri.svg)](https://www.npmjs.com/package/tauri) |
| [**tauri core**](https://github.com/tauri-apps/tauri/tree/dev/tauri) | rust API and tooling | [![](https://img.shields.io/crates/v/tauri.svg)](https://crates.io/crates/tauri)|
| [**tauri bundler**](https://github.com/tauri-apps/tauri/tree/dev/cli/tauri-bundler) | binary bundler | [![](https://img.shields.io/crates/v/tauri-bundler.svg)](https://crates.io/crates/tauri-bundler)  |


## Update NPM Packages

If you are using the `tauri` package:
```bash
$ yarn upgrade tauri --latest
$ npm install tauri@latest
```
You can also detect what the latest version of tauri is on the command line, using:
- `npm outdated tauri`
- `yarn outdated tauri`

Alternatively, if you are using the `vue-cli-plugin-tauri` approach:
```bash
$ yarn upgrade vue-cli-plugin-tauri --latest
$ npm install vue-cli-plugin-tauri@latest
```

## Update Cargo Packages
Go to `src-tauri/Cargo.toml` and change `tauri` to
`tauri = { version = "%version%" }` where `%version%` is the version number shown above. (You can just use the `MAJOR.MINOR`) version, like `0.9`.

Then do the following:
```bash
$ cd src-tauri
$ cargo update -p tauri
```
You can also run `cargo outdated -r tauri` to get direct information about the core library's latest version.

## Update Tauri Bundler
Use this command to get and build the latest version of the `tauri-bundler` and install it in place.
```bash
$ cargo install tauri-bundler
```

## Automatic updates
We are currently working on a method for keeping all required dependencies up to date. When it is available, it will be opt in. Keep track of progress at this issue link: [#57](https://github.com/tauri-apps/tauri/issues/57)
