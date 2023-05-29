# 隔离模式

隔离模式是一种在到达 Tauri 核心前，拦截并修改由前端发送的 Tauri API 信息的方式，其完全使用 JavaScript 编写。 由隔离模式保障的 JavaScript 代码即称为隔离应用。

## 为什么需要隔离模式

隔离模式的目的是为开发者提供一种保护机制，防止其应用程序被预料之外或恶意的前端调用 Tauri Core。 隔离模式的需求来自于前端中不可信任的内容所带来的威胁，常见于需要许多依赖的应用。 请参阅[安全：威胁模型][]以了解应用程序可能遇到的一些威胁来源。

The largest threat model described above that the Isolation pattern was designed in mind was Development Threats. 前端构建工具不仅仅由许许多多嵌套很深的依赖组成，而且还有很多依赖 (也是嵌套很深) 被打包到最终的网页中。

## 何时使用隔离模式

Tauri highly recommends using the isolation pattern whenever it can be used. 由于隔离应用会拦截_**所有**_来自前端的消息，所以您_总是_可以使用此功能。

Tauri 还强烈建议在使用外部 Tauri API 时锁定应用程序。 作为开发者，您可以借由安全的隔离应用来验证 IPC 信息，确保它们传入的参数在您的预料之内。 举个例子，此模式可以用于检查文件读取或写入的调用是否涉及您应用限制外的文件路径。 此外，您还可以由此检查 Tauri API 中 HTTP fetch 调用的 Origin 头信息是否被篡改。

总而言之，此模式会拦截_**所有**_前端信息，所以它甚至能搭配一直可用的 API (如[事件][]) 使用。 因为部分事件可能会需要调用您自己编写的 Rust 代码，故此方法同样适用。

## 如何使用隔离模式

隔离模式就是在您的前端和 Tauri 核心之间注入一个安全的应用程序，用以拦截和修改传入的 IPC 信息。 它使用 `<iframe>` 的沙盒特性，与您的前端应用一起安全地执行 JavaScript 代码。 Tauri 在加载页面时会强制执行隔离模式，使所有对 Tauri 核心的 IPC 调用必须先通过沙盒隔离应用程序。 当消息准备被传递给 Tauri 核心时，其就会被使用浏览器的 [SubtleCrypto][] 实现加密，并传递回主前端程序。 之后，它将会被直接传递给 Tauri 核心来解密和读取数据。

为确保他人不能读取您应用的密钥并使用其来篡改加密信息，每次应用启动时将重新生成新密钥。

### IPC消息的大致步骤

为了更容易理解，这里有一个列表，列出了一个IPC消息在用隔离模式发送到Tauri核心时将经历的大致步骤。

1. Tauri's IPC handler receives a message
2. IPC 处理程序 -> 隔离应用程序
3. `[sandbox]` 隔离应用程序钩子运行并可能修改消息
4. `[sandbox]` 使用运行时生成的密钥，用AES-GCM对信息进行加密
5. `[encrypted]` 隔离应用程序 -> IPC 处理程序
6. `[encrypted]` IPC handler -> Tauri Core

_注意：箭头(->) 表示消息传递。_

### 性能影响

由于信息经过加密，所以隔离模式相比 [Brownfield 模式][]而言存在额外开销。 除去性能敏感的应用 (使用很少依赖来提升性能的应用) 之外，使用 AES-GCM 来加解密 IPC 信息只会对大部分应用造成相对较小的性能影响。 若您不熟悉 AES-GCM，您仅需知道这是 [SubtleCrypto][] 中所附带的唯一认证模式算法，而我们每天都在使用的 [TLS][transport_layer_security] 协议的底层就是在和它打交道。

同时，Tauri 应用每次会在启动时生成一个密码学安全密钥。 如果系统已经有足够的熵来立即返回足够的随机数，那么通常不会引起注意，这在桌面环境中非常常见。 If running in a headless environment to perform some [integration testing with WebDriver][] then you may want to install some sort of entropy-generating service such as `haveged` if your operating system does not have one included. <sup>Linux 5.6 (2020 年 3 月发行) 现提供基于预测执行的熵生成。</sup>

### 局限

由于平台不同，隔离模式下可能会存在多个限制。 Windows 平台上最大的限制是因为沙盒环境下加载 `<iframes>` 标签内的外部文件时出错。 正因如此，我们在程序构建期间的步骤实现了一个简单的内敛步骤，检索相关脚本的内容注入到行内。 这意味着像`<script src="index.js"></script>`仍能完美运行，但是一些新的提案例如ES Modules就_不能_正常加载。

## 推荐

由于隔离应用的目的是为了保护您应对开发威胁，所以我们强烈建议您让您的应用越简单越好。 您不仅仅应该用最少的依赖，也应当考虑让构建步骤变得最少。 这样，您就不必担心对您受到隔离应用的前端项目的供应链的攻击。

## 创建隔离应用程序

此例中，我们将制作一个示例的独立应用，并将其与我们假设已存在的 Tauri 应用相结合。 它不会验证通过它的消息，只会将内容打印到 WebView 控制台。

为了举例，让我们假设我们身处 `tauri.conf.json` 所在的目录中。 现有的 Tauri 应用已经将 `distDir` 设置为了 `../dist`。

`../dist-isolation/index.html`:

```html
<!DOCTYPE html>
<html lang="zh-Hans">
  <head>
    <meta charset="UTF-8" />
    <title>隔离安全脚本</title>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

`../dist-isolation/index.js`:

```js
window.__TAURI_ISOLATION_HOOK__ = (payload) => {
  // 此处我们不验证或修改任何东西，只打印出钩子内容
  console.log('hook', payload)
  return payload
}
```

现在，我们仅需在 `tauri.conf.json` 中[配置](#configuration)使用隔离模式，这样我们就从 [棕地模式][]切换到隔离模式了。

## 配置

假设前端的 `distDir` 已设置为 `../dist`。 我们同时会将我们的隔离应用导出至 `../dist-isolation`。

```json
{
  "build": {
    "distDir": "../dist"
  },
  "tauri": {
    "pattern": {
      "use": "isolation",
      "options": {
        "dir": "../dist-isolation"
      }
    }
  }
}
```

[transport_layer_security]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[安全：威胁模型]: ../../security.md#threat-models
[事件]: ../../../guides/features/events.md
[SubtleCrypto]: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto
[Brownfield 模式]: ./brownfield.md
[棕地模式]: ./brownfield.md
[integration testing with WebDriver]: ../../../guides/testing/webdriver/introduction.md
