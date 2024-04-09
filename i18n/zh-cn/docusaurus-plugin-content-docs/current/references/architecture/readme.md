---
sidebar_position: 1
toc_max_heading_level: 2
---

import { colors } from '@theme/Mermaid'
import { Mermaid } from 'mdx-mermaid/Mermaid';

# Tauri 架构

## 简介

Tauri 是一款组合性强的多语言通用工具包，可用于制作各种由 Rust 工具集和在 WebView 中渲染的 HTML 构成的桌面应用程序。采用 Tauri 构建的应用程序可以搭载任意数量的、可选的 JS API 和 Rust API，进而通过消息传递让 WebView 得以控制系统。开发者可以用他们自己的代码轻松扩展默认的 API 来桥接 WebView 和基于 Rust 的后端。

Tauri 应用程序可以拥有[自定义菜单](../../guides/features/menu.md)和[系统托盘式界面](../../guides/features/system-tray.md)。 它们可以按预期根据用户的操作系统进行[更新](../../guides/distribution/updater.md)和管理。 
由于使用了操作系统的 WebView，这些应用程序的体积[非常小](../benchmarks.md)；另一方面，它们不提供运行时，最终的二进制文件也是由 Rust 编译而成的，这使得[对 Tauri 应用程序进行逆向工程并不是一项简单的任务](./security.md)。

### Tauri 不是什么?

