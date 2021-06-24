---
title: Macro tauri::generate_context
sidebar_label: macro.generate_context
---

# Macro tauri::generate_context,\[−],\[−],−

```rs
generate_context!() { /* proc-macro */ }
```

Reads the config file at compile time and generates a [`Context`](/docs/api/rust/tauri/../tauri/struct.Context "Context") based on its content.

The default config file path is a `tauri.conf.json` file inside the Cargo manifest directory of the crate being built.

# [Custom Config Path](/docs/api/rust/tauri/about:blank#custom-config-path)

You may pass a string literal to this macro to specify a custom path for the Tauri config file. If the path is relative, it will be search for relative to the Cargo manifest of the compiling crate.

# [Note](/docs/api/rust/tauri/about:blank#note)

This macro should not be called if you are using [`tauri-build`](https://docs.rs/tauri-build) to generate the context from inside your build script as it will just cause excess computations that will be discarded. Use either the \[\`tauri-build] method or this macro - not both.

Reads a Tauri config file and generates a `::tauri::Context` based on the content.

# [Stability](/docs/api/rust/tauri/about:blank#stability)

The output of this macro is managed internally by Tauri, and should not be accessed directly on normal applications. It may have breaking changes in the future.
