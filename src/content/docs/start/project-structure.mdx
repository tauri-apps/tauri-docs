---
title: Project Structure
i18nReady: true
---

A Tauri project is usually made of 2 parts, a Rust project and a JavaScript project (optional),
and typically the setup looks something like this:

```
.
├── package.json
├── index.html
├── src/
│   ├── main.js
├── src-tauri/
│   ├── Cargo.toml
│   ├── Cargo.lock
│   ├── build.rs
│   ├── tauri.conf.json
│   ├── src/
│   │   ├── main.rs
│   │   └── lib.rs
│   ├── icons/
│   │   ├── icon.png
│   │   ├── icon.icns
│   │   └── icon.ico
│   └── capabilities/
│       └── default.json
```

In this case, the JavaScript project is at the top level, and the Rust project is inside `src-tauri/`,
the Rust project is a normal [Cargo project](https://doc.rust-lang.org/cargo/guide/project-layout.html) with some extra files:

- `tauri.conf.json` is the main configuration file for Tauri, it contains everything from the application identifier to dev server url,
  this file is also a marker for the [Tauri CLI](/reference/cli/) to find the Rust project,
  to learn more about it, see [Tauri Config](/develop/configuration-files/#tauri-config)
- `capabilities/` directory is the default folder Tauri reads [capability files](/security/capabilities/) from (in short, you need to allow commands here to use them in your JavaScript code),
  to learn more about it, see [Security](/security/)
- `icons/` directory is the default output directory of the [`tauri icon`](/reference/cli/#icon) command, it's usually referenced in `tauri.conf.json > bundle > icon` and used for the app's icons
- `build.rs` contains `tauri_build::build()` which is used for tauri's build system
- `src/lib.rs` contains the Rust code and the mobile entry point (the function marked with `#[cfg_attr(mobile, tauri::mobile_entry_point)]`),
  the reason we don't write directly in `main.rs` is because we compile your app to a library in mobile builds and load them through the platform frameworks
- `src/main.rs` is the main entry point for the desktop, and we run `app_lib::run()` in `main` to use the same entry point as mobile,
  so to keep it simple, don't modify this file, modify `lib.rs` instead. Note that `app_lib` corresponds to `[lib.name]` in Cargo.toml.

Tauri works similar to a static web host, and the way it builds is that you would compile your JavaScript project to static files first,
and then compile the Rust project that will bundle those static files in,
so the JavaScript project setup is basically the same as if you were to build a static website,
to learn more, see [Frontend Configuration](/start/frontend/)

If you want to work with Rust code only, simply remove everything else and use the `src-tauri/` folder as your top level project or as a member of your Rust workspace

## Next Steps

- [Add and Configure a Frontend Framework](/start/frontend/)
- [Tauri Command Line Interface (CLI) Reference](/reference/cli/)
- [Learn how to develop your Tauri app](/develop/)
- [Discover additional features to extend Tauri](/plugin/)
