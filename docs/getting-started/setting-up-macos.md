---
pagination_next: getting-started/beginning-tutorial
---

import { Intro } from '@theme/SetupDocs'
import Icon from '@theme/Icon'

# Setting Up macOS

<Intro />

## 1. System Dependencies&nbsp;<Icon title="alert" color="danger"/>

Make sure you have `xcode` installed.

```bash
xcode-select --install
```

## 2. Rustc and Cargo Package Manager&nbsp;<Icon title="control-skip-forward" color="warning"/>

The following command will install [rustup], the official installer for [Rust].

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

:::note
We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere [download link][rustup.sh].
:::

To make sure that Rust has been installed successfully, run the following command:

```bash
rustc --version

latest update on 2019-12-19, rust version 1.40.0
```

You may need to restart your terminal if the command does not work.

## 3. Node.js Runtime and Package Manager&nbsp;<Icon title="control-skip-forward" color="warning"/>

The Node.js runtime and package manager are optional dependencies. You only need to install it if your frontend project depends on it or you want to start a new project using [create-tauri-app].

### Node.js (npm included)

We recommend using nvm to manage your Node.js runtime. It allows you to switch versions and update Node.js easily.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

:::note
We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere [download link][nvm install.sh].
:::

Once nvm is installed, close and reopen your terminal, then install the latest version of Node.js and npm:

```bash
nvm install node --latest-npm
nvm use node
```

If you have any problems with nvm, please consult their [project readme][nvm].

### Optional Node.js Package Manager

You may want to use an alternative to npm:

- [Yarn@v1] - Used by the Tauri team for v1
- [pnpm] - Alternative package manager focusing on decreasing disk space and installation time

## Continue

Now that you have set up the macOS-specific dependencies for Tauri, learn how to [add Tauri to your project][beginning tutorial].

[create-tauri-app]: /docs/getting-started/beginning-tutorial#1-start-a-new-tauri-project
[nvm]: https://github.com/nvm-sh/nvm
[nvm install.sh]: https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh
[beginning tutorial]: ./beginning-tutorial.md
[yarn@v1]: https://classic.yarnpkg.com/en/docs/getting-started
[pnpm]: https://pnpm.js.org/en/installation
[rustup]: https://rustup.rs/
[rust]: https://www.rust-lang.org/
[rustup.sh]: https://sh.rustup.rs/
