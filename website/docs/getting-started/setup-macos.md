---
id: setup-macos
title: 'Setup for MacOS'
sidebar_label: Setup for MacOS
---

This setup is only needed for development. Consumers of Tauri apps will not have to do any of this.

## Dependencies

Tauri is a polyglot system, and as such requires a good deal of tooling.

### System Dependencies:

You will need to have [Homebrew](https://brew.sh/) installed to run the following command.

```sh
$ brew install gcc
```

### Node Runtime and Package Manager

We recommend using NVM to manage your Node runtime. It allows you to easily switch versions and update Node.

```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

<div className="alert alert--info" role="alert">
We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere <a href="https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh" target="_blank">download link</a>.
</div>
<br/>

Once NVM is installed, close and reopen your terminal, then install Node v12 LTS and the latest npm:

```sh
$ nvm install 12
$ nvm use 12
```

If you have any problems with NVM, please consult their [project readme](https://github.com/nvm-sh/nvm).

Now that Node and npm are installed, if you like you may additionally install [Yarn](https://yarnpkg.com/) - the preferred package manager of the Tauri team.

```sh
$ npm install --global yarn
```

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

Now that you have set up the MacOS-specific dependencies for Tauri, continue following the [getting started guide](intro#initializing-an-app).
