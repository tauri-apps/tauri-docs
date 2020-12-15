---
title: 'Publication d''une application'
sidebar_label: 'Publication d''une app (4/4)'
---

import Alert from '@theme/Alert' import Command from '@theme/Command'

### 1. Compiler votre application web

Maintenant que vous êtes prêt à empaqueter votre projet, vous devrez exécuter la commande de compilation de votre framework ou de votre bundler (en supposant que vous en utilisiez un, bien sûr).

<Alert title="Note">
Chaque framework a ses propres outils de publication. Il est impossible de les traiter tous ou de les tenir à jour dans le cadre de ce document.
</Alert>

### 2. Tauri Bundler

Assurez-vous que vous avez installé ce bundler Tauri :

```sh
cargo tauri-bundler -v
```

Si vous ne voyez pas de numéro de version, vous devez alors installer le bundler :

```sh
cargo install tauri-bundler
```

<Alert title="Note">
Nous avons choisi d'appeler ce bundler "tauri-bundler" parce que dans un avenir proche, nous fournirons un point d'entrée <strong>pour Rust seulement</strong> à Tauri.
</Alert>

### 3. Empaqueter votre application avec Tauri

<Command name="build" />

Comme pour l'interface de développement, la première fois, il faudra un certain temps pour récupérer les crates Rust et tout compiler, mais lors des prochaines exécutions, il suffira de recompiler les crates Tauri, ce qui est beaucoup plus rapide.

En raison de la manière dont Cargo compile ses cibles, l'application finale est placée dans le dossier suivant :

`src-tauri/target/release/bundle`
