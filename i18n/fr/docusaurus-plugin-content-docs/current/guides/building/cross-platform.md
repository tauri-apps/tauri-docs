---
sidebar_position: 5
---

import Command from '@theme/Command'

# Compilation multiplatforme ou compilation croisée

Tauri repose lourdement sur les bibliothèques natives et les chaînes de compilation, c'est pour cela que la compilation croisée est actuellement **pas réalisable**. La prochaine meilleure option est de compiler dans une pipeline CI/CD hébergé sur quelque chose comme [GitHub Actions][], Azure Pipelines, GitLab, ou d'autres options. La pipeline peut exécuter la compilation pour chaque plateforme en même temps rendant le processus de compilation et de publication beaucoup plus facile.

Pour une installation facile, nous fournissons actuellement [Tauri Action][], une action GitHub qui s'exécute sur toutes les plateformes supportées, compile votre logiciel, génère les artefacts nécessaires et les télécharge et crée nouvelle version de votre application dans GitHub.

## Tauri GitHub Action

Tauri Action tire parti des actions GitHub pour construire simultanément votre application en tant que binaire natif Tauri pour macOS, Linux et Windows et automatise la création d'une version GitHub.

Cette action GitHub peut également être utilisée comme pipeline de test pour votre application Tauri, la garantie de la compilation s'exécute correctement sur toutes les plates-formes pour chaque pull request envoyée, même si vous ne souhaitez pas créer de nouvelle version.

:::info Signature de code

Pour configurer la signature de code pour Windows et macOS sur votre flux de travail, suivez le guide spécifique pour chaque plateforme :

- [Signature de code Windows avec les actions GitHub][]
- [macOS Code Signing with GitHub Actions][]

:::

### Commencer

Pour configurer l'action Tauri, vous devez d'abord configurer un dépôt GitHub. Vous pouvez utiliser cette action sur un dépôt qui n'a pas de Tauri configuré car il initialise automatiquement Tauri avant de construire et de le configurer pour utiliser vos artefacts.

Allez dans l'onglet Actions de votre projet GitHub et choisissez "Nouveau flux de travail", puis choisissez "Configurer un workflow vous-même". Remplacez le fichier par l'exemple de workflow de production [Tauri Action][]. Vous pouvez également configurer le flux de travail en fonction de l'exemple [en bas de cette page](#example-workflow)

### Configuration

Vous pouvez configurer Tauri avec les options `configPath`, `distPath` et `iconPath`. Voir les actions dans le Readme pour plus de détails.


<!-- FIXME: tauriScript is currently broken.
  Custom Tauri CLI scripts can be run with the `tauriScript` option. So instead of running `yarn tauri build` or `npx tauri build`, `${tauriScript}` will be executed. This can be useful when you need custom build functionality such as when creating Tauri apps e.g. a `desktop:build` script.
-->

Lorsque votre application n'est pas à la racine du dépôt, utilisez l'entrée `projectPath`.

Vous pouvez modifier le nom du workflow, modifier les déclencheurs, et ajoutez d'autres étapes telles que `npm run lint` ou `npm run test`. La partie importante est que vous gardez la ligne ci-dessous à la fin du workflow, puisque ceci exécute le script de compilation et libère les artefacts:

```yaml
- utilisations : tauri-apps/tauri-action@v0
```

### Comment déclencher

Le workflow de publication dans les exemples README liés ci-dessus est déclenché par des poussées sur la branche "release". L'action crée automatiquement un tag et un titre pour la version GitHub en utilisant la version de l'application spécifiée dans `tauri.config.json`.

Vous pouvez également déclencher le workflow sur la poussée d'un tag de version tel que "app-v0.7.0". Pour cela, vous pouvez changer le début du flux de travail de la version:

```yaml
name: publish
on:
  push:
    tags:
      - 'app-v*'
  workflow_dispatch:
```

### Exemple de Workflow

Ci-dessous se trouve un exemple de workflow qui a été mis en place pour fonctionner chaque fois qu'une nouvelle version est créée sur git.

Ce workflow met en place l'environnement sous les dernières versions de Windows, Ubuntu et macOS. Note sous `jobs.release.strategy.matrix` le tableau de plate-forme qui contient `macos-latest`, `ubuntu-20.04`, et `windows-latest`.

