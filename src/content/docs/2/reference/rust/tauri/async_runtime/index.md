---
title: 'Module tauri::async_runtime'
editUrl: false
prev: false
next: false
---


The singleton async runtime used by Tauri and exposed to users.

Tauri uses [`tokio`] Runtime to initialize code, such as
[`Plugin::initialize`](../plugin/trait.Plugin.html#method.initialize) and [`crate::Builder::setup`] hooks.
This module also re-export some common items most developers need from [`tokio`]. If there's
one you need isn't here, you could use types in [`tokio`] directly.
For custom command handlers, it's recommended to use a plain `async fn` command.
## Structs


- [GlobalRuntime](/2/reference/rust/tauri/GlobalRuntime): 