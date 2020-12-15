---
title: Bridge
---

import Rater from '@theme/Rater' import useBaseUrl from '@docusaurus/useBaseUrl'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>Facile d'utilisation</td>
        <td><Rater value="3"/></td>
      </tr>
      <tr>
        <td>Extensible</td>
        <td><Rater value="5"/></td>
      </tr>
      <tr>
        <td>Performant</td>
        <td><Rater value="4"/></td>
      </tr>
      <tr>
        <td>Sécurité</td>
        <td><Rater value="4"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src="{useBaseUrl('img/patterns/Bridge.png')}" alt="Bridge" />
  </div>
    <div className="col col--4">
    Les plus :
    <ul>
      <li>Hautement configurable</li>
      <li>Aucune compétence Rust requise</li>
    </ul>
    Les moins :
    <ul>
      <li>Certaines API Web ne sont pas disponibles</li>
      <li>Un défi pour l'implémenter</li>
    </ul>
  </div>
</div>

## Description

La méthode Bridge est un modèle sécurisé dans lequel les messages sont transmis entre les agents via un pont implicite utilisant l'API. Ce système isole les fonctionnalités du périmètre et transmet les messages au lieu des fonctionnalités.

## Schéma

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD H==>F subgraph WEBVIEW F-.-E end D-->E E-->D B-->D D-->B subgraph RUST A==>H A-->B B-.-C B-.-G end A[Binary] B{Rust Broker} C[Subprocess 2] G[Subprocess 1] D(( API BRIDGE )) E{JS Broker} F[Window] H{Bootstrap} style D fill:#ccc,stroke:#333,stroke-width:4px,color:white style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`} />

## Configuration

Voici ce que vous devez ajouter à votre fichier tauri.conf.json :
```json
"tauri": {
  "embeddedServer": {
    "active": false               // n'utilise pas le serveur localhost
  },
  "permlist": {                  // toutes les API sont à false par défaut
    "all": false,                 // utilisez ce paramètre pour activer toutes les API
    "answer": true,               // permet à rust de cibler l'UI
    "event": true,                // active la liaison au message
    "execute": false,             // active l'exécution de l'application
    "listFiles": false,           // liste les fichiers dans un répertoire
    "open": false,                // ouvre les liens dans un navigateur
    "readBinaryFile": false,      // lit les fichiers binaire depuis le système fichier local
    "readTextFile": false,        // lit les fichiers texte depuis le système fichier local
    "setTitle": false,            // définit le titre de la fenêtre
    "writeFile": false            // écrit un fichier dans le système fichier local
  }
}

```