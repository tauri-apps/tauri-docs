---
id: cli
title: CLI
---

The tauri.js cli is composed in typescript and published as javascript. These subcommands are called by appending the subcommand to `tauri`,

# Introduction
The main Tauri CLI is a NodeJS program that has a number of subcommands:
- info
- init
- dev
- build
- icon



## tauri info
```
  Description
    Returns the known state of tauri dependencies and configuration
```

## tauri init
```
  Description
    Inits the Tauri template. If Tauri cannot find the src-tauri/tauri.conf.json
    it will create one.
  Usage
    $ tauri init
  Options
    --help, -h        Displays this message
    --force, -f       Force init to overwrite [conf|template|all]
    --log, -l         Logging [boolean]
    --directory, -d   Set target directory for init
    --tauriPath, -t   Path of the Tauri project to use (relative to the cwd)
```

## tauri dev
```
  Description
    Tauri dev.
  Usage
    $ tauri dev
  Options
    --help, -h     Displays this message
```
This command is rigged via your `src-tauri/tauri.conf.json`.


## tauri build
```
  Description
    Tauri build.
  Usage
    $ tauri build
  Options
    --help, -h     Displays this message
    --debug, -d    Build a tauri app with debugging
```
This command is rigged via your `src-tauri/tauri.conf.json`.

## icon
```
  Description
    Create all the icons you need for your Tauri app.

  Usage
    $ tauri icon

  Options
    --help, -h          Displays this message
    --log, l            Logging [boolean]
    --icon, i           Source icon (png, 1240x1240 with transparency)
    --target, t         Target folder (default: 'src-tauri/icons')
    --compression, c    Compression type [pngquant|optipng|zopfli]
```

## version
`tauri --version`
```
  Description
    Returns the current version of tauri
```