---
title: Trait tauri::GlobalShortcutManager
sidebar_label: trait.GlobalShortcutManager
custom_edit_url: null
---

  # Trait tauri::GlobalShortcutManager,

```rs
pub trait GlobalShortcutManager: Debug {
    fn is_registered(&self, accelerator: &str) -> Result<bool, Error>;

    fn register<F>(
        &mut self, 
        accelerator: &str, 
        handler: F
    ) -> Result<(), Error>
    where
        F: 'static + Fn() + Send;

    fn unregister_all(&mut self) -> Result<(), Error>;

    fn unregister(&mut self, accelerator: &str) -> Result<(), Error>;
}
```

Expand description

A global shortcut manager.

## Required methods

#### fn [is_registered](/docs/api/rust/tauri/about:blank#tymethod.is_registered)(&self, accelerator: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html), Error>

Whether the application has registered the given `accelerator`.

## Panics

-   Panics if the event loop is not running yet, usually when called on the `tauri::Builder#setup` closure.
-   Panics when called on the main thread, usually on the `tauri::App#run`closure.

You can spawn a task to use the API using `tauri::async_runtime::spawn` or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### fn [register](/docs/api/rust/tauri/about:blank#tymethod.register)&lt;F>(&mut self, accelerator: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), handler: F) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), Error> where F: 'static + [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")() + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

Register a global shortcut of `accelerator`.

## Panics

-   Panics if the event loop is not running yet, usually when called on the `tauri::Builder#setup` closure.
-   Panics when called on the main thread, usually on the `tauri::App#run`closure.

You can spawn a task to use the API using `tauri::async_runtime::spawn` or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### fn [unregister_all](/docs/api/rust/tauri/about:blank#tymethod.unregister_all)(&mut self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), Error>

Unregister all accelerators registered by the manager instance.

## Panics

-   Panics if the event loop is not running yet, usually when called on the `tauri::Builder#setup` closure.
-   Panics when called on the main thread, usually on the `tauri::App#run`closure.

You can spawn a task to use the API using `tauri::async_runtime::spawn` or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### fn [unregister](/docs/api/rust/tauri/about:blank#tymethod.unregister)(&mut self, accelerator: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), Error>

Unregister the provided `accelerator`.

## Panics

-   Panics if the event loop is not running yet, usually when called on the `tauri::Builder#setup` closure.
-   Panics when called on the main thread, usually on the `tauri::App#run`closure.

You can spawn a task to use the API using `tauri::async_runtime::spawn` or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

## Implementations on Foreign Types

### impl [GlobalShortcutManager](/docs/api/rust/tauri/trait.GlobalShortcutManager "trait tauri::GlobalShortcutManager") for GlobalShortcutManagerHandle

#### pub fn [is_registered](/docs/api/rust/tauri/about:blank#tymethod.is_registered)(&self, accelerator: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html), Error>

#### pub fn [register](/docs/api/rust/tauri/about:blank#tymethod.register)&lt;F>( &mut self, accelerator: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), handler: F ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), Error> where F: 'static + [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")() + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

#### pub fn [unregister_all](/docs/api/rust/tauri/about:blank#tymethod.unregister_all)(&mut self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), Error>

#### pub fn [unregister](/docs/api/rust/tauri/about:blank#tymethod.unregister)(&mut self, accelerator: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), Error>

## Implementors
  