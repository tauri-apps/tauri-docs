---
id: cli
title: CLI
---

import Command from '@theme/Command'
import Alert from '@theme/Alert'


The tauri.js cli is composed in TypeScript and published as JavaScript. 

## `info`

<Command name="info" />

```
  DESCRIPTION:
    Returns the known state of tauri dependencies and configuration
```

It shows a concise list of information about the environment, Rust, Node.js and their versions as well as some relevant configurations.

<Alert title="Note" icon="info-alt">
This command is pretty helpful when you need to have a quick overview of your application. When requesting some help, it can be useful that you share this report with us.
</Alert>

## `init`

<Command name="init" />

```
  DESCRIPTION:
    Inits the Tauri template. If Tauri cannot find the src-tauri/tauri.conf.json
    it will create one.
  USAGE:
    tauri init [FLAGS] [OPTIONS]

  FLAGS:
          --ci         Skip prompting for values
      -f, --force      Force init to overwrite the src-tauri folder
      -h, --help       Prints help information
      -l, --log        Enables logging
      -V, --version    Prints version information

  OPTIONS:
      -A, --app-name <app-name>            Name of your Tauri application
      -P, --dev-path <dev-path>            Url of your dev server
      -d, --directory <directory>          Set target directory for init
      -D, --dist-dir <dist-dir>            Web assets location, relative to <project-dir>/src-tauri
      -t, --tauri-path <tauri-path>        Path of the Tauri project to use (relative to the cwd)
      -W, --window-title <window-title>    Window title of your Tauri application
```

## `dev`

<Command name="dev" />

```
  DESCRIPTION:
    Tauri dev.
  USAGE:
    tauri dev [FLAGS] [OPTIONS] [--] [args]...

  ARGS:
      <args>...    Args passed to the binary

  FLAGS:
      -e, --exit-on-panic    Exit on panic
      -h, --help             Prints help information
          --release          Run the code in release mode
      -V, --version          Prints version information

  OPTIONS:
      -c, --config <config>           config JSON to merge with tauri.conf.json
      -f, --features <features>...    list of cargo features to activate
      -r, --runner <runner>           binary to use to run the application
      -t, --target <target>...        target triple to build against
```

This command will open the WebView in development mode. It makes use of the `build.devPath` property from your `src-tauri/tauri.conf.json` file.

If you have entered a command to the `build.beforeDevCommand` property, this one will be executed before the `dev` command.

<a href="/docs/api/config#build">See more about the configuration.</a><br/><br/>

<Alert title="Troubleshooting" type="warning" icon="alert">

If you're not using `build.beforeDevCommand`, make sure your `build.devPath` is correct and, if using a development server, that it's started before using this command.
</Alert>

## `deps`

<Command name="deps" />

```
  DESCRIPTION:
    Tauri dependency management script
  Usage
    $ tauri deps [install|update]
```


## `build`

<Command name="build" />

```
  DESCRIPTION:
    Tauri build.
  USAGE:
    tauri build [FLAGS] [OPTIONS]

  FLAGS:
      -d, --debug      Builds with the debug flag
      -h, --help       Prints help information
      -v, --verbose    Enables verbose logging
      -V, --version    Prints version information

  OPTIONS:
      -b, --bundle <bundle>...        list of bundles to package
      -c, --config <config>           config JSON to merge with tauri.conf.json
      -f, --features <features>...    list of cargo features to activate
      -r, --runner <runner>           binary to use to build the application
      -t, --target <target>...        target triple to build against
```

This command will bundle your application, either in production mode or debug mode if you used the `--debug` flag. It makes use of the `build.distDir` property from your `src-tauri/tauri.conf.json` file.

If you have entered a command to the `build.beforeBuildCommand` property, this one will be executed before the `build` command.

<a href="/docs/api/config#build">See more about the configuration.</a>

## `icon`

<Command name="icon" />

```
  DESCRIPTION:
    Create all the icons you need for your Tauri app.
    The icon path is the source icon (png, 1240x1240 with transparency).

  Usage
    $ tauri icon [ICON-PATH]

  Options
      --help, -h          Displays this message
      --log, l            Logging [boolean]
      --target, t         Target folder (default: 'src-tauri/icons')
      --compression, c    Compression type [optipng|zopfli]
      --ci                Runs the script in CI mode
```

This command will generate a set of icons, based on the source icon you've entered.

## `version`

<Command name="--version" />

```
  DESCRIPTION:
    Returns the current version of tauri
```

This command will show the current version of Tauri.

## `sign`

<Command name="sign" />

```
  DESCRIPTION:
    Tauri updates signer.

  USAGE:
      cargo tauri sign [FLAGS] [OPTIONS]

  FLAGS:
          --force          Overwrite private key even if it exists on the specified path
      -g, --generate       Generate keypair to sign files
      -h, --help           Prints help information
          --no-password    Set empty password for your private key
      -V, --version        Prints version information

  OPTIONS:
      -p, --password <password>                    Set private key password when signing
      -k, --private-key <private-key>              Load the private key from a string
      -f, --private-key-path <private-key-path>    Load the private key from a file
          --sign-file <sign-file>                  Sign the specified file
      -w, --write-keys <write-keys>                Write private key to a file
```

## CLI usage

See more about the usage through this [complete guide](/docs/usage/development/integration).
