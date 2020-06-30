---
title: "trait.ResultExt"
---

# Trait [tauri_api](/docs/api/rust/tauri_api/index.html)::​[ResultExt](/docs/api/rust/tauri_api/)

    pub trait ResultExt<T> {
        fn chain_err<F, EK>(self, callback: F) -> Result<T, Error>
        where
            EK: Into<ErrorKind>,
            F: FnOnce() -> EK;
    }

Additional methods for `Result`, for easy interaction with this crate.

## Required methods

### `fn chain_err<F, EK>(self, callback: F) -> Result<T, Error> where EK: Into<ErrorKind>, F: FnOnce() -> EK,`

If the `Result` is an `Err` then `chain_err` evaluates the closure, which returns _some type that can be converted to `ErrorKind`_, boxes the original error to store as the cause, then returns a new error containing the original error.

Loading content...

## Implementations on Foreign Types

### `impl<T> ResultExt<T> for Option<T>`

#### `fn chain_err<F, EK>(self, callback: F) -> Result<T, Error> where EK: Into<ErrorKind>, F: FnOnce() -> EK,`

### `impl<T, E> ResultExt<T> for Result<T, E> where E: Error + Send + 'static,`

#### `fn chain_err<F, EK>(self, callback: F) -> Result<T, Error> where EK: Into<ErrorKind>, F: FnOnce() -> EK,`

Loading content...

## Implementors

Loading content...
      