---
sidebar_position: 2
---

# 安全

本指南将向您诠释让您不进行任何配置，就能让您、您的应用、和您的用户更加安全的 Tauri 设计背后所蕴含的高级概念和安全特性。

:::info Note
虽然我们会抓住一切机会帮助您加固您的应用程序 - 但总是会有像 BIOS 攻击、\[Rowhammer\](https://zh.wikipedia.org/zh-hans/Rowhammer) 和不断被发现的 (最好的情况下，被负责任地披露) 操作系统漏洞。

此外，开发团队的投机取巧可能会泄露敏感信息，或留下漏洞，向攻击者敞开大门。 安全永无止境，您的用户指望着您保护他们。

因此，我们强烈建议您花时间去思考您应用每行代码背后的安全性，特别是在更易受攻击的用户设备上时运行的时候。

若您需要帮助或需要代码评审，欢迎您联系 Tauri 团队进行安全咨询。
:::

## 安全研究

若您发现 Tauri 有安全或其他问题，请务必不要公开您的发现， 而请直接联系我们的安全团队：security@tauri.app

虽然我们还没有安全赏金的预算，但我们在某些情况下还是会考虑利用我们有限的资源回报您的负责披露。

## 无需服务器

Tauri 让您构建一款使用 Web 技术搭建用户界面的应用程序，而无需您使用服务器与后端通信。 即使您使用动态导入一类的高级技术或将工作量转移至后端，流量都无法经由 TCP 端口或外部进程嗅探 - 因为流量并不在那儿。 这不仅仅大大减少您二进制文件的物理及虚拟足迹，同时还减少潜在攻击向量的攻击面。

## Rust 的语言特性

通过采用以内存安全与速度闻名的编程语言，Tauri 完全抹除了一系列传统攻击的存在。 它完全抹除了悬空指针的存在。

## 动态预编译 (AOT)

Tauri 应用启动时将多次进行编译。 通过使用我们的动态预编译器，您可以生成每个会话都不同的代码引用，但技术上一致的代码单元。

## 函数加固

### 函数 ASLR

函数地址空间布局随机化 (Address Space Layout Randomization) 技术将在运行时随机调整函数名称，且可以实现 OTP 哈希功能。这样将永远不会出现相同的会话。 我们在会启动时，或可选在每次执行后，随机生成函数名称。 每个函数指针均使用 UID 以防止静态攻击。

### 神风式函数注入

这种使用`事件` API 端点的高级函数 ASLR 技术是 Rust 在运行时载入进 WebView 的闭包 Promise (与随机句柄)，其接口在 Promise 处理程序被锁定。执行完毕后便设为 null。

### 不许过桥

事件桥梁仅可用于向命名代理传递信息及指令，而无法传递可能不安全的函数。

### 单次填充令牌及哈希

使用 OTP 盐哈希处理重要信息，而您可以在用户界面和 Rust 后端间加密信息。 我们正研究使用其他熵来源的可能，如优秀的[无限噪音真随机数发生器](https://13-37.org/en/shop/infinite-noise-trng/)。

## 系统特性

### 允许 API

您可以挑选哪些可用于 UI 和 Rust 的 API 函数。 若没有启用，您的应用未将不会包括启用函数的代码。这可以减少您的二进制文件大小及攻击面。 此功能需要您自己挑选，故您需要有意识地选择来加固您的应用。

### 内容安全策略管理

未经授权的代码执行在内容安全策略的防护下已经成了一段历史。 Tauri 可以将策略注入到用户界面的 `index.html`。而在当使用本地服务器时，它同时会将标头发送到 UI 或连接到它的其他客户端。

### 反编译很难

这意味着与 Electron 的 ASAR 文件不同，您的应用无法被轻松地反编译，这需要经过专业培训并投入大量的时间才行。

## 生态系统

### 构建管道和制品验证

源代码制品的发行过程高度自动化，但此流程需要手动启动和人工审核。 Our current release strategy uses a combination of GitHub Actions and IOTA Tangle publication

### 弹性合并请求及审批流程

我们 WG-TECH 审查代码更改，分类 PR，确保一切都是最新的。 当是时候发布新版本时，一名维护者在 dev 上标记新版本，并需要：

- 验证核心
- 运行烟雾测试
- 审计 crate 和 npm 安全
- 生成更新日志
- 生成制品
- 将校验和发布到 IOTA
- 生成草稿发布版本

然后维护者审查发行笔记，必要时进行编辑后更新新版本。

## 今后工作

### 二进制文件签名

Because the entire project is shipped within a monolithic binary, code can be signed for all distributables. (Currently using external tooling, but we are actively working on making the bundler a one-stop-shop.) 这使得黑客几乎不可能在没有操作系统注意的情况下更改已安装的应用程序。 [引用](https://github.com/electron/asar/issues/123)

### 生成后分析

Use industrial-grade pentester-tooling (via our forthcoming Tauri-Frida GUI) to discover and fix security weaknesses in your final binaries.

### 生成后强化

After the build is before the delivery and Tauri will provide you with tools never seen before. Stay tuned!

### 审计

我们正在进行第一次外部审计。 完成后，我们将在这里发表结果。
