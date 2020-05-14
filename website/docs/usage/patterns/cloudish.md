---
id: cloudish
title: "Cloudish"
sidebar_label: Cloudish
---

<img className="pattern-logo" src="/img/patterns/Cloudish.png" alt="Cloudish" />
The Cloudish recipe is a pattern for maximum flexibility and app performance. It uses a localhost server, which means that your app will technically be available to other processes, like browsers and potentially other devices on the network. All of your assets are baked into the binary, but served as if they were distinct files.


import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD
      H==>F
      H==>D
      D-->F
      F-->D
      subgraph RUST
      A==>H
      end
      subgraph WEBVIEW
      F
      end
      subgraph SERVER
      D
      E-->D
      end
      A[Binary]
      D(( localhost ))
      E[bundled resources]
      F[Window]
      H{Bootstrap}
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px
      style SERVER fill:#49A24A,stroke:#2B6063,stroke-width:4px`} />


Here's what you need to add to your tauri.conf.json file:
```json
"tauri": {
  "embeddedServer": {
    "active": true                // ship with a localhost server
  },
  "whitelist": {
    "all": false                  // disable entire API
  }
}

```