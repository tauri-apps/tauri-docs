---
id: setup-macos
title: 'Setup for MacOS'
sidebar_label: Setup for MacOS
---

This setup is only needed for development. Consumers of Tauri apps will not have to do any of this.

## Dependencies

Tauri is a polyglot system, and as such requires a good deal of tooling.

### System dependencies:

```sh
$ brew install gcc
```

### Node runtime and package manager

We recommend using NVM to manage your node runtime. It allows you to easily switch versions and update.

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

<div className="alert alert--info" role="alert">
We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere <a href="https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh" target="_blank">download link</a>.
</div><br/>

Once nvm is installed (you may have to use another terminal), then install Node 12LTS and the latest NPM:

```sh
nvm install 12
nvm use 12
```

If you have any problems with NVM, please consult their [project readme](https://github.com/nvm-sh/nvm).

Now that `npm` is installed, if you like you may additionally install `yarn` - the preferred package manager of the Tauri team.

```sh
npm install --global yarn
```

### Rustc and Cargo package manager

```
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

<div className="alert alert--info" role="alert">
We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere <a href="https://sh.rustup.rs" target="_blank">download link</a>.
</div><br/>

Make sure that `rustc` and `cargo` are in your \$PATH. Run

```sh
$ rustc --version
latest update on 2019-12-19, rust version 1.40.0
```

and make sure you are on latest update on 2019-12-19, rust version 1.40.0 - otherwise be sure to update.

```sh
$ rustup update stable
$ rustup override set 1.40.0
```

### Tauri Bundler

After you have installed Rust and the build toolchain, you may need to open a new shell before continuing.

Install the bundler:

```sh
$ cargo install tauri-bundler --force
```
