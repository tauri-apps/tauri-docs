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
```
$ yarn upgrade tauri --latest
$ npm update tauri
```

Alternatively, if you are using the `vue-cli-plugin-tauri` approach:
```
$ yarn upgrade vue-cli-plugin-tauri --latest
$ npm update vue-cli-plugin-tauri
```

## Update Cargo Packages
Go to `src-tauri/Cargo.toml` and change `tauri` to
`tauri = { version = "%version%" }` where `%version%` is the version number shown above. (You can just use the `MAJOR.MINOR`) version, like `0.9`.

Then do the following:
```
$ cd src-tauri
$ cargo update -p tauri
```

## Update Tauri Bundler
Use this command to get and build the latest version of the `tauri-bundler` and install it in place.
```
$ cargo install tauri-bundler --force
```

## Automatic updates
We are currently working on a method for keeping all required dependencies up to date. When it is available, it will be opt in.
