---
title: Frequently Asked Questions
sidebar_position: 10
description: Fixes for common issues
---

## How can I use unpublished Tauri changes?

To use Tauri from GitHub (bleeding edge version) you need to change your `Cargo.toml` file and update your CLI and API.

<details>
  <summary>Pulling the Rust crate from source</summary>

Append this to your `Cargo.toml` file:

```toml title=Cargo.toml
[patch.crates-io]
tauri = { git = "https://github.com/tauri-apps/tauri", branch = "1.x" }
tauri-build = { git = "https://github.com/tauri-apps/tauri", branch = "1.x" }
```

This will force all your dependencies to use `tauri` and `tauri-build` from Git instead of crates.io.

</details>

<details>
  <summary>Using the Tauri CLI from source</summary>

If you are using the Cargo CLI, you can install it directly from GitHub:

```shell
cargo install --git https://github.com/tauri-apps/tauri --branch 1.x tauri-cli
```

If you are using the `@tauri-apps/cli` package, you will need to clone the repo and build it:

```shell
git clone https://github.com/tauri-apps/tauri
cd tauri
git checkout 1.x
cd tauri/tooling/cli/node
yarn
yarn build
```

To use it, run directly with node:

```shell
node /path/to/tauri/tooling/cli/node/tauri.js dev
node /path/to/tauri/tooling/cli/node/tauri.js build
```

Alternatively, you can run your app with Cargo directly:

```shell
cd src-tauri
cargo run --no-default-features # instead of tauri dev
cargo build # instead of tauri build - won't bundle your app though
```

</details>

<details>
  <summary>Using the Tauri API from source</summary>

It is recommended to also use the Tauri API package from source when using the Tauri crate from GitHub (though it might not be needed).
To build it from source, run the following script:

```shell
git clone https://github.com/tauri-apps/tauri
cd tauri
git checkout 1.x
cd tauri/tooling/api
yarn
yarn build
```

Now you can link it using yarn:

```shell
cd dist
yarn link
cd /path/to/your/project
yarn link @tauri-apps/api
```

Or you can change your package.json to point to the dist folder directly:

```json title=package.json
{
  "dependencies": {
    "@tauri-apps/api": "/path/to/tauri/tooling/api/dist"
  }
}
```

</details>

## Should I use Node or Cargo? {#node-or-cargo}

Even though installing the CLI through Cargo is the preferred option, it has to compile the whole binary from scratch when you install it. If you're in a CI environment or on a very slow machine you're better off choosing another installation method.

As the CLI is written in Rust, it is naturally available through [crates.io] and installable with Cargo.

We also compile the CLI as a native Node.js addon and distribute it [via npm]. This has several advantages compared to the Cargo installation method:

1. The CLI is pre-compiled, leading to much faster install times
2. You can pin a specific version in your package.json file
3. If you develop custom tooling around Tauri, you can import the CLI as a regular JavaScript module
4. You can install the CLI using a JavaScript manager

## Recommended Browserlist

We recommend using `es2021`, `last 3 Chrome versions`, and `safari 13` for your browserlist and build targets. Tauri leverages the OS's native rendering engine (WebKit on macOS, WebView2 on Windows and WebKitGTK on Linux).

## Build Conflict with Homebrew on Linux

Homebrew on Linux includes its own `pkg-config` (a utility to find libraries on the system). This can cause conflicts when installing the same `pkg-config` package for Tauri (usually installed through the package manager like `apt`). When you try to build a Tauri app it will try to invoke `pkg-config` and will end up invoking the one from Homebrew. If Homebrew wasn't used to install Tauri's dependencies, this can cause errors.

Errors will _usually_ contain messages along the lines of `error: failed to run custom build command for X` - `Package Y was not found in the pkg-config search path.`. Note that you may see similar errors if the required dependencies are not installed at all.

There are two solutions to this issue:

1. [Uninstall Homebrew]
2. Set the `PKG_CONFIG_PATH` environment variable to point to the correct `pkg-config` before building a Tauri app
    - Example: `export PKG_CONFIG_PATH=/usr/lib/pkgconfig:/usr/share/pkgconfig:/usr/lib/x86_64-linux-gnu/pkgconfig`

[crates.io]: https://crates.io/crates/tauri-cli
[via npm]: https://www.npmjs.com/package/@tauri-apps/cli
[uninstall homebrew]: https://docs.brew.sh/FAQ#how-do-i-uninstall-homebrew
