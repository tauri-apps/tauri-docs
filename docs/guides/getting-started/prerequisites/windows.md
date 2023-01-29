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

To setup your Windows machine for Android development you can either install Android Studio or download the tools separetely.

### Android Studio

<AndroidStudioSetup platform="windows" />

### Standalone Installation

#### 1. Installing JDK

Install the JDK. For example manually like this:

```powershell
Invoke-WebRequest https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_windows-x64_bin.zip -o openjdk-11.zip
Expand-Archive openjdk-11.zip -d .
mkdir $env:LocalAppData\Java
mv jdk-11.0.2 $env:LocalAppData\Java
```

Set the `JAVA_HOME` environment variable:

```powershell
[System.Environment]::SetEnvironmentVariable("JAVA_HOME", "$env:LocalAppData\Java\jdk-11.0.2", "User")
```

#### 2. Install the Android SDK and NDK

Download the Android SDK Manager directly through the Command line tools bundle:

```powershell
Invoke-WebRequest https://dl.google.com/android/repository/commandlinetools-win-8512546_latest.zip -o cmdline-tools.zip
Expand-Archive cmdline-tools.zip -d .
mkdir $HOME\.android\cmdline-tools\latest
mv cmdline-tools\* $HOME\.android\cmdline-tools\latest
rm cmdline-tools
```

Set the `ANDROID_HOME` and `NDK_HOME` environment variables:

```powershell
[System.Environment]::SetEnvironmentVariable("ANDROID_HOME", "$HOME\.android", "User")
[System.Environment]::SetEnvironmentVariable("NDK_HOME", "$HOME\.android\ndk\25.0.8775105", "User")
```

:::warning

You need to reboot your Windows machine now in order for the environment variables to be loaded correctly.

:::

Install required SDK and NDK components:

```powershell
& "$env:ANDROID_HOME\cmdline-tools\latest\bin\sdkmanager.bat" "platforms;android-33" "platform-tools" "ndk;25.0.8775105" "build-tools;33.0.0"
```

## Managing The Rust Installation

<SetupManagingRust />

## Troubleshooting

<SetupTroubleshooting />

[install rust]: https://www.rust-lang.org/tools/install
[build tools for visual studio 2022]: https://visualstudio.microsoft.com/visual-cpp-build-tools/
[download webview2]: https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section
[`trunk`]: https://trunkrs.dev
