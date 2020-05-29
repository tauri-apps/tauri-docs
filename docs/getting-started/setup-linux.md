---
title: Setup for Linux
---

This setup is only needed for development. Consumers of Tauri apps will not have to do any of this.

## Dependencies

Tauri is a polyglot system, and as such requires a good deal of tooling.

### System Dependencies:

```sh
$ sudo apt update && sudo apt install libwebkit2gtk-4.0-dev build-essential curl libssl-dev appmenu-gtk3-module
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

## For Windows Subsystem for Linux (WSL) Users

In order to run a graphical application with WSL, you need to download **one** of these X servers: Xming, Cygwin X, and vcXsrv.
Since vcXsrv has been used internally, it's the one we recommend to install.

### WSL Version 1

Open the X server and then run `export DISPLAY=:0` in the terminal. You should now be able to run any graphical application via the terminal.

### WSL Version 2

You'll need to run a command that is slightly more complex than WSL 1: `export DISPLAY=$(/etc/resolv.conf < awk '/nameserver/ {print $2}'):0` and you need to add `-ac` to the X server as an argument.

### Note:

Don't forget that you'll have to use the "export" command anytime you want to use a graphical application, for each newly opened terminal.

You can download some examples to try with `sudo apt-get install x11-apps`. xeyes is always a good one. It can be handy when troubleshooting WSL issues.

There are some known issues on WSL 2 regarding loopback; that is running a localhost server from the terminal. If you are on WSL 2, be wary of this. You can find information regarding that [here](https://github.com/microsoft/WSL/issues/4636).

## Continue

Now that you have set up the Linux-specific dependencies for Tauri, learn how to [add Tauri to your project](/docs/usage/development/integration).
