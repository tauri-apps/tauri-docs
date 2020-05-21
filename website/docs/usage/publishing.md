---
id: publishing
title: 'App Publishing'
sidebar_label: App Publishing
---

## Build Your Web App

Now that you are ready to package your project, you will need to run your framework's build command.

SVELTE using yarn:

```sh
yarn rollup -c
```

REACT-CREATE-APP using npm

```sh
npm run craco build
```

QUASAR using global `@quasar/cli`

```sh
quasar build
```

## Tauri Bundler

Make certain that you have installed that tauri bundler:

```sh
cargo tauri-bundler -v
```

If you do not see a version number being reported, then you must install the bundler:

```sh
$ cargo install tauri-bundler --force
```

<div class="alert alert--info" role="alert">
Note: We chose to call this bundler `tauri-bundler` because in the near future we will be providing a <strong>rust-only</strong> entry point to tauri.
</div>

## Set Your Dist Dir in Tauri Config

In `src-tauri/tauri.conf.json`, set `distDir` to the path of your built web app, relative to inside of the `src-tauri` directory:

```json
{
  "build": {
    "distDir": "../build"
  }
}
```

## Run `tauri build`

```
local install:  yarn tauri build
global install: tauri build
```

Like the dev window, the first time you run this, it will take some time to collect the rust crates and build everything - but on subsequent runs it will only need to rebuild the Tauri crates which is much quicker.

Because of the way that Cargo builds its targets, the final app is placed in the following folder:

`src-tauri/target/release/bundle`