Les étapes que ce workflow prend sont:

1. Vérifier le dépôt en utilisant `actions/checkout@v3`
2. Configurez Node LTS et un cache pour les données globales du paquet npm/yarn/pnpm en utilisant `actions/setup-node@v3`.
3. Configurez Rust et un cache pour le dossier `target/` en utilisant `dtolnay/rust-toolchain@stable` et `swatinem/rust-cache@v2`.
4. Installe toutes les dépendances et exécute le script de compilation (pour l'application web).
5. Enfin, il utilise `tauri-apps/tauri-action@v0` pour exécuter `tauri build`, générer les artefacts et créer la version GitHub.

```yaml
name: Release
on:
  push:
    tags:
      - 'v*'
  workflow_dispatch:

jobs:
  release:
    permissions:
      contents: write
    strategy:
      fail-fast: false
      matrix:
        platform: [macos-latest, ubuntu-20.04, windows-latest]
    runs-on: ${{ matrix.platform }}

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Install dependencies (ubuntu only)
        if: matrix.platform == 'ubuntu-20.04'
        # You can remove libayatana-appindicator3-dev if you don't use the system tray feature.
        run: |
          sudo apt-get update
          sudo apt-get install -y libgtk-3-dev libwebkit2gtk-4.0-dev libayatana-appindicator3-dev librsvg2-dev

      - name: Rust setup
        uses: dtolnay/rust-toolchain@stable

      - name: Rust cache
        uses: swatinem/rust-cache@v2
        with:
          workspaces: './src-tauri -> target'

      - name: Sync node version and setup cache
        uses: actions/setup-node@v3
        with:
          node-version: 'lts/*'
          cache: 'yarn' # Mettre npm, yarn ou pnpm.

      - name: Install frontend dependencies
        # If you don't have `beforeBuildCommand` configured you may want to build your frontend here too.
        run: yarn install # Change this to npm, yarn or pnpm.

      - name: Build the app
        uses: tauri-apps/tauri-action@v0

        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tagName: ${{ github.ref_name }} # Cela ne fonctionne que si votre flux de travail se déclenche sur de nouveaux tag.
          releaseName: 'App Name v__VERSION__' # tauri-action remplace \_\_VERSION\_\_ par la version de l'application.
          releaseBody: 'See the assets to download and install this version.'
          releaseDraft: true
          prerelease: false
```

### GitHub Environment Token

Le token GitHub est automatiquement émis par GitHub pour chaque workflow exécuté sans autre configuration, ce qui signifie qu'il n'y a aucun risque de sécurité. Ce jeton n'a cependant que les permissions de lecture par défaut et vous pouvez obtenir une erreur "Resource not accessible by integration" lors de l'exécution du workflow. Si cela se produit, vous devrez peut-être ajouter des permissions d'écriture à ce token. Pour ce faire, allez dans les paramètres de votre projet GitHub, puis sélectionnez Actions, faites défiler vers le bas jusqu'à "Permissions de flux de travail" et cochez "Permissions de lecture et d'écriture".

Vous pouvez voir le token GitHub passé au workflow ci-dessous:

```yaml
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Notes d'utilisation

Assurez-vous de vérifier la documentation [pour les actions GitHub][github actions] pour mieux comprendre le fonctionnement de ce workflow. Prenez garde à lire la documentation de [limites d'utilisation, facturation et administration][usage limits billing and administration] pour les actions GitHub. Certains modèles de projet peuvent déjà implémenter ce flux de travail d'action GitHub, comme [tauri-svelte-template][]. Vous pouvez utiliser cette action sur un dépôt qui n'a pas configuré Tauri. Tauri s'initialise automatiquement avant la construction et la configuration pour utiliser vos artefacts web.

## Experimental: Build Windows apps on Linux and macOS

Tauri v1.3 added a new Windows installer type based on the [NSIS][] installer framework. In contrast to WiX, NSIS itself can also work on Linux and macOS which makes it possible to build many Tauri apps on non-Windows hosts. Note that this is currently considered highly experimental and may not work on every system or for every project. Therefore it should only be used as a last resort if local VMs or CI solutions like GitHub Actions don't work for you.

Since Tauri officially only supports the MSVC Windows target, the setup is a bit more involved.

First, make sure all your Tauri dependencies are at least version 1.3, check out the [dependency update guide][] if you're not sure how.

#### Install NSIS

Some Linux distributions have NSIS available in their repositories, for example on Ubuntu you can install NSIS by running this command:

```sh title=Ubuntu
sudo apt install nsis
```

But on many other distributions you have to compile NSIS yourself or download Stubs and Plugins manually that weren't included in the distro's binary package. Fedora for example only provides the binary but not the Stubs and Plugins:

```sh title=Fedora
sudo dnf in mingw64-nsis
wget https://github.com/tauri-apps/binary-releases/releases/download/nsis-3/nsis-3.zip
unzip nsis-3.zip
sudo cp nsis-3.08/Stubs/* /usr/share/nsis/Stubs/
sudo cp -r nsis-3.08/Plugins/** /usr/share/nsis/Plugins/
```

On macOS you will need [Homebrew][] to install NSIS:

```sh title=macOS
brew install nsis
```

#### Install LLVM and the LLD Linker

Since the default Microsoft linker only works on Windows we will also need to install a new linker. To compile the Windows Resource file which is used for setting the app icon among other things we will also need the `llvm-rc` binary which is part of the LLVM project.

```sh title="Ubuntu"
sudo apt install lld llvm
```

```sh title=macOS
brew install llvm
```

On macOS you also have to add `/opt/homebrew/opt/llvm/bin` to your `$PATH` as suggested in the install output.

#### Install the Windows Rust target

Assuming you're building for 64-bit Windows systems:

```sh
rustup target add x86_64-pc-windows-msvc
```

#### Install the Windows SDKs

To get the Windows SDKs required by the msvc target we will use the [xwin][] project:

```sh
cargo install xwin
```

Then you can use the `xwin` CLI to install the needed files to a location of your choice. Remember the location, we will need it in the next step. In this guide we will create a `.xwin` directory in the Home directory.

```sh
xwin splat --output ~/.xwin
```

If that fails with an error message like this:

```
Error: failed to splat Microsoft.VC.14.29.16.10.CRT.x64.Desktop.base.vsix

Caused by:
    0: unable to symlink from .xwin/crt/lib/x86_64/LIBCMT.lib to libcmt.lib
    1: File exists (os error 17)
```

you can try adding the `--disable-symlinks` flag to the command:

```sh
xwin splat --output ~/.xwin --disable-symlinks
```

Now, to make the Rust compiler use these files, you first have to create a `.cargo` directory in your project and create a `config.toml` file in it with the following content. Make sure to change the paths accordingly.

```toml title=.cargo/config.toml
[target.x86_64-pc-windows-msvc]
linker = "lld"
rustflags = [
  "-Lnative=/home/username/.xwin/crt/lib/x86_64",
  "-Lnative=/home/username/.xwin/sdk/lib/um/x86_64",
  "-Lnative=/home/username/.xwin/sdk/lib/ucrt/x86_64"
]
```

Keep in mind that this file is specific to your machine so we don't recommend checking it into git if your project is public or will be shared with anyone.

#### Building the App

Now it should be as simple as adding the target to the `tauri build` command:

<Command name="build --target x86_64-pc-windows-msvc" />

The build output will then be in `target/x86_64-pc-windows-msvc/release/bundle/nsis/`.

[Tauri Action]: https://github.com/tauri-apps/tauri-action
[Tauri Action]: https://github.com/tauri-apps/tauri-action#creating-a-release-and-uploading-the-tauri-bundles
[GitHub Actions]: https://docs.github.com/en/actions
[github actions]: https://docs.github.com/en/actions
[usage limits billing and administration]: https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration
[tauri-svelte-template]: https://github.com/probablykasper/tauri-svelte-template
[Signature de code Windows avec les actions GitHub]: ../distribution/sign-windows.md#bonus-sign-your-application-with-github-actions
[macOS Code Signing with GitHub Actions]: ../distribution/sign-macos.md#example
[NSIS]: https://nsis.sourceforge.io/Main_Page
[dependency update guide]: ../development/updating-dependencies
[Homebrew]: https://brew.sh/
[xwin]: https://github.com/Jake-Shadle/xwin
