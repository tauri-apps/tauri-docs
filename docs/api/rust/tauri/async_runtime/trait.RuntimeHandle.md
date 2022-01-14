---
title: Trait tauri::async_runtime::RuntimeHandle
sidebar_label: trait.RuntimeHandle
custom_edit_url: null
---

  # Trait tauri::async_runtime::RuntimeHandle,

```rs
pub trait RuntimeHandle: Debug + Clone + Sync + Sync {
    fn spawn<F: Future>(&self, task: F) -> JoinHandle<F::Output>ⓘ
Notable traits for JoinHandle<T>
impl<T> Future for JoinHandle<T>    type Output = Result<T>;

    where
        F: Future + Send + 'static,
        F::Output: Send + 'static;

    fn block_on<F: Future>(&self, task: F) -> F::Output;
}
```

Expand description

Runtime handle definition.

## Required methods

#### fn [spawn](/docs/api/rust/tauri/about:blank#tymethod.spawn)&lt;F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")>(&self, task: F) -> [JoinHandle](/docs/api/rust/tauri/struct.JoinHandle "struct tauri::async_runtime::JoinHandle")&lt;F::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")>ⓘNotable traits for [JoinHandle](/docs/api/rust/tauri/struct.JoinHandle "struct tauri::async_runtime::JoinHandle")&lt;T>`impl<T> Future for JoinHandle<T>type Output = Result<T>;` where F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future") + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static, F::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output"): [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#51-54 "goto source code")

Spawns a future onto the runtime.

#### fn [block_on](/docs/api/rust/tauri/about:blank#tymethod.block_on)&lt;F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")>(&self, task: F) -> F::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")[\[src\]](/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#57 "goto source code")

Runs a future to completion on runtime.

## Implementors

### impl [RuntimeHandle](/docs/api/rust/tauri/trait.RuntimeHandle "trait tauri::async_runtime::RuntimeHandle") for [Handle](/docs/api/rust/tauri/struct.Handle "struct tauri::async_runtime::Handle")[\[src\]](/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#60-72 "goto source code")

#### fn [spawn](/docs/api/rust/tauri/about:blank#tymethod.spawn)&lt;F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")>(&self, task: F) -> [JoinHandle](/docs/api/rust/tauri/struct.JoinHandle "struct tauri::async_runtime::JoinHandle")&lt;F::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")>ⓘNotable traits for [JoinHandle](/docs/api/rust/tauri/struct.JoinHandle "struct tauri::async_runtime::JoinHandle")&lt;T>`impl<T> Future for JoinHandle<T>type Output = Result<T>;` where F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future") + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static, F::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output"): [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,

[\[src\]](/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#61-67 "goto source code")

#### fn [block_on](/docs/api/rust/tauri/about:blank#tymethod.block_on)&lt;F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")>(&self, task: F) -> F::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")

[\[src\]](/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#69-71 "goto source code")
  