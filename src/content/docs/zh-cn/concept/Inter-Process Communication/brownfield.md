---
title: Brownfield 模式
---

_**这是默认模式。**_

Brownfield 模式是使用 Tauri 最简单、最直接的方式，因为它旨在最大限度地兼容现有的前端项目。简而言之，它几乎不需要额外配置，让你能够像在浏览器中运行 Web 应用一样无缝开发。不过需要注意，**并非所有**能在浏览器中运行的功能都支持“开箱即用”。

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
