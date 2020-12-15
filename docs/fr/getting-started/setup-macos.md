---
title: Configuration pour macOS
---

import Alert from '@theme/Alert' import { Intro } from '@theme/SetupDocs' import Icon from '@theme/Icon'

<Intro />

## 1. Dépendances du système&nbsp;<Icon title="alert" color="danger"/>


Vous devez avoir <a href="https://brew.sh/" target="_blank">Homebrew</a> d'installé pour exécuter la commande suivante.

```sh
$ brew install gcc
```

Vous devrez également vous assurer que `xcode` est installé.

```sh
$ xcode-select --install
```

## 2. Exécution de Node.js et le gestionnaire de paquets&nbsp;<Icon title="control-skip-forward" color="warning"/>

### Node.js (npm inclus)

Nous vous recommandons d'utiliser nvm pour gérer l'exécution de votre Node.js. Il vous permet de changer facilement de version et de mettre à jour Node.js.

```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

<Alert title="Note">
Nous avons audité ce script bash, et il fait ce qu'il dit qu'il est censé faire. Néanmoins, avant d'utiliser curl aveuglément pour récupérer un script, il est toujours sage de regarder son contenu d'abord. Voici le fichier en tant que simple <a href="https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh" target="_blank">lien de téléchargement</a>.
</Alert>

Une fois que nvm est installé, fermez et rouvrez votre terminal, puis installez la dernière version de Node.js et npm :

```sh
$ nvm install node --latest-npm
$ nvm use node
```

Si vous avez le moindre problème avec nvm, veuillez consulter leur <a href="https://github.com/nvm-sh/nvm">readme</a>.

### Gestionnaire optionnel de paquets Node.js

Vous pouvez utiliser une alternative à npm :

- <a href="https://yarnpkg.com/getting-started" target="_blank">Yarn</a>, est privilégié par l'équipe Tauri
- <a href="https://pnpm.js.org/en/installation" target="_blank">pnpm</a>

## 3. Rustc et le gestionnaire de parquets Cargo&nbsp;<Icon title="control-skip-forward" color="warning"/>

La commande suivante va installer <a href="https://rustup.rs/" target="_blank">rustup</a>, l'installateur officiel de <a href="https://www.rust-lang.org/" target="_blank">Rust</a>.

```
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

<Alert title="Note">
Nous avons audité ce script bash, et il fait ce qu'il dit qu'il est censé faire. Néanmoins, avant d'utiliser curl aveuglément pour récupérer un script, il est toujours sage de regarder son contenu d'abord. Voici le fichier en tant que simple <a href="https://sh.rustup.rs" target="_blank">lien de téléchargement</a>.
</Alert>

Pour vous assurer que Rust a été installé avec succès, exécutez la commande suivante :

```sh
$ rustc --version
latest update on 2019-12-19, rust version 1.40.0
```

Vous devrez éventuellement redémarrer votre terminal si la commande ne fonctionne pas.

## 4. Tauri Bundler&nbsp;<Icon title="alert" color="danger"/>

Si vous aviez déjà installé rustup avant de suivre ce guide, assurez-vous de mettre à jour Rust :

```sh
$ rustup update stable
```

Après avoir installé Rust et les autres dépendances nécessaires, il est conseillé de redémarrer votre terminal avant de continuer.

Installez Tauri bundler via Cargo :

```sh
$ cargo install tauri-bundler --force
```

## Continue

Maintenant que vous avez mis en place les dépendances spécifiques à MacOS pour Tauri, découvrez comment [ajouter Tauri à votre projet](/docs/usage/development/integration).
