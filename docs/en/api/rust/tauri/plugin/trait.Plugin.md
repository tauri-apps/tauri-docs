---
title: Trait tauri::plugin::Plugin
sidebar_label: trait.Plugin
custom_edit_url: null
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

### `name`

```rs
fn name(&self) -> &'static str
```

The plugin name. Used as key on the plugin config object.

_Defined in: [plugin.rs:17](https://github.com/https://blob/2a65ac1/core/tauri/src/../plugin.rs#L17)_

## Provided methods

### `initialize`

```rs
fn initialize(&mut self, app: &App<P>, config: JsonValue) -> Result<()>
```

Initialize the plugin.

_Defined in: [plugin.rs:21-23](https://github.com/https://blob/2a65ac1/core/tauri/src/../plugin.rs#L21-23)_

### `initialization_script`

```rs
fn initialization_script(&self) -> Option<String>
```

The JS script to evaluate on webview initialization. The script is wrapped into its own context with `(function () { /* your script here */ })();`, so global variables must be assigned to `window` instead of implicity declared.

It’s guaranteed that this script is executed before the page is loaded.

_Defined in: [plugin.rs:30-32](https://github.com/https://blob/2a65ac1/core/tauri/src/../plugin.rs#L30-32)_

### `created`

```rs
fn created(&mut self, window: Window<P>)
```

Callback invoked when the webview is created.

_Defined in: [plugin.rs:36](https://github.com/https://blob/2a65ac1/core/tauri/src/../plugin.rs#L36)_

### `on_page_load`

```rs
fn on_page_load(&mut self, window: Window<P>, payload: PageLoadPayload)
```

Callback invoked when the webview performs a navigation.

_Defined in: [plugin.rs:40](https://github.com/https://blob/2a65ac1/core/tauri/src/../plugin.rs#L40)_

### `extend_api`

```rs
fn extend_api(&mut self, invoke: Invoke<P>)
```

Add invoke_handler API extension commands.

_Defined in: [plugin.rs:44](https://github.com/https://blob/2a65ac1/core/tauri/src/../plugin.rs#L44)_

## Implementors
