---
title: 隔离模式
i18nReady: true
---

**隔离模式**（Isolation Pattern）使用 JavaScript 截获并修改前端向 Tauri Core 发送的 Tauri API 消息。由隔离模式注入的 JavaScript 安全代码被称为**隔离应用程序**（Isolation Application）。

## 为什么这么做

隔离模式向开发者提供一种避免程序中前端不必要或恶意地调用 Tauri Core 的机制。这一需求源自运行在前端的不受信任内容的威胁，有大量依赖的应用经常遇到这种情形。请查看 [Security: Threat Models] 来了解应用程序可能遇到的威胁的来源。

隔离模式在设计时考虑的最大的威胁模型是**开发威胁**（Development Threats）。除了许多前端构建时工具所包括的数十（甚至数百）个通常是深度嵌套的依赖，一个复杂的应用也还可能捆绑大量（通常也是深度嵌套的）依赖到最终输出。

## 何时需要

Tauri 强烈推荐只要有可能就使用隔离模式。因为隔离应用程序截获来自前端的**_所有_**信息，它*始终*可以被使用。

Tauri 同时也强烈推荐在使用外部 Tauri API 时加强应用的安全性。作为开发者，你可以使用安全隔离应用程序尝试验证 IPC 输入，以确保它们在某些预期参数范围内。例如，你可能需要检查读取或写入文件的调用是否尝试访问应用程序预期位置之外的路径。另一个例子是确保 Tauri API 的 HTTP 获取调用仅将 Origin 标头设置为应用程序预期的值。

也就是说，它会拦截来自前端的**_所有_**消息，因此它甚至可以与始终在线的 API（例如 [事件] ） 配合使用。由于某些事件可能会导致你自己的 Rust 代码执行操作，因此可以对它们使用相同类型的验证技术。

## 如何使用

隔离模式的核心在于在前端和 Tauri Core 之间注入一个安全的应用程序，用于拦截和修改传入的 IPC 消息。它利用 `<iframe>` 的沙盒功能，将 JavaScript 与主前端应用程序安全地一起运行。Tauri 在加载页面时强制执行隔离模式，强制所有对 Tauri Core 的 IPC 调用都首先通过沙盒隔离应用程序进行路由。一旦消息准备好传递给 Tauri Core，它将使用浏览器的 [SubtleCrypto] 实现进行加密，然后传递回主前端应用程序。到达主前端应用程序后，它将直接传递给 Tauri Core，然后像平常一样进行解密和读取。

为了确保他人无法手动读取应用程序特定版本的密钥并使用它来修改加密后的消息，每次运行应用程序时都会生成新密钥。

### IPC 消息的大致步骤

为了更容易理解，下面列出了 IPC 消息通过隔离模式发送到 Tauri Core 时将经历的大致步骤：

1. Tauri 的 IPC 处理程序收到一条消息
2. IPC 处理程序 -> 隔离应用程序
3. `[sandbox]` 隔离应用程序钩子运行并可能修改消息
4. `[sandbox]` 使用运行时生成的密钥通过 AES-GCM 加密消息
5. `[encrypted]` 隔离应用程序 -> IPC 处理程序
6. `[encrypted]` IPC 处理程序 -> Tauri Core

_注意：箭头（->）表示消息传递。_

### 性能影响

由于消息确实会加密，因此与 [Brownfield 模式] 相比，即使安全隔离应用程序不执行任何操作，也会产生额外的开销。除了性能敏感的应用程序（这些应用程序可能拥有精心维护且数量较少的依赖项，以保持足够的性能）外，大多数应用程序应该不会在意加密/解密 IPC 消息的运行时成本，因为它们相对较小，并且 AES-GCM 相对较快。如果你不熟悉 AES-GCM，那么在此上下文中，重要的是它是 [SubtleCrypto] 中包含的唯一身份验证模式算法，并且你可能每天都在 [TLS][transport_layer_security] 中使用它。

Tauri 应用程序每次启动时都会生成一个加密安全密钥。如果系统已经拥有足够的熵来立即返回足够的随机数，通常不会注意到这一点，这在桌面环境中非常常见。如果您在无头环境中运行 [WebDriver 一体化测试]， 则可能需要安装某种熵生成服务（例如 `haveged` ，如果您的操作系统尚未安装该服务）。<sup>Linux 5.6（2020 年 3 月）现在包含使用推测执行的熵生成功能。</sup>

### 限制

由于平台差异，隔离模式存在一些限制。最严重的限制是由于外部文件无法在 Windows 上的沙盒化 `<iframes>` 中正确加载。因此，我们在构建时实现了一个简单的脚本内联步骤，该步骤获取与隔离应用相关的脚本内容，并将其以内联方式注入。这意味着典型的打包或像 `<script src="index.js"></script>` 这样的文件简单包含仍然有效，但像 ES 模块这样的较新机制将*无法*成功加载。

## 建议

由于隔离应用程序的目的是防御开发威胁，我们强烈建议您的隔离应用程序尽可能保持简单。您不仅应该努力保持隔离应用程序的依赖关系最小化，还应该考虑尽量减少其所需的构建步骤。这样，您就无需担心前端应用程序之上的隔离应用程序受到供应链攻击。

## 创建隔离应用程序

在这个例子中，我们将创建一个小型的 hello-world 风格的 Isolation 应用，并将其连接到一个虚构的现有 Tauri 应用。它不会对传入的消息进行验证，只会将内容打印到 WebView 控制台。

为了本例的目的，假设我们与 `tauri.conf.json` 位于同一目录中。现有的 Tauri 应用程序将其 `distDir` 设置为 `../dist` 。

`../dist-isolation/index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Isolation Secure Script</title>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

`../dist-isolation/index.js`:

```javascript
window.__TAURI_ISOLATION_HOOK__ = (payload) => {
  // 不需要验证或修改任何内容，仅输出钩子中的内容
  console.log('hook', payload);
  return payload;
};
```

现在，我们需要做的就是设置我们的 `tauri.conf.json` [配置](#配置)以使用隔离模式，然后仅需从 [Brownfield 模式]引导到隔离模式。

## 配置

假设我们的主要前端 distDir 设置为 `../dist` 。我们还将 `Isolation` 应用程序输出到 `../dist-isolation` 。

```json
{
  "build": {
    "distDir": "../dist"
  },
  "app": {
    "security": {
      "pattern": {
        "use": "isolation",
        "options": {
          "dir": "../dist-isolation"
        }
      }
    }
  }
}
```

[transport_layer_security]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[security: threat models]: /zh-cn/security/lifecycle/
[事件]: /zh-cn/reference/javascript/api/namespaceevent/
[subtlecrypto]: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto
[brownfield 模式]: /zh-cn/concept/inter-process-communication/brownfield/
[WebDriver 一体化测试]: /zh-cn/develop/tests/webdriver/
