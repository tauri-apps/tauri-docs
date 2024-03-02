---
sidebar_position: 3
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# Updating Dependencies

## Update npm Packages

If you are using the `tauri` package:

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
npm install @tauri-apps/cli@latest @tauri-apps/api@latest
```

  </TabItem>
  <TabItem value="Yarn Classic">

```shell
yarn upgrade @tauri-apps/cli @tauri-apps/api --latest
```

  </TabItem>
  <TabItem value="Yarn Berry">

```shell
yarn up @tauri-apps/cli @tauri-apps/api
```

  </TabItem>
  <TabItem value="pnpm">

```shell
pnpm update @tauri-apps/cli @tauri-apps/api --latest
```

  </TabItem>
  <TabItem value="Bun">

```shell
bun update @tauri-apps/cli @tauri-apps/api
```

  </TabItem>
</Tabs>

You can also detect what the latest version of Tauri is on the command line, using:

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
npm outdated @tauri-apps/cli
```

  </TabItem>
  <TabItem value="Yarn">

```shell
yarn outdated @tauri-apps/cli
```

  </TabItem>
  <TabItem value="pnpm">

```shell
pnpm outdated @tauri-apps/cli
```

  </TabItem>
  <TabItem value="Bun">

```shell
# Bun does not implement `outdated`
npm outdated @tauri-apps/cli
```

  </TabItem>
</Tabs>

Alternatively, if you are using the `vue-cli-plugin-tauri` approach:

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
npm install vue-cli-plugin-tauri@latest
```

  </TabItem>
  <TabItem value="Yarn Classic">

```shell
yarn upgrade vue-cli-plugin-tauri --latest
```

  </TabItem>
  <TabItem value="Yarn Berry">

```shell
yarn up vue-cli-plugin-tauri
```

  </TabItem>
  <TabItem value="pnpm">

```shell
pnpm update vue-cli-plugin-tauri --latest
```

  </TabItem>
  <TabItem value="Bun">

```shell
bun update vue-cli-plugin-tauri
```

  </TabItem>
</Tabs>

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

Alternatively, you can run the `cargo upgrade` command provided by [cargo-edit] which does all of this automatically.

[`cargo outdated`]: https://github.com/kbknapp/cargo-outdated
[tauri]: https://crates.io/crates/tauri/versions
[tauri-build]: https://crates.io/crates/tauri-build/versions
[cargo-edit]: https://github.com/killercup/cargo-edit
