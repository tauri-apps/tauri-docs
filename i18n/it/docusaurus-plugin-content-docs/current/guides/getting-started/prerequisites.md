---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Prerequisiti

## Installazione

Per prima cosa bisogna installare [Rust][] e le dipendenze di sistema. Ricorda che questo setup è necessario solo per _sviluppare le applicazioni Tauri_. L'utente finale non dovrà svolgere niente di tutto questo.

### Configurazione su Windows

#### 1. Microsoft Visual Studio C++ Build Tools

Devi installare i Microsoft Visual Studio C++ build tools. Il modo più facile è di installare [Build Tools for Visual Studio 2022][]. Quando ti verrà chiesto quali componenti installare, assicurati che "C++ build tools" e "Windows 10 SDK" sono selezionati.

<figure>

![Microsoft Visual Studio Installer](./vs-installer-light.png#gh-light-mode-only)
![Microsoft Visual Studio Installer](./vs-installer-dark.png#gh-dark-mode-only)

<figcaption>Figura 1-1: Seleziona "Strumenti di compilazione C++" e "SDK di Windows 10" utilizzando l'installer di Visual Studio Build Tools 2022.</figcaption>
</figure>

#### 2. WebView2

:::note

On Windows 10 (Version 1803 and later with all updates applied) and Windows 11, the WebView2 runtime is distributed as part of the operating system.

:::

Tauri si basa soprattutto su WebView2 per renderizzare i contenuti web su Windows, dunque è necessario avere WebView2 installato. Il modo più facile è di installare e avviare Evergreen Bootstrapper dal [sito di Microsoft][download webview2].

Lo script bootstrapper proverà a determinare la corretta architettura e versione del tuo sistema. Tuttavia, se incontri dei problemi (specialmente su Windows con piattaforma ARM) puoi selezionale l'installer standalone corretto.

#### 3. Rust

Infine, vai su [https://www.rust-lang.org/tools/install][install rust] e installa `rustup` (l'installer di Rust). Note that you have to restart your terminal, and in some cases, Windows itself, for the changes to take effect.

Alternatively, you could use `winget` to install rustup using the following command in PowerShell:

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

### Configurazione su MacOS

#### 1. CLang e dipendenze per la programmazione in macOS

Dovrai installare CLang e dipendenze per la programmazione in macOS. Per farlo, esegui il seguente comando nel tuo terminale:

```shell
xcode-select --install
```

#### 2. Rust

Per installare Rust su macOS, apri un terminale e invia il seguente comando:

```shell
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

:::note

Abbiamo verificato questo script bash, e fa quello che dice che dovrebbe fare. Tuttavia, prima di eseguire uno script con curl alla cieca, è sempre meglio dargli prima un'occhiata. Questo è il file dello script: [rustup.sh][]

:::

Il comando scarica uno script e inizia l'installazione dello strumento `rustup`, il quale installa l'ultima versione stabile di Rust. Potrebbe esserti richiesto di inserire la tua password. Se l'installazione è avvenuta con successo, dovresti vedere la seguente riga:

```text
Rust is installed now. Great!
```

Make sure to restart your terminal for the changes to take effect.

### Configurazione su Linux

#### 1. Dipendenze di sistema

Dovrai installare un paio di dipendenze di sistema, come il compilatore C e `webkit2gtk`. Qua sotto ci sono i compandi per alcune distribuzioni più famose:

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

Working on NixOS requires a slightly different setup, as Tauri needs to find the required system libraries both at compile time and
dynamically at runtime. To make them available to Tauri the `LD_LIBRARY_PATH` environment variable needs to be populated with the correct paths.

When using [Nix Flakes], copy the following code into `flake.nix` on your repository, then run `nix develop` to activate the development environment. You can also use [direnv's Flakes integration] to automatically start the dev shell when entering the project folder.

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

If you don't use Nix Flakes, the [Nix Shell] can be configured using the following `shell.nix` script. Run `nix-shell` to activate the development environment, or use [direnv's Shell integration] to automatically start the dev shell when entering the project folder.

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

Per installare Rust su Linux, apri un terminale ed invia il seguente comando:

```shell
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

:::note

Abbiamo verificato questo script bash, e fa quello che dice che dovrebbe fare. Tuttavia, prima di eseguire uno script con curl alla cieca, è sempre meglio dargli prima un'occhiata. Questo è il file dello script: [rustup.sh][]

:::

Il comando scarica uno script e inizia l'installazione dello strumento `rustup`, il quale installa l'ultima versione stabile di Rust. Potrebbe esserti richiesto di inserire la tua password. Se l'installazione è avvenuta con successo, dovresti vedere la seguente riga:

```text
Rust is installed now. Great!
```

Make sure to restart your Terminal for the changes to take effect.

## Managing The Rust Installation

You should keep your Rust version up to date whenever possible to always benefit from the latest improvements. To update Rust, open a terminal and run the following command:

```shell
rustup update
```

`rustup` può essere anche utilizzato per disinstallare completamente Rust dalla tua macchina:

```shell
rustup self uninstall
```

## Risoluzione dei problemi

Per controllare se hai installato correttamente Rust, apri un terminale e invia il seguente comando:

```shell
rustc --version
```

Dovresti vedere il numero della versione, l'hash del commit, e la data del commit dell'ultima versione stabile che è stata rilasciata, nel seguente formato:

```text
rustc x.y.z (abcabcabc yyyy-mm-dd)
```

Se non vedi queste informazioni, la tua installazione di Rust potrebbe essere corrotta. Per favore consulta la [sezione di risoluzione problemi di Rust][] per risolverlo. Se il problema persiste, puoi chiedere aiuto sul server [Discord ufficiale di Tauri][] e su [GitHub Discussions][].

[Rust]: https://www.rust-lang.org
[install rust]: https://www.rust-lang.org/tools/install
[Build Tools for Visual Studio 2022]: https://visualstudio.microsoft.com/visual-cpp-build-tools/
[sezione di risoluzione problemi di Rust]: https://doc.rust-lang.org/book/ch01-01-installation.html#troubleshooting
[Discord ufficiale di Tauri]: https://discord.com/invite/tauri
[GitHub Discussions]: https://github.com/tauri-apps/tauri/discussions
[download webview2]: https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section
[rustup.sh]: https://sh.rustup.rs
[`trunk`]: https://trunkrs.dev
