---
sidebar_position: 3
---

import Command from '@theme/Command'
import Link from '@docusaurus/Link'

# Your First Tauri App

:::caution
You must have completed all the steps required for setting up the development environment on your machine. Please see the [setup page for your operating system][prerequisites] if you haven't done this yet.
:::

There are two ways to integrate with Tauri depending on your needs:

- [Start a new Tauri project](#1-start-a-new-tauri-project)
- Or [add Tauri to existing project](#1-add-tauri-to-existing-project)

### 1. Start a New Tauri Project

```bash
yarn create tauri-app
# OR
npx create-tauri-app
```

Follow the instructions and choose the web front-end framework you prefer. `create-tauri-app` creates a template project depending on your inputs. You can go straight to [check `tauri info`](#3-check-tauri-info-to-make-sure-everything-is-set-up-properly) after this.

### 1. Add Tauri to Existing Project:

The Tauri CLI tool helps you build your project, so install it first.

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

If you decide to use Tauri as a local package with npm (not yarn), you need to add a custom script to your package.json:

```js title=package.json
{
  // This content is just a sample
  "scripts": {
    "tauri": "tauri"
  }
}
```

#### Alternatively, install Tauri CLI as a cargo subcommand:

The following command installs `tauri-cli` as a Cargo subcommand on the cargo binary folder (by default on `$HOME/.cargo/bin`):

```bash
cargo install tauri-cli --locked --version "^1.0.0-rc"
```

For more installation options, see [`cargo install`].

#### Install Tauri API Package as a Dependency (optional):

The `@tauri-apps/api` package is recommended for projects using ES modules or modern build tools such as Webpack or Vite. It is the most secure way to access the Tauri APIs.

```bash
yarn add @tauri-apps/api
# OR
npm install @tauri-apps/api
```

### 2. Initialize Tauri in Your App

<Command name="init" />

This command places a new folder in your current working directory, `src-tauri`.

```bash
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
Environment
  › OS: Ubuntu 20.04 X64
  › Node.js: 16.14.2
  › npm: 8.5.0
  › pnpm: Not installed!
  › yarn: 1.22.18
  › rustup: 1.24.3
  › rustc: 1.60.0
  › cargo: 1.60.0
  › Rust toolchain: stable-x86_64-unknown-linux-gnu

Packages
  › @tauri-apps/cli [NPM]: 1.0.0-rc.8
  › @tauri-apps/api [NPM]: 1.0.0-rc.3
  › tauri [RUST]: 1.0.0-rc.6,
  › tauri-build [RUST]: 1.0.0-rc.5,
  › tao [RUST]: 0.7.0,
  › wry [RUST]: 0.14.0,

App
  › build-type: bundle
  › CSP: unset
  › distDir: ../dist
  › devPath: http://localhost:3000/
  › framework: React

App directory structure
  ├─ public
  ├─ node_modules
  ├─ src
  ├─ .git
  └─ src-tauri
```

This information can be beneficial when triaging problems.

## Vue CLI Plugin Tauri

If you are using Vue CLI, it is recommended to use the official [Vue CLI plugin].

[prerequisites]: ./prerequisites.md
[`cargo install`]: https://doc.rust-lang.org/cargo/commands/cargo-install.html#description
[recipes]: ../04-architecture/recipes/about-recipes.md
[vue cli plugin]: https://github.com/tauri-apps/vue-cli-plugin-tauri
