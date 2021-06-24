---
title: Trait tauri::plugin::Plugin
sidebar_label: trait.Plugin
---

# Trait tauri::plugin::Plugin,\[−]\[src],\[−],−

```rs
pub trait Plugin<P: Params>: Send {
    fn name(&self) -> &'static str;

    fn initialize(&mut self, app: &App<P>, config: JsonValue) -> Result<()> { ... }

    fn initialization_script(&self) -> Option<String> { ... }

    fn created(&mut self, window: Window<P>) { ... }

    fn on_page_load(&mut self, window: Window<P>, payload: PageLoadPayload) { ... }

    fn extend_api(&mut self, invoke: Invoke<P>) { ... }
}
```

The plugin interface.

## Required methods

### `fn name(&self) -> &'static str`[\[src\]](/docs/api/rust/tauri/../../src/tauri/plugin.rs#17 "goto source code")

The plugin name. Used as key on the plugin config object.

## Provided methods

### `fn initialize(&mut self, app: &App<P>, config: JsonValue) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/plugin.rs#21-23 "goto source code")

Initialize the plugin.

### `fn initialization_script(&self) -> Option<String>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/plugin.rs#30-32 "goto source code")

The JS script to evaluate on webview initialization. The script is wrapped into its own context with `(function () { /* your script here */ })();`, so global variables must be assigned to `window` instead of implicity declared.

It’s guaranteed that this script is executed before the page is loaded.

### `fn created(&mut self, window: Window<P>)`[\[src\]](/docs/api/rust/tauri/../../src/tauri/plugin.rs#36 "goto source code")

Callback invoked when the webview is created.

### `fn on_page_load(&mut self, window: Window<P>, payload: PageLoadPayload)`[\[src\]](/docs/api/rust/tauri/../../src/tauri/plugin.rs#40 "goto source code")

Callback invoked when the webview performs a navigation.

### `fn extend_api(&mut self, invoke: Invoke<P>)`[\[src\]](/docs/api/rust/tauri/../../src/tauri/plugin.rs#44 "goto source code")

Add invoke_handler API extension commands.

## Implementors
