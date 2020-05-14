---
id: bridge
title: "Bridge"
sidebar_label: Bridge
---

<img className="pattern-logo" src="/img/patterns/Bridge.png" alt="Bridge" />
The Bridge recipe is a secure pattern where messages are passed between brokers via an implicit bridge using the API. It isolates functionality to scope and passes messages instead of functionality.

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD
      H==>F
      subgraph WEBVIEW
      F-.-E
      end
      D-->E
      E-->D
      B-->D
      D-->B
      subgraph RUST
      A==>H
      A-->B
      B-.-C
      B-.-G
      end
      A[Binary]
      B{Rust Broker}
      C[Subprocess 2]
      G[Subprocess 1]
      D(( API BRIDGE ))
      E{JS Broker}
      F[Window]
      H{Bootstrap}
      style D fill:#ccc,stroke:#333,stroke-width:4px,color:white
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`} />


Here's what you need to add to your tauri.conf.json file:
```json
"tauri": {
  "embeddedServer": {
    "active": false               // do not use a localhost server
  },
  "whitelist": {                  // all whitelist values are default false
    "all": false,                 // use this flag to enable all API features
    "answer": true,               // enable rust to direct the UI
    "event": true,                // enable binding to message
    "execute": false,             // enable application execution
    "listFiles": false,           // list files in a directory
    "open": false,                // open link in a browser
    "readBinaryFile": false,      // read binary file from local filesystem
    "readTextFile": false,        // read text file from local filesystem
    "setTitle": false,            // set the window title
    "writeFile": false            // write file to local filesystem
  }
}

```