---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'

# 更新依赖关系

## 更新 npm 包

如果您正在使用 `tauri` 包：

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
npm install @tauri-apps/cli@latest @tauri-apps/api@latest
```

  </TabItem>
  <TabItem value="Yarn Classic">

```shell
npm install @tauri-apps/cli@latest @tauri-apps/api@latest
```

  </TabItem>
  <TabItem value="Yarn Berry">

```shell
npm install @tauri-apps/cli@latest @tauri-apps/api@latest
```

  </TabItem>
  <TabItem value="pnpm">

```shell
npm install @tauri-apps/cli@latest @tauri-apps/api@latest
```

  </TabItem>
</Tabs>

您还可以通过以下方式检测最新版本的 Tauri 在命令行上：

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
pnpm add -D @tauri-apps/cli
```

  </TabItem>
  <TabItem value="Yarn">

```shell
pnpm add -D @tauri-apps/cli
```

  </TabItem>
  <TabItem value="pnpm">

```shell
pnpm add -D @tauri-apps/cli
```

  </TabItem>
</Tabs>

或者，如果您正在使用 `vue-cli-plugin-tauri` 方法：

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
npm install vue-cli-plugin-tauri@latest
```

  </TabItem>
  <TabItem value="Yarn Classic">

```shell
npm install vue-cli-plugin-tauri@latest
```

  </TabItem>
  <TabItem value="Yarn Berry">

```shell
npm install vue-cli-plugin-tauri@latest
```

  </TabItem>
  <TabItem value="pnpm">

```shell
npm install vue-cli-plugin-tauri@latest
```

  </TabItem>
</Tabs>

## 更新 Cargo 包

您可以用 [`Cargo outdated`][] 或在 crates.io 页面上检查过期的包： [tauri][] / [tauri-build][]

打开 `src-tauri/Cargo.toml` 并更改 `tauri` 和 `tauri-build`

```toml
[build-dependencies]
tauri-build = "%version%"

[dependencies]
tauri = { version = "%version%" }
```

其中 `%version%` 是上面相应的版本号。 <!-- TODO: (You can just use the `MAJOR.MINOR`) version, like `0.9`. -->

然后执行以下操作：

```shell
cd src-tauri
cargo update
```

或者，您可以运行 `cargo upgrade` 命令，由 [ cargo-edit][] 提供，这将自动完成所有这一切。

[`Cargo outdated`]: https://github.com/kbknapp/cargo-outdated
[tauri]: https://crates.io/crates/tauri/versions
[tauri-build]: https://crates.io/crates/tauri-build/versions
[ cargo-edit]: https://github.com/killercup/cargo-edit
