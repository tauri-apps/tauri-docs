---
date: 2022-12-09
title: Announcing the Tauri Mobile Alpha Release
summary: Tauri mobile is here! The first alpha release 2.0.0-alpha.0 has been published.
image: /img/blog/tauri_2_0_0_alpha_0/header.png
authors: [lucasfernog]
---

## Updating dependencies

Make sure to update both NPM and Cargo dependencies to the 2.0.0-alpha.0 release. You can update the NPM dependencies with:

**npm**

```shell
npm install @tauri-apps/cli@next @tauri-apps/api@next
```

**Yarn Classic**

```shell
yarn upgrade @tauri-apps/cli@next @tauri-apps/api@next
```

**Yarn Berry**

```shell
yarn up @tauri-apps/cli@next @tauri-apps/api@next
```

**pnpm**

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

<div class="grid grid-cols-2 gap-8">
<div>

![iOS Preview](/img/blog/tauri_2_0_0_alpha_0/ios-preview.png)

</div>
<div>

![Android Preview](/img/blog/tauri_2_0_0_alpha_0/android-preview.png)

</div>
</div>

## Getting started

Read the complete guide on the [`next` documentation website](https://next--tauri.netlify.app/next/mobile/).

## Known issues

- TLS support has been moved behind a Cargo feature until we figure out how to cross compile OpenSSL on Windows.
- Currently running on a device is not supported when using Xcode 14.
