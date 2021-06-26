---
title: Macro tauri::api::assets::phf::phf_set
sidebar_label: macro.phf_set
custom_edit_url: null
---

# Macro tauri::api::assets::phf::phf_set,\[−]\[src],\[−],−

```rs
macro_rules! phf_set {
    #[proc_macro_hack::proc_macro_hack] => { ... };
}
```

Macro to create a `static` (compile-time) [`Set`](/docs/api/rust/tauri/../../../../tauri/api/assets/phf/struct.Set "Set").

Requires the `macros` feature.

# [Example](/docs/api/rust/tauri/about:blank#example)

```rs
use phf::{phf_set, Set};

static MY_SET: Set<&'static str> = phf_set! {
    "hello world",
    "hola mundo",
};

fn main () {
    assert!(MY_SET.contains("hello world"));
}
```
