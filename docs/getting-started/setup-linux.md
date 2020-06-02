---
title: Setup for Linux
---

import Alert from '@theme/Alert'
import Icon from '@theme/Icon'

This setup is only needed for development. Consumers of Tauri apps will not have to do any of this.

This page provides a **complete guide** to install Tauri along with its dependencies. Because Tauri is a polyglot toolchain and involves complex installation instructions, we want to make sure _anybody_ will manage to set it up by reading this guide without having to open another documentation.

<Icon title="alert" color="danger" />: This step is required
<br/>

<Icon title="control-skip-forward" color="warning" /> : This step is skippable if already satisfied (e.g. you already have NodeJS/Rust installed)
<br/>

<Icon title="info-alt" color="info" />: This step is purely informational
<br/>

## <Icon title="alert" color="danger" /> System Dependencies

```sh
$ sudo apt update && sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    libssl-dev \
    appmenu-gtk3-module
```

## <Icon title="control-skip-forward" color="warning" /> NodeJS Runtime and Package Manager

### NodeJS (npm included)

We recommend using nvm to manage your NodeJS runtime. It allows you to easily switch versions and update NodeJS.

```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

<Alert title="Note">
We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere <a href="https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh" target="_blank">download link</a>.
</Alert>

Once nvm is installed, close and reopen your terminal, then install lastest NodeJS and npm:

```sh
$ nvm install node --latest-npm
$ nvm use node
```

If you have any problems with nvm, please consult their <a href="https://github.com/nvm-sh/nvm">project readme</a>.

### Optional NodeJS package manager

You may want to use an alternative to npm:

- <a href="https://yarnpkg.com/getting-started" target="_blank">Yarn</a>, is preferred by Tauri's team
- <a href="https://pnpm.js.org/en/installation" target="_blank">pnpm</a>

## <Icon title="control-skip-forward" color="warning" /> Rustc and Cargo Package Manager

The following command will install <a href="https://rustup.rs/" target="_blank">rustup</a>, the official installer for <a href="https://www.rust-lang.org/" target="_blank">Rust</a>.

```
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

<Alert title="Note">
We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere <a href="https://sh.rustup.rs" target="_blank">download link</a>.
</Alert>

To make sure that Rust has been installed successfully, run the following command:

```sh
$ rustc --version
latest update on 2019-12-19, rust version 1.40.0
```

You may need to restart your terminal if the command does not work.

## <Icon title="alert" color="danger" /> Tauri Bundler

If you already had rustup installed before following this guide, make sure that you update Rust:

```sh
$ rustup update stable
```

After you have installed Rust and other required dependencies, it is wise to restart your terminal before continuing.

Install Tauri bundler through Cargo:

```sh
$ cargo install tauri-bundler --force
```

## <Icon title="info-alt" color="info" /> For Windows Subsystem for Linux (WSL) Users

In order to run a graphical application with WSL, you need to download **one** of these X servers: Xming, Cygwin X, and vcXsrv.
Since vcXsrv has been used internally, it's the one we recommend to install.

### WSL Version 1

Open the X server and then run `export DISPLAY=:0` in the terminal. You should now be able to run any graphical application via the terminal.

### WSL Version 2

You'll need to run a command that is slightly more complex than WSL 1: `export DISPLAY=$(/etc/resolv.conf < awk '/nameserver/ {print $2}'):0` and you need to add `-ac` to the X server as an argument.

<Alert type="info" title="Note">

Don't forget that you'll have to use the "export" command anytime you want to use a graphical application, for each newly opened terminal.

You can download some examples to try with `sudo apt-get install x11-apps`. xeyes is always a good one. It can be handy when troubleshooting WSL issues.

There are some known issues on WSL 2 regarding loopback; that is running a localhost server from the terminal. If you are on WSL 2, be wary of this. You can find information regarding that [here](https://github.com/microsoft/WSL/issues/4636).
</Alert>

## Continue

Now that you have set up the Linux-specific dependencies for Tauri, learn how to [add Tauri to your project](/docs/usage/development/integration).
