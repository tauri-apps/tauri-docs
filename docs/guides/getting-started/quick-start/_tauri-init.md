The `tauri init` command generates a folder called `src-tauri`. It's a convention for Tauri apps to place all core-related files into this folder. Let's quickly run through the contents of this folder:

**`Cargo.toml`**

Cargo's manifest file. You can declare Rust crates your app depends on, metadata about your app, and much more. For the full reference see [Cargo's Manifest Format][manifest-format].

**`tauri.conf.json`**

This file lets you configure and customize aspects of your Tauri application from the name of your app to the list allowed APIs. See [Tauri's API Configuration][api config] for the full list of supported options and in-depth explanations for each.

**`src/main.rs`**

This is the entrypoint to your Rust program and the place where we bootstrap into Tauri. You will find two sections in it:

```rust
#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

fn main() {
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

The line beginning with [`cfg! macro`][cfg macro] serves just purpose: it disables the command prompt window that would normally pop up on Windows if you run a bundled app. If you're on Windows, try to comment it out and see what happens.

The `main` function is the entrypoint and first function that gets invoked when your program runs.

**`icons`**

Chances are you want a snazzy icon for your app! To get you going quickly, we included a set of default icons. You should switch these out before publishing your application. Learn more about the various icon formats in Tauri's [icons feature guide][icons].

[manifest-format]: https://doc.rust-lang.org/cargo/reference/manifest.html
[cfg macro]: https://doc.rust-lang.org/rust-by-example/attribute/cfg.html
[api config]: ../../../api/config
[icons]: ../../features/icons
