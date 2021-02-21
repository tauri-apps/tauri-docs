---
title: "trait.Plugin"
---

# Trait [tauri](/docs/api/rust/tauri/../index.html)::​[plugin](/docs/api/rust/tauri/index.html)::​[Plugin](/docs/api/rust/tauri/)

    pub trait Plugin {
        fn init_script(&self) -> Option<String> { ... }

        fn created(&self, webview: &mut Webview<'_>) { ... }

        fn ready(&self, webview: &mut Webview<'_>) { ... }

        fn extend_api(
            &self, 
            webview: &mut Webview<'_>, 
            payload: &str
        ) -> Result<bool, String> { ... }
    }

The plugin interface.

## Provided methods

### `fn init_script(&self) -> Option<String>`

The JS script to evaluate on init.

### `fn created(&self, webview: &mut Webview<'_>)`

Callback invoked when the WebView is created.

### `fn ready(&self, WebView: &mut Webview<'_>)`

Callback invoked when the WebView is ready.

### `fn extend_api( &self, webview: &mut Webview<'_>, payload: &str ) -> Result<bool, String>`

Add invoke_handler API extension commands.

Loading content...

## Implementors

Loading content...
