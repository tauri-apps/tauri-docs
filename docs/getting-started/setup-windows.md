---
title: Setup for Windows
---

import Alert from '@theme/Alert'

This setup is only needed for development. Consumers of Tauri apps will not have to do any of this.

## Dependencies

Tauri is a polyglot system, and as such requires a good deal of tooling.

### System Dependencies:

First you should [download](https://aka.ms/buildtools) and install Visual Studio MSBuild Tools and C++ build tools.

<Alert title="Note">
This is a big download (over 1GB) and takes the most time, so go grab a :coffee:
</Alert>

<Alert type="warning">

Be sure you don't have the 2017 version of the build tools installed as well. There are reports of `tauri build` not working in such a configuration.
</Alert>

Next, you will need to install [Node.js](https://nodejs.org/en/). We recommend installing it by downloading and installing the latest [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) for features such as version management.

<Alert title="Note">
nvm is not mandatory and if you already have Node.js installed, you may skip it.
</Alert>

Then run the following from an Administrative PowerShell and press Y when prompted:

```powershell
# BE SURE YOU ARE IN AN ADMINISTRATIVE PowerShell!
nvm install latest
nvm use {{latest}} # Replace with your latest downloaded version
```

This will install the most recent version of Node.js with npm.

### Rustc and Cargo Package Manager

Now you will need to install [Rust](https://www.rust-lang.org/). The easiest way to do this is to use [rustup](https://rustup.rs/), the official installer.

[64-bit download link](https://win.rustup.rs/x86_64)

[32-bit download link](https://win.rustup.rs/i686)

Download and install the proper variant for your computer's architecture. After, run the following command in a terminal.

```powershell
rustup update stable
```

### Enable Loopback

Microsoft disables the loopback interface - you need to whitelist it if you intend to use the dev-server:

Open an administrative console and enter:

```powershell
CheckNetIsolation.exe LoopbackExempt -a -n="Microsoft.Win32WebViewHost_cw5n1h2txyewy"
```

<div className="alert alert--info" role="alert">
There are reports that you have to restart your computer after running this command, so if it isn't working for you, try that!
</div>
<br/>

### Devtools

If you want to debug the front-end you will have to download [Microsoft Edge Devtools](https://www.microsoft.com/store/p/microsoft-edge-devtools-preview/9mzbfrmz0mnj) from the Microsoft store.

This will allow you to attach to a running instance of your Tauri project!
If you need help take a look at the [devtools-guide](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide).

## Tauri Bundler

After you have installed Rust and other required dependencies, it is wise to restart your terminal before continuing.

Install Tauri bundler through Cargo:

```sh
cargo install tauri-bundler --force
```

## Continue

Now that you have set up the Windows-specific dependencies for Tauri, learn how to [add Tauri to your project](/docs/usage/development/integration).
