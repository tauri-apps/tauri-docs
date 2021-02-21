---
id: detailed-flow
title: Detailed Flow
---

NOTE: This document requires revision.

## Introduction

This document serves to map the interconnectedness of the maze of modules that are involved in the process of creating, developing and building a Tauri app. Note, this is a living document. The current status is reflected below.

### Initialization (JS ONLY)

```
$ tauri init
  Options
    --help, -h        Displays this message
    --force, -f       Force init to overwrite [conf|template|all]
    --log, -l         Logging [boolean]
    --directory, -d   Set target directory for init
    --tauri-path, -t   Path of the Tauri project to use (relative to the cwd)

=> runs /cli/tauri.js/bin/tauri.js
 handoff to /cli/tauri.js/bin/tauri-init.js
 handoff to /cli/tauri.js/api/init.js
 uses /cli/tauri.js/template.js
     ? parses CWD (or --directory) as DIR
     ! creates $DIR/tauri.conf.js (if not found or --force)
       - renders /cli/tauri.js/templates/tauri.conf.js
     ! creates $DIR/src-tauri (if not found or --force)
       - renders /cli/tauri.js/templates/src-tauri
process.exit()
```

## Using Rust

One thing to recognize is that we don't use command line flags for `tauri dev` or `tauri build`. This is because we are using the `tauri.conf.js` file to manage all settings.

### Development (JS + RUST)

```
$ tauri dev
  Options
    --help, -h        Displays this message

=> runs /cli/tauri.js/bin/tauri.js
 handoff to /cli/tauri.js/bin/tauri-dev.js
 handoff to /cli/tauri.js/api/dev.js
    ? /cli/tauri.js/helpers/tauri-config merges tauri.conf.js
      * This is where the following ENV values are being set.
        TAURI_DIST_DIR
        TAURI_DIR
    ! merges config with `ctx`
    => runs generator at /cli/tauri.js/generator.js
    => runs entry at /cli/tauri.js/entry.js
    => returns tauri Runner from /cli/tauri.js/runner.js
 new Runner()
   Runner.run:
   -> get paths
   -> inline assets if needed
   -> transform tauri.conf.js:conf.allowlist to toml
     -> manipulate Cargo.toml for API allow features
   -> start chokidar filewatcher (to restart dev-service on changes)
   -> spawn cargo run with dev-server arg (if needed ?)
 cargo run -features [dev-server]
  [WIP]
   spawn WebView with settings from tauri.conf.js
   point WebView at dev-server
   inject tauri.js into WebView
   init tauri
```

### Build (JS + RUST + BASH)

```
$ tauri build
  Options
    --help, -h        Displays this message

=> runs /cli/tauri.js/bin/tauri.js
 handoff to /helpers/tauri-configbin/tauri-dev.js
    // notably, the only difference between dev and build up to this point
    // is that the build command is passed a ctx.debug = argv.debug
 handoff to /cli/tauri.js/api/dev.js
    ? /cli/tauri.js/helpers/tauri-config merges tauri.conf.js
      * This is where the following ENV values are being set.
        TAURI_DIST_DIR
        TAURI_DIR
    ! merges config with `ctx`
      // notably, the only difference between dev and build up to this point
      // is that build modifies the `ctx` of the config to prod:true
    => runs generator at /cli/tauri.js/generator.js
    => runs entry at /cli/tauri.js/entry.js
    => returns tauri Runner from /cli/tauri.js/runner.js
 new Runner()
   Runner.build:
   -> get paths
   -> inline assets if needed
   -> transform tauri.conf.js:conf.allowlist to toml
     -> manipulate Cargo.toml for API allow features
   -> spawns cargo 'module' `tauri-cli` (using /cli/tauri.js/helpers/spawn.js)
      - feature 'embedded-server' : 'no-server'
      - --release (or debug)
      - --target
        // The target is currently implicit based upon the OS
        // We need to add configurations for e.g. .app / .dmg on macOS
 cargo tauri-cli
   [WIP]
   -> detect the OS
   -> handoff to respective OS builder
   -> run cargo build
     - parse the config settings in the project's Cargo.toml
   -> package assets
```

## module reference

| ‡   | TITLE            | SCOPE                             | LANG/ENV                   | STATUS   | CODEOWNERS                    |
| --- | ---------------- | --------------------------------- | -------------------------- | -------- | ----------------------------- |
| C   | cli/tauri.js     | bootstrapping, template rendering | TS, ES5 / NODE, DENO(SOON) | active   | Lucas, Daniel, Noah           |
| C   | tauri            | lib / api                         | rust                       | active   | Lucas, Tensor, Khionu, Daniel |
| C   | tauri-build      | bindings                          | rust                       | active   | Lucas, Tensor, Khionu, Daniel |
| C   | tauri-update     | update, optional                  | rust                       | active   | Lucas, Tensor, Khionu, Daniel |
| C   | cli/tauri-cli    | asset bundler                     | rust, bash                 | active   | Tensor, Daniel                |
| O   | tauri-webpack    | devland-dep, webpack, no-server   | ES6                        | active   | Lucas, Benoit                 |
| O   | tauri-inliner    | cli-dep                           | ES5                        | fork     | Lucas, Daniel                 |
| O   | tauri-includedir | tauri-dep                         | rust                       | fork     | Lucas, Tensor                 |
| O   | tauri-toml       | cli-dep                           | ES5                        | fork     | Lucas, Daniel, Noah           |
| S   | smoke-tests      | testing                           | html/js/css/rust           | in use   | respective authors            |
| O   | tauri.studio     | docs                              | quasar                     | in dev   | Daniel                        |
| U   | boscop/web-view  | upstream                          | rust                       | active   | boscop/xsey                   |
| U   | zserge/webview   | upstream @boscop                  | c,cpp,objc                 | molasses | zserge                        |
| S   | gh-actions       | all                               | yaml / bash-like           | active   | Jacob, Daniel, Rajiv          |
| O   | vue-cli-plugin   | vue                               | ES6                        | active   | Noah                          |

##### `‡` Legend

- C -> map to core repo https://github.com/tauri-apps/tauri/$TITLE
- O -> map to own repo https://github.com/tauri-apps/$TITLE
- U -> map to another repo: https://github.com/$TITLE
- S -> special

## entry points

rust
js/ts/deno
tauri init (consumer)

## modes

- build
  - embedded-server
  - no-server
- dev
  - their devserver
  - our devserver (future possibility, after alpha)
