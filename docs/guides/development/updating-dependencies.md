---
sidebar_position: 3
---

# Updating Dependencies

:::caution Please note
Especially during the alpha and beta phases, we expect you to keep all Tauri dependencies and toolchains up to date. There is no support for any versions other than latest.
:::

## Update NPM Packages

If you are using the `tauri` package:

```shell
yarn upgrade @tauri-apps/cli @tauri-apps/api --latest
npm install @tauri-apps/cli@latest @tauri-apps/api@latest
```

You can also detect what the latest version of Tauri is on the command line, using:

- `npm outdated @tauri-apps/cli`
- `yarn outdated @tauri-apps/cli`

Alternatively, if you are using the `vue-cli-plugin-tauri` approach:

```shell
yarn upgrade vue-cli-plugin-tauri --latest
npm install vue-cli-plugin-tauri@latest
```

## Update Cargo Packages

You can check for outdated packages with [`cargo outdated`] or on the crates.io pages: [tauri] / [tauri-build].

Go to `src-tauri/Cargo.toml` and change `tauri` and `tauri-build` to

```toml
[build-dependencies]
tauri-build = "%version%"

[dependencies]
tauri = { version = "%version%" }
```

where `%version%` is the corresponding version number from above. <!-- TODO: (You can just use the `MAJOR.MINOR`) version, like `0.9`. -->

Then do the following:

```shell
cd src-tauri
cargo update
```

Alternatively you can run the `cargo upgrade` command provided by [cargo-edit] which does all of this automatically.

[`cargo outdated`]: https://github.com/kbknapp/cargo-outdated
[tauri]: https://crates.io/crates/tauri/versions
[tauri-build]: https://crates.io/crates/tauri-build/versions
[cargo-edit]: https://github.com/killercup/cargo-edit
