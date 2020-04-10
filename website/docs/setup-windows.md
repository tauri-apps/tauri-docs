---
id: setup-windows
title: "Setup for Windows"
sidebar_label: Setup for Windows
---

This setup is only needed for development. Consumers of Tauri apps will not have to do any of this.

## Dependencies
Tauri is a polyglot system, and as such requires a good deal of tooling.

### System dependencies:

First you should [download](https://aka.ms/buildtools) and install Visual Studio MSBuild Tools and C++ build tools.

> This is a big download (over 1GB) and takes the most time, so go grab a :coffee:


Next download the latest [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) and install it for advanced nodejs version management.

Then run the following from an Administrative PowerShell and press Y when prompted:
```powershell
# BE SURE YOU ARE IN AN ADMINISTRATIVE PowerShell!
nvm install 12.16.0
nvm use 12.16.0
Set-ExecutionPolicy Bypass -Scope Process -Force; iwr -useb get.scoop.sh | iex
scoop install yarn
```
This will install the most recent version of nodejs* with nvm, scoop, and yarn.
> * Most recent nodejs as of this post
> Here you can find help for: [scoop](https://scoop.sh/), [nvm](https://github.com/coreybutler/nvm-windows), [yarn](https://yarnpkg.com/)

##### Optional if you need npm
>Following the steps above will leave you without a functioning npm installation unless running an administrative shell. If you need npm, you can simply execute the following command:
```powershell
# DO NOT EXECUTE FROM ADMINISTRATIVE PowerShell!
yarn global add npm
```

### Rustc and Cargo package manager
If you are running Windows 64-bit, download and run [rustup‑init.exe](https://win.rustup.rs/x86_64) and then follow the onscreen instructions.

If you are running Windows 32-bit, download and run [rustup‑init.exe](https://win.rustup.rs/i686) and then follow the onscreen instructions.

```
$ rustup update stable
$ rustup override set 1.40.0
```

### Enable loopback
Microsoft disables the loopback interface - you need to whitelist it if you intend to use the dev-server:

Open an administrative console and enter:
```
CheckNetIsolation.exe LoopbackExempt -a -n="Microsoft.Win32WebViewHost_cw5n1h2txyewy"
```
> There are reports that you have to restart your computer after running this command, so if it isn't working for you, try that!

### Devtools
Next if you want to debug the front-end you will have to download [Microsoft Edge Devtools](https://www.microsoft.com/store/p/microsoft-edge-devtools-preview/9mzbfrmz0mnj) from the Microsoft store.

This will allow you to attach to a running instance of you're Tauri project!
If you need help take a look at the [devtools-guide](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide).


## Tauri bundler
After you have installed Rust and the build toolchain it is wise to open a new shell before continuing.

Setup the bundler:

```
$ cargo install tauri-bundler --force
```