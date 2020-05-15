---
id: cloudbridge
title: "Cloudbridge"
sidebar_label: Cloudbridge
---

## Description

<img className="pattern-logo" src="/img/patterns/Cloudbridge.png" alt="Cloudbridge" />

The Cloudbridge recipe combines the flexibility of a localhost and the security of the bridge. With so many features, it can be easy to get lost.

## Diagram

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD
      H==>F2
      H==>D2
      D2-->F2
      F2-->D2
      B-->D
      D-->B
      E2-->D
      D-->E2
      subgraph WEBVIEW
      F2
      E2
      end
      subgraph SERVER
      D2
      E-->D2
      end
      subgraph RUST
      A==>H
      A-->B
      B-.-C
      end
      A[Binary]
      B{Rust Broker}
      C[Subprocess]
      D(( API BRIDGE ))
      E{JS Broker}
      D2(( localhost ))
      E[bundled resources]
      E2{JS Broker}
      F2[Window]
      H{Bootstrap}
      style D fill:#ccc,stroke:#333,stroke-width:4px,color:white
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px
      style SERVER fill:#49A24A,stroke:#2B6063,stroke-width:4px
      `} />


## Configuration

Here's what you need to add to your tauri.conf.json file:
```json
"tauri": {
  "embeddedServer": {
    "active": true                // ship with a localhost server
  },
  "whitelist": {
    "all": true                   // enable entire API
  }
}
```
