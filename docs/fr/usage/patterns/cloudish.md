---
title: Cloudish
---

import Rater from '@theme/Rater' import useBaseUrl from '@docusaurus/useBaseUrl'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>Facile d'utilisation</td>
        <td><Rater value="5"/></td>
      </tr>
      <tr>
        <td>Extensible</td>
        <td><Rater value="3"/></td>
      </tr>
      <tr>
        <td>Performant</td>
        <td><Rater value="3"/></td>
      </tr>
      <tr>
        <td>Sécurité</td>
        <td><Rater value="2"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src="{useBaseUrl('img/patterns/Cloudish.png')}" alt="Cloudish" />
  </div>
    <div className="col col--4">
    Les plus :
    <ul>
      <li>Similaire à une application web SPA</li>
      <li>Aucune compétence Rust requise</li>
    </ul>
    Les moins :
    <ul>
      <li>Aucun accès à l'API Rust</li>
      <li>Utilise un serveur localhost</li>
    </ul>
  </div>
</div>

## Description

La méthode Cloudish est un modèle permettant une flexibilité et une performance maximales de l'application. Il utilise un serveur local, ce qui signifie que votre application sera techniquement disponible pour d'autres processus, comme les navigateurs et éventuellement d'autres appareils sur le réseau. Toutes vos ressources sont intégrées dans le binaire, mais elles sont servies comme s'il s'agissait de dossiers distincts.

## Schéma

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD H==>F H==>D D-->F F-->D subgraph RUST A==>H end subgraph WEBVIEW F end subgraph SERVER D E-->D end A[Binary] D(( localhost )) E[bundled resources] F[Window] H{Bootstrap} style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px style SERVER fill:#49A24A,stroke:#2B6063,stroke-width:4px`} />


## Configuration

Voici ce que vous devez ajouter à votre fichier tauri.conf.json :
```json
"tauri": {
  "embeddedServer": {
    "active": true                // utilise le serveur localhost
  },
  "permlist": {
    "all": false                   // désactive toutes les API
  }
}

```