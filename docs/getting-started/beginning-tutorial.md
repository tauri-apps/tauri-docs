---
title: Your First Tauri App
---

import Alert from '@theme/Alert'
import Command from '@theme/Command'
import Link from '@docusaurus/Link'

:::caution
You must have completed all the steps required for setting up the development environment on your machine. If you haven't done this yet, please see the [setup page for your operating system](/docs/getting-started/prerequisites).
:::

There are two ways to integrate with Tauri depends on your need:
- [Start a new Tauri project](#1-start-a-new-tauri-project)
- Or [add Tauri to existing project](#1-add-tauri-to-existing-project)

### 1. Start a New Tauri Project

```bash
yarn create tauri-app
#OR
npx create-tauri-app
```

Just follow the instructions and choose the web frontend framework you prefer. `create-tauri-app` will create a template project depends on your inputs. You can go straight to [check `tauri info`](#3-check-tauri-info-to-make-sure-everything-is-set-up-properly) after this.

### 1. Add Tauri to Existing Project:

The Tauri CLI tool helps you build your project, so install it at first.

You can install Tauri CLI [using `Node.js`](#install-tauri-cli-package-as-a-dev-dependency) or [using `Rust`](#alternatively-install-tauri-cli-as-a-cargo-subcommand)

#### Install Tauri CLI package as a dev dependency:

```bash
cd project-folder

# Not required if you already have a package.json:
# yarn init
# OR
# npm init

yarn add -D @tauri-apps/cli
# OR
npm install -D @tauri-apps/cli
```

:::note
You can install Tauri as both a local and a global dependency, but we recommend installing it locally.
:::

If you decide to use Tauri as a local package with npm (not yarn), you will have to define a custom script to your package.json:

```js title=package.json
{
  // This content is just a sample
  "scripts": {
    "tauri": "tauri"
  }
}
```

#### Alternatively, install Tauri CLI as a cargo subcommand:

This will install `tauri-cli` as a Cargo subcommand on the cargo binary folder (by default on `$HOME/.cargo/bin`):

```bash
cargo install tauri-cli --locked --version ^1.0.0-rc
```

For more installation options, see [`cargo install`](https://doc.rust-lang.org/cargo/commands/cargo-install.html#description)

#### Install Tauri API Package as a Dependency (optional):

The `@tauri-apps/api` package is recommended for projects using ES modules or modern build tools such as Webpack or Vite. It is the most secure way to access the Tauri APIs.

```bash
yarn add @tauri-apps/api
# OR
npm install @tauri-apps/api
```

### 2. Initialize Tauri in Your App

<Command name="init" />

This command will place a new folder in your current working directory, `src-tauri`.

```sh
└── src-tauri
    ├── .gitignore
    ├── Cargo.toml
    ├── rustfmt.toml
    ├── tauri.conf.json
    ├── icons
    │   ├── 128x128.png
    │   ├── 128x128@2x.png
    │   ├── 32x32.png
    │   ├── Square107x107Logo.png
    │   ├── Square142x142Logo.png
    │   ├── Square150x150Logo.png
    │   ├── Square284x284Logo.png
    │   ├── Square30x30Logo.png
    │   ├── Square310x310Logo.png
    │   ├── Square44x44Logo.png
    │   ├── Square71x71Logo.png
    │   ├── Square89x89Logo.png
    │   ├── StoreLogo.png
    │   ├── icon.icns
    │   ├── icon.ico
    │   └── icon.png
    └── src
        ├── build.rs
        ├── cmd.rs
        └── main.rs
```

### 3. Check `tauri info` to Make Sure Everything Is Set up Properly:

<Command name="info" />

Which should return something like:

```
Operating System - Darwin(16.7.0) - darwin/x64

Node.js environment
  Node.js - 12.16.3
  @tauri-apps/cli - 1.0.0-rc.0
  @tauri-apps/api - 1.0.0-rc.0

Global packages
  npm - 6.14.15
  pnpm - Not installed
  yarn - 1.22.17

Rust environment
  rustup - 1.24.3
  rustc - 1.58.1
  cargo - 1.58.0
  toolchain - stable-x86_64-unknown-linux-gnu

App directory structure
/node_modules
/src-tauri
/src
/public

App
  tauri.rs - 1.0.0-rc.0
  build-type - bundle
  CSP - default-src 'self'
  distDir - ../public
  devPath - ../public
  framework - Svelte
  bundler - Rollup
```

This information can be very helpful when triaging problems.

### Recipes

We've also defined prebuilt configurations called "Recipes". They may help you to customize Tauri to fit your needs.
[See more about recipes](../architecture/recipes/about-recipes.md).

## Vue CLI Plugin Tauri

If you are using Vue CLI, it is recommended to use the official [CLI plugin](https://github.com/tauri-apps/vue-cli-plugin-tauri).
