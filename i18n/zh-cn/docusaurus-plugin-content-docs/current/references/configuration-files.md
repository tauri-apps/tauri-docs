---
sidebar_position: 3
---

# 配置文件

因为 Tauri 是一款应用构建工具包，所以会有很多的项目配置文件。 您可能常会接触到的文件有 `tauri.conf.json`、`package.json` 和 `Cargo.toml`。 我们将在此页简述各个文件以指引您修改您想要修改的配置。

## Tauri 配置

这些文件包括 `tauri.conf.json`、`package.json` 和 `Cargo.toml`。 默认情况下是 `tauri.conf.json`。 请参阅下方的备注以了解详情。

这是 Tauri 进程所使用的文件。 You can define build settings (such as the [command run before `tauri build`][before-build-command] or [`tauri dev`][before-dev-command]), set the [name and version of your app][package-config], [control the Tauri process][tauri-config], and configure any plugin settings. 您可以在 [`tauri.conf.json` API 参考中][]查阅所有的选项。

:::note

Tauri 配置的默认格式为 `.json`。 对 `.json5` 或 `.toml` 格式的支持可通过在 `Cargo.toml` 的 `tauri` 和 `tauri-build` 依赖中分别添加 `config-json5` 或 `config-toml` 的方式开启。 请注意，仅 Tauri 1.1 及更高版本支持 `.toml` 格式。

```toml title=Cargo.toml
[build-dependencies]
// highlight-next-line
tauri-build = { version = "1.0.0", features = [ "config-json5" ] }

[dependencies]
serde_json = "1.0"
serde = { version = "1.0", features = ["derive"] }
// highlight-next-line
tauri = { version = "1.0.0", features = [ "api-all", "config-json5" ] }
```

The structure and values are the same across all formats, however, the formatting should be consistent with the respective file's format.

:::

## `Cargo.toml`

Cargo 清单文件用于声明您的应用程序依赖、应用元数据和其他 Rust 相关功能。 若您不需要 Rust 进行后端开发，您可能不需要修改此文件。但了解它的存在意义及其功能还是很重要的。

下方是一个 Tauri 项目的示例 `Cargo.toml` 文件：

```toml title=Cargo.toml
[package]
name = "app"
version = "0.1.0"
description = "A Tauri App"
authors = ["you"]
license = ""
repository = ""
default-run = "app"
edition = "2021"
rust-version = "1.57"

[build-dependencies]
tauri-build = { version = "1.0.0" }

[dependencies]
serde_json = "1.0"
serde = { version = "1.0", features = ["derive"] }
tauri = { version = "1.0.0", features = [ "api-all" ] }

[features]
# by default Tauri runs in production mode
# when `tauri dev` runs it is executed with `cargo run --no-default-features` if `devPath` is an URL
default = [ "custom-protocol" ]
# this feature is used for production builds where `devPath` points to the filesystem
# DO NOT remove this
custom-protocol = [ "tauri/custom-protocol" ]
```

您要注意的最主要部分是 `tauri-build` 及 `tauri` 依赖。 Generally, they must both be on the latest minor versions as the Tauri CLI, but this is not strictly required. 如果你在运行你的应用时遇到问题，应检查 `tauri` 和 `tauri-cli` 是否是最新的次要版本上。

Cargo 版本号使用[语义化版本（SemVer）][]控制。 运行 `cargo update` 指令将拉取最新可用的语义版本依赖。 For example, if you specify `1.0.0` as the version for `tauri-build`, Cargo will detect and download version `1.0.4` because it is the latest Semver-compatible version available. 当出现突破性更改时，Tauri 将更新主要版本号。 你能够安全地升级到最新的次要版本和补丁版本，而不必担心你的代码中会有破坏性改变。

If you want to use a specific crate version you can use exact versions instead by prepending `=` to the version number of the dependency:

```
tauri-bution = Power version = "=1.0.0" }
```

An additional thing to take note of is the `features=[]` portion of the `tauri` dependency. 执行 `tauri dev` 以及 `tauri build` 会基于你在 `tauri.conf.json` 中的属性 `"allowlist"` 设置需要开启的功能进行自动管理。

当您构建应用程序时，将生成 `Cargo.lock` 文件。 This file is used primarily for ensuring that the same dependencies are used across machines during development (similar to `yarn.lock` or `package-lock.json` in Node.js). Since you are developing a Tauri app, this file should be committed to your source repository (only Rust libraries should omit committing this file).

要了解更多有关 `Cargo.toml` 的信息，您可以参阅其[官方文档][cargo-manifest]。

## `package.json`

这是Node.js使用的软件包文件。 如果使用节点开发了Tauri应用的前端。 基于s的技术(例如 `npm`, `yarn`, 或者 `pnpm`) 此文件用于配置前端依赖关系和脚本。

一个 Tauri 项目的 `package.json` 文件的示例可能看起来像这样一些东西：

```json title=package.json
{
  "scripts": {
    "dev": "command-for-your-framework", # 您的框架命令
    "tauri": "tauri"
  },
  "dependencies": {
    "@tauri-apps/api": "^1.0",
    "@tauri-apps/cli": "^1.0"
  }
}
```

通常使用 `"scripts"` 部分来存储用于启动您的 Tauri 应用程序所使用的前端的命令。 上述文件指定 `dev` 命令，您可以使用 `yarn dev` 或 `npm run dev` 启动前端框架。

依赖对象声明了当运行 `yarn` 或 `npm install` 时 Node.js 应该安装哪些依赖（在这种情况下是通过 Tauri CLI 和 API）。

除了 `package.json` 文件外，您可以看到 `yarn.lock` 文件或 `package-lock.json` 文件。 这些文件有助于确保当您稍后下载依赖关系时，您将得到与开发过程中使用的完全相同的版本(类似于 `Cargo.lock`

要了解更多关于 `package.json` 的信息，您可以在 [官方文档][npm-package] 中阅读更多信息。

[`tauri.conf.json` API 参考中]: ../api/config.md
[before-build-command]: ../api/config.md#buildconfig.beforebuildcommand
[语义化版本（SemVer）]: https://semver.org
[cargo-manifest]: https://doc.rust-lang.org/cargo/reference/manifest.html
[npm-package]: https://docs.npmjs.com/cli/v8/configuring-npm/package-json
[before-dev-command]: ../api/config.md#buildconfig.beforedevcommand
[package-config]: ../api/config#packageconfig
[tauri-config]: ../api/config#tauriconfig
