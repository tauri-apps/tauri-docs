---
title: GLUI
---

import Alert from '@theme/Alert' import useBaseUrl from '@docusaurus/useBaseUrl'

<Alert type="warning" icon="info-alt" title="Veuillez noter">
Ce modèle n'est pas disponible pour le moment.
</Alert>

import Rater from '@theme/Rater'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>Facile d'utilisation</td>
        <td><Rater value="0"/></td>
      </tr>
      <tr>
        <td>Extensible</td>
        <td><Rater value="0"/></td>
      </tr>
      <tr>
        <td>Performant</td>
        <td><Rater value="5"/></td>
      </tr>
      <tr>
        <td>Sécurité</td>
        <td><Rater value="0"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src="{useBaseUrl('img/patterns/GLUI.png')}" alt="GLUI" />
  </div>
  <div className="col col--4">
    Les plus :
    <ul>
      <li>Framebuffer pour la Win !</li>
      <li>Manipulation des événements de fenêtre</li>
    </ul>
    Les moins :
    <ul>
      <li>Ne marche pas sur votre machine</li>
    </ul>
  </div>
</div>

## Description

Le GLUI est un modèle de recherche que nous utiliserons en interne pour tester des approches utilisant une fenêtre GLUTIN. Nous ne sommes pas encore certains qu'il constituera une véritable alternative à Webview, même si les premiers tests avec les fenêtres transparentes et multiples sont prometteurs.

## Schéma

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD A==>H H==>G A-->D D-->G subgraph GLUTIN G end subgraph RUST A end A[Binary] D(Framebuffer) G[GL Window] H{Bootstrap} style GLUTIN stroke:${colors.blue.dark},stroke-width:4px style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px`} />


## Configuration

Voici ce que vous devez ajouter à votre fichier tauri.conf.json :
```json
"tauri": {
  "embeddedServer": {
    "active": false               // n'utilise pas de serveur localhost
  },
  "permlist": {                  // toutes les API sont désactivées par défaut
    "all": false,                 // désactive les API
  },
  "window": {                     // pas encore normalisé
    "glutin": true,
    "webview": false
  }
}
```
