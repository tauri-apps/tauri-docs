---
title: Tauri 哲学
i18nReady: true
---

Tauri 是一个工具包，可以帮助开发人员为主要的桌面平台制作应用程序——几乎可以使用任何现有的前端框架。核心是用 Rust 构建的，CLI 利用 Node.js 使 Tauri 成为一个真正的多语言方法来创建和维护伟大的应用程序。

<iframe
    style="width: 100%; aspect-ratio: 16/9;"
    src="https://www.youtube-nocookie.com/embed/UxTJeEbZX-0?si=mwQUzXb6mmCg7aom"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
></iframe>

## 安全优先

在当今世界，每个真实的威胁模型都假设用户的设备已经被入侵。这让应用程序开发人员陷入了一个复杂的境地，因为如果设备已经处于危险之中，如何能让软件可信呢？

我们采取的是纵深防御。我们希望你能采取一切可能的预防措施来减少你面对攻击者的表面积。Tauri 允许你选择要发布的 API 端点，无论你是否希望在应用中内置本地主机服务器，它甚至可以在运行时随机化功能句柄。这些技术和其他技术构成了增强您和您的用户能力的安全基线。

通过使静态攻击变得极其困难和将系统彼此隔离来减慢攻击者的速度是游戏的名称。如果您来自电子生态系统，请放心，默认情况下 Tauri 只提供二进制文件，而不是 ASAR 文件。

通过选择以安全作为指导力量来构建 Tauri，我们为您提供了采取主动安全姿态的每一个机会。

## Polyglots, not Silos

大多数当代框架使用单一语言范式，因此被困在知识和惯用法的泡沫中。这可以很好地适用于某些利基应用程序，但它也培养了一种部落主义。

这可以从 React、Angular 和 Vue 开发社区挤在一起的方式中看出，最终很少产生交叉影响。

同样的情况可以在 Rust、Node 和 c++ 的战场上看到，强硬派立场鲜明，拒绝跨社区合作。

今天，Tauri 使用 Rust 作为后端，但在不久的将来，其他后端，如 Go、Nim、Python、Csharp 等将成为可能。这是因为我们正在维护官方的 Rust 绑定到 [webview](https://github.com/webview) 组织，并计划让你根据自己的需要切换后端。由于我们的 API 可以使用 C interop 以任何语言实现，因此完全符合规范只需要一个 PR。

## 真正的开源

如果没有社区，这一切都没有意义。今天的软件社区是一个神奇的地方，人们在这里互相帮助并做出很棒的东西——开源是其中非常重要的一部分。

开源对不同的人来说意味着不同的东西，但大多数人都会同意它是为了支持自由。当软件不尊重你的权利时，它看起来是不公平的，并可能通过不道德的方式损害你的自由。

这就是为什么我们为 FLOSS 倡导者可以使用 Tauri 构建“可认证的”开源应用程序而感到自豪，这些应用程序可以包含在 FSF 认可的 GNU/Linux 发行版中。

## 未来

Tauri 的未来取决于你的参与和贡献。尝试它，文件问题，加入一个工作组或捐款-每一个贡献都是重要的。无论如何，请务必保持联系！！
