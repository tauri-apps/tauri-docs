---
title: 'Crate tauri'
editUrl: false
prev: false
next: false
---


Tauri is a framework for building tiny, blazing fast binaries for all major desktop platforms.
Developers can integrate any front-end framework that compiles to HTML, JS and CSS for building their user interface.
The backend of the application is a rust-sourced binary with an API that the front-end can interact with.

# Cargo features

The following are a list of [Cargo features](https://doc.rust-lang.org/stable/cargo/reference/manifest.html#the-features-section) that can be enabled or disabled:

- **wry** *(enabled by default)*: Enables the [wry](https://github.com/tauri-apps/wry) runtime. Only disable it if you want a custom runtime.
- **test**: Enables the [`test`] module exposing unit test helpers.
- **dox**: Internal feature to generate Rust documentation without linking on Linux.
- **objc-exception**: Wrap each msg_send! in a @try/@catch and panics if an exception is caught, preventing Objective-C from unwinding into Rust.
- **linux-protocol-headers**: Enables headers support for custom protocol requests on Linux. Requires webkit2gtk v2.36 or above.
- **isolation**: Enables the isolation pattern. Enabled by default if the `tauri > pattern > use` config option is set to `isolation` on the `tauri.conf.json` file.
- **custom-protocol**: Feature managed by the Tauri CLI. When enabled, Tauri assumes a production environment instead of a development one.
- **devtools**: Enables the developer tools (Web inspector) and [`Window::open_devtools`]. Enabled by default on debug builds.
On macOS it uses private APIs, so you can't enable it if your app will be published to the App Store.
- **native-tls**: Provides TLS support to connect over HTTPS.
- **native-tls-vendored**: Compile and statically link to a vendored copy of OpenSSL.
- **rustls-tls**: Provides TLS support to connect over HTTPS using rustls.
- **process-relaunch-dangerous-allow-symlink-macos**: Allows the [`process::current_binary`] function to allow symlinks on macOS (this is dangerous, see the Security section in the documentation website).
- **system-tray**: Enables application system tray API. Enabled by default if the `systemTray` config is defined on the `tauri.conf.json` file.
- **macos-private-api**: Enables features only available in **macOS**'s private APIs, currently the `transparent` window functionality and the `fullScreenEnabled` preference setting to `true`. Enabled by default if the `tauri > macosPrivateApi` config flag is set to `true` on the `tauri.conf.json` file.
- **window-data-url**: Enables usage of data URLs on the webview.
- **compression** *(enabled by default): Enables asset compression. You should only disable this if you want faster compile times in release builds - it produces larger binaries.
- **config-json5**: Adds support to JSON5 format for `tauri.conf.json`.
- **config-toml**: Adds support to TOML format for the configuration `Tauri.toml`.
- **icon-ico**: Adds support to set `.ico` window icons. Enables [`Icon::File`] and [`Icon::Raw`] variants.
- **icon-png**: Adds support to set `.png` window icons. Enables [`Icon::File`] and [`Icon::Raw`] variants.

## Cargo allowlist features

The following are a list of [Cargo features](https://doc.rust-lang.org/stable/cargo/reference/manifest.html#the-features-section) that enables commands for Tauri's API package.
These features are automatically enabled by the Tauri CLI based on the `allowlist` configuration under `tauri.conf.json`.

### Protocol allowlist

- **protocol-asset**: Enables the `asset` custom protocol.
## Modules


- [api](/2/reference/rust/tauri/api): The Tauri API interface.
- [app](/2/reference/rust/tauri/app): 
- [asset_protocol](/2/reference/rust/tauri/asset_protocol): 
- [async_runtime](/2/reference/rust/tauri/async_runtime): The singleton async runtime used by Tauri and exposed to users.
- [command](/2/reference/rust/tauri/command): The Tauri custom commands types and traits.
- [error](/2/reference/rust/tauri/error): 
- [event](/2/reference/rust/tauri/event): 
- [hooks](/2/reference/rust/tauri/hooks): 
- [manager](/2/reference/rust/tauri/manager): 
- [pattern](/2/reference/rust/tauri/pattern): 
- [plugin](/2/reference/rust/tauri/plugin): The Tauri plugin extension to expand Tauri functionality.
- [vibrancy](/2/reference/rust/tauri/vibrancy): 
- [window](/2/reference/rust/tauri/window): The Tauri window types and functions.
- [path](/2/reference/rust/tauri/path): Path APIs.
- [process](/2/reference/rust/tauri/process): Types and functions related to child processes management.
- [scope](/2/reference/rust/tauri/scope): The allowlist scopes.
- [state](/2/reference/rust/tauri/state): 
- [sealed](/2/reference/rust/tauri/sealed): Prevent implementation details from leaking out of the [`Manager`] trait.
- [test](/2/reference/rust/tauri/test): Utilities for unit testing on Tauri applications.
## Structs


- [Context](/2/reference/rust/tauri/Context): User supplied data required inside of a Tauri application.