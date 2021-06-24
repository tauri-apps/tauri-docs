---
title: Trait tauri::TagRef
sidebar_label: trait.TagRef
---

# Trait tauri::TagRef,\[−],\[−],−

```rs
pub trait TagRef<T>: Display + ToOwned<Owned = T> + PartialEq<T> + Eq + Hash where
    T: Tag + Borrow<Self>, { }
```

A reference to a [`Tag`](/docs/api/rust/tauri/../tauri/trait.Tag "Tag").

-   [`Display`](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html "Display") so that we can still convert this tag to a JavaScript string.
-   [`ToOwned`](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html "ToOwned") to make sure we can clone it into the owned tag in specific cases.
-   [`PartialEq`](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html "PartialEq") so that we can compare refs to the owned tags easily.
-   [`Hash`](https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html "Hash") + [`Eq`](https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html "Eq") because we want to be able to use a ref as a key to internal hashmaps.

## Implementors

### `impl<T, R> TagRef<T> for R where T: Tag + Borrow<R>, R: Display + ToOwned<Owned = T> + PartialEq<T> + Eq + Hash + ?Sized,`

Automatically implement [`TagRef`](/docs/api/rust/tauri/../tauri/trait.TagRef "TagRef") for all types that fit the requirements.
