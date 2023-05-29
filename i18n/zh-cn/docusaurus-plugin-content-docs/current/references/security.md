---
sidebar_position: 2
description: 了解如何让您的应用变得尽可能安全的步骤。
---

# 开发安全

无论您喜欢与否，现在的应用程序都运行在操作系统中，而这些操作系统会 (而且是经常) 因大量的攻击而遭受损害。 当您不安全的应用成为骇客踏入用户操作系统的垫脚石时，您等于是在构建一款任由专业骇客掌控的工具。 不要让您的应用成为工具人！

This is why we have taken every opportunity to help you secure your application, prevent undesired access to system-level interfaces, and manufacture bullet-proof applications. 您的用户会假设您各方各面都做到尽善尽美。 虽然我们让安全变得简单，但您也应该将下列信息放在心上。

## 安全乃社群之责任

需要牢记的是，您的 Tauri 应用的安全性取决于 Tauri 框架本身、所有的 Rust 和 npm 依赖、您的代码、以及运行应用程序的设备这几者安全的总和。 Tauri 团队及安全社群会尽力做到最佳，而您也应该遵循一些重要的最佳实践。

### 保持应用总是最新

当您向大众发布您的应用时，您同时也是在发布一个包括 Tauri 的捆绑软件包。 因此影响 Tauri 的安全问题也会影响到您应用的安全。 随时保持 Tauri 为最新版本可以确保您的应用不会受到在新版本修复的漏洞的威胁。 同时，也请务必确保您的编译器 (rustc) 及转译器 (nodejs) 均为最新版本，因为它们也会经常修复安全漏洞。

### 评估您的依赖

虽然 npm 和 Crates.io 提供了许多方便易用的软件包，但具体选择受信任的第三方库还是自己使用 Rust 重写完全由您决定。 若您使用已知受漏洞影响或无人维护的过期第三方库，您的应用可能会不安全得让您晚上无法安心入眠。 使用诸如 npm audit 和 cargo audit 一类的工具来自动化完成这个过程，依赖安全社群的努力来完成这项工作。

### 采取更安全的编程实践

您应用安全的第一道防线是由您自己的代码构筑的。 虽然 Tauri 可以预防常见的 web 漏洞，如跨站脚本与远程代码执行等，但不当的配置也会对安全性产生影响。 就算您配置得当，我们还是强烈建议您遵循安全软件开发的最佳实践，并进行安全测试。 我们会在下个章节详述。

### 教导您的用户

True security means that unexpected behaviour cannot happen. So in a sense, being more secure means having the peace of mind of knowing that ONLY those things that you want to happen can happen. 但在现实中，这只是痴人说梦罢了。 However, by removing as many vectors as possible and building on a solid foundation, your choice of Tauri is a signal to your users that you care about them, their safety, and their devices.

## 威胁模型

Tauri 应用由其生命周期中的许许多多块拼图组成。 下面是一些常见的威胁形态，和您应该采取的应对方式。

### 上游威胁

Tauri is a direct dependency on your project, and we maintain strict authorial control of commits, reviews, pull requests, and releases. 我们尽全力确保依赖均为最新版本，且采取措施对其可能存在的问题进行修复。 其他项目可能相对维护不善，甚至可能未经代码审计。 Please consider their health when integrating them, otherwise, you may have adopted architectural debt without even knowing it.

### 开发威胁

我们假设您，开发者本人，在乎您的开发环境。 您有责任确保您的操作系统、构建工具链及相应依赖安全。

我们大家所都面临的真正威胁被称作"供应链攻击"，其通常被认为是对您项目的直接依赖之攻击。 However, a growing class of attacks in the wild directly target development machines, and you would be well off to address this head-on.

我们强烈推荐的其中一个实践是，使用特定的 git 哈希修订版本作为您所使用的依赖版本，或退而求其次使用特定发布标签作为使用版本。 此准则同样适用于 Rust 及 Node 生态。 此外，请务必确保所有贡献者对其提交签名，还要保护您的 Git 分支及开发管线。

### 构建时威胁

现代组织使用 CI/CD 工具来自动构建二进制制品。 At Tauri, we even provide a GitHub Workflow for building on multiple platforms. 若您自己编写您的 CI/CD，并依赖第三方工具，请万分注意您未明确指定版本的依赖。

You should sign your binaries for the platform you are shipping to, and while this can be complicated and somewhat costly to set up, end users expect that your app is verifiably from you.

### 运行时威胁

我们假设 WebView 是不安全的，因此 Tauri 实现了在可加载不受信代码的用户环境下的对系统 API 的多重保护。

您可以在下方了解详情，但使用 CSP 政策会限制 WebView 可使用的交流种类。 除此之外，[上下文隔离](#)功能防止不受信内容或脚本从 WebView 内使用 API。

另外，请**务必不要**相信 WebView 内使用私钥的加解密结果。 Rust 的存在是有理由的。

### 更新威胁

We have done our best to make shipping hot updates to the app as straightforward and secure as possible. 但是，如果您失去了对清单服务器、构建服务器或二进制托管服务的控制的话，这一切努力都将付之东流。 若您要构建自己的系统的话，请咨询专业 OPS 架构师的建议并根据其正确地搭建。

## 安全内容加载

Tauri 对您的 HTML 页面强制应用[内容安全策略（CSP）][]。 本地脚本经过哈希处理，同时样式、外部脚本经由加密 Nonce 引用，防止禁止内容被加载。

:::warning
请尽量避免加载远程内容，比如从 CDN 加载的脚本可能会引入新的攻击向量。 但实际上，任何不受信任的文件都有可能引入新的和不易察觉的攻击向量。
:::

安全内容加载功能仅在 Tauri 配置文件中的 `[tauri > security > csp]` 选项设置时开启。 您应该尽可能地限制从外部加载内容，仅允许 WebView 从您信任且最好能控制的服务器加载资源。 在编译时，Tauri 会自动将 Nonce 和哈希添加到相应的 CSP 属性中。所以，您仅仅需要关心您的应用本身即可。

请参见 [`script-src`][]、[`style-src`][] 及 [CSP 来源][]以了解此保护手段的详情。

[内容安全策略（CSP）]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
[`script-src`]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src
[`style-src`]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src
[CSP 来源]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources
