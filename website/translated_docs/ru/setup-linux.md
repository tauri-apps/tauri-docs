---
id: setup-linux
title: "Setup for Linux"
sidebar_label: Setup for Linux
---

This setup is only needed for development. Consumers of Tauri apps will not have to do any of this.

## Dependencies
Tauri is a polyglot system, and as such requires a good deal of tooling.

### System dependencies:
```
$ sudo apt update && sudo apt install libwebkit2gtk-4.0-dev build-essential curl libssl-dev
```

### Node runtime and package manager
We recommend using NVM to manage your node runtime. It allows you to easily switch versions and update.
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```
> We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere [download link](https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh)

Once nvm is installed (you may have to use another terminal), then install Node 12LTS and the latest NPM:
```
nvm install 12
nvm use 12
```
If you have any problems with NVM, please consult their [project readme](https://github.com/nvm-sh/nvm).

Now that `npm` is installed, if you like you may additionally install `yarn` - the preferred package manager of the Tauri team.

```
npm install --global yarn
```


### Rustc and Cargo package manager
```
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
> We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere [download link](https://sh.rustup.rs).

Make sure that `rustc` and `cargo` are in your $PATH. Run

```
$ rustc --version
latest update on 2019-12-19, rust version 1.40.0
```
and make sure you are on latest update on 2019-12-19, rust version 1.40.0 - otherwise be sure to update.

```
$ rustup update stable
$ rustup override set 1.40.0
```

## Tauri bundler
After you have installed Rust and the build toolchain, it is wise to open a new shell before continuing.

Setup the bundler:

```
$ cargo install tauri-bundler --force
```

## WSL users' step

In order to run a graphical application with WSL, you need to download **one** of these X servers: Xming, Cygwin X, and vcXsrv. Since vcXsrv has been used internally, it's the one we recommend to install.

### WSL version 1
Open the X server and then run `export DISPLAY=:0` in the terminal. You should now be able to run any graphical application via the terminal.

### WSL version 2
You need to run a command that is slightly more complex than WSL 1: `export DISPLAY=$(/etc/resolv.conf < awk '/nameserver/ {print $2}'):0` and you need to add `-ac` to the X server as an argument.

### Note:

Don't forget that you'll have to use the "export" command anytime you want to use a graphical application, for each newly opened terminal.

You can download some examples to try with `sudo apt-get install x11-apps`. xeyes is always a good one. It can be handy when troubleshooting WSL issues.

There are some known issues on WSL 2 regarding loopback; that is running a localhost server from the terminal. If you are on WSL 2, be wary of this. You can find information regarding that [here](https://github.com/microsoft/WSL/issues/4636).
