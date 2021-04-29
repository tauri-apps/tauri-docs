---
title: "trait.Assets"
---

# Trait [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[assets](/docs/api/rust/tauri/index.html)::​[Assets](/docs/api/rust/tauri/)

```rs
pub trait Assets: 'static + Send + Sync {
    pub fn get<Key>(&self, key: Key) -> Option<Cow<'_, [u8]>>
    where
        Key: Into<AssetKey>;
}
```

Represents a container of file assets that are retrievable during runtime.

## Required methods

### `pub fn get<Key>(&self, key: Key) -> Option<Cow<'_, [u8]>> where Key: Into<AssetKey>,`

Get the content of the passed [`AssetKey`](/docs/api/rust/tauri/../../../tauri/api/assets/struct.AssetKey.html "AssetKey").

Loading content...

## Implementors

### `impl Assets for EmbeddedAssets`

#### `pub fn get<Key>(&self, key: Key) -> Option<Cow<'_, [u8]>> where Key: Into<AssetKey>,`

Loading content...
