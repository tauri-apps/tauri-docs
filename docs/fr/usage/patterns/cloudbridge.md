---
title: Cloudbridge
---

import Rater from '@theme/Rater' 
import useBaseUrl from '@docusaurus/useBaseUrl'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>Facile d'utilisation</td>
        <td><Rater value="1"/></td>
      </tr>
      <tr>
        <td>Extensible</td>
        <td><Rater value="5"/></td>
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
    <img src="{useBaseUrl('img/patterns/Cloudbridge.png')}" alt="Cloudbridge" />
  </div>
    <div className="col col--4">
    Les plus :
    <ul>
      <li>Toutes les fonctionnalités sont disponibles</li>
      <li>Aucune compétence Rust requise</li>
    </ul>
    Les moins :
    <ul>
      <li>Plus grande taille de bundle</li>
      <li>Difficulté à séparer les différentes parties</li>
    </ul>
  </div>
</div>

## Description

La méthode Cloudbridge combine la flexibilité d'un hôte local et la sécurité du pont. Avec autant de fonctionnalités, il peut être facile de se perdre.

## Schéma

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD H==>F2 H==>D2 D2-->F2 F2-->D2 B-->D D-->B E2-->D D-->E2 subgraph WEBVIEW F2 E2 end subgraph SERVER D2 E-->D2 end subgraph RUST A==>H A-->B B-.-C end A[Binary] B{Rust Broker} C[Subprocess] D(( API BRIDGE )) E{JS Broker} D2(( localhost )) E[bundled resources] E2{JS Broker} F2[Window] H{Bootstrap} style D fill:#ccc,stroke:#333,stroke-width:4px,color:white style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px style SERVER fill:#49A24A,stroke:#2B6063,stroke-width:4px `} />


## Configuration

Voici ce que vous devez ajouter à votre fichier tauri.conf.json :
```json
"tauri": {
  "embeddedServer": {
    "active": true                // utilise le serveur localhost
  },
  "permlist": {
    "all": true                   // active toutes les API
  }
}
```
