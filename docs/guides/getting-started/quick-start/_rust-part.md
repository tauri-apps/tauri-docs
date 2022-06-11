You will notice the command generated a folder called `src-tauri`. It's a convention for Tauri apps to place all Core-related files into this folder. Let's quickly run through the contents of this folder:

#### `Cargo.toml`

Cargo's manifest file, in it you declare Rust crates your app depends on, metadata about your app and much more. For the full reference see [Cargo: Manifest Format].

#### `tauri.conf.json`

This file lets you configure and customize almost all aspects of your application, the name of your App to the list allowed APIs. See [API: Configuration] for the full list of supported options and in-depth explanations for each.

#### `src/main.rs`

This is the entrypoint to your Rust program and the place where we bootstrap into Tauri. You will find two sections in it:

```rust
#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
```

This weird looking [cfg! macro] serves just purpose, it disables the weird cmd-window that would normally pop up on Windows if you run a bundled app. If you're on Windows, try to comment it out and see what happens.

```rust
fn main() {
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

Rusts `main` function is the first function that gets invoked when your program runs.

#### `icons`

Chances are you want a snazzy icon for your app! To get you going quickly, we included a set of default icons. You should switch these out before publishing your App and we provide a convenient tool called [`tauricon`] that will generate an icon-set from your own source icon!

[cargo: manifest format]: https://doc.rust-lang.org/cargo/reference/manifest.html
[cfg! macro]: https://doc.rust-lang.org/rust-by-example/attribute/cfg.html
[api: configuration]: https://tauri.studio/v1/api/config
[`tauricon`]: https://github.com/tauri-apps/tauricon