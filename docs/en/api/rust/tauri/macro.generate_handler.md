---
title: Macro tauri::generate_handler
sidebar_label: macro.generate_handler
---

# Macro tauri::generate_handler,\[−],\[−],−

```rs
generate_handler!() { /* proc-macro */ }
```

Accepts a list of commands functions. Creates a handler that allows commands to be called from JS with invoke().

# [Example](/docs/api/rust/tauri/about:blank#example)

ⓘ

```rs
use tauri::command;
#[command]
fn command_one() {}
#[command]
fn command_two() {}
fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler&#33;[command_one, command_two])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

# [Stability](/docs/api/rust/tauri/about:blank#stability)

The output of this macro is managed internally by Tauri, and should not be accessed directly on normal applications. It may have breaking changes in the future.
