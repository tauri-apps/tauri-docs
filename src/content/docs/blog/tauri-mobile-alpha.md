---
title: Announcing the Tauri Mobile Alpha Release
date: 2022-12-09
authors: [lucasfernog]
excerpt: Tauri mobile is here! The first alpha release 2.0.0-alpha.0 has been published.
---

![Tauri 1.2 Launch Hero Image](./tauri_2_0_0_alpha_0/header.png)

Tauri mobile is here! The first alpha release 2.0.0-alpha.0 has been published.

## Updating dependencies

Make sure to update both NPM and Cargo dependencies to the 2.0.0-alpha.0 release. You can update the NPM dependencies with:

```shell
npm install @tauri-apps/cli@next @tauri-apps/api@next
```

```shell
yarn upgrade @tauri-apps/cli@next @tauri-apps/api@next
```

```shell
yarn up @tauri-apps/cli@next @tauri-apps/api@next
```

```shell
pnpm update @tauri-apps/cli@next @tauri-apps/api@next
```

To update the Cargo dependencies, run the following in the `src-tauri` folder:

```shell
cargo add tauri@2.0.0-alpha.0
cargo add tauri-build@2.0.0-alpha.0 --build
cargo install tauri-cli --version "^2.0.0-alpha"
```

## Preview

You can adapt your existing desktop application to run on mobile or start a fresh project.
Tauri runs on the connected device or starts an emulator if available.

![iOS Preview](./tauri_2_0_0_alpha_0/ios-preview.png)
![Android Preview](./tauri_2_0_0_alpha_0/android-preview.png)

---

## Getting started

Read the complete guide on the [`next` documentation website](https://next--tauri.netlify.app/next/mobile/).

## Known issues

- TLS support has been moved behind a Cargo feature until we figure out how to cross compile OpenSSL on Windows.
- Currently running on a device is not supported when using Xcode 14.
