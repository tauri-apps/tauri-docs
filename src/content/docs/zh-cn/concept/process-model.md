---
title: 进程模型
sidebar:
  order: 0
  i18nReady: true
---

Tauri 采用了类似于 Electron 或许多现代网页浏览器的多进程架构。本指南探讨了这种设计选择背后的原因以及它为何对编写安全应用程序至关重要。

## 为什么使用多个进程？

在图形用户界面（GUI）应用程序的早期阶段，通常使用单个进程来执行计算、绘制界面和响应用户输入。正如你可能猜到的，这意味着长时间运行的昂贵计算会使用户界面无响应，或者更糟糕的是，应用程序的一个组件发生故障会导致整个应用程序崩溃。

显然，需要一种更具弹性的架构，应用程序开始在不同的进程中运行不同的组件。这更好地利用了现代多核 CPU，并创造了更安全的应用程序。一个组件的崩溃不会再影响整个系统，因为组件在不同的进程中隔离开来。如果一个进程进入无效状态，我们可以轻松重启它。

我们还可以通过仅向每个进程分配最低限度的权限来限制潜在漏洞的影响范围，给予它们完成工作的足够权限。这种模式被称为[最小权限原则]，在现实世界中你经常会看到。如果你请来一个园丁修剪你的树篱，你会给他们你的花园的钥匙。你不会给他们你房子的钥匙；他们为什么需要访问那个呢？同样的概念适用于计算机程序。我们给他们的访问权限越少，如果被攻破，他们造成的伤害就越小。

## 核心进程

每个 Tauri 应用程序都有一个核心进程，作为应用程序的入口点，并且是唯一一个拥有完全操作系统访问权限的组件。

核心的主要责任是利用该权限创建和协调应用程序窗口、系统托盘菜单或通知。Tauri 实现了必要的跨平台抽象，使这一过程变得简单。它还通过核心进程路由所有[进程间通信]，允许你在一个中心位置拦截、过滤和操作 IPC 消息。

核心进程还应负责管理全局状态，例如设置或数据库连接。这使你能够轻松同步窗口之间的状态，并保护你的商业敏感数据免受前端窥探。

我们选择 Rust 来实现 Tauri，因为它的[所有权]概念在保证内存安全的同时保持了优异的性能。

<figure>

```d2 sketch pad=50
direction: right

Core: {
  shape: diamond
}

"事件与命令 1": {
  WebView1: WebView
}

"事件与命令 2": {
  WebView2: WebView
}

"事件与命令 3": {
  WebView3: WebView
}

Core -> "事件与命令 1"{style.animated: true}
Core -> "事件与命令 2"{style.animated: true}
Core -> "事件与命令 3"{style.animated: true}

"事件与命令 1" -> WebView1{style.animated: true}
"事件与命令 2" -> WebView2{style.animated: true}
"事件与命令 3" -> WebView3{style.animated: true}
```

<figcaption>Tauri 进程模型的简化表示。一个核心进程管理一个或多个 WebView 进程。</figcaption>
</figure>

## WebView 进程

核心进程并不直接渲染实际的用户界面（UI）；它启动 WebView 进程，这些进程利用操作系统提供的 WebView 库。WebView 是一个类似浏览器的环境，可以执行你的 HTML、CSS 和 JavaScript。

这意味着你在传统网页开发中使用的大多数技术和工具都可以用来创建 Tauri 应用程序。例如，许多 Tauri 示例是使用 [Svelte] 前端框架和 [Vite] 打包工具编写的。

安全最佳实践同样适用；例如，你必须始终清理用户输入，绝不要在前端处理机密信息，并且理想情况下将尽可能多的业务逻辑推迟到核心进程，以保持你的攻击面较小。

与其他类似解决方案不同，WebView 库**不**包含在你的最终可执行文件中，而是在运行时动态链接[^1]。这使你的应用程序*显著*更小，但也意味着你需要考虑平台差异，就像传统网页开发一样。

[^1]: 目前，Tauri 在 Windows 上使用 [Microsoft Edge WebView2]，在 macOS 上使用 [WKWebView]，在 Linux 上使用 [webkitgtk]。

[最小权限原则]: https://zh.wikipedia.org/wiki/%E6%9C%80%E5%B0%8F%E6%9D%83%E9%99%90%E5%8E%9F%E5%88%99
[进程间通信]: /zh-cn/concept/inter-process-communication/
[所有权]: https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html
[Microsoft Edge WebView2]: https://docs.microsoft.com/en-us/microsoft-edge/webview2/
[WKWebView]: https://developer.apple.com/documentation/webkit/wkwebview
[webkitgtk]: https://webkitgtk.org
[Svelte]: https://svelte.dev/
[Vite]: https://vitejs.dev/
