---
title: Configuration pour Windows
---

import Alert from '@theme/Alert' import Icon from '@theme/Icon' import { Intro } from '@theme/SetupDocs'

<Alert title="Note">

Pour ceux qui utilisent le sous-système Windows pour Linux (WSL), veuillez plutôt vous référer à nos [instructions spécifiques à Linux](/docs/getting-started/setup-linux).
</Alert>

<Intro />

## 1. Dépendances du système&nbsp;<Icon title="alert" color="danger"/>

Tout d'abord, vous devez <a href="https://aka.ms/buildtools" target="_blank">télécharger</a> et installer Visual Studio MSBuild Tools et les outils de compilation C++ (C++ build tools).

<Alert title="Note">
C'est un gros téléchargement (plus d'un gigaoctet) qui prend beaucoup de temps, alors prenez-vous un :coffee: pour attendre.
</Alert>

<Alert type="warning">

Assurez-vous que vous n'avez pas la version 2017 des outils de compilation d'également installée. Il apparait que `tauri build` ne fonctionne pas dans cette configuration.
</Alert>

## 2. Exécution de Node.js et le gestionnaire de paquets&nbsp;<Icon title="control-skip-forward" color="warning"/>

### Node.js (npm inclus)

Nous vous recommandons d'utiliser <a href="https://github.com/coreybutler/nvm-windows#installation--upgrades" target="_blank">nvm-windows</a> pour gérer l'exécution de Node.js. Il vous permet de changer facilement de version et de mettre à jour Node.js.

Ensuite, exécutez ce qui suit à partir d'un PowerShell administratif et appuyez sur Y lorsque vous y êtes invité :

```powershell
# ASSUREZ-VOUS D'ÊTRE DANS UN PowerShell ADMINISTRATIF !
nvm install latest
nvm use {{latest}} # À remplacer avec la dernière version téléchargée
```

Cela va installer la version la plus récente de Node.js avec npm.

### Gestionnaire optionnel de paquets Node.js

Vous pouvez utiliser une alternative à npm :

- <a href="https://yarnpkg.com/getting-started" target="_blank">Yarn</a>, est privilégié par l'équipe Tauri
- <a href="https://pnpm.js.org/en/installation" target="_blank">pnpm</a>

## 3. Rustc et le gestionnaire de parquets Cargo&nbsp;<Icon title="control-skip-forward" color="warning"/>

Maintenant vous devrez installer <a href="https://www.rust-lang.org/" target="_blank">Rust</a>. La façon la plus simple de procéder est d'utiliser <a href="https://rustup.rs/" target="_blank">rustup</a>, l'installateur officiel.

- <a href="https://win.rustup.rs/x86_64" target="_blank">Lien de téléchargement 64 bits</a>
- <a href="https://win.rustup.rs/i686" target="_blank">Lien de téléchargement 32 bits</a>

Téléchargez et installez la variante adaptée à l'architecture de votre ordinateur.

## 4. Activer Loopback&nbsp;<Icon title="control-skip-forward" color="warning"/>

Microsoft désactive l'interface loopback par défaut - vous devez l'autoriser si vous avez l'intention d'utiliser le serveur de développement :

Ouvrez une console d'administration et entrez :

```powershell
CheckNetIsolation.exe LoopbackExempt -a -n="Microsoft.Win32WebViewHost_cw5n1h2txyewy"
```

<Alert title="Note">
Certains rapports indiquent que vous devez redémarrer votre ordinateur après avoir exécuté cette commande, alors si cela ne fonctionne pas pour vous, essayez cela !
</Alert>

## 5. Tauri Bundler&nbsp;<Icon title="alert" color="danger"/>

Si vous aviez déjà installé rustup avant de suivre ce guide, assurez-vous de mettre à jour Rust :

```powershell
rustup update stable
```

Après avoir installé Rust et les autres dépendances nécessaires, il est conseillé de redémarrer votre terminal avant de continuer.

Installez Tauri bundler via Cargo :

```sh
cargo install tauri-bundler --force
```

## 6. Devtools&nbsp;<Icon title="info-alt" color="info"/>

Si vous souhaitez déboguer le front-end, vous devrez télécharger <a href="https://www.microsoft.com/store/p/microsoft-edge-devtools-preview/9mzbfrmz0mnj" target="_blank">les Devtools de Microsoft Edge</a> depuis le store Microsoft.

Cela vous permettra de vous connecter à une instance en cours de votre projet Tauri ! Si vous avez besoin d'aide, consultez le <a href="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide" target="_blank">guide devtools</a>.

## Continue

Maintenant que vous avez mis en place les dépendances spécifiques à Windows pour Tauri, découvrez comment [ajouter Tauri à votre projet](/docs/usage/development/integration).
