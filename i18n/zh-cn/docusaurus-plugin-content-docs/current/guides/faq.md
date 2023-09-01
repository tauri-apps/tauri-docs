---
title: 常见问题
sidebar_position: 10
description: 常见问题的解决方法
---

## 如何使用 Tauri 的未发布修改?

要使用 GitHub（前沿版本）的 Tauri，您需要更改项目中的 `Cargo.toml` 文件，并更新 CLI 和 API。

<details>
  <summary>从源仓库拉取 Rust crate</summary>

将此附加到您的 `Cargo.toml` 文件：

```toml title=Cargo.toml
[patch.crates-io]
tauri = { git = "https://github.com/tauri-apps/tauri", branch = "dev" }
tauri-build = { git = "https://github.com/tauri-apps/tauri", branch = "dev" }
```

这将强制所有依赖使用 `tauri` 和 `tauri-build` 时从 Git 拉取 ，而不是 crates.io。

</details>

<details>
  <summary>从源代码使用 Tauri CLI</summary>

如果您使用的是 Cargo CLI，则可以直接从 GitHub 安装它：

```shell
cargo install --git https://github.com/tauri-apps/tauri --branch dev tauri-cli
```

如果使用的是 `@tauri-apps/cli` 软件包，则需要克隆存储库并生成它：

```shell
git clone https://github.com/tauri-apps/tauri
git checout dev
cd tauri/tooling/cli/node
yarn
yarn building
```

要使用它，请直接使用 node 运行：

```shell
node /path/to/tauri/tooling/cli/node/tauri.js dev
node /path/to/tauri/tooling/cli/node/tauri.js building
```

或者，您可以直接使用 Cargo 运行您的应用：

```shell
cd src-tauri
cargo run --no-default-features # instead of tauri dev
cargo build # instead of tauri build - won't bundle your app though
```

</details>

<details>
  <summary>从源代码使用 Tauri API</summary>

建议在 GitHub 使用 Tauri crate 时也使用 Tauri API 包（尽管可能不需要）。 若要从源代码生成它，请运行以下脚本：

```shell
git clone https://github.com/tauri-apps/tauri
git checkout dev
cd tauri/tooling/api
yarn
yarn build
```

现在您可以使用 yarn 链接它：

```shell
cd dist
yarn link
cd /path/to/your/project
yarn link @tauri-apps/api
```

或者您可以更改您的 package.json 直接指向dist 文件夹：

```json title=package.json
{
  "dependencies": {
    "@tauri-apps/api": "/path/to/tauri/tooling/api/dist"
  }
}
```

</details>

## 我应该使用 Node 还是 Cargo？ {#node-or-cargo}

尽管通过 Cargo 安装 CLI 是首选选项，但在安装时它必须从头开始编译整个二进制文件。 如果您在 CI 环境中或在非常慢的计算机上，则最好选择其他安装方法。

由于CLI 是在 Rust 编写的，它自然可以通过 [crates.io][] 进行安装，并且可以与 Cargo 一起安装。

我们还将 CLI 编译为原生 node.js 插件，并通过 [npm][] 分发它。 与 Cargo 安装方法相比，有几个优点：

1. CLI 已预编译，可缩短安装时间
2. 可以在 package.json 文件中锁定版本
3. 如果您围绕 Tauri 开发自定义工具，则可以将 CLI 作为常规 JavaScript 模块导入
4. 您可以使用 JavaScript 包管理器安装 CLI

## 推荐的 Browserlist

我们建议对 browserlist 和构建目标使用 `es2021`, `last 3 Chrome versions`, 和 `safari13` 。 Tauri 可以借用操作系统的原生渲染引擎（macOS上的WebKit，Windows上的WebView2和Linux上的WebKitGTK）。

## 在 Linux 上使用 Homebrew 时的构建冲突

Linux上的 Homebrew 包含它自己的 `pkg-config` (一个在系统上查找库的工具)。 这可能会导致在为 Tauri 安装相同的 `pkg-config` 软件包时发生冲突(通常通过软件包管理器安装，如 `apt`)。 当你尝试构建 Tauri 应用程序时，会尝试调用 `pkg-config` ，并且最终调用了 Homebrew 中的 `pkg-config`。 如果不使用 Homebrew 来安装 Tauri 的依赖项，则可能会导致错误。

错误信息 _通常_ 包含 `error: failed to run custom build command for X` - `error: failed to run custom build command for X.` 请注意，如果需要的依赖关系根本没有安装，您可能会看到类似的错误。

这个问题有两种解决办法：

1. [卸载 Homebrew][]
2. 在构建 Tauri 应用程序之前设置环境变量 `PKG_CONFIG_PATH` 指向正确的 `pkg-config`

[crates.io]: https://crates.io/crates/tauri-cli
[npm]: https://www.npmjs.com/package/@tauri-apps/cli
[卸载 Homebrew]: https://docs.brew.sh/FAQ#how-do-i-uninstall-homebrew