Tauri 不是一个轻量级的内核包装器。 相反，它在操作系统中直接使用 [WRY](#wry) 和 [TAO](#tao) 来执行系统调用的繁重工作。

Tauri 不是一个虚拟机或虚拟化环境。 相反，它是一个应用程序工具包，允许开发者制作基于 WebView 的操作系统应用程序。

## 核心生态系统

<!-- prettier-ignore-start -->

<Mermaid chart={`graph TB;
    subgraph 核心
    direction LR
    subgraph tauri
    direction TB
    tauri-runtime
    tauri-macros
    tauri-utils
    end
    %% This section should be organized from top to bottom
    tauri-build
    tauri-codegen
    tauri-runtime-wry
    end
    tauri-runtime-wry -.-> WRY
    subgraph 上游
    direction LR
    WRY
    TAO
    WRY -.-> TAO
    end
    style 核心 fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px
    style 上游 fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px
    style tauri fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
`} />

<!-- prettier-ignore-end -->

### [tauri](https://github.com/tauri-apps/tauri/tree/dev/core/tauri)

这是整合了所有物件的主要 crate，并且会将运行时、宏、实用程序和 API 集成到最终产物。编译时，它会读取 [`tauri.conf.json`](../../api/config.md) 文件，以便引入功能特性并进行应用程序的实际配置（甚至包括项目文件夹中的 `Cargo.toml` 文件）；运行时，它会处理脚本注入（用于 polyfills / prototype 修正），托管系统交互的 API，并且管理更新过程。

### [tauri-runtime](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-runtime)

这是 Tauri 本身和底层 WebView 库之间的胶水层

### [tauri-macros](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-macros)

通过 [`tauri-codegen`](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-codegen) crate 为上下文 (context)、处理器 (handler) 和命令 (command) 创建宏。

### [tauri-utils](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-utils)

一组能够在许多地方复用且提供了一些实用程序的通用代码，例如解析配置文件、检测平台三元组、注入内容安全策略 (CSP) 以及管理资源。

### [tauri-build](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-build)

在构建时，应用宏来装配 `cargo` 所需的一些特殊功能。

### [tauri-codegen](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-codegen)


嵌入、哈希和压缩资源，包括应用程序图标以及系统托盘图标。在编译时解析 [`tauri.conf.json`](../../api/config.md) 文件，并生成 Config 结构。

<!-- 原文中的 "hashes" 暂时不太清楚应该翻译成什么 (It's unclear what "hashes" should be translated to in the original text.) -->
<!-- Original text: Embeds, hashes, and compresses assets, including icons ... ... generates the Config struct. -->

### [tauri-runtime-wry](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-runtime-wry)

这个 crate 专门为 WRY 开放了直接的系统级交互，譬如打印、显示器检测以及其它窗口相关的任务。

## Tauri 工具

### [API](https://github.com/tauri-apps/tauri/tree/dev/tooling/api) (JavaScript / TypeScript)

一个 typescript 库，它为你创建 `cjs` 和 `esm` 的 JavaScript 端点，以便你导入前端框架，从而使 WebView 能够调用和监听后端活动。同时，它还支持纯粹的 typescript，因为对于某些框架而言，这样做显然更为“高效”。它利用了 WebView 和其主机之间的消息传递机制。

### [Bundler](https://github.com/tauri-apps/tauri/tree/dev/tooling/bundler) (Rust / Shell)

为它检测到或者被指明的平台构建 Tauri 应用程序的库。目前支持 macOS、Windows 和 Linux ———— 但在不久的将来也会支持移动端平台。可以在 Tauri 项目之外使用。

### [cli.rs](https://github.com/tauri-apps/tauri/tree/dev/tooling/cli) (Rust)

这个 Rust 可执行文件为所有需要 CLI 的活动提供了完整的接口。它在 macOS、Windows 和 Linux 上运行。

### [cli.js](https://github.com/tauri-apps/tauri/tree/dev/tooling/cli/node) (JavaScript)

使用 [`napi-rs`](https://github.com/napi-rs/napi-rs) 构建的 [`cli.rs`](https://github.com/tauri-apps/tauri/blob/dev/tooling/cli) 包装器，用于为各个平台构建 npm 包。

### [create-tauri-app](https://github.com/tauri-apps/create-tauri-app) (JavaScript)

一个工具包，使工程团队能够使用他们选择的前端框架（只要已配置）快速搭建一个新的 `tauri-apps` 项目。

## 上游 Crates

Tauri-Apps 组织从 Tauri 维持两个“上游” crates，即 TAO 用于创建和管理应用程序窗口，和 WRY 用于与窗口内嵌的 WebView 进行接口交互。

### [TAO](https://github.com/tauri-apps/tao)

这是一个用 Rust 编写的跨平台应用程序窗口创建库，支持 Windows, macOS, Linux, iOS 和 Android 等所有主要平台。作为 [winit](https://github.com/rust-windowing/winit) 的一个分支，我们已经扩展了它以满足我们自己的需求，如菜单栏和系统托盘。

### [WRY](https://github.com/tauri-apps/wry)

WRY 是 Rust 中的跨平台 WebView 渲染库，支持所有主要的桌面平台，如 Windows, macOS 和 Linux。Tauri 使用 WRY 作为抽象层，负责决定使用哪个 webview（以及如何进行交互）。

## 附加工具

### [tauri-action](https://github.com/tauri-apps/tauri-action)

为所有平台构建 Tauri 二进制文件的 GitHub 工作流程。即使没有设置 Tauri，甚至允许创建（非常基础的）Tauri 应用程序。

### [tauri-vscode](https://github.com/tauri-apps/tauri-vscode)

该项目通过几个不错的功能增强了 Visual Studio Code 界面。

### [vue-cli-plugin-tauri](https://github.com/tauri-apps/vue-cli-plugin-tauri) （已停止维护）

协助你非常快速地在 vue-cli 项目中安装 Tauri。

## 插件

[Tauri 插件指南](../../guides/features/plugin.md)

一般来说，插件是由第三方编写的（即使有可能存在官方支持的插件）。一款插件通常会做三件事：

1. 使 Rust 代码能够做“某事”。
2. 提供接口胶水代码，以便于集成到应用中。
3. 提供用于与 Rust 代码交互的 JavaScript API。

以下是 Tauri 插件的一些示例：

- [tauri-plugin-sql](https://github.com/tauri-apps/tauri-plugin-sql)
- [tauri-plugin-stronghold](https://github.com/tauri-apps/tauri-plugin-stronghold)
- [tauri-plugin-authenticator](https://github.com/tauri-apps/tauri-plugin-authenticator)

## 许可协议

Tauri 根据 MIT 或 Apache 2.0 许可证授权。如果您重新打包并修改任何源代码，则您有责任验证您是否遵守所有上游许可证的要求。Tauri 按现状提供，不明确声明适用于任何目的。

您可以在这里查阅我们的[软件材料清单](https://app.fossa.com/projects/git%2Bgithub.com%2Ftauri-apps%2Ftauri)。

## 接下来

[你的第一个 Tauri 应用程序](../../guides/getting-started/setup/README.mdx)

[开发周期](../../guides/development/development-cycle.md)

[发布](../../guides/distribution/publishing.md)

[更新](../../guides/distribution/updater.md)
