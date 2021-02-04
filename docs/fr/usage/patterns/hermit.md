---
title: Hermit
---

import Rater from '@theme/Rater' 
import useBaseUrl from '@docusaurus/useBaseUrl'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>Facile d'utilisation</td>
        <td><Rater value="5"/></td>
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
        <td><Rater value="5"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src="{useBaseUrl('img/patterns/Hermit.png')}" alt="Hermit" />
  </div>
    <div className="col col--4">
    Les plus :
    <ul>
      <li>Rapide à utiliser</li>
      <li>Poids minimal</li>
    </ul>
    Les moins :
    <ul>
      <li>Aucune ressource distante</li>
      <li>Aucun accès à l'API</li>
    </ul>
  </div>
</div>

## Description

La méthode Hermit est un modèle d'isolement ultime pour les applications où toute la logique est contenue dans la fenêtre et où le binaire n'existe que pour amorcer la fenêtre. Aucune communication n'est établie avec Rust à partir de la fenêtre, il n'y a pas de serveur local et la fenêtre n'a pas accès à des ressources distantes. La méthode Hermit est idéal pour le mode kiosque interactif et les jeux autonomes basés sur le HTML.

## Schéma

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph LR A==>H H==>F subgraph WEBVIEW F end subgraph RUST A end A[fa:fa-cog Binary ] F[fa:fa-window-maximize Window] H{Bootstrap} style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`} />

## Configuration

Voici ce que vous devez ajouter à votre fichier tauri.conf.json :

```json
"tauri": {
  "embeddedServer": {
    "active": false // n'utilise pas de serveur localhost
  },
  "permlist": {
    "all": false, // désactive et tree-shake toutes les fonctions api
  }
}
```
