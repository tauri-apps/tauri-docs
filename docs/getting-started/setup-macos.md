---
title: Setup for MacOS
---

import Alert from '@theme/Alert'

This setup is only needed for development. Consumers of Tauri apps will not have to do any of this.

## Dependencies

Tauri is a polyglot system, and as such requires a good deal of tooling.

### System Dependencies:

You will need to have [Homebrew](https://brew.sh/) installed to run the following command.

```sh
$ brew install gcc
```

You will also need to make sure `xcode` is installed.

```
$ xcode-select --install
```

### NodeJS Runtime and Package Manager

We recommend using nvm to manage your NodeJS runtime. It allows you to easily switch versions and update NodeJS.

nvm is not mandatory and if you already have NodeJS installed, you may skip this section.

```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

<Alert type="info" title="Note">
We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere <a href="https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh" target="_blank">download link</a>.
</Alert>

Once nvm is installed, close and reopen your terminal, then install latest NodeJS and npm:

```sh
$ nvm install node
$ nvm use node
```

If you have any problems with nvm, please consult their [project readme](https://github.com/nvm-sh/nvm).

### Rustc and Cargo Package Manager

The following command will install [rustup](https://rustup.rs/), the official installer for [Rust](https://www.rust-lang.org/).

```
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

<div className="alert alert--info" role="alert">
We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere <a href="https://sh.rustup.rs" target="_blank">download link</a>.
</div>
<br/>

To make sure that Rust has been installed successfully, run the following command:

```sh
$ rustc --version
latest update on 2019-12-19, rust version 1.40.0
```

You may need to restart your terminal if the command does not work.

If you already installed rustup previously, make sure that you update Rust.

```sh
$ rustup update stable
```

## Tauri Bundler

After you have installed Rust and other required dependencies, it is wise to restart your terminal before continuing.

Install Tauri bundler through Cargo:

```sh
$ cargo install tauri-bundler --force
```

## Continue

Now that you have set up the MacOS-specific dependencies for Tauri, learn how to [add Tauri to your project](/docs/usage/development/integration).
