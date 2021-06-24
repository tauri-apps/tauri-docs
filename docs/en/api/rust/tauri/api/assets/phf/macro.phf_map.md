---
title: Macro tauri::api::assets::phf::phf_map
sidebar_label: macro.phf_map
---

# Macro tauri::api::assets::phf::phf_map,\[−]\[src],\[−],−

```rs
macro_rules! phf_map {
    #[::proc_macro_hack::proc_macro_hack] => { ... };
}
```

Macro to create a `static` (compile-time) [`Map`](/docs/api/rust/tauri/../../../../tauri/api/assets/phf/struct.Map "Map").

Requires the `macros` feature.

# [Example](/docs/api/rust/tauri/about:blank#example)

```rs
use phf::{phf_map, Map};

static MY_MAP: Map<&'static str, u32> = phf_map! {
    "hello" => 1,
    "world" => 2,
};

fn main () {
    assert_eq!(MY_MAP["hello"], 1);
}
```
