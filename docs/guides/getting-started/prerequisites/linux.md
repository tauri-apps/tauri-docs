---
sidebar_position: 3
pagination_next: guides/getting-started/setup/README
description: ''
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStudioSetup from './\_fragments/\_android-studio-setup.mdx'
import AndroidStandaloneSetup from './\_fragments/\_android-standalone-unix-setup.mdx'
import SetupManagingRust from './\_fragments/\_setup-managing-rust.mdx'
import SetupTroubleshooting from './\_fragments/\_setup-troubleshooting.mdx'

# Setting Up Linux

### 1. System Dependencies

You will need to install a couple of system dependencies, such as a C compiler and `webkit2gtk` for desktop development. Below are commands for a few popular distributions:

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
</Tabs>

### 2. Rust

To install Rust on Linux, open a terminal and enter the following command:

```shell
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

:::note

We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a plain script: [rustup.sh]

:::

The command downloads a script and starts the installation of the `rustup` tool, which installs the latest stable version of Rust. You might be prompted for your password. If the installation was successful, the following line will appear:

```text
Rust is installed now. Great!
```

Make sure to restart your Terminal for the changes to take effect.

## Android

To setup your Linux machine for Android development you can either install Android Studio or download the tools separetely.

### Android Studio

<AndroidStudioSetup platform="linux" />

### Standalone Installation

#### 1. Installing JDK

Install the JDK using your distribution package manager and set the `JAVA_HOME` environment variable:

<Tabs>
  <TabItem value="debian" label="Debian" default>

```sh
sudo apt update
sudo apt install default-jdk
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
```

  </TabItem>
  <TabItem value="arch" label="Arch">

```sh
sudo pacman -S jdk-openjdk
export JAVA_HOME=/usr/lib/jvm/java-19-openjdk/
```

  </TabItem>
</Tabs>

<AndroidStandaloneSetup platform="linux" />

## Managing The Rust Installation

<SetupManagingRust />

## Troubleshooting

<SetupTroubleshooting />

[rustup.sh]: https://sh.rustup.rs
[nix flakes]: https://nixos.wiki/wiki/Flakes
[direnv's flakes integration]: https://nixos.wiki/wiki/Flakes#Direnv_integration
[nix shell]: https://nixos.wiki/wiki/Development_environment_with_nix-shell
[direnv's shell integration]: https://nixos.wiki/wiki/Development_environment_with_nix-shell#direnv
