---
title: Tauri Integration
sidebar_label: 'Tauri Integration (1/4)'
---

import Alert from '@theme/Alert'
import Command from '@theme/Command'
import Link from '@docusaurus/Link'

<Alert title="Please note" type="warning" icon="alert">
  You must have completed all the steps required for setting up the development environment on your machine. If you haven't done this yet, please see the <a href="/docs/getting-started/intro#setting-up-your-environment"> setup page for your operating system</a>.
</Alert>

### 1. Install Tauri JS Package as a Dependency:

```bash
cd project-folder

# Not required if you already have a package.json:
# npm init
# OR
# yarn init

yarn add tauri
# OR
npm install tauri --save
```

<Alert title="Note">
  You can install Tauri as both a local and a global dependency, but we recommend installing it locally.
</Alert>

If you decide to use Tauri as a local package with npm, you will _have to_ define a custom script to your package.json:

```js title=package.json
{
  // This content is just a sample
  "scripts": {
    "tauri": "tauri"
  }
}
```

### 2. Initialize Tauri

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
  @tauri-apps/cli - 1.0.0-beta.2
  @tauri-apps/api - 1.0.0-beta.1

Global packages
  npm - 6.14.4
  yarn - 1.22.4

Rust environment
  rustc - 1.52.1
  cargo - 1.52.0

App directory structure
/node_modules
/src-tauri
/src
/public

App
  tauri.rs - 1.0.0-beta.1
  build-type - bundle
  CSP - default-src blob: data: filesystem: ws: http: https: 'unsafe-eval' 'unsafe-inline' 'self' img-src: 'self'
  distDir - ../public
  devPath - ../public
  framework - Svelte
  bundler - Rollup
```

This information can be very helpful when triaging problems.

## `src-tauri/tauri.conf.json`

Edit `src-tauri/tauri.conf.json`:
Depending on your development setup, you will probably need to update two important entry points for tauri:

- your bundled assets (`distDir`)
- your development server (`devPath`)

See more about tauri.conf.json configuration <a href="/docs/api/config#build">here</a>.

```json
{
  "build": {
    "distDir": "../dist/spa",
    "devPath": "http://localhost:7334"
  }
}
```

### Patterns

We've also defined prebuilt configurations called "Patterns". They may help you to customize Tauri to fit your needs.
See more about [patterns](/docs/usage/patterns/about-patterns).

<Alert type="info" title="Note">
  Technically you can point the devPath at a folder, and Tauri will try to serve those assets statically.
</Alert>

<Alert type="warning" title="Warning" icon="alert">
  On some system setups, localhost may not be available. A general rule of thumb is to use exactly the same domain as your devServer. You can try to switch localhost here with:

- `"127.0.0.1"`
- `"0.0.0.0"`

On windows, you must enable loopback during development. [todo: add link](https://github.com/tauri-apps/tauri/wiki/04.-MS-Windows-Setup)

</Alert>

## Vue CLI Plugin Tauri

If you are using Vue CLI 3/4, it is recommended to use the official [CLI plugin](https://github.com/tauri-apps/vue-cli-plugin-tauri).
