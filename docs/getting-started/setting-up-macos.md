---
pagination_next: getting-started/beginning-tutorial
---

import { Intro } from '@theme/SetupDocs'
import Icon from '@theme/Icon'

# Setting Up macOS

<Intro />

## 1. System Dependencies 🧰

Make sure you have `xcode` installed.

```sh
$ xcode-select --install
```

## 2. Rustc and Cargo Package Manager 📦

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
rustc 1.58.1 (db9d1b20b 2022-01-20)
```

You may need to restart your terminal if the command does not work.

## Continue

Now that you have set up the macOS-specific dependencies for Tauri, learn how to [add Tauri to your project][Beginning Tutorial].

[nvm]: https://github.com/nvm-sh/nvm
[nvm install.sh]: https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh
[Beginning Tutorial]: ./beginning-tutorial.md
[Yarn@v1]: https://classic.yarnpkg.com/en/docs/getting-started
[pnpm]: https://pnpm.js.org/en/installation
[rustup]: https://rustup.rs/
[Rust]: https://www.rust-lang.org/
[rustup.sh]: https://sh.rustup.rs/
