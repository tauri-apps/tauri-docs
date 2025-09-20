---
title: Tauri v2 Beta 版本发布公告
date: 2024-02-02
authors: [lucasfernog, kamaslau]
excerpt: Tauri v2 已经准备好向稳定阶段进发啦！2.0.0-beta.0 版本已被发布。
banner:
  content: |
    你正在阅读 Tauri 2.0 预发布版本的博客内容 -
    <a href="https://tauri.app">前往 Tauri 1.0 站点</a>
---

![Hero Image](./tauri_2_0_0_alpha_0/header.png)

Tauri v2 版本的相关工作已经进行了[一年有余](/blog/tauri-mobile-alpha)，如今已经准备好向稳定版本进发了！作为[工作路线图]（/blog/roadmap-to-tauri-2-0#beta）的里程碑事件，我们已经发布了[Tauri v2.0.0-beta.0](https://github.com/tauri-apps/tauri/releases/tag/tauri-v2.0.0-beta.0)。

Tauri v2 版本引入了移动端支持，以及社群要求的多项新功能。让我们大致了解以下主要变化：

## 移动端开发

同时开发同一个应用的桌面端和移动端现在更加方便了。Tauri v2 版本在跨平台开发方面进展巨大——我们现已支持 Android 和 iOS。你可以将现有的桌面端程序无缝集成、分发为移动端，调用相应平台的原生 API，享受 Tauri 命令行工具带来的优秀开发体验。

## 权限控制

v1 版本的白名单机制在监管前端对非必要的 API 调用方面是一个好工具，然而它的配置有失粗放，且缺乏对多窗口的支持。2.0.0-beta.0 版本带来了基于调用控制列表（Access Control List）进行命令调用的新方式，实现了命令放行，以及为特定窗口（甚至远端 URL）进行作用域限制。

## 新功能特性

v2 版本更新包含了许多在 Tauri 社群中呼声颇高的功能：

### 进程间通信机制重做

v1 版本中负责在 Rust 和 JavaScript 间传递消息的进程间通信（IPC）层采用了一个非常原始的 webview 接口，迫使我们将所有消息内容都序列化为字符串，且发送响应的速度超级慢。v2 版本中的新 IPC 机制实现基于自研的通信协议，其功能和性能近似于 webview 处理基于 HTTP 协议的常规通信（的机制），详见该 [pull request](https://github.com/tauri-apps/tauri/pull/7170#issuecomment-1583279023)。

此外，还新增了一个信道 API，可用于快速从 Rust 发送消息到应用前端。

### 多 webview 支持

Tauri 现在支持在同一个窗口内添加多个 webview 了。这也是最备受期待的[功能需求](https://github.com/tauri-apps/tauri/issues/2709)。

需要注意的是，这项功能当下尚未被完成，而被隐藏在 `unstable` Cargo 特性标签下，我们还在与社群一起评议 API 设计方案。

### 控制菜单栏和状态栏图标的 JavaScript APIs 

之前，你只能通过 Rust 来操作窗口菜单栏和状态栏的图标。现在你可以使用 JavaScript API 来更方便地操作了。此外，我们还为管理 macOS 的应用菜单添加了特定的 API。

### 上下文（右键）菜单

原生上下文菜单是[功能需求](https://github.com/tauri-apps/tauri/issues/4338)中最热门的候选项之一。借助 [muda](https://github.com/tauri-apps/muda) 的能力，这项功能终于在 Rust 和 JavaScript API 下可用了。

### 窗口（Window） APIs

（v2 版本）集成了一些新的 window API，为你的应用增加了可配置性。

### 移动设备 APIs

v2 版本带来了一些对于移动端原生 API 的支持。目前已经实现了通知、会话、NFC、条码识别、生物身份授权、粘贴板，以及深层链接等。更多的 API 会在稳定版本发布后追加。

## 质量审查

为确保 v2 的安全性，我们目前正在（对项目）进行审查，与 v1 发布稳定版本时一样。

## 稳定性

虽然 API 尚未进入稳定阶段，但后续不会发生重大变动。待审查及相应调整完成后，我们会（将 Beta 版本）提升为 RC 版本，继而尽快发布稳定版本，保持关注哦！
