---
title: Multiwin
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
        <td><Rater value="1"/></td>
      </tr>
      <tr>
        <td>Extensible</td>
        <td><Rater value="4"/></td>
      </tr>
      <tr>
        <td>Performant</td>
        <td><Rater value="3"/></td>
      </tr>
      <tr>
        <td>Sécurité</td>
        <td><Rater value="5"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src="{useBaseUrl('img/patterns/Multiwin.png')}" alt="Multiwin" />
  </div>
  <div className="col col--4">
    Les plus :
    <ul>
      <li>Accès au contexte GL</li>
      <li>Séparation des différentes parties</li>
    </ul>
    Les moins :
    <ul>
      <li>Extrêmement complexe</li>
    </ul>
  </div>
</div>

## Description

La méthode Multiwin vous permettra d'avoir plusieurs fenêtres, dont certaines peuvent être basées sur GL.

## Schéma

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph LR A==>H H==>F H==>G subgraph WEBVIEW F end subgraph GLUTIN G end subgraph RUST A end A[Binary] F[Window] G[GL Window] H{Bootstrap} style GLUTIN stroke:${colors.blue.dark},stroke-width:4px style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`} />


## Configuration

Voici ce que vous devez ajouter à votre fichier tauri.conf.json :
```json
"tauri": {
  "embeddedServer": {
    "active": false               // n'utilise pas de serveur localhost
  },
  "permlist": {                  // toutes les API sont désactivées par défaut
    "event": true,                // Utilise l'API EVENT pour les injections
  }
}

```
