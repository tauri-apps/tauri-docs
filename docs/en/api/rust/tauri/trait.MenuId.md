---
title: Trait tauri::MenuId
sidebar_label: trait.MenuId
custom_edit_url: null
---

# Trait tauri::MenuId,\[−],\[−],−

```rs
pub trait MenuId: 'static + Serialize + Hash + Eq + Debug + Clone + Send + Sync { }
```

A type that can be derived into a menu id.

## Implementors

### `impl<T> MenuId for T where T: Serialize + Hash + Eq + Debug + Clone + Send + Sync + 'static,`
