---
id: detailed-flow
title: Flux détaillé
---

REMARQUE : Ce document nécessite une révision.

## Introduction

Ce document sert à cartographier l'interconnexion du labyrinthe de modules qui sont impliqués dans le processus de création, de développement et de compilation d'une application Tauri. Notez qu'il s'agit d'un document évolutif. La situation actuelle est présentée ci-dessous.

### Initialisation (SEULEMENT JS)

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

## Utiliser Rust

Il faut savoir que nous n'utilisons pas de paramètres en ligne de commande pour `tauri dev` ou `tauri build`. C'est parce que nous utilisons le fichier `tauri.conf.js` pour gérer tous les paramètres.

### Développement (JS + RUST)

```
$ tauri dev
  Options
    --help, -h        Displays this message

=> runs /cli/tauri.js/bin/tauri.js
 handoff to /cli/tauri.js/bin/tauri-dev.js
 handoff to /cli/tauri.js/api/dev.js
    ? /cli/tauri.js/helpers/tauri-config merges tauri.conf.js
      * C'est là que les valeurs ENV suivantes sont fixées.
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
   spawn webview with settings from tauri.conf.js
   point webview at dev-server
   inject tauri.js into webview
   init tauri
```

### Compilation (JS + RUST + BASH)

```
$ tauri build
  Options
    --help, -h        Displays this message

=> runs /cli/tauri.js/bin/tauri.js
 handoff to /helpers/tauri-configbin/tauri-dev.js
    // notamment, la seule différence entre dev et build jusqu'à présent
    // est que la commande de compilation est passée avec ctx.debug = argv.debug
 handoff to /cli/tauri.js/api/dev.js
    ? /cli/tauri.js/helpers/tauri-config merges tauri.conf.js
      * C'est là que les valeurs ENV suivantes sont fixées.
        TAURI_DIST_DIR
        TAURI_DIR
    ! merges config with `ctx`
      // notamment, la seule différence entre dev et build jusqu'à présent
      // est que la compilation modifie le `ctx` de la config pour prod:true
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
        // La cible est actuellement implicite sur la base du système d'exploitation
        // Nous devons ajouter des configurations pour par exemple .app / .dmg sur macOS
 cargo tauri-cli
   [WIP]
   -> detect the OS
   -> handoff to respective OS builder
   -> run cargo build
     - parse the config settings in the project's Cargo.toml
   -> package assets
```

## réféfence des modules

| ‡ | TITRE            | PÉRIMÈTRE                       | LANG/ENV                      | STATUT                 | RESPONSABLES                  |
| - | ---------------- | ------------------------------- | ----------------------------- | ---------------------- | ----------------------------- |
| C | cli/tauri.js     | bootstrapping, rendu du modèle  | TS, ES5 / NODE, DENO(BIENTÔT) | actif                  | Lucas, Daniel, Noah           |
| C | tauri            | lib / api                       | rust                          | actif                  | Lucas, Tensor, Khionu, Daniel |
| C | tauri-build      | interfaces                      | rust                          | actif                  | Lucas, Tensor, Khionu, Daniel |
| C | tauri-update     | mise à jour, optionnelle        | rust                          | actif                  | Lucas, Tensor, Khionu, Daniel |
| C | cli/tauri-cli    | asset bundler                   | rust, bash                    | actif                  | Tensor, Daniel                |
| O | tauri-webpack    | devland-dep, webpack, no-server | ES6                           | actif                  | Lucas, Benoit                 |
| O | tauri-inliner    | cli-dep                         | ES5                           | fork                   | Lucas, Daniel                 |
| O | tauri-includedir | tauri-dep                       | rust                          | fork                   | Lucas, Tensor                 |
| O | tauri-toml       | cli-dep                         | ES5                           | fork                   | Lucas, Daniel, Noah           |
| S | smoke-tests      | tests                           | html/js/css/rust              | en cours d'utilisation | auteurs respectifs            |
| O | tauri.studio     | docs                            | quasar                        | en développement       | Daniel                        |
| U | boscop/web-view  | upstream                        | rust                          | actif                  | boscop/xsey                   |
| U | zserge/webview   | upstream @boscop                | c,cpp,objc                    | mélange                | zserge                        |
| S | gh-actions       | tout                            | yaml / bash-like              | actif                  | Jacob, Daniel, Rajiv          |
| O | vue-cli-plugin   | vue                             | ES6                           | actif                  | Noah                          |

##### `‡` Légende

- C -> correspond au dépôt du noyau https://github.com/tauri-apps/tauri/$TITLE
- O -> correspond à nos dépôts https://github.com/tauri-apps/$TITLE
- U -> correspond aux autres dépôts : https://github.com/$TITLE
- S -> spécial

## points d'entrée

rust js/ts/deno tauri init (consumer)

## modes

- build
  - embedded-server
  - no-server
- dev
  - their devserver
  - our devserver (possibilité future, après l'alpha)
