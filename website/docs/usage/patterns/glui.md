---
id: glui
title: "GLUI"
sidebar_label: GLUI
---

<img className="pattern-logo" src="/img/patterns/GLUI.png" alt="GLUI" />
The GLUI is a research pattern that we will use internally to test approaches using a GLUTIN window. We’re not sure yet if it will make the final cut as a bona fide alternative to Webview, although early tests with transparent and multiwindow are exciting.

<div className="alert alert--warning" style={{clear: 'both'}} role="alert">
Please note: This Pattern is not available.
</div>

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD
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
      style GLUTIN stroke:${colors.blue.dark},stroke-width:4px
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px`} />


Here's what you need to add to your tauri.conf.json file:
```json
"tauri": {
  "embeddedServer": {
    "active": false               // do not use a localhost server
  },
  "whitelist": {                  // all API endpoints are default false
    "all": false,                 // disable the api
  },
  "window": {                     // not yet normative
    "glutin": true,
    "webview": false
  }
}
```
