---
title: Brownfield 模式
---

_**這是預設模式。 **_

這是使用 Tauri 的最簡單和最直接的模式，因為本模式會盡可能嘗試與現有的前端專案相容。簡而言之，它盡量不要求額外的配置，跟著現有的 web 前端應用在瀏覽器中使用的方式保持一致。但並不是 _**所有**_ 在現有瀏覽器應用程式中有效的功能都能開箱即用。

如果你不熟悉 Brownfield 軟體開發模式，你可以閱讀 [Brownfield 維基百科]。
對 Tauri 而言，現有軟體特別指現代瀏覽器支援的特性與行為規範，而非傳統遺留系統。

## 配置

因為 Brownfield 模式是預設模式，所以無需設定任何配置選項。如果要明確設定它，你可以在 `tauri.conf.json` 設定檔中使用 `tauri > pattern` 物件。

```json
{
  "tauri": {
    "pattern": {
      "use": "brownfield"
    }
  }
}
```

_**Brownfield 模式沒有額外的配置選項。 **_

[Brownfield 維基百科]: https://en.wikipedia.org/wiki/Brownfield_(software_development)
