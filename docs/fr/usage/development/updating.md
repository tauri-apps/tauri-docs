---
title: Mise à jour
---

import Alert from '@theme/Alert'

<Alert title="Veuillez noter" type="warning" icon="alert">
    Vous devez tenir à jour toutes les dépendances et les outils de Tauri, en particulier pendant les phases alpha et bêta. Il n'y a pas de support pour les autres versions que la plus récente.
</Alert>

## Dernières versions actuelles
| Composant                                                                           | Description           | Version                                                                                          |
| ----------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------ |
| [**tauri.js**](https://github.com/tauri-apps/tauri/tree/dev/cli/tauri.js)           | CLI et importations   | [![](https://img.shields.io/npm/v/tauri.svg)](https://www.npmjs.com/package/tauri)               |
| [**tauri core**](https://github.com/tauri-apps/tauri/tree/dev/tauri)                | API Rust et outillage | [![](https://img.shields.io/crates/v/tauri.svg)](https://crates.io/crates/tauri)                 |
| [**tauri bundler**](https://github.com/tauri-apps/tauri/tree/dev/cli/tauri-bundler) | paquetage binaire     | [![](https://img.shields.io/crates/v/tauri-bundler.svg)](https://crates.io/crates/tauri-bundler) |


## Mettre à jour les paquets NPM

Si vous utilisez le paquet `tauri` :
```bash
$ yarn upgrade tauri --latest
$ npm install tauri@latest
```
Vous pouvez également détecter quelle est la dernière version de tauri avec la ligne de commande, en utilisant :
- `npm outdated tauri`
- `yarn outdated tauri`

Autrement, si vous utilisez le paquet `vue-cli-plugin-tauri` :
```bash
$ yarn upgrade vue-cli-plugin-tauri --latest
$ npm install vue-cli-plugin-tauri@latest
```

## Mettre à jour les paquets Cargo
Allez dans le fichier `src-tauri/Cargo.toml` et changez `tauri` en `tauri = { version = "%version%" }` où `%version%` est le numéro de version indiqué ci-dessus. (Vous pouvez juste utiliser la version `MAJEUR.MINEUR`), comme `0.9`.

Ensuite, faites ce qui suit :
```bash
$ cd src-tauri
$ cargo update -p tauri
```
Vous pouvez également exécuter `cargo outdated -r tauri` pour obtenir des informations directes sur la dernière version de la bibliothèque principale.

## Mettre à jour le Bundler Tauri
Utilisez cette commande pour récupérer, compiler et installer la dernière version de `tauri-bundler`.
```bash
$ cargo install tauri-bundler
```

## Mises à jour automatiques
Nous travaillons actuellement sur une méthode permettant de tenir à jour toutes les dépendances requises. Lorsqu'elle sera disponible, elle sera intégrée. Vous pouvez suivre la progression de cette évolution via ce lien : [#57](https://github.com/tauri-apps/tauri/issues/57)
