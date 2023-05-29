---
title: GLUI
draft: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::warning
此模式目前不可用。
:::

import Rater from '@theme/Rater'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>Ease of Use</td>
        <td><Rater value="0"/></td>
      </tr>
      <tr>
        <td>可扩展性</td>
        <td><Rater value="0"/></td>
      </tr>
      <tr>
        <td>性能</td>
        <td><Rater value="5"/></td>
      </tr>
      <tr>
        <td>安全</td>
        <td><Rater value="0"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src={useBaseUrl('img/recipes/GLUI.svg')} alt="GLUI" />
  </div>
  <div className="col col--4">
    Pros:
    <ul>
      <li>Framebuffer FTW</li>
      <li>已操纵窗口事件</li>
    </ul>
    Cons:
    <ul>
      <li>Broken on your machine</li>
    </ul>
  </div>
</div>

## 描述

The GLUI is a research pattern that we will use internally to test approaches using a GLUTIN window. We’re not sure yet if it will make the final cut as a bona fide alternative to WebView, although early tests with transparent and multiwindow are exciting.

## Diagram

```mermaid
graph TD
  A==>H
  H==>G
  A-->D
  D-->G
  subgraph GLUTIN
    G
  end
  subgraph RUST
    A
  end
  A[Binary]
  D(Framebuffer)
  G[GL Window]
  H{Bootstrap}
  class GLUTIN other
  class RUST rust
```

## 配置

这里是您需要添加到 tauri.conf.json 文件中的内容：

```json
"tauri": {
  "allowlist": {                  // 所有 API 默认关闭
    "all": false,                 // 禁用 API
  },
  "window": {                     // 尚未规范化
    "glutin": true,
    "webview": false
  }
}
```
