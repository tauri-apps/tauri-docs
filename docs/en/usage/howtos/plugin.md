---
title: Write Tauri Plugins
---

import Alert from '@theme/Alert'

<Alert title="Note" icon="info-alt">
Tauri will soon offer Plugin starter kits so the process of writing a Plugin crate will be simplified.

For now it's recommended to follow the [official Tauri plugins](#official-tauri-plugins).
</Alert>

The Tauri Plugin system was introduced in [tauri v0.8.0](https://docs.rs/tauri/0.8.0/tauri/).
Plugins allow you to hook into the Tauri application lifecycle and introduce new commands.

## Writing a Plugin

To write a plugin you just need to implement the `tauri::plugin::Plugin` trait:

```rust
use tauri::{plugin::Plugin, Webview};

struct MyAwesomePlugin {
  // plugin state, configuration fields
}

impl MyAwesomePlugin {
  // you can add configuration fields here,
  // see https://doc.rust-lang.org/1.0.0/style/ownership/builders.html
  pub fn new() -> Self {
    Self {}
  }
}

impl Plugin for MyAwesomePlugin {
  /// The JS script to evaluate on init.
  /// Useful when your plugin is accessible through `window`
  /// or needs to perform a JS task on app initialization
  /// e.g. "window.localStorage = { ... the plugin interface }"
  fn init_script(&self) -> Option<String> {
    None
  }

  /// Callback invoked when the WebView is created.
  fn created(&self, webview: &mut Webview) {}

  /// Callback invoked when the WebView is ready.
  fn ready(&self, webview: &mut Webview) {}

  fn extend_api(&self, webview: &mut Webview, payload: &str) -> Result<bool, String> {
    // extend the API here, following the Command guide
    // if you're not going to use this, you can just remove it
  }
}
```

Note that each function on the `Plugin` trait is optional.

## Using a plugin

To use a plugin, just pass an instance of the `MyAwesomePlugin` struct to the App's `plugin` method:

```rust
fn main() {
  let awesome_plugin = MyAwesomePlugin::new();
  tauri::Builder::default()
    .plugin(awesome_plugin)
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
```

## Official Tauri Plugins

- [Logging (WIP)](https://github.com/tauri-apps/tauri-log-plugin-rs)
