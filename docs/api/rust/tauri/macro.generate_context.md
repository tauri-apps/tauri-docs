---
title: Macro tauri::generate_context
sidebar_label: macro.generate_context
custom_edit_url: null
---

  # Macro tauri::generate_context,

```rs
generate_context!() { /* proc-macro */ }
```

Expand description

Reads the config file at compile time and generates a [`Context`](/docs/api/rust/tauri/struct.Context "Context") based on its content.

The default config file path is a `tauri.conf.json` file inside the Cargo manifest directory of the crate being built.

## Custom Config Path

You may pass a string literal to this macro to specify a custom path for the Tauri config file. If the path is relative, it will be search for relative to the Cargo manifest of the compiling crate.

## Note

This macro should not be called if you are using [`tauri-build`](https://docs.rs/tauri-build) to generate the context from inside your build script as it will just cause excess computations that will be discarded. Use either the \[\`tauri-build] method or this macro - not both.

Reads a Tauri config file and generates a `::tauri::Context` based on the content.

## Stability

The output of this macro is managed internally by Tauri, and should not be accessed directly on normal applications. It may have breaking changes in the future.
  