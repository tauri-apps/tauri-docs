---
id: cli
---

import Command from '@theme/Command'

# CLI

The `cli.js` command line interface is composed in TypeScript and published as a JavaScript NPM. It offers the `deps` and the `icon` commands, and propagates other commands to `cli.rs`.

## `info`

<Command name="info" />

{info}

It shows a concise list of information about the environment, Rust, Node.js and their versions, and some relevant configurations.

:::info Note
This command is helpful when you need to have a quick overview of your application. When requesting some help, it is useful to share this report with us.
:::

## `init`

<Command name="init" />

{init}

## `dev`

<Command name="dev" />

{dev}

This command will open the WebView in development mode. It makes use of the `build.devPath` property from your `src-tauri/tauri.conf.json` file.

If you have entered a command to the `build.beforeDevCommand` property, it executes before the `dev` command.

<a href="/docs/api/config#build">See more about the configuration.</a><br/><br/>

:::caution Troubleshooting
If you're not using `build.beforeDevCommand`, make sure your `build.devPath` is correct and, if using a development server, it's started before using this command.
:::

## `deps`

<Command name="deps" />

{deps}

## `build`

<Command name="build" />

{build}

This command bundles your application in production mode; Or debug mode if you used the `--debug` flag. It makes use of the `build.distDir` property from your `src-tauri/tauri.conf.json` file.

If you have entered a command to the `build.beforeBuildCommand` property, it executes before the `build` command.

<a href="/docs/api/config#build">See more about the configuration.</a>

## `icon`

<Command name="icon" />

```
  Description
    Create all the icons you need for your Tauri app.
  Usage
    $ tauri icon /path/to/icon.png
  Options
    --help, -h           Displays this message
    --log, -l            Logging [boolean]
    --target, -t         Target folder (default: 'src-tauri/icons')
    --compression, -c    Compression type [optipng|zopfli]
    --ci                 Runs the script in CI mode     
```

This command generates a set of icons based on the source icon you've entered. Note that the source icon must be 1240x1240 with transparency.

## `version`

<Command name="--version" />

```
  Description
    Returns the current version of Tauri
```

This command shows the current version of Tauri.

## CLI usage

Read more about the usage in the [Development Guide].

[Development Guide](/docs/manual/02-Development/Development Cycle.md)