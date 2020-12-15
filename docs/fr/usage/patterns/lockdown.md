---
title: Lockdown
---

import Rater from '@theme/Rater' import useBaseUrl from '@docusaurus/useBaseUrl'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>Facile d'utilisation</td>
        <td><Rater value="2"/></td>
      </tr>
      <tr>
        <td>Extensible</td>
        <td><Rater value="4"/></td>
      </tr>
      <tr>
        <td>Performant</td>
        <td><Rater value="5"/></td>
      </tr>
      <tr>
        <td>Sécurité</td>
        <td><Rater value="5" color="#fff04d"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src="{useBaseUrl('img/patterns/Lockdown.png')}" alt="Lockdown" />
  </div>
  <div className="col col--4">
    Les plus :
    <ul>
      <li>La plus haute sécurité</li>
      <li>Élégant et puissant</li>
    </ul>
    Les moins :
    <ul>
      <li>Compétence Rust requise</li>
      <li>Aucune ressource distante</li>
    </ul>
  </div>
</div>

## Description

La méthode Lockdown est une utilisation minimale du [modèle Bridge](bridge), qui permet uniquement une interaction entre Rust et la fenêtre par le biais de fermetures de promesses JS qui expirent, injectées dans la fenêtre par Rust et sont annulées dans son rappel.

## Schéma

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD H==>F G-.->B B-->G subgraph WEBVIEW G-->F end subgraph RUST A-->B A==>H end A[Binary] B[API:Event] F[Window] G((Promise Closure)) H{Bootstrap} style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`} />


## Configuration

Voici ce que vous devez ajouter à votre fichier tauri.conf.json :
```json
"tauri": {
  "embeddedServer": {
    "active": false               // n'utilise pas de serveur localhost
  },
  "allowlist": {                  // toutes les API sont désactivées par défaut
    "event": true,                // Utilise l'API EVENT pour les injections
  }
}
```
