---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Prerequisites

## Installing

The first step is to install [Rust] and system dependencies. Keep in mind that this setup is only needed for _developing Tauri apps_. Your end-users are not required to do any of this.

### Setting Up Windows

#### 1. Microsoft Visual Studio C++ Build Tools

You will need to install Microsoft Visual Studio C++ build tools. The easiest way is to install [Build Tools for Visual Studio 2022]. When asked which workloads to install, ensure "C++ build tools" and the Windows 10 SDK are selected.

<figure>

![Microsoft Visual Studio Installer](./vs-installer-light.png#gh-light-mode-only)
![Microsoft Visual Studio Installer](./vs-installer-dark.png#gh-dark-mode-only)

<figcaption>Listing 1-1: Selecting "C++ build tools" and "Windows 10 SDK" using the Visual Studio Build Tools 2022 installer.</figcaption>
</figure>

#### 2. WebView2

:::note

WebView2 is pre-installed in Windows 11

:::

Tauri heavily depends on WebView2 to render web content on Windows, therefore you must have WebView2 installed. The easiest way is to download and run the Evergreen Bootstrapper from [Microsoft's website][download webview2].

The bootstrapper script will try to determine the correct architecture and version for your system. Still, if you run into issues (especially with Windows on ARM) you can select the correct standalone installer.

#### 3. Rust

Lastly, go to [https://www.rust-lang.org/tools/install][install rust] to install `rustup` (the Rust installer).

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
sudo dnf install webkit2gtk3-devel.x86_64 \
    openssl-devel \
    curl \
    wget \
    libappindicator-gtk3 \
    librsvg2-devel
sudo dnf group install "C Development Tools and Libraries"
```

  </TabItem>
  <TabItem value="opensuse" label="openSUSE">

```sh
sudo zypper up
sudo zypper in patterns-devel-base-devel_basis \
    webkit2gtk3-soup2-devel \
    libopenssl-devel \
    curl \
    wget \
    libappindicator3-1 \
    librsvg-devel
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

## Updating and Uninstalling

Tauri and its components can be manually updated by editing the `Cargo.toml` file or running the `cargo upgrade` command that is part of the [`cargo-edit`] tool. Open a terminal and enter the following command:

```shell
cargo upgrade
```

Updating Rust itself is easy via `rustup`. Open a terminal and run the following command:

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
