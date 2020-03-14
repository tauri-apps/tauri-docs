---
id: publishing
title: "App publishing"
sidebar_label: App publishing
---


## Build your UI Assets
Now that you are ready to package your project, you will need to instruct your framework to create the assets.

SVELTE using yarn:
```
yarn rollup -c
```

REACT-CREATE-APP using npm
```
npm run craco build
```

QUASAR using global `@quasar/cli`
```
quasar build
```

## tauri bundler
Make certain that you have installed that tauri bundler:
```
cargo tauri-cli -v
```
If you do not see a version number being reported, then you must install the bundler:

```
$ cargo install tauri-cli --force
```

> Note: We chose to call this bundler `tauri-cli` because in the near future we will be providing a **rust-only** entry point to tauri.

## Inform tauri about your distributables location
Be sure that you have configured the `src-tauri/tauri.conf.json` to correctly point at the assets. Edit `src-tauri/tauri.conf.json`:

```
{
  "build": {
    "distDir": "../build"
  }
}
```

## Run `tauri build`
```
local:  yarn tauri build
global: tauri build
```

Like the dev window, the first time you run this, it will take some time to collect the rust crates and build everything - but on subsequent runs it will only need to rebuild the tauri crates themselves.

Because of the way that rust builds its targets, the final app is placed in the following folder:

`src-tauri/target/release/bundle`
