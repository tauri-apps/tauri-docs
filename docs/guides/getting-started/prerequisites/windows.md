---
sidebar_position: 1
pagination_next: guides/getting-started/setup/README
description: ''
---

import AndroidStudioSetup from './\_fragments/\_android-studio-setup.mdx'
import SetupManagingRust from './\_fragments/\_setup-managing-rust.mdx'
import SetupTroubleshooting from './\_fragments/\_setup-troubleshooting.mdx'

# Setting Up Windows

### 1. Microsoft Visual Studio C++ Build Tools

You will need to install Microsoft Visual Studio C++ build tools. The easiest way is to install [Build Tools for Visual Studio 2022]. When asked which workloads to install, ensure "C++ build tools" and the Windows 10 SDK are selected.

<figure>

![Microsoft Visual Studio Installer](./vs-installer-light.png#gh-light-mode-only)
![Microsoft Visual Studio Installer](./vs-installer-dark.png#gh-dark-mode-only)

<figcaption>Listing 1-1: Selecting "C++ build tools" and "Windows 10 SDK" using the Visual Studio Build Tools 2022 installer.</figcaption>
</figure>

### 2. WebView2

:::note

WebView2 is pre-installed in Windows 11

:::

Tauri heavily depends on WebView2 to render web content on Windows, therefore you must have WebView2 installed. The easiest way is to download and run the Evergreen Bootstrapper from [Microsoft's website][download webview2].

The bootstrapper script will try to determine the correct architecture and version for your system. Still, if you run into issues (especially with Windows on ARM) you can select the correct standalone installer.

### 3. Rust

Lastly, go to [https://www.rust-lang.org/tools/install][install rust] to install `rustup` (the Rust installer). Note that you have to restart your terminal, and in some cases, Windows itself, for the changes to take effect.

Alternatively, you could use `winget` to install rustup using the following command in PowerShell:

```powershell
winget install --id Rustlang.Rustup
```

:::caution MSVC toolchain as default

For full support for Tauri and tools like [`trunk`] make sure the MSVC Rust toolchain is the selected `default host triple` in the installer dialog. Depending on your system it should be either `x86_64-pc-windows-msvc`, `i686-pc-windows-msvc`, or `aarch64-pc-windows-msvc`.

If you already have Rust installed, you can make sure the correct toolchain is installed by running this command:

```powershell
rustup default stable-msvc
```

:::

## Android

First, make sure to install the required rust android targets:

```powershell
rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android
```

<AndroidStudioSetup platform="windows" />

## Managing The Rust Installation

<SetupManagingRust />

## Troubleshooting

<SetupTroubleshooting />

[install rust]: https://www.rust-lang.org/tools/install
[build tools for visual studio 2022]: https://visualstudio.microsoft.com/visual-cpp-build-tools/
[download webview2]: https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section
[`trunk`]: https://trunkrs.dev
