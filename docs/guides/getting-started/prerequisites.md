---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Prerequisites

## Installing

The first step is to install [Rust] and system dependencies. Keep in mind that this setup is only needed for _developing Tauri apps_. Your end-users are not required to do any of this.

### Setting Up Windows

### 1. Download and install this https://aka.ms/vs/17/release/vs_BuildTools.exe

![image](https://github.com/AlphaOmegaGithub/Neuro-Omega-React/assets/127298010/ada7f8ef-86ed-4443-9e4f-3b84e42a9687)

![image](https://github.com/AlphaOmegaGithub/Neuro-Omega-React/assets/127298010/a7e7d966-562a-4d4e-a69f-7a172da4589e)

### 2. Download Evergreen Bootstrapper driver https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section

![image](https://github.com/AlphaOmegaGithub/Neuro-Omega-React/assets/127298010/cff372bc-8335-452d-8b4b-f5f0780782f7)

### 3.Install rust on your system https://www.rust-lang.org/tools/install

![image](https://github.com/AlphaOmegaGithub/Neuro-Omega-React/assets/127298010/81ce5dde-c8cf-4697-a0d0-c792a0d85654)

### 4.Open download file and inside the terminal insert 1 and press enter.

![image](https://github.com/AlphaOmegaGithub/Neuro-Omega-React/assets/127298010/b7a7f3a9-3fb9-4865-8046-836db2dc2598)

### 5. You should get this message after the installing

![image](https://github.com/AlphaOmegaGithub/Neuro-Omega-React/assets/127298010/f337d1d2-4e90-4b08-ba60-9944b5dba82f)

### 6.Open terminal using commanand proport.

![image](https://github.com/AlphaOmegaGithub/Neuro-Omega-React/assets/127298010/dda4a6c2-dd18-481c-8808-1dc2c5919936)

### 7. Make sure you have latest Rust version on your system. Type in the command prompt:

 ```rustup update```

![image](https://github.com/AlphaOmegaGithub/Neuro-Omega-React/assets/127298010/b4a6aee2-f264-488b-83d7-105448dd4e04)

### 8. To check whether you have Rust installed correctly, open a shell and enter this command:
   ``` rustc --version ```
    
![image](https://github.com/AlphaOmegaGithub/Neuro-Omega-React/assets/127298010/ec2142ba-3fcb-4c99-80a7-411cead3f702)

### 9. Restart your computer, and Done!

### Setting Up macOS

#### 1. CLang and macOS Development Dependencies

You will need to install CLang and macOS development dependencies. To do this, run the following command in your terminal:

```shell
xcode-select --install
```

#### 2. Rust

To install Rust on macOS, open a terminal and enter the following command:

```shell
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

:::note

We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a plain script: [rustup.sh]

:::

The command downloads a script and starts the installation of the `rustup` tool, which installs the latest stable version of Rust. You might be prompted for your password. If the installation was
successful, the following line will appear:

```text
Rust is installed now. Great!
```

Make sure to restart your terminal for the changes to take effect.

### Setting Up Linux

#### 1. System Dependencies

You will need to install a couple of system dependencies, such as a C compiler and `webkit2gtk`. Below are commands for a few popular distributions:

<Tabs>
  <TabItem value="debian" label="Debian" default>

```sh
sudo apt update
sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    file \
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
    file \
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
    file \
    libappindicator-gtk3-devel \
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
    net-misc/wget \
    sys-apps/file
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
    file \
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
       "file"
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
    file \
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

## Managing The Rust Installation

You should keep your Rust version up to date whenever possible to always benefit from the latest improvements. To update Rust, open a terminal and run the following command:

```shell
rustup update
```

`rustup` can also be used to uninstall Rust from your machine fully:

```shell
rustup self uninstall
```

## Troubleshooting

To check whether you have Rust installed correctly, open a shell and enter this command:

```shell
rustc --version
```

You should see the version number, commit hash, and commit date for the latest stable version that has been released in the following format:

```text
rustc x.y.z (abcabcabc yyyy-mm-dd)
```

If you don't see this information, your Rust installation might be broken. Please consult [Rust's Troubleshooting Section] on how to fix this. If your problems persist, you can get help from the official [Tauri Discord] and [GitHub Discussions].

[rust]: https://www.rust-lang.org
[install rust]: https://www.rust-lang.org/tools/install
[build tools for visual studio 2022]: https://visualstudio.microsoft.com/visual-cpp-build-tools/
[`cargo-edit`]: https://github.com/killercup/cargo-edit
[rust's troubleshooting section]: https://doc.rust-lang.org/book/ch01-01-installation.html#troubleshooting
[tauri discord]: https://discord.com/invite/tauri
[github discussions]: https://github.com/tauri-apps/tauri/discussions
[download webview2]: https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section
[rustup.sh]: https://sh.rustup.rs
[nix flakes]: https://nixos.wiki/wiki/Flakes
[direnv's flakes integration]: https://nixos.wiki/wiki/Flakes#Direnv_integration
[nix shell]: https://nixos.wiki/wiki/Development_environment_with_nix-shell
[direnv's shell integration]: https://nixos.wiki/wiki/Development_environment_with_nix-shell#direnv
[direnv's Guix shell support]: https://github.com/direnv/direnv/pull/1045/files
[Guix shell]: https://guix.gnu.org/manual/en/html_node/Invoking-guix-shell.html
[`trunk`]: https://trunkrs.dev
