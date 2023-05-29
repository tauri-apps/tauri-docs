---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Prérequis

## Installation

La première étape est d'installer les dépendances [Rust][] et système. Gardez à l'esprit que cette configuration n'est nécessaire que pour _développer des applications avec Tauri_. Les utilisateurs de vos applications n'ont pas besoin d'installer tous ces outils.

### Configuration sous Windows

#### 1. Microsoft Visual Studio C++ Build Tools

Vous devez installer les outils de build C++ de Microsoft Visual Studio. Le meilleur moyen est d'installer les [Outils de génération Microsoft C++][]. Lorsqu'il vous est demandé quels outils installer, assurez-vous que "C++ build tools" et "Windows 10 SDK" sont sélectionnés.

<figure>

![Microsoft Visual Studio Installer](./vs-installer-light.png#gh-light-mode-only)
![Microsoft Visual Studio Installer](./vs-installer-dark.png#gh-dark-mode-only)

<figcaption>Listing 1-1 : Sélectionner "C++ build tools" et "Windows 10 SDK" à l'aide du programme d'installation de Visual Studio Build Tools 2022.</figcaption>
</figure>

#### 2. WebView2

:::note

On Windows 10 (Version 1803 and later with all updates applied) and Windows 11, the WebView2 runtime is distributed as part of the operating system.

:::

Tauri dépend de WebView2 pour rendre le contenu web sur Windows, vous devez donc avoir installé WebView2. Le moyen le plus simple est de télécharger et d'exécuter le "Programme d’amorçage persistant" depuis le site Web de [Microsoft][download webview2].

Le script d'amorçage va essayer de déterminer l'architecture et la version correctes de votre système. Néanmoins, si vous rencontrez des problèmes (notamment avec Windows sur ARM) vous pouvez sélectionner un autre installateur autonome.

#### 3. Rust

Enfin, allez sur [https://www.rust-lang.org/tools/install][install rust] pour installer `rustup` (l'installateur de Rustup). Veuillez noter qu'il vous faut redémarrer votre terminal, et dans certains cas Windows aussi, pour que les changements prennent effet.

Alternativement, vous pouvez aussi utiliser `winget` pour installer rustup en utilisant la commande suivante dans PowerShell:

```powershell
winget install --id Rustlang.Rustup
```

:::caution MSVC toolchain as default

For full support for Tauri and tools like [`trunk`][] make sure the MSVC Rust toolchain is the selected `default host triple` in the installer dialog. Depending on your system it should be either `x86_64-pc-windows-msvc`, `i686-pc-windows-msvc`, or `aarch64-pc-windows-msvc`.

If you already have Rust installed, you can make sure the correct toolchain is installed by running this command:

```powershell
rustup default stable-msvc
```

:::

### Configuration sous macOS

#### 1. Dépendances macOS et CLang

Vous devrez installer les dépendances de développement macOS ainsi que CLang. Pour cela, exécutez la commande suivante dans votre terminal :

```shell
xcode-select --install
```

#### 2. Rust

Pour installer Rust sur macOS, ouvrez un terminal et entrez la commande suivante :

```shell
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

:::note

Nous avons audité ce script bash, et il effectue uniquement les actions nécessaires pour installer Rust. Néanmoins, avant de copier/coller aveuglément un script, c'est toujours une bonne idée de le vérifier par soi-même. Voici le script en question : [rustup.sh][]

:::

La commande télécharge un script et démarre l'installation de l'outil `rustup` , qui installe la dernière version stable de Rust. Il est possible que l'outil d'installation vous demande votre mot de passe pour avoir les droits d'administration. Si l'installation a été réussie, le texte suivant apparaîtra :

```text
Rust is installed now. Super !
```

Assurez-vous de redémarrer votre terminal pour que les modifications prennent effet.

### Configuration sous Linux

#### 1. Dépendances système

Vous devrez installer quelques dépendances du système, comme un compilateur C et `webkit2gtk`. Ci-dessous, les commandes à exécuter selon les distributions :

<Tabs>
  <TabItem value="debian" label="Debian" default>

```sh
sudo apt update
sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

  </TabItem>
  <TabItem value="arch" label="Arch">

```sh
sudo pacman -Syu
sudo pacman -S --needed \
    webkit2gtk \
    base-devel \
    curl \
    wget \
    openssl \
    appmenu-gtk-module \
    gtk3 \
    libappindicator-gtk3 \
    librsvg \
    libvips
```

  </TabItem>
  <TabItem value="fedora" label="Fedora">

```sh
sudo dnf check-update
sudo dnf install webkit2gtk4.0-devel \
    openssl-devel \
    curl \
    wget \
    libappindicator-gtk3 \
    librsvg2-devel
sudo dnf group install "C Development Tools and Libraries"
```

Note that on Fedora 36 and below the `webkit2gtk4.0-devel` package was called `webkit2gtk3-devel`.

  </TabItem>
  <TabItem value="gentoo" label="Gentoo">

```sh
sudo emerge --ask \
    net-libs/webkit-gtk:4 \
    dev-libs/libappindicator \
    net-misc/curl \
    net-misc/wget
```

Note: A desktop profile is recommended to set the appropriate USE flags for webkit-gtk

  </TabItem>
  <TabItem value="opensuse" label="openSUSE">

```sh
sudo zypper up
sudo zypper in webkit2gtk3-soup2-devel \
    libopenssl-devel \
    curl \
    wget \
    libappindicator3-1 \
    librsvg-devel
sudo zypper in -t pattern devel_basis
```

  </TabItem>
  <TabItem value="nixos" label="NixOS">

Travailler sur NixOS nécessite une configuration légèrement différente, car Tauri a besoin de trouver les bibliothèques système requises à la fois au moment de la compilation et
 dynamiquement au moment de l'exécution. Pour les rendre disponibles à Tauri, la variable d'environnement `LD_LIBRARY_PATH` doit être remplie avec les bons chemins d'accès.

Lorsque vous utilisez [Nix Flakes], copiez le code suivant dans `flake.nix` sur votre dépôt, puis exécutez `nix develop` pour activer l'environnement de développement. Vous pouvez également utiliser [l'intégration de direnv's Flakes] pour démarrer automatiquement le shell de développement lorsque vous entrez dans le dossier du projet.

```nix
{
  inputs = {
    nixpkgs.url = "nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};

        libraries = with pkgs;[
          webkitgtk
          gtk3
          cairo
          gdk-pixbuf
          glib
          dbus
          openssl_3
          librsvg
        ];

        packages = with pkgs; [
          curl
          wget
          pkg-config
          dbus
          openssl_3
          glib
          gtk3
          libsoup
          webkitgtk
          librsvg
        ];
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = packages;

          shellHook =
            ''
              export LD_LIBRARY_PATH=${pkgs.lib.makeLibraryPath libraries}:$LD_LIBRARY_PATH
            '';
        };
      });
}
```

If you don't use Nix Flakes, the [Nix Shell] can be configured using the following `shell.nix` script. Exécutez `nix-shell` pour activer l'environnement de développement, ou utilisez [l'intégration Shell de direnv] pour démarrer automatiquement le shell dev lorsque vous entrez dans le dossier du projet.

```nix
let
  pkgs = import <nixpkgs> { };

  libraries = with pkgs;[
    webkitgtk
    gtk3
    cairo
    gdk-pixbuf
    glib
    dbus
    openssl_3
  ];

  packages = with pkgs; [
    pkg-config
    dbus
    openssl_3
    glib
    gtk3
    libsoup
    webkitgtk
    appimagekit
  ];
in
pkgs.mkShell {
  buildInputs = packages;

  shellHook =
    ''
      export LD_LIBRARY_PATH=${pkgs.lib.makeLibraryPath libraries}:$LD_LIBRARY_PATH
    '';
}
```

  </TabItem>
  <TabItem value="gnu_guix" label="GNU Guix">

To create Tauri development environments using [Guix shell], copy the following code into `manifest.scm` on your repository, then run `guix shell` to activate. You can also use [direnv's Guix shell support] to automatically start the Guix shell when entering the project folder.

```scheme
(specifications->manifest
 (list "gtk+@3"
       "webkitgtk-with-libsoup2"
       "libsoup-minimal@2"
       "cairo"
       "gdk-pixbuf"
       "glib"
       "dbus"
       "openssl@3"
       "gcc:lib"

       "curl"
       "wget"
       "pkg-config"
       "gsettings-desktop-schemas"))
```

  </TabItem>
  <TabItem value="void" label="Void">

```sh
sudo xbps-install -Syu
sudo xbps-install -S \
    webkit2gtk-devel \
    curl \
    wget \
    openssl \
    gtk+3-devel \
    libappindicator \
    librsvg-devel \
    gcc \
    pkg-config
```

  </TabItem>
</Tabs>

#### 2. Rust

Pour installer Rust sur Linux, ouvrez un terminal et entrez la commande suivante :

```shell
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

:::note

Nous avons audité ce script bash, et il effectue uniquement les actions nécessaires pour installer Rust. Néanmoins, avant de copier/coller aveuglément un script, c'est toujours une bonne idée de le vérifier par soi-même. Voici le script en question : [rustup.sh][]

:::

La commande télécharge un script et démarre l'installation de l'outil `rustup` , qui installe la dernière version stable de Rust. Il est possible que l'outil d'installation vous demande votre mot de passe pour avoir les droits d'administration. Si l'installation a été réussie, le texte suivant apparaîtra :

```text
Rust is installed now. Super !
```

Assurez-vous de redémarrer votre terminal pour que les modifications prennent effet.

## Gérer l'installation de Rust

Vous devriez tenir votre version de Rust à jour dès que possible pour toujours bénéficier des dernières améliorations. Pour mettre à jour Rust, ouvrez un terminal et exécutez la commande suivante:

```shell
rustup update
```

`Rustup` peut également être utilisé pour complètement désinstaller Rust de votre machine :

```shell
rustup self uninstall
```

## Problèmes techniques

Pour vérifier si Rust est correctement installé, ouvrez un terminal et entrez cette commande :

```shell
rustc --version
```

Vous devriez voir le numéro de version, hash, et date de commit pour la dernière version stable qui a été publiée, sous ce format :

```text
rustc x.y.z (abcabcabc yyyy-mm-dd)
```

Si vous ne voyez pas ces informations, votre installation de Rust pourrait être incorrecte. Veuillez consulter la [Section de dépannage de Rust][] pour savoir comment résoudre ce problème. Si votre problème persiste, vous pouvez obtenir de l'aide sur le [Discord Tauri][] officiel et sur [GitHub][].

[Rust]: https://www.rust-lang.org
[install rust]: https://www.rust-lang.org/tools/install
[Outils de génération Microsoft C++]: https://visualstudio.microsoft.com/fr/visual-cpp-build-tools/
[Section de dépannage de Rust]: https://doc.rust-lang.org/book/ch01-01-installation.html#troubleshooting
[Discord Tauri]: https://discord.com/invite/tauri
[GitHub]: https://github.com/tauri-apps/tauri/discussions
[download webview2]: https://developer.microsoft.com/fr-fr/microsoft-edge/webview2/#download-section
[rustup.sh]: https://sh.rustup.rs
[`trunk`]: https://trunkrs.dev
