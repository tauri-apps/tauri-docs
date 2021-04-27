---
title: "macro.phf_set"
---

# Macro [tauri](/docs/api/rust/tauri/../../../index.html)::​[api](/docs/api/rust/tauri/../../index.html)::​[assets](/docs/api/rust/tauri/../index.html)::​[phf](/docs/api/rust/tauri/index.html)::​[phf_set](/docs/api/rust/tauri/)

```
macro_rules! phf_set {
    #[::proc_macro_hack::proc_macro_hack] => { ... };
}
```

Macro to create a `static` (compile-time) [`Set`](/docs/api/rust/tauri/../../../../tauri/api/assets/phf/struct.Set.html "Set").

Requires the `"macros"` feature.

# [Example](/docs/api/rust/tauri/about:blank#example)

ⓘ

```
use ::phf::{phf_set, Set};

static MY_SET: Set<&'static str> = phf_set! {
    "hello world",
    "hola mundo",
};

fn main ()
{
    assert!(MY_SET.contains("hello world"));
}
```
