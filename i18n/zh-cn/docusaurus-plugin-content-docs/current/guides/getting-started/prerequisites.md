---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 预先准备

## 安装

首先您需要安装 [Rust][] 及其他系统依赖。 请记住，只有在开发 _Tauri 应用_时才需要此设置。 您程序的用户不需要进行下列操作。

### Windows

#### 1. Microsoft Visual Studio C++ 生成工具

您需要安装 Microsoft C++ 生成工具。 最简单的方法是下载 [Visual Studio 2022 生成工具][]。 进行安装选择时，请勾选 "C++ 生成工具" 和 Windows 10 SDK。

<figure>

![Microsoft Visual Studio 安装程序](./vs-installer-light.png#gh-light-mode-only)
![Microsoft Visual Studio 安装程序](./vs-installer-dark.png#gh-dark-mode-only)

<figcaption>列表 1-1：使用 Visual Studio 生成工具 2022 安装程序，并勾选 “C++ 构建工具” 和 “Windows 10 SDK”。</figcaption>
</figure>

#### 2. WebView2

:::note

在 Windows 10 （完整更新的1803 版本及更高）和 Windows 11 中，WebView2 运行时被作为操作系统的一部分进行分发。

:::

Tauri 需要 WebView2 才能在 Windows 上呈现网页内容，所以您必须先安装 WebView2。 最简单的方法是从[微软网站][download webview2]下载和运行常青版引导程序。

安装脚本会自动为您下载适合您架构的版本。 不过，如果您遇到问题 (特别是 Windows on ARM)，您可以自己手动选择正确版本。

#### 3. Rust

最后，请前往 [https://www.rust-lang.org/zh-CN/tools/install][install rust] 来安装 `rustup` (Rust 安装程序)。 请注意，为了使更改生效，您必须重新启动终端，在某些情况下需要重新启动 Windows 本身。

或者，您可以在 PowerShell 中使用 `winget` 命令安装程序：

```powershell
winget install --id Rustlang.Rustup
```

:::caution 使用 MSVC 工具链作为默认选项

为了获取对于 Tauri 和例如 [`trunk`][] 等工具，请确保在安装器的对话窗口中选择 MSVC Rust 工具链作为 `default host triple`。具体名称应为 `x86_64-pc-windows-msvc`，`i686-pc-windows-msvc` 或 `aarch64-pc-windows-msvc`，取决于您的操作系统。

如果您已经安装了 Rust 工具链，您可以通过运行如下代码以确保正确的工具链已经被安装：

```powershell
rustup default stable-msvc
```

:::

### macOS

#### 1. CLang 和 macOS 开发依赖项

您将需要安装 CLang 和 macOS 开发依赖项。 为此，您需要在终端中执行以下命令：

```shell
xcode-select --install
```

#### 2. Rust

要在 macOS 上安装 Rust，请打开终端并输入以下命令：

```shell
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

:::note

我们已审计了此 Bash 脚本，它只做了该做的事情。 但是，您最好在复制粘贴运行脚本之前，看看其源代码。 这是它的源代码：[rustup.sh][]

:::

此命令将下载以上脚本并开始安装用来安装最新版 Rust 的 `rustup` 工具。 您可能需要输入密码。 若安装成功，终端将显示以下内容：

```text
Rust is installed now. Great!
```

请确保重新启动终端以使更改生效。

### Linux

#### 1. 系统依赖

您需要安装几个系统依赖，如 C 语言编译器和 `webkit2gtk`。 下方是适用于部分热门发行版的安装命令：

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

注意：在 Fedora 36 及更早的版本中，`webkit2gtk4.0-devel` 包被称为 `webkit2gtk3-devel`。

  </TabItem>
  <TabItem value="gentoo" label="Gentoo">

```sh
sudo emerge --ask \
    net-libs/webkit-gtk:4 \
    dev-libs/libappindicator \
    net-misc/curl \
    net-misc/wget
```

注意：推荐使用一个桌面配置文件以为 webkit-gtk 设置恰当的 USE 标识。

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

在 NixOS 中使用 Tauri 需要一个略有不同的初始化设置，因为 Tauri 需要在编译期和动态运行期均找到所需的系统库。为了 Tauri 正常运作，环境变量 `LD_LIBRARY_PATH` 必须用正确的路径填充。

在使用[Nix Flake]时，请将以下代码复制到您的仓库的 `flake.nix` 文件中，然后运行 `nix develop` 以激活开发环境。您也可以使用 [direnv's Flakes intergration] 从而在进入项目文件夹时自动启动 dev shell。

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

如果您不使用 Nix Flake，您可以使用如下 `shell.nix` 脚本以配置 [Nix Shell]。运行 `nix-shell` 以激活开发环境，或者使用 [direnv's Flakes intergration] 从而在进入项目文件夹时自动启动 dev shell。

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

如果您想要使用 [Guix shell] 创建 Tauri 开发环境，请将以下代码复制到您的仓库中的 `manifest.scm` 文件，然后运行 `guix shell` 以激活。您也可以使用 [direnv's Guix shell support] 从而在进入项目文件夹时自动启动 Guix shell。

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

要在 Linux 上安装 Rust，请打开终端并输入以下命令：

```shell
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

:::note

我们已审计了此 Bash 脚本，它只做了该做的事情。 但是，您最好在复制粘贴运行脚本之前，看看其源代码。 这是它的源代码：[rustup.sh][]

:::

此命令将下载以上脚本并开始安装用来安装最新版 Rust 的 `rustup` 工具。 您可能需要输入密码。 若安装成功，终端将显示以下内容：

```text
Rust is installed now. Great!
```

请确保重新启动终端以使更改生效。

## 管理 Rust 安装

您应该保持更新您的 Rust 版本，以便使用最新改进。 若要更新 Rust，请打开终端并运行以下命令：

```shell
rustup update
```

`rustup` 也可以从您的计算机上完全卸载 Rust：

```shell
rustup self uninstall
```

## 故障排查

要检查您是否正确安装了 Rust，请打开终端并运行如下命令：

```shell
rustc --version
```

您应该能看到以下列格式呈现的版本号、提交哈希及提交日期：

```text
rustc x.y.z (abcabcabc yyyy-mm-dd)
```

若您没有看到此信息，则表示您的 Rust 安装可能存在问题。 请参阅 [Rust 故障排查][]一节来了解如何解决此问题。 若您的问题仍然存在，您可以从 [Tauri 官方 Discord][] 及 [GitHub 讨论][]处获得帮助。

[Rust]: https://www.rust-lang.org
[install rust]: https://www.rust-lang.org/tools/install
[Visual Studio 2022 生成工具]: https://visualstudio.microsoft.com/visual-cpp-build-tools/
[Rust 故障排查]: https://doc.rust-lang.org/book/ch01-01-installation.html#troubleshooting
[Tauri 官方 Discord]: https://discord.com/invite/tauri
[GitHub 讨论]: https://github.com/tauri-apps/tauri/discussions
[download webview2]: https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/#download-section
[rustup.sh]: https://sh.rustup.rs
[`trunk`]: https://trunkrs.dev
