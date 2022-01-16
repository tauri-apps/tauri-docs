---
title: Struct tauri::async_runtime::Handle
sidebar_label: struct.Handle
custom_edit_url: null
---

  # Struct tauri::async_runtime::Handle,

```rs
pub struct Handle { /* fields omitted */ }
```

Expand description

Handle to the runtime.

The handle is internally reference-counted and can be freely cloned. A handle can be obtained using the [`Runtime::handle`](/docs/api/rust/tauri/crate::runtime::Runtime::handle()) method.

## Implementations

### impl [Handle](/docs/api/rust/tauri/struct.Handle "struct tauri::async_runtime::Handle")

#### pub fn [enter](/docs/api/rust/tauri/about:blank#method.enter)(&self) -> EnterGuard&lt;'\_>

Enter the runtime context. This allows you to construct types that must have an executor available on creation such as [`Sleep`](/docs/api/rust/tauri/struct@crate::time::Sleep) or [`TcpStream`](/docs/api/rust/tauri/struct@crate::net::TcpStream). It will also allow you to call methods such as [`tokio::spawn`](/docs/api/rust/tauri/fn@crate::spawn).

#### pub fn [current](/docs/api/rust/tauri/about:blank#method.current)() -> [Handle](/docs/api/rust/tauri/struct.Handle "struct tauri::async_runtime::Handle")

Returns a `Handle` view over the currently running `Runtime`

## Panic

This will panic if called outside the context of a Tokio runtime. That means that you must call this on one of the threads **being run by the runtime**. Calling this from within a thread created by `std::thread::spawn` (for example) will cause a panic.

## Examples

This can be used to obtain the handle of the surrounding runtime from an async block or function running on that runtime.

```rs
use tokio::runtime::Handle;

// Inside an async block or function.
let handle = Handle::current();
handle.spawn(async {
    println!("now running in the existing Runtime");
});

thread::spawn(move || {
    // Notice that the handle is created outside of this thread and then moved in
    handle.spawn(async { /* ... */ })
    // This next line would cause a panic
    // let handle2 = Handle::current();
});
```

#### pub fn [try_current](/docs/api/rust/tauri/about:blank#method.try_current)() -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Handle](/docs/api/rust/tauri/struct.Handle "struct tauri::async_runtime::Handle"), TryCurrentError>

Returns a Handle view over the currently running Runtime

Returns an error if no Runtime has been started

Contrary to `current`, this never panics

#### pub fn [spawn](/docs/api/rust/tauri/about:blank#method.spawn)&lt;F>(&self, future: F) -> [JoinHandle](/docs/api/rust/tauri/struct.TokioJoinHandle "struct tauri::async_runtime::TokioJoinHandle")&lt;&lt;F as [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")>::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")>ⓘNotable traits for [JoinHandle](/docs/api/rust/tauri/struct.TokioJoinHandle "struct tauri::async_runtime::TokioJoinHandle")&lt;T>`impl<T> Future for JoinHandle<T>type Output = Result<T, JoinError>;` where F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future") + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static, &lt;F as [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")>::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output"): [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"), &lt;F as [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")>::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output"): 'static,

Spawn a future onto the Tokio runtime.

This spawns the given future onto the runtime’s executor, usually a thread pool. The thread pool is then responsible for polling the future until it completes.

See [module level](/docs/api/rust/tauri/index) documentation for more details.

## Examples

```rs
use tokio::runtime::Runtime;

// Create the runtime
let rt = Runtime::new().unwrap();
// Get a handle from this runtime
let handle = rt.handle();

// Spawn a future onto the runtime using the handle
handle.spawn(async {
    println!("now running on a worker thread");
});
```

#### pub fn [spawn_blocking](/docs/api/rust/tauri/about:blank#method.spawn_blocking)&lt;F, R>(&self, func: F) -> [JoinHandle](/docs/api/rust/tauri/struct.TokioJoinHandle "struct tauri::async_runtime::TokioJoinHandle")&lt;R>ⓘNotable traits for [JoinHandle](/docs/api/rust/tauri/struct.TokioJoinHandle "struct tauri::async_runtime::TokioJoinHandle")&lt;T>`impl<T> Future for JoinHandle<T>type Output = Result<T, JoinError>;` where R: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static, F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")() -> R + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,

Run the provided function on an executor dedicated to blocking operations.

## Examples

```rs
use tokio::runtime::Runtime;

// Create the runtime
let rt = Runtime::new().unwrap();
// Get a handle from this runtime
let handle = rt.handle();

// Spawn a blocking function onto the runtime using the handle
handle.spawn_blocking(|| {
    println!("now running on a worker thread");
});
```

#### pub fn [block_on](/docs/api/rust/tauri/about:blank#method.block_on)&lt;F>(&self, future: F) -> &lt;F as [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")>::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output") where F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future"),

Run a future to completion on this `Handle`’s associated `Runtime`.

This runs the given future on the current thread, blocking until it is complete, and yielding its resolved result. Any tasks or timers which the future spawns internally will be executed on the runtime.

When this is used on a `current_thread` runtime, only the [`Runtime::block_on`](/docs/api/rust/tauri/fn@crate::runtime::Runtime::block_on) method can drive the IO and timer drivers, but the `Handle::block_on` method cannot drive them. This means that, when using this method on a current_thread runtime, anything that relies on IO or timers will not work unless there is another thread currently calling [`Runtime::block_on`](/docs/api/rust/tauri/fn@crate::runtime::Runtime::block_on) on the same runtime.

