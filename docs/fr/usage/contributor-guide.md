---
id: contributor-guide
title: Guide du contributeur
---

todo: rendre ce document plus convivial et complet

Tauri est un système polyglot qui utilise :

- git
- node
- rust
- github actions

Il peut être développé sur Mac, Linux et Windows.

## Flux de contribution

1. Remplir une issue
2. Forker le dépôt
3. Effectuer vos modifications
4. Faire une PR

### Une remarque concernant les contributions aux bibliothèques Rust

Lorsque vous contribuez aux bibliothèques Rust `tauri`, `tauri-api`, et `tauri-updater` ; vous voudrez configurer un environnement pour RLS (Rust Language Server). Dans le répertoire racine de Tauri, il y a un dossier `.scripts` qui contient un ensemble de scripts pour automatiser l'ajout de quelques variables d'environnement temporaires à votre shell/terminal. Ces variables d'environnement pointent vers des répertoires dans le dispositif de test qui empêcheront le RLS de planter à la compilation. C'est une étape nécessaire à la mise en place d'un environnement de développement pour les bibliothèques Rust de Tauri.

##### _Exemple d'instructions_

1. Naviguez vers le répertoire racine de Tauri.
2. Exécutez le script basé sur votre système d'exploitation à partir de ce dossier : `.scripts/init_env.bat` pour Windows Cmd, `.scripts/init_env.ps1` pour Windows Powershell, `. .scripts/init_env.sh` pour le bash Linux/macOS (notez le premier `.` dans cette commande).
3. Ouvrez votre éditeur de texte/IDE depuis ce shell/terminal.

## Exemple concret

Prenons un nouvel exemple. C'est un excellent moyen d'apprendre. Nous allons supposer que vous êtes sur un environnement de type nixy comme Linux ou macOS et que toutes vos dépendances de développement comme Rust et node sont déjà prêtes.

```sh
git clone git@github.com:tauri-apps/tauri.git
cd tauri/cli/tauri.js
yarn
mkdir ../../examples/vanillajs && cd "$_"
```

```json
  "tauri:source": "node ../../../cli/tauri.js/bin/tauri",
```

```ini
  [dependencies.tauri]
  path = "../../../../tauri"
  features = [ "all-api", "edge" ]
```
