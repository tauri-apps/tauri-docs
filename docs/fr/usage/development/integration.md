---
title: 'Intégration de Tauri'
sidebar_label: 'Intégration de Tauri (1/4)'
---

import Alert from '@theme/Alert' import Command from '@theme/Command' import Link from '@docusaurus/Link'

<Alert title="Veuillez noter" type="warning" icon="alert">
  Vous devez avoir effectué toutes les étapes nécessaires à la mise en place de l'environnement de développement sur votre machine. Si vous ne l'avez pas encore fait, veuillez consulter la page <a href="/docs/getting-started/intro#setting-up-your-environment">configuration de votre système d'exploitation</a>.
</Alert>

### 1. Installer le paquet Tauri JS en tant que dépendance :

```bash
cd project-folder

# Non requis si vous avez déjà un package.json :
# npm init
# OU
# yarn init

yarn add tauri
# OU
npm install tauri --save
```

<Alert title="Note">
  Vous pouvez installer Tauri comme une dépendance à la fois locale et globale, mais nous vous recommandons de l'installer localement.
</Alert>

Si vous décidez d'utiliser Tauri comme un paquet local avec npm, vous _devrez définir_ un script personnalisé à votre package.json :

```js title=package.json
{
  // Ce contenu est juste un exemple
  "scripts": {
    "tauri": "tauri"
  }
}
```

### 2. Initialiser Tauri

<Command name="init" />

Cette commande va placer un nouveau dossier dans votre répertoire de travail actuel, `src-tauri`.

```sh
└── src-tauri
    ├── .gitignore
    ├── Cargo.toml
    ├── rustfmt.toml
    ├── tauri.conf.json
    ├── icons
    │   ├── 128x128.png
    │   ├── 128x128@2x.png
    │   ├── 32x32.png
    │   ├── Square107x107Logo.png
    │   ├── Square142x142Logo.png
    │   ├── Square150x150Logo.png
    │   ├── Square284x284Logo.png
    │   ├── Square30x30Logo.png
    │   ├── Square310x310Logo.png
    │   ├── Square44x44Logo.png
    │   ├── Square71x71Logo.png
    │   ├── Square89x89Logo.png
    │   ├── StoreLogo.png
    │   ├── icon.icns
    │   ├── icon.ico
    │   └── icon.png
    └── src
        ├── build.rs
        ├── cmd.rs
        └── main.rs
```

### 3. Vérifiez `tauri info` pour vous assurer que tout est correctement configuré :

<Command name="info" />

Ce qui devrait retourner quelque chose comme :

```
Operating System - Darwin(16.7.0) - darwin/x64

Node.js environment
  Node.js - 12.14.0
  tauri.js - 0.2.1

Rust environment
  rustc - 1.40.0
  cargo - 1.40.0
  tauri-cli - 0.1.2

Global packages
  NPM - 6.13.4
  yarn - 1.21.1

App directory structure
/.quasar
/build-tauri
/dist
/node_modules
/src

App
  tauri - 0.3.0
  mode - embedded-server
  build-type - bundle
  CSP - default-src data: filesystem: ws: http: https: 'unsafe-eval' 'unsafe-inline'
  Windows - Edge
  distDir - ../dist/spa
  devPath - http://localhost:7334
```

Ces informations peuvent être très utiles pour faciliter le triage des problèmes.

## `src-tauri/tauri.conf.json`

Modifier `src-tauri/tauri.conf.json` : En fonction de votre configuration de développement, vous devrez probablement mettre à jour deux points d'entrée importants pour tauri :

- vos ressources groupés (`distDir`)
- votre serveur de développement (`devPath`)

En savoir plus sur la configuration de tauri.conf.json <a href="/docs/api/config#build">ici</a>.

```json
{
  "build": {
    "distDir": "../dist/spa",
    "devPath": "http://localhost:7334"
  }
}
```

### Les modèles

Nous avons également défini des configurations prédéfinies appelées "Modèles" (Patterns en anglais). Ils peuvent vous aider à personnaliser Tauri en fonction de vos besoins. En savoir plus sur les [modèles](/docs/usage/patterns/about-patterns).

<Alert type="info" title="Note">
  Techniquement, vous pouvez faire pointer le devPath vers un dossier, et Tauri essaiera de servir ces ressources de manière statique.
</Alert>

<Alert type="warning" title="Avertissement" icon="alert">
  Sur certaines configurations du système, le localhost peut ne pas être disponible. La règle générale est d'utiliser exactement le même domaine que votre serveur de développement. Vous pouvez essayer de changer de localhost ici avec :

- `"127.0.0.1"`
- `"0.0.0.0"`

Sur Windows, vous devez activer le loopback pendant le développement. [note : ajouter le lien](https://github.com/tauri-apps/tauri/wiki/04.-MS-Windows-Setup)

</Alert>

## Le plugin CLI Vue pour Tauri

Si vous utilisez le CLI de Vue 3/4, il est recommandé d'utiliser l'officiel [plugin CLI](https://github.com/tauri-apps/vue-cli-plugin-tauri).
