---
title: Bridge
---

import Rater from '@theme/Rater'
import useBaseUrl from '@docusaurus/useBaseUrl'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>Ease of Use</td>
        <td><Rater value="3"/></td>
      </tr>
      <tr>
        <td>Extensibility</td>
        <td><Rater value="5"/></td>
      </tr>
      <tr>
        <td>Performance</td>
        <td><Rater value="4"/></td>
      </tr>
      <tr>
        <td>Security</td>
        <td><Rater value="4"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src={useBaseUrl('img/recipes/Bridge.svg')} alt="Bridge" />
  </div>
    <div className="col col--4">
    Pros:
    <ul>
      <li>Highly configurable</li>
      <li>No Rust skills required</li>
    </ul>
    Cons:
    <ul>
      <li>Some WebAPIs unavailable</li>
      <li>Challenge to implement</li>
    </ul>
  </div>
</div>

## Description

The Bridge recipe is a secure pattern where messages are passed between brokers via an implicit bridge using the API. It isolates functionality to scope and passes messages instead of functionality.

## Diagram

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

## Configuration

Here's what you need to add to your tauri.conf.json file:
```json
{
  "tauri": {
    "allowlist": {
      "all": false,
      "clipboard": {
        "all": false,
        "readText": false,
        "writeText": false
      },
      "dialog": {
        "all": false,
        "ask": false,
        "confirm": false,
        "message": false,
        "open": false,
        "save": false
      },
      "fs": {
        "all": false,
        "copyFile": false,
        "createDir": false,
        "readDir": false,
        "readFile": false,
        "removeDir": false,
        "removeFile": false,
        "renameFile": false,
        "scope": [],
        "writeFile": false
      },
      "globalShortcut": {
        "all": false
      },
      "http": {
        "all": false,
        "request": false,
        "scope": []
      },
      "notification": {
        "all": false
      },
      "os": {
        "all": false
      },
      "path": {
        "all": false
      },
      "process": {
        "all": false,
        "exit": false,
        "relaunch": false,
        "relaunchDangerousAllowSymlinkMacos": false
      },
      "protocol": {
        "all": false,
        "asset": false,
        "assetScope": []
      },
      "shell": {
        "all": false,
        "execute": false,
        "open": false,
        "scope": [],
        "sidecar": false
      },
      "window": {
        "all": false,
        "center": false,
        "close": false,
        "create": false,
        "hide": false,
        "maximize": false,
        "minimize": false,
        "print": false,
        "requestUserAttention": false,
        "setAlwaysOnTop": false,
        "setDecorations": false,
        "setFocus": false,
        "setFullscreen": false,
        "setIcon": false,
        "setMaxSize": false,
        "setMinSize": false,
        "setPosition": false,
        "setResizable": false,
        "setSize": false,
        "setSkipTaskbar": false,
        "setTitle": false,
        "show": false,
        "startDragging": false,
        "unmaximize": false,
        "unminimize": false
      }
    }
  }
}
```
