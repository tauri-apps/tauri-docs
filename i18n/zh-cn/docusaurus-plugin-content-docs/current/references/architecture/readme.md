---
sidebar_position: 1
toc_max_heading_level: 2
---

import { colors } from '@theme/Mermaid'
import { Mermaid } from 'mdx-mermaid/Mermaid';

# Tauri 架构

## 简介

Tauri 是一款组合性强的多语言通用工具包，可用于制作各种桌面应用程序。 其基于一系列 Rust 工具及 WebView 内渲染的 HTML 构成。 使用 Tauri 构建的应用可使用任意 JS 和 Rust API，通过消息传递让 WebView 得以控制系统。 Developers can extend the default API with their own functionality and bridge the Webview and Rust-based backend easily.

Tauri apps can have [custom menus](../../guides/features/menu.md) and [tray-type interfaces](../../guides/features/system-tray.md). They can be [updated](../../guides/distribution/updater.md) and are managed by the user's operating system as expected. They are [very small](../benchmarks.md) because they use the OS's webview. 它们不提供运行时，因为最终的二进制文件是从 Rust 编译的。 This makes the [reversing of Tauri apps not a trivial task](./security.md).

### Tauri 不是什么?

Tauri 不是一个轻量级的内核包装器。 Instead, it directly uses [WRY](#wry) and [TAO](#tao) to do the heavy lifting in making system calls to the OS.

Tauri 不是一款虚拟机或虚拟化环境。 Instead, it is an application toolkit that allows making Webview OS applications.

## 核心生态系统

<!-- prettier-ignore-start -->

<Mermaid chart={`graph TB; subgraph Core direction LR tauri TB tauri-runtime tauri-macros tauri-utils end %% This section should be organized from top to bottom tauri-build tauri-codegen tauri-runtime-wry tauri-runtime-wry -.-> WRY subgraph 上游 direction LR WRY TAO WRY -.-> TAO end style 核心 fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px style 上游 fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px style tauri fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px `} />

<!-- prettier-ignore-end -->

### [tauri](https://github.com/tauri-apps/tauri/tree/dev/core/tauri)

这是将所有组件拼到一起的 crate。 它将运行时、宏、实用程序和 API 集成为一款最终产品。 It reads the [`tauri.conf.json`](../../api/config.md) file at compile time to bring in features and undertake the actual configuration of the app (and even the `Cargo.toml` file in the project's folder). It handles script injection (for polyfills / prototype revision) at runtime, hosts the API for systems interaction, and even manages the updating process.

### [tauri-runtime](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-runtime)

The glue layer between Tauri itself and lower-level webview libraries.

### [tauri-macros](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-macros)

通过 [`tauri-codegen`为上下文创建宏，处理器和命令](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-codegen) crate

### [tauri-utils](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-utils)

在许多地方重用的通用代码，并提供有用的实用程序，例如解析配置文件、检测平台三元组、注入 CSP 和管理资产。

### [tauri-build](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-build)

Applies the macros at build-time to rig some special features needed by `cargo`.

### [tauri-codegen](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-codegen)

Embeds, hashes, and compresses assets, including icons for the app as well as the system tray. Parses [`tauri.conf.json`](../../api/config.md) at compile time and generates the Config struct.

### [tauri-runtime-wry](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-runtime-wry)

This crate opens up direct systems-level interactions specifically for WRY, such as printing, monitor detection, and other windowing-related tasks.

## Tauri 工具

### [API](https://github.com/tauri-apps/tauri/tree/dev/tooling/api) (JavaScript / TypeScript)

一个 typescript 库，它创建 `cjs` 和 `esm` JavaScript 端点，供您导入前端框架，以便 Webview 可以调用和监听后端活动。 还以纯打字稿形式发布，因为对于某些框架来说这是更优化的。 它使用 webviews 到其主机的消息传递。

### [Bundler](https://github.com/tauri-apps/tauri/tree/dev/tooling/bundler) (Rust / Shell)

为它检测到或被告知的平台构建 Tauri 应用程序的库。 目前支持 macOS、Windows 和 Linux - 但在不久的将来也将支持移动平台。 可以在 Tauri 项目之外使用。

### [cli.rs](https://github.com/tauri-apps/tauri/tree/dev/tooling/cli) (Rust)

这个 Rust 可执行文件为所有需要 CLI 的活动提供了完整的接口。 它在 macOS、Windows 和 Linux 上运行。

### [cli.js](https://github.com/tauri-apps/tauri/tree/dev/tooling/cli/node) (JavaScript)

使用 [`napi-rs`](https://github.com/napi-rs/napi-rs) 构建的 [`cli.rs`](https://github.com/tauri-apps/tauri/blob/dev/tooling/cli) 包装器，用于为各个平台构建 npm 包。

### [create-tauri-app](https://github.com/tauri-apps/create-tauri-app) (JavaScript)

一个工具包，使工程团队能够使用他们选择的前端框架(只要已配置) 快速搭建一个新的 `tauri-apps` 项目。

## 上游速率

Tauri-Apps组织从Tauri维持两个“上游”箱，即TAO 用于创建和管理应用程序窗口， 和WRY 以在窗口内生存的网页视图接口。

### [TAO](https://github.com/tauri-apps/tao)

Rust 中的跨平台应用程序窗口创建库，支持 Windows、macOS、Linux、iOS 和 Android 等所有主要平台 Written in Rust, it is a fork of [winit](https://github.com/rust-windowing/winit) that we have extended for our own needs - like menu bar and system tray.

### [WRY](https://github.com/tauri-apps/wry)

WRY 是 Rust 中的跨平台 WebView 渲染库，支持 Windows、macOS 和 Linux 等所有主要桌面平台。 Tauri 使用 WRY 作为抽象层，负责确定使用哪个 webview(以及如何进行交互)。

## 附加工具

### [tauri-action](https://github.com/tauri-apps/tauri-action)

为所有平台构建 Tauri 二进制文件的 GitHub 工作流程。 即使没有设置 Tauri，甚至允许创建(非常基本的) Tauri 应用程序。

### [tauri-vscode](https://github.com/tauri-apps/tauri-vscode)

该项目通过几个不错的功能增强了 Visual Studio Code 界面。

### [vue-cli-plugin-tauri](https://github.com/tauri-apps/vue-cli-plugin-tauri)

允许您在 vue-cli 项目中非常快速地安装 Tauri。

## 插件

[Tauri 插件指南](../../guides/features/plugin.md)

一般来说，插件是由第三方创作的 (即使可能有官方支持的插件)。 一款插件通常会做三件事：

1. 使 Rust 代码能够做“某事”。
2. 提供界面胶水以便于整合到应用中。
3. 提供用于与 Rust 代码交互的 JavaScript API。

以下是 Tauri 插件的一些示例：

- [tauri-plugin-sql](https://github.com/tauri-apps/tauri-plugin-sql)
- [tauri-plugin-stronghold](https://github.com/tauri-apps/tauri-plugin-stronghold)
- [tauri-plugin-authenticator](https://github.com/tauri-apps/tauri-plugin-authenticator)

## 许可协议

Tauri 以 MIT 或 Apache 2.0 许可。 如果您重新打包并修改任何源代码，则您有责任验证您是否遵守所有上游许可证。 Tauri 按原样提供，没有明确声明适用于任何目的。

您可以在这里阅读我们的[软件材料清单](https://app.fossa.com/projects/git%2Bgithub.com%2Ftauri-apps%2Ftauri)。

## 接下来

[您的第一个Tauri应用程序](../../guides/getting-started/setup/README.mdx)

[开发周期](../../guides/development/development-cycle.md)

[发布](../../guides/distribution/publishing.md)

[更新](../../guides/distribution/updater.md)