## If the runtime has been shut down

If the `Handle`’s associated `Runtime` has been shut down (through [`Runtime::shutdown_background`](/docs/api/rust/tauri/fn@crate::runtime::Runtime::shutdown_background), [`Runtime::shutdown_timeout`](/docs/api/rust/tauri/fn@crate::runtime::Runtime::shutdown_timeout), or by dropping it) and `Handle::block_on` is used it might return an error or panic. Specifically IO resources will return an error and timers will panic. Runtime independent futures will run as normal.

## Panics

This function panics if the provided future panics, if called within an asynchronous execution context, or if a timer future is executed on a runtime that has been shut down.

## Examples

```rs
use tokio::runtime::Runtime;

// Create the runtime
let rt  = Runtime::new().unwrap();

// Get a handle from this runtime
let handle = rt.handle();

// Execute the future, blocking the current thread until completion
handle.block_on(async {
    println!("hello");
});
```

Or using `Handle::current`:

```rs
use tokio::runtime::Handle;

#[tokio::main]

async fn main () {
    let handle = Handle::current();
    std::thread::spawn(move || {
        // Using Handle::block_on to run async code in the new thread.
        handle.block_on(async {
            println!("hello");
        });
    });
}
```

## Trait Implementations

### impl [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") for [Handle](/docs/api/rust/tauri/struct.Handle "struct tauri::async_runtime::Handle")

#### pub fn [clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)(&self) -> [Handle](/docs/api/rust/tauri/struct.Handle "struct tauri::async_runtime::Handle")

Returns a copy of the value. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)

#### fn [clone_from](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)

### impl [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Handle](/docs/api/rust/tauri/struct.Handle "struct tauri::async_runtime::Handle")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl [RuntimeHandle](/docs/api/rust/tauri/trait.RuntimeHandle "trait tauri::async_runtime::RuntimeHandle") for [Handle](/docs/api/rust/tauri/struct.Handle "struct tauri::async_runtime::Handle")[\[src\]](/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#60-72 "goto source code")

#### fn [spawn](/docs/api/rust/tauri/trait.RuntimeHandle#tymethod.spawn)&lt;F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")>(&self, task: F) -> [JoinHandle](/docs/api/rust/tauri/struct.JoinHandle "struct tauri::async_runtime::JoinHandle")&lt;F::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")>ⓘNotable traits for [JoinHandle](/docs/api/rust/tauri/struct.JoinHandle "struct tauri::async_runtime::JoinHandle")&lt;T>`impl<T> Future for JoinHandle<T>type Output = Result<T>;` where F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future") + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static, F::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output"): [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#61-67 "goto source code")

Spawns a future onto the runtime.

#### fn [block_on](/docs/api/rust/tauri/trait.RuntimeHandle#tymethod.block_on)&lt;F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")>(&self, task: F) -> F::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")[\[src\]](/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#69-71 "goto source code")

Runs a future to completion on runtime.

## Auto Trait Implementations

### impl \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Handle](/docs/api/rust/tauri/struct.Handle "struct tauri::async_runtime::Handle")

### impl [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Handle](/docs/api/rust/tauri/struct.Handle "struct tauri::async_runtime::Handle")

### impl [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Handle](/docs/api/rust/tauri/struct.Handle "struct tauri::async_runtime::Handle")

### impl [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Handle](/docs/api/rust/tauri/struct.Handle "struct tauri::async_runtime::Handle")

### impl \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Handle](/docs/api/rust/tauri/struct.Handle "struct tauri::async_runtime::Handle")

## Blanket Implementations

### impl&lt;T> [Any](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html "trait core::any::Any") for T where T: 'static + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135 "goto source code")

#### pub fn [type_id](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id)(&self) -> [TypeId](https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html "struct core::any::TypeId")[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132 "goto source code")

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id)

### impl&lt;T> [Borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html "trait core::borrow::Borrow")&lt;T> for T where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213 "goto source code")

#### pub fn [borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)(&self) -> [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210 "goto source code")

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)

### impl&lt;T> [BorrowMut](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html "trait core::borrow::BorrowMut")&lt;T> for T where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220 "goto source code")

#### pub fn [borrow_mut](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)(&mut self) -> [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217 "goto source code")

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### impl&lt;T> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T> for T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(t: T) -> T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545 "goto source code")

Performs the conversion.

### impl&lt;T, U> [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;U> for T where U: [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540 "goto source code")

#### pub fn [into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into)(self) -> U[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

### impl&lt;T> [ToOwned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html "trait alloc::borrow::ToOwned") for T where T: [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#84-96 "goto source code")

#### type [Owned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#associatedtype.Owned) = T

The resulting type after obtaining ownership.

#### pub fn [to_owned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)(&self) -> T[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#89 "goto source code")

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### pub fn [clone_into](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into)(&self, target: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T)[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#93 "goto source code")

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into)

### impl&lt;T, U> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U> for T where U: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [Infallible](https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html "enum core::convert::Infallible")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)(value: U) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;T, &lt;T as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587 "goto source code")

Performs the conversion.

### impl&lt;T, U> [TryInto](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html "trait core::convert::TryInto")&lt;U> for T where U: [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error) = &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")

The type returned in the event of a conversion error.

#### pub fn [try_into](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into)(self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;U, &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573 "goto source code")

Performs the conversion.

### impl&lt;V, T> VZip&lt;V> for T where V: MultiLane&lt;T>,

#### pub fn [vzip](/docs/api/rust/tauri/about:blank#tymethod.vzip)(self) -> V
  