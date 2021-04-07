---
title: Multiwin
---

import Alert from '@theme/Alert'
import useBaseUrl from '@docusaurus/useBaseUrl'

<Alert type="warning" icon="info-alt" title="Please note">
This pattern is not available for now.
</Alert>

import Rater from '@theme/Rater'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>Ease of Use</td>
        <td><Rater value="1"/></td>
      </tr>
      <tr>
        <td>Extensibility</td>
        <td><Rater value="4"/></td>
      </tr>
      <tr>
        <td>Performance</td>
        <td><Rater value="3"/></td>
      </tr>
      <tr>
        <td>Security</td>
        <td><Rater value="5"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src={useBaseUrl('img/patterns/Multiwin.png')} alt="Multiwin" />
  </div>
  <div className="col col--4">
    Pros:
    <ul>
      <li>Access to GL context</li>
      <li>Separation of concerns</li>
    </ul>
    Cons:
    <ul>
      <li>Extremely complex</li>
    </ul>
  </div>
</div>

## Description

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
  "allowlist": {}                  // all API endpoints are default false
}

```
