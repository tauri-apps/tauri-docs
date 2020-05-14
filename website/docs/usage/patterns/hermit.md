---
id: hermit
title: "Hermit"
sidebar_label: Hermit
---

<img className="pattern-logo" src="/img/patterns/Hermit.png" alt="Hermit" />
The Hermit recipe is a pattern for ultimate application isolation where all logic is self-contained in the Window and the binary exists merely to bootstrap the Window. There is no communication back to Rust from the Window, there is no localhost server, and the Window has no access to any remote resources. The Hermit is great for interactive Kiosk Mode and standalone HTML based games.



import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph LR
      A==>H
      H==>F
      subgraph WEBVIEW
      F
      end
      subgraph RUST
      A
      end
      A[fa:fa-cog Binary ]
      F[fa:fa-window-maximize Window]
      H{Bootstrap}
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`} />


Here's what you need to add to your tauri.conf.json file:

```json
"tauri": {
  "embeddedServer": {
    "active": false     // do not use a localhost server
  },
  "whitelist": {
    "all": false,       // disable and tree-shake all api functions
  }
}
```
