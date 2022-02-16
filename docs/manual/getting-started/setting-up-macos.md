---
pagination_next: manual/getting-started/README
---

import { Intro } from '@theme/SetupDocs'
import Icon from '@theme/Icon'

# Setting Up macOS

<Intro />

## 1. System Dependencies&nbsp;<Icon title="alert" color="danger"/>

Make sure you have `xcode` installed.

```sh
$ xcode-select --install
```

## 2. Node.js Runtime and Package Manager&nbsp;<Icon title="control-skip-forward" color="warning"/>

### Node.js (npm included)

We recommend using nvm to manage your Node.js runtime. It allows you to switch versions and update Node.js easily.

```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

:::note
We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere [download link][nvm install.sh].
:::

Once nvm is installed, close and reopen your terminal, then install the latest version of Node.js and npm:

```sh
$ nvm install node --latest-npm
$ nvm use node
```

If you have any problems with nvm, please consult their [project readme][nvm].

### Optional Node.js Package Manager

You may want to use an alternative to npm:

- [pnpm]
- [Yarn]

## 3. Rustc and Cargo Package Manager&nbsp;<Icon title="control-skip-forward" color="warning"/>

The following command will install [rustup], the official installer for [Rust].

```
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

:::note
We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere [download link][rustup.sh].
:::

To make sure that Rust has been installed successfully, run the following command:

```sh
$ rustc --version
latest update on 2019-12-19, rust version 1.40.0
```

You may need to restart your terminal if the command does not work.

## Continue

Now that you have set up the macOS-specific dependencies for Tauri, learn how to [add Tauri to your project][Beginning Tutorial].

[nvm]: https://github.com/nvm-sh/nvm
[nvm install.sh]: https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh
[Beginning Tutorial]: ./README.md
[Yarn]: https://yarnpkg.com/getting-started"
[pnpm]: https://pnpm.js.org/en/installation
[rustup]: https://rustup.rs/
[Rust]: https://www.rust-lang.org/
[rustup.sh]: https://sh.rustup.rs/