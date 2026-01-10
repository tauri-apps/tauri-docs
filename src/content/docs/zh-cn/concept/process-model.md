---
title: 进程模型
sidebar:
  order: 0
  i18nReady: true
---

Tauri 采用了类似于 Electron 或许多现代网页浏览器的多进程架构。本指南探讨了这种设计选择背后的原因以及它为何对编写安全应用程序至关重要。

## 为什么使用多个进程？

在早期的 GUI（图形用户界面）应用时代，通常使用单个进程来执行计算、绘制界面和响应用户输入。正如你所料，这意味着一旦应用执行耗时较长的重度计算，界面就会卡死；更糟糕的是，一旦某个组件出故障，整个应用都会崩溃。

显然，需要一种更具弹性的架构，于是，应用开始将不同的功能组件放在独立的进程中运行。这种设计不仅能更好地利用现代多核 CPU 的性能，还能让应用变得更安全。因为组件之间相互隔离，某个组件崩溃并不会波及全局。如果某个进程状态异常，我们直接重启它就可以恢复。

此外，我们还可以根据[最小权限原则]，只给每个进程分配完成任务所需的最低权限。这在现实生活中很常见：如果你请园丁来修剪树篱，你只会给他花园的钥匙，而不会把房门的钥匙也交给他——因为他根本不需要进屋。计算机程序也是同理：我们给出的访问权限越少，万一程序被攻破时，潜在的破坏就越小。

## 核心进程

每个 Tauri 应用都有一个核心进程，它是应用的入口点，也是唯一拥有完整操作系统访问权限的组件。

核心进程的主要职责是利用这些权限来创建和管理应用窗口、系统托盘菜单或通知。Tauri 帮你做好了复杂的跨平台抽象，让这些操作变得非常简单。同时，所有的[进程间通信]（IPC）都会经过核心进程进行路由，方便你在中心位置对消息进行拦截、过滤或处理。

核心进程还负责管理全局状态，比如应用设置或数据库连接。这样你就能轻松地在不同窗口间同步状态，并防止前端脚本窥探到商业敏感数据。

我们选择用 Rust 来实现 Tauri，正是因为 Rust 的[所有权]概念既能保证出色的内存安全性，又能兼顾高性能。

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

<figcaption>Tauri 进程模型简化示意图。由一个核心进程管理一个或多个 WebView 进程。</figcaption>
</figure>

## WebView 进程

核心进程本身并不负责渲染界面，它会启动 WebView 进程。这些进程调用的是操作系统自带的 WebView 库（可以把 WebView 看作一个可以执行 HTML、CSS 和 JavaScript 的浏览器环境）。

这意味着你在传统网页开发中使用的大多数技术和工具都可以用来创建 Tauri 应用程序。例如，许多 Tauri 示例是使用 [Svelte] 前端框架和 [Vite] 打包工具编写的。

当然，Web 开发的安全最佳实践在这里同样适用。例如：永远要过滤用户输入，绝不要在前端处理敏感机密信息，并且尽可能把业务逻辑写在核心进程里，以缩小被攻击的风险。

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
