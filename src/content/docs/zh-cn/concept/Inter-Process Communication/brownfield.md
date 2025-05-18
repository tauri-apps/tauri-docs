---
title: Brownfield 模式
---

_**这是默认模式。**_

这是使用 Tauri 的最简单和最直接的模式，因为本模式会尽最大可能尝试与现有的前端项目兼容。简而言之，它尽量不要求额外的配置，跟现有的 web 前端应用在浏览器中使用的方式保持一致。但并不是 _**所有**_ 在现有浏览器应用中有效的功能都会开箱即用。

如果你不熟悉 Brownfield 软件开发模式，可以阅读 [Brownfield 维基百科]。对 Tauri 而言，现有软件特指现代浏览器支持的特性与行为规范，而非传统遗留系统。

## 配置

因为 Brownfield 模式是默认模式，所以无需设置任何配置选项。如果要显式设置它，你可以在 `tauri.conf.json` 配置文件中使用 `tauri > pattern` 对象。

```json
{
  "tauri": {
    "pattern": {
      "use": "brownfield"
    }
  }
}
```

_**Brownfield 模式没有额外的配置选项。**_

[Brownfield 维基百科]: https://en.wikipedia.org/wiki/Brownfield_(software_development)
