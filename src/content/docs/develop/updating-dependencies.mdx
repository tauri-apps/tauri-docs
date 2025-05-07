---
title: Updating Dependencies
i18nReady: true
---

{/* TODO: Add plugin update example */}

import CommandTabs from '@components/CommandTabs.astro';

## Update npm Packages

If you are using the `tauri` package:

<CommandTabs
  npm="npm install @tauri-apps/cli@latest @tauri-apps/api@latest"
  yarn="yarn up @tauri-apps/cli @tauri-apps/api"
  pnpm="pnpm update @tauri-apps/cli @tauri-apps/api --latest"
/>

You can also detect what the latest version of Tauri is on the command line, using:

<CommandTabs
  npm="npm outdated @tauri-apps/cli"
  yarn="yarn outdated @tauri-apps/cli"
  pnpm="pnpm outdated @tauri-apps/cli"
/>

## Update Cargo Packages

You can check for outdated packages with [`cargo outdated`] or on the crates.io pages: [tauri] / [tauri-build].

Go to `src-tauri/Cargo.toml` and change `tauri` and `tauri-build` to

```toml
[build-dependencies]
tauri-build = "%version%"

[dependencies]
tauri = { version = "%version%" }
```

where `%version%` is the corresponding version number from above.

Then do the following:

```shell
cd src-tauri
cargo update
```

Alternatively, you can run the `cargo upgrade` command provided by [cargo-edit] which does all of this automatically.

## Sync npm Packages and Cargo Crates versions

Since the JavaScript APIs rely on Rust code in the backend, adding a new feature requires upgrading both sides to ensure compatibility. Please make sure you have the same minor version of the npm package `@tauri-apps/api` and cargo crate `tauri` synced

And for the plugins, we might introduce this type of changes in patch releases, so we bump the npm package and cargo crate versions together, and you need to keep the exact versions synced, for example, you need the same version (e.g. `2.2.1`) of the npm package `@tauri-apps/plugin-fs` and cargo crate `tauri-plugin-fs`

[`cargo outdated`]: https://github.com/kbknapp/cargo-outdated
[tauri]: https://crates.io/crates/tauri/versions
[tauri-build]: https://crates.io/crates/tauri-build/versions
[cargo-edit]: https://github.com/killercup/cargo-edit
