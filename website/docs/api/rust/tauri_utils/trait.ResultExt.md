---
title: "trait.ResultExt"
---

# Trait [tauri\\\_utils](/docs/api/rust/tauri\_utils/index.html)::​[ResultExt](/docs/api/rust/tauri\_utils/)

    pub trait ResultExt<T> {
        fn chain\_err<F, EK>(self, callback: F) -> Result<T, Error>
        where
            F: FnOnce() -> EK,
            EK: Into<ErrorKind>;
    }

Additional methods for `Result`, for easy interaction with this crate.

## Required methods

### `fn chain\_err<F, EK>(self, callback: F) -> Result<T, Error> where F: FnOnce() -> EK, EK: Into<ErrorKind>,`

If the `Result` is an `Err` then `chain\_err` evaluates the closure, which returns _some type that can be converted to `ErrorKind`_, boxes the original error to store as the cause, then returns a new error containing the original error.

Loading content...

## Implementations on Foreign Types

### `impl<T, E> ResultExt<T> for Result<T, E> where E: Error + Send + 'static,`

#### `fn chain\_err<F, EK>(self, callback: F) -> Result<T, Error> where F: FnOnce() -> EK, EK: Into<ErrorKind>,`

### `impl<T> ResultExt<T> for Option<T>`

#### `fn chain\_err<F, EK>(self, callback: F) -> Result<T, Error> where F: FnOnce() -> EK, EK: Into<ErrorKind>,`

Loading content...

## Implementors

Loading content...

      