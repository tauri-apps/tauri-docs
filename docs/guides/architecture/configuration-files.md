---
sidebar_position: 1
---

# Configuration Files

Since Tauri is a toolkit for building applications there can be a lot of places to configure project settings. Some common files that you may run across are `tauri.conf.json`, `package.json` and `Cargo.toml`. You can use this page as a reference to understand the differences between each of these and where to configure the relevant settings for your project.

## `tauri.conf.json`

This is the file used by the Tauri process. You can define the build settings (such as the [command run prior to `tauri build`][before-build-command] or [`tauri dev`][before-dev-command]), set the [name and version of your app][package-config], [control the Tauri process][tauri-config], and any plugin settings. Find all of the options for this config file in the [`tauri.conf.json` API reference].

## `Cargo.toml`

Cargo's manifest file. You can declare Rust crates your app depends on, metadata about your app, and much more. If you do not intend to do a lot of backend development using Rust for your app then you probably won't be changing it very much, but it's important to know it exists and what it does.

An example of a barebones `Cargo.toml` file for a Tauri project might look a little something like this:

```toml Cargo.toml
[package]
name = "app"
version = "0.1.0"
description = "A Tauri App"
authors = ["you"]
license = ""
repository = ""
default-run = "app"
edition = "2021"
rust-version = "1.57"

[build-dependencies]
tauri-build = { version = "1.0.0" }

[dependencies]
serde_json = "1.0"
serde = { version = "1.0", features = ["derive"] }
tauri = { version = "1.0.0", features = [ "api-all" ] }

[features]
# by default Tauri runs in production mode
# when `tauri dev` runs it is executed with `cargo run --no-default-features` if `devPath` is an URL
default = [ "custom-protocol" ]
# this feature is used used for production builds where `devPath` points to the filesystem
# DO NOT remove this
custom-protocol = [ "tauri/custom-protocol" ]
```

The most important parts to take note of here are the `tauri-build` and `tauri` dependencies. Their versions must be the same as the version of your CLI in order to ensure that there won't be any issues running your app. If any of these are not the same version number you are highly likely to encounter issues.

Cargo version numbers use [Semantic Versioning], and running `cargo update` will pull the latest available Semver-compatible versions of all dependencies. What this means is that even if you specify `1.0.0` as the version for `tauri-build`, Cargo can actually decide to download version `1.0.4`, because it is the latest Semver-compatible version available. According to Semver projects are required to update their major version number whenever a breaking change is introduced, meaning you should always be capable of safely upgrading to the latest minor and patch versions without fear of your code breaking.

If you want to use specific versions of crates you can use exact versions instead by prepending `=` to the version number of the dependency, e.g. `=1.0.4`.

Another thing to take not of as well is the `features=[]` part of the `tauri` dependency. Running `tauri dev` and `tauri build` will automatically manage which features need to be enabled in your project based on the `"allowlist"` properties you set in `tauri.conf.json`.

When you build your application a `Cargo.lock` file is produced. This file is used primarily for ensuring that the same dependencies are used later on as were used during development. Since you are developing a Tauri app, this file should be committed into your source repository. Only Rust libraries should omit comitting this file.

To learn more about `Cargo.toml` you can read more in the [official documentation](https://doc.rust-lang.org/cargo/reference/manifest.html).

## `package.json`

This is the Node.js package file. In the event the frontend of a Tauri app is developed using Node.js based technologies this file is used to configure primarily which dependencies the frontend has. It's also common to use the `"scripts"` section to store the command used to launch the frontend used by your Tauri application.

An example of a barebones `package.json` file for a Tauri project might look a little something like this:

```json
{
    "scripts": {
        "dev": "command-for-your-framework"
    },
    "dependencies": {
        "@tauri-apps/api": "^1.0",
        "@tauri-apps/cli": "^1.0"
    }
}
```

The above file would specify a command that you can run using e.g. `yarn dev` or `npm run dev`, as well as which Node.js dependencies should be downloaded when you run either `yarn` or `npm install`, in this case the Tauri CLI and API.

In addition to the `package.json` file you may see either a `yarn.lock` file or a `package-lock.json` file. These files assist in ensuring that when you download the dependencies later you'll get the exact same ones that you have used during development.

To learn more about `package.json` you can read more in the [official documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-json).

[`tauri.conf.json` api reference]: ../../api/config.md
[before-build-command]: ../../api/config.md#buildconfig.beforebuildcommand
[before-dev-command]: ../../api/config.md#buildconfig.beforedevcommand
[package-config]: ../../api/config#packageconfig
[tauri-config]: ../../api/config#tauriconfig
