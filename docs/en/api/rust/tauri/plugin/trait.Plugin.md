---
title: Trait tauri::plugin::Plugin
sidebar_label: trait.Plugin
custom_edit_url: null
---

  # Trait tauri::plugin::Plugin,

```rs
pub trait Plugin<R: Runtime>: Send {
    fn name(&self) -> &'static str;

    fn initialize(
        &mut self, 
        app: &AppHandle<R>, 
        config: JsonValue
    ) -> Result<()> { ... }

    fn initialization_script(&self) -> Option<String> { ... }

    fn created(&mut self, window: Window<R>) { ... }

    fn on_page_load(&mut self, window: Window<R>, payload: PageLoadPayload) { ... }

    fn extend_api(&mut self, invoke: Invoke<R>) { ... }
}
```

Expand description

The plugin interface.

## Required methods

#### fn [name](/docs/api/rust/tauri/about:blank#tymethod.name)(&self) -> &'static [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)[\[src\]](/docs/api/rust/tauri/../../src/tauri/plugin.rs#21 "goto source code")

The plugin name. Used as key on the plugin config object.

## Provided methods

#### fn [initialize](/docs/api/rust/tauri/about:blank#method.initialize)(&mut self, app: &[AppHandle](/docs/api/rust/tauri/../struct.AppHandle "struct tauri::AppHandle")&lt;R>, config: [JsonValue](https://docs.rs/serde_json/1.0.66/serde_json/value/enum.Value.html "enum serde_json::value::Value")) -> [Result](/docs/api/rust/tauri/type.Result "type tauri::plugin::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/plugin.rs#25-27 "goto source code")

Initializes the plugin.

#### fn [initialization_script](/docs/api/rust/tauri/about:blank#method.initialization_script)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/plugin.rs#34-36 "goto source code")

The JS script to evaluate on webview initialization. The script is wrapped into its own context with `(function () { /* your script here */ })();`, so global variables must be assigned to `window` instead of implicity declared.

It’s guaranteed that this script is executed before the page is loaded.

#### fn [created](/docs/api/rust/tauri/about:blank#method.created)(&mut self, window: [Window](/docs/api/rust/tauri/../window/struct.Window "struct tauri::window::Window")&lt;R>)[\[src\]](/docs/api/rust/tauri/../../src/tauri/plugin.rs#40 "goto source code")

Callback invoked when the webview is created.

#### fn [on_page_load](/docs/api/rust/tauri/about:blank#method.on_page_load)(&mut self, window: [Window](/docs/api/rust/tauri/../window/struct.Window "struct tauri::window::Window")&lt;R>, payload: [PageLoadPayload](/docs/api/rust/tauri/../struct.PageLoadPayload "struct tauri::PageLoadPayload"))[\[src\]](/docs/api/rust/tauri/../../src/tauri/plugin.rs#44 "goto source code")

Callback invoked when the webview performs a navigation to a page.

#### fn [extend_api](/docs/api/rust/tauri/about:blank#method.extend_api)(&mut self, invoke: [Invoke](/docs/api/rust/tauri/../struct.Invoke "struct tauri::Invoke")&lt;R>)[\[src\]](/docs/api/rust/tauri/../../src/tauri/plugin.rs#48 "goto source code")

Extend commands to [`crate::Builder::invoke_handler`](/docs/api/rust/tauri/../struct.Builder#method.invoke_handler "crate::Builder::invoke_handler").

## Implementors
  