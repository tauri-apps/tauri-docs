---
title: Trait tauri::http::header::IntoHeaderName
sidebar_label: trait.IntoHeaderName
custom_edit_url: null
---

  # Trait tauri::http&#x3A;:header::IntoHeaderName,

```rs
pub trait IntoHeaderName: Sealed { }
```

Expand description

A marker trait used to identify values that can be used as insert keys to a `HeaderMap`.

## Implementations on Foreign Types

### impl [IntoHeaderName](/docs/api/rust/tauri/trait.IntoHeaderName "trait tauri::http&#x3A;:header::IntoHeaderName") for &'static [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3357 "goto source code")

## Implementors

### impl [IntoHeaderName](/docs/api/rust/tauri/trait.IntoHeaderName "trait tauri::http&#x3A;:header::IntoHeaderName") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3315 "goto source code")

### impl&lt;'a> [IntoHeaderName](/docs/api/rust/tauri/trait.IntoHeaderName "trait tauri::http&#x3A;:header::IntoHeaderName") for &'a [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3336 "goto source code")
  