---
title: Trait tauri::Assets
sidebar_label: trait.Assets
custom_edit_url: null
---

# Trait tauri::Assets,\[−],\[−],−

```rs
pub trait Assets: 'static + Send + Sync {
    pub fn get<Key>(&self, key: Key) -> Option<Cow<'_, [u8]
>>
    where
        Key: Into<AssetKey>;
}
```

Represents a container of file assets that are retrievable during runtime.

## Required methods

### `pub fn get<Key>(&self, key: Key) -> Option<Cow<'_, [u8]>> where Key: Into<AssetKey>,`

Get the content of the passed [`AssetKey`](/docs/api/rust/tauri/../tauri/api/assets/struct.AssetKey "AssetKey").

## Implementors

### `impl Assets for EmbeddedAssets`

#### `pub fn get<Key>(&self, key: Key) -> Option<Cow<'_, [u8]>> where Key: Into<AssetKey>,`
