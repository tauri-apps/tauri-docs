---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 사전 요구 사항

## 설치

첫 걸음은 [Rust][]와 시스템 의존성을 설치하는 것으로부터 시작됩니다. 이 설정은 _Tauri 앱을 개발_할 때만 필요하다는 것을 명심하세요. 최종 사용자는 이 중 그 무엇도 필요로 하지 않습니다.

### Windows에서 설정하기

#### 1. Microsoft Visual Studio C++ Build Tools

Microsoft Visual Studio C++ Build Tools를 설치해야 합니다. [Build Tools for Visual Studio 2022][]를 설치하는 것이 가장 쉽습니다. 어떤 워크로드를 설치할 지 물어볼 때, "C++ 빌드 도구"와 Windows 10 SDK가 선택되어 있게 하세요.

<figure>

![Microsoft Visual Studio Installer](./vs-installer-light.png#gh-light-mode-only)
![Microsoft Visual Studio Installer](./vs-installer-dark.png#gh-dark-mode-only)

<figcaption>목록 1-1: Visual Studio Build Tools 2022 설치 도구를 이용해 "C++ build tools"와 "Windows 10 SDK"를 선택.</figcaption>
</figure>

#### 2. WebView2

:::note

On Windows 10 (Version 1803 and later with all updates applied) and Windows 11, the WebView2 runtime is distributed as part of the operating system.

:::

Tauri는 Windows에서 웹 콘텐츠를 그리기 위해 WebView2에 강하게 의존합니다. 따라서, WebView2를 설치되어 있어야만 합니다. [Microsoft 웹사이트][download webview2]에서 에버그린 부트스트래퍼를 내려받아 실행하는 것이 가장 쉽습니다.

부트스트래퍼 스크립트가 시스템에 알맞은 아키텍처와 버전을 결정해주려 할 것입니다. 그럼에도 여전히 (특히 Windows on ARM에서) 문제를 겪고 계시다면 알맞은 독립 실행형 설치 관리자를 선택해볼 수도 있습니다.

#### 3. Rust

마지막으로, `rustup` (Rust 설치기)을 설치하기 위해 [https://www.rust-lang.org/tools/install][install rust]을 방문하세요. 변경 사항을 적용하려면 터미널이나 경우에 따라선 Windows 자체를 재시작해야 할 수 있습니다.

대안으로 PowerShell의 `winget` 명령어를 사용해 rustup을 설치할 수도 있습니다.

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

### macOS에서 설정하기

#### 1. CLang과 macOS 개발 의존성

CLang과 macOS 개발 의존성을 설치해야 합니다. 이를 위해, 터미널에 다음 명령어를 실행하세요:

```shell
xcode-select --install
```

#### 2. Rust

macOS에서 Rust를 설치하기 위해, 터미널을 열어 다음 명령어를 입력하세요:

```shell
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

:::note

저희는 bash 스크립트를 검사하였고, 스크립트는 해야할 일만 합니다. 그럼에도, 덮어넣고 curl 결과물을 bash로 실행하기 전에 먼저 어떤 스크립트인지 확인하는 것이 현명합니다. 여기 숨김 없는 스크립트 파일이 있습니다: [rustup.sh][]

:::

이 명령어는 스크립트를 내려받고 Rust의 마지막 안정 버전을 내려받는 `rustup` 도구 설치를 시작합니다. 암호를 입력해야 할 수도 있습니다. 만약 설치에 성공했다면, 다음 문장이 나타날 것입니다.

```text
Rust is installed now. Great!
```

터미널을 재시작해 변경 사항을 적용하세요.

### Linux에서 설정하기

#### 1. 시스템 의존성

C 컴파일러와 `webkit2gtk` 같은 몇몇 시스템 의존성을 설치해야 합니다. 아래는 몇 유명한 배포판을 위한 명령어입니다:

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

Tauri가 런타임, 컴파일 타임에 필요한 시스템 바이너리를 찾는 것처럼 NixOS에서 작업할 때는 약간 다른 설치방법이 필요합니다. Tauri에서 이 라이브러리들을 사용할 수 있도록 하려면 'LD_LIBRARY_PATH' 환경 변수를 올바른 경로로 설정해줘야 합니다.

[Nix Flakes]를 사용할 때, 저장소의 `flake.nix`에 복사한 다음 `nix dev`를 실행하여 개발 환경을 활성화합니다. 그리고, [direnv's Flakes integration] 을 사용하여 프로젝트 폴더에 들어갈 때 자동으로 dev shell을 시작할 수 있습니다.

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

If you don't use Nix Flakes, the [Nix Shell] can be configured using the following `shell.nix` script. `nix-shell`을 실행하여 개발 환경을 활성화하거나 [direnv's Shell integration] 을 사용하여 프로젝트 폴더에 들어갈 때 dev shell을 자동으로 시작합니다.

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

Linux에서 Rust를 설치하기 위해, 터미널을 열어 다음 명령어를 입력하세요:

```shell
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

:::note

저희는 bash 스크립트를 검사하였고, 스크립트는 해야할 일만 합니다. 그럼에도, 덮어넣고 curl 결과물을 bash로 실행하기 전에 먼저 어떤 스크립트인지 확인하는 것이 현명합니다. 여기 숨김 없는 스크립트 파일이 있습니다: [rustup.sh][]

:::

이 명령어는 스크립트를 내려받고 Rust의 마지막 안정 버전을 내려받는 `rustup` 도구 설치를 시작합니다. 암호를 입력해야 할 수도 있습니다. 만약 설치에 성공했다면, 다음 문장이 나타날 것입니다.

```text
Rust is installed now. Great!
```

터미널을 재시작해 변경 사항을 적용하세요.

## Rust 설치본 관리

최신 개선 사항의 이점을 누리려면 Rust 버전을 가능한 한 최신 버전으로 유지해야 합니다. Rust를 판올림하기 위해, 터미널을 열어 다음 명령어를 실행하세요:

```shell
rustup update
```

또한, `rustup`은 기기에서 Rust를 완전히 제거하는 데에도 사용될 수 있습니다.

```shell
rustup self uninstall
```

## 문제 해결

Rust가 올바르게 설치되었는지 확인하려면 셸을 열어 다음 명령어를 입력하세요:

```shell
rustc --version
```

다음 형식에 맞게 버전 넘버, 커밋 해시, 그리고 마지막 안정 버전의 커밋 날짜를 보여줄 것입니다:

```text
rustc x.y.z (abcabcabc yyyy-mm-dd)
```

만약 그런 정보가 보이지 않는다면, Rust 설치본이 고장난 것일 수 있습니다. [Rust의 문제 해결 섹션][]을 참고해 해결 방안을 찾아보세요. 만약 문제가 계속 지속된다면, 공식 [Tauri Discord][]와 [GitHub Discussions][]에서 도움을 구할 수 있습니다.

[Rust]: https://www.rust-lang.org
[install rust]: https://www.rust-lang.org/tools/install
[Build Tools for Visual Studio 2022]: https://visualstudio.microsoft.com/visual-cpp-build-tools/
[Rust의 문제 해결 섹션]: https://doc.rust-lang.org/book/ch01-01-installation.html#troubleshooting
[Tauri Discord]: https://discord.com/invite/tauri
[GitHub Discussions]: https://github.com/tauri-apps/tauri/discussions
[download webview2]: https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section
[rustup.sh]: https://sh.rustup.rs
[`trunk`]: https://trunkrs.dev
