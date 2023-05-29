# 棕地模式

_**这是默认模式。**_

这是使用 Tauri 的最简单和最直接的模式，因为本模式会尽最大可能尝试与现有的前端项目兼容。 简而言之，它无需现有的浏览器前端项目进行任何操作即可迁移。 当然，这并不意味着项目的_**所有功能**_都可以在 Tauri 中开箱即用，更多详情请见 [不兼容部分](#incompatibilities)。

如果你不熟悉 Brownfield 软件开发模式，可以阅读 [Brownfield 维基百科][]。 对 Tauri 而言，现有的软件是指当前可在浏览器中稳定运行的，而不是那种已无法在浏览器运行的软件。

## 不兼容内容

第一类不兼容的情况很简单：无法在 Tauri 内工作的浏览器限定 API (即便采用了 Brownfield 模式时)。 若一个 API 本身不被多数浏览器普遍支持，Tauri 也可能不会为其提供跨平台支持。

第二类即 Tauri 未来将有，但尚未完全实现的功能。 例如：

- [在 Linux 上支持 WebRTC](https://github.com/tauri-apps/wry/issues/85)
- [权限相关的 API](https://github.com/tauri-apps/wry/issues/81)
- [下载链接 / 以 URL 形式表达的 Blob](https://github.com/tauri-apps/wry/issues/349)
- [更好的 i18n 支持](https://github.com/tauri-apps/wry/issues/442)

## 配置

由于 Brownfield 模式是默认模式，您无需设置任何配置选项。 要显式设置它，您可以在 `tauri.conf.json` 配置文件中使用 `tauri > pattern` 对象。

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
