---
id: cli
title: CLI
---

import Command from '@theme/Command'
import Alert from '@theme/Alert'

## `info`

<Command name="info" />

```
Command line interface for building Tauri apps

USAGE:
    cargo-tauri <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    build     Tauri build
    dev       Tauri dev
    help      Print this message or the help of the given subcommand(s)
    info      Shows information about Tauri dependencies and project configuration
    init      Initializes a Tauri project
    plugin    Manage Tauri plugins
    signer    Tauri updater signer
```

It shows a concise list of information about the environment, Rust, Node.js and their versions as well as some relevant configurations.

<Alert title="Note" icon="info-alt">
This command is pretty helpful when you need to have a quick overview of your application. When requesting some help, it can be useful that you share this report with us.
</Alert>

## `init`

<Command name="init" />

```
Command line interface for building Tauri apps

USAGE:
    cargo-tauri <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    build     Tauri build
    dev       Tauri dev
    help      Print this message or the help of the given subcommand(s)
    info      Shows information about Tauri dependencies and project configuration
    init      Initializes a Tauri project
    plugin    Manage Tauri plugins
    signer    Tauri updater signer
```

## `dev`

<Command name="dev" />

```
Command line interface for building Tauri apps

USAGE:
    cargo-tauri <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    build     Tauri build
    dev       Tauri dev
    help      Print this message or the help of the given subcommand(s)
    info      Shows information about Tauri dependencies and project configuration
    init      Initializes a Tauri project
    plugin    Manage Tauri plugins
    signer    Tauri updater signer
```

This command will open the WebView in development mode. It makes use of the `build.devPath` property from your `src-tauri/tauri.conf.json` file.

If you have entered a command to the `build.beforeDevCommand` property, this one will be executed before the `dev` command.

<a href="/docs/api/config#build">See more about the configuration.</a><br/><br/>

<Alert title="Troubleshooting" type="warning" icon="alert">

If you're not using `build.beforeDevCommand`, make sure your `build.devPath` is correct and, if using a development server, that it's started before using this command.
</Alert>

## `build`

<Command name="build" />

```
Command line interface for building Tauri apps

USAGE:
    cargo-tauri <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    build     Tauri build
    dev       Tauri dev
    help      Print this message or the help of the given subcommand(s)
    info      Shows information about Tauri dependencies and project configuration
    init      Initializes a Tauri project
    plugin    Manage Tauri plugins
    signer    Tauri updater signer
```

This command will bundle your application, either in production mode or debug mode if you used the `--debug` flag. It makes use of the `build.distDir` property from your `src-tauri/tauri.conf.json` file.

If you have entered a command to the `build.beforeBuildCommand` property, this one will be executed before the `build` command.

<a href="/docs/api/config#build">See more about the configuration.</a>

## `version`

<Command name="--version" />

```
  Description
    Returns the current version of tauri
```

This command will show the current version of Tauri.

## CLI usage

See more about the usage through this [complete guide](/docs/development/development-cycle).
