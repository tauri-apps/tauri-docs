---
id: multiwin
title: "Multiwin"
sidebar_label: Multiwin
---

<div className="alert alert--warning" role="alert">
Please note: <br/>
This pattern is not available for now.
</div>


## Description

<img className="pattern-logo" src="/img/patterns/Multiwin.png" alt="Multiwin" />

The Multiwin recipe will allow you to have multiple windows, some of which may be GL based.

## Diagram

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph LR
      A==>H
      H==>F
      H==>G
      subgraph WEBVIEW
      F
      end
      subgraph GLUTIN
      G
      end
      subgraph RUST
      A
      end
      A[Binary]
      F[Window]
      G[GL Window]
      H{Bootstrap}
      style GLUTIN stroke:${colors.blue.dark},stroke-width:4px
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`} />


## Configuration

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
