---
title: Trait tauri::Assets
sidebar_label: trait.Assets
custom_edit_url: null
---

  # Trait tauri::Assets,

```rs
pub trait Assets: 'static + Send + Sync {
    fn get(&self, key: &AssetKey) -> Option<Cow<'_, [u8]>>;
}
```

Expand description

Represents a container of file assets that are retrievable during runtime.

## Required methods

#### fn [get](/docs/api/rust/tauri/about:blank#tymethod.get)(&self, key: &AssetKey) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Cow](https://doc.rust-lang.org/1.54.0/alloc/borrow/enum.Cow.html "enum alloc::borrow::Cow")&lt;'\_, [\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)>>

Get the content of the passed \[`AssetKey`].

## Implementations on Foreign Types

### impl [Assets](/docs/api/rust/tauri/trait.Assets "trait tauri::Assets") for EmbeddedAssets

#### pub fn [get](/docs/api/rust/tauri/about:blank#tymethod.get)(&self, key: &AssetKey) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Cow](https://doc.rust-lang.org/1.54.0/alloc/borrow/enum.Cow.html "enum alloc::borrow::Cow")&lt;'\_, [\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)>>

## Implementors
  