---
id: kamikaze
title: "Kamikaze"
sidebar_label: Kamikaze
---

<img className="pattern-logo" src="/img/patterns/Kamikaze.png" alt="Kamikaze" />
The Kamikaze recipe is a minimal usage of the Bridge pattern, which only allows interaction between Rust and the Window via expiring JS Promise Closures that are injected into the Window by Rust and nulled as part of the callback.

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD
      H==>F
      G-.->B
      B-->G
      subgraph WEBVIEW
      G-->F
      end
      subgraph RUST
      A-->B
      A==>H
      end
      A[Binary]
      B[API:Event]
      F[Window]
      G((Promise Closure))
      H{Bootstrap}
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`} />


Here's what you need to add to your tauri.conf.json file:
```json
"tauri": {
  "embeddedServer": {
    "active": false               // do not use a localhost server
  },
  "whitelist": {                  // all API endpoints are default false
    "event": true,                // Use the EVENT API for injections
  }
}
```
