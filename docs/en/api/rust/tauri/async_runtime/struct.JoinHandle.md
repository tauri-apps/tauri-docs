---
title: Struct tauri::async_runtime::JoinHandle
sidebar_label: struct.JoinHandle
custom_edit_url: null
---

  # Struct tauri::async_runtime::JoinHandle,

```rs
pub struct JoinHandle<T>(_);
```

Expand description

An owned permission to join on a task (await its termination).

## Trait Implementations

### impl&lt;T: [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug")> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [JoinHandle](/docs/api/rust/tauri/struct.JoinHandle "struct tauri::async_runtime::JoinHandle")&lt;T>[\[src\]](/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#35 "goto source code")

#### fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html "type core::fmt::Result")[\[src\]](/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#35 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl&lt;T> [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future") for [JoinHandle](/docs/api/rust/tauri/struct.JoinHandle "struct tauri::async_runtime::JoinHandle")&lt;T>[\[src\]](/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#38-46 "goto source code")

#### type [Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output) = [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;T>

The type of value produced on completion.

#### fn [poll](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#tymethod.poll)(self: [Pin](https://doc.rust-lang.org/1.54.0/core/pin/struct.Pin.html "struct core::pin::Pin")&lt;[&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self>, cx: &mut [Context](https://doc.rust-lang.org/1.54.0/core/task/wake/struct.Context.html "struct core::task::wake::Context")&lt;'\_>) -> [Poll](https://doc.rust-lang.org/1.54.0/core/task/poll/enum.Poll.html "enum core::task::poll::Poll")&lt;Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#40-45 "goto source code")

Attempt to resolve the future to a final value, registering the current task for wakeup if the value is not yet available. [Read more](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#tymethod.poll)

## Auto Trait Implementations

### impl&lt;T> \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [JoinHandle](/docs/api/rust/tauri/struct.JoinHandle "struct tauri::async_runtime::JoinHandle")&lt;T>

### impl&lt;T> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [JoinHandle](/docs/api/rust/tauri/struct.JoinHandle "struct tauri::async_runtime::JoinHandle")&lt;T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

### impl&lt;T> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [JoinHandle](/docs/api/rust/tauri/struct.JoinHandle "struct tauri::async_runtime::JoinHandle")&lt;T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

### impl&lt;T> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [JoinHandle](/docs/api/rust/tauri/struct.JoinHandle "struct tauri::async_runtime::JoinHandle")&lt;T>

### impl&lt;T> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [JoinHandle](/docs/api/rust/tauri/struct.JoinHandle "struct tauri::async_runtime::JoinHandle")&lt;T>

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

### impl&lt;F> FutureExt for F where F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),

#### fn [poll](/docs/api/rust/tauri/about:blank#method.poll)(&mut self, cx: &mut [Context](https://doc.rust-lang.org/1.54.0/core/task/wake/struct.Context.html "struct core::task::wake::Context")&lt;'\_>) -> [Poll](https://doc.rust-lang.org/1.54.0/core/task/poll/enum.Poll.html "enum core::task::poll::Poll")&lt;Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")> where Self: [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"),

A convenience for calling [`Future::poll()`](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#tymethod.poll "Future::poll()") on `!`[`Unpin`](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "Unpin") types.

#### fn [or](/docs/api/rust/tauri/about:blank#method.or)&lt;F>(self, other: F) -> Or&lt;Self, F> where F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")&lt;Output = Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")>,

Returns the result of `self` or `other` future, preferring `self` if both are ready. [Read more](/docs/api/rust/tauri/about:blank#method.or)

#### fn [race](/docs/api/rust/tauri/about:blank#method.race)&lt;F>(self, other: F) -> Race&lt;Self, F> where F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")&lt;Output = Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")>,

Returns the result of `self` or `other` future, with no preference if both are ready. [Read more](/docs/api/rust/tauri/about:blank#method.race)

#### fn [catch_unwind](/docs/api/rust/tauri/about:blank#method.catch_unwind)(self) -> CatchUnwind&lt;Self> where Self: [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe"),

Catches panics while polling the future. [Read more](/docs/api/rust/tauri/about:blank#method.catch_unwind)

#### fn [boxed](/docs/api/rust/tauri/about:blank#method.boxed)&lt;'a>( self ) -> [Pin](https://doc.rust-lang.org/1.54.0/core/pin/struct.Pin.html "struct core::pin::Pin")&lt;[Box](https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html "struct alloc::boxed::Box")&lt;dyn [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")&lt;Output = Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")> + 'a + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"), [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")>> where Self: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'a,

Boxes the future and changes its type to `dyn Future + Send + 'a`. [Read more](/docs/api/rust/tauri/about:blank#method.boxed)

#### fn [boxed_local](/docs/api/rust/tauri/about:blank#method.boxed_local)&lt;'a>( self ) -> [Pin](https://doc.rust-lang.org/1.54.0/core/pin/struct.Pin.html "struct core::pin::Pin")&lt;[Box](https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html "struct alloc::boxed::Box")&lt;dyn [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")&lt;Output = Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")> + 'a, [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")>> where Self: 'a,

Boxes the future and changes its type to `dyn Future + 'a`. [Read more](/docs/api/rust/tauri/about:blank#method.boxed_local)

### impl&lt;T> FutureExt for T where T: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),

#### fn [map](/docs/api/rust/tauri/about:blank#method.map)&lt;U, F>(self, f: F) -> Map&lt;Self, F> where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")) -> U,

Map this future’s output to a different type, returning a new future of the resulting type. [Read more](/docs/api/rust/tauri/about:blank#method.map)

#### fn [map_into](/docs/api/rust/tauri/about:blank#method.map_into)&lt;U>(self) -> MapInto&lt;Self, U> where Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output"): [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;U>,

Map this future’s output to a different type, returning a new future of the resulting type. [Read more](/docs/api/rust/tauri/about:blank#method.map_into)

#### fn [then](/docs/api/rust/tauri/about:blank#method.then)&lt;Fut, F>(self, f: F) -> Then&lt;Self, Fut, F> where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")) -> Fut, Fut: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future"),

Chain on a computation for when a future finished, passing the result of the future to the provided closure `f`. [Read more](/docs/api/rust/tauri/about:blank#method.then)

#### fn [left_future](/docs/api/rust/tauri/about:blank#method.left_future)&lt;B>(self) -> Either&lt;Self, B> where B: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")&lt;Output = Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")>,

Wrap this future in an `Either` future, making it the left-hand variant of that `Either`. [Read more](/docs/api/rust/tauri/about:blank#method.left_future)

#### fn [right_future](/docs/api/rust/tauri/about:blank#method.right_future)&lt;A>(self) -> Either&lt;A, Self> where A: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")&lt;Output = Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")>,

Wrap this future in an `Either` future, making it the right-hand variant of that `Either`. [Read more](/docs/api/rust/tauri/about:blank#method.right_future)

#### fn [into_stream](/docs/api/rust/tauri/about:blank#method.into_stream)(self) -> IntoStream&lt;Self>

Convert this future into a single element stream. [Read more](/docs/api/rust/tauri/about:blank#method.into_stream)

#### fn [flatten](/docs/api/rust/tauri/about:blank#method.flatten)(self) -> Flatten&lt;Self> where Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output"): [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future"),

Flatten the execution of this future when the output of this future is itself another future. [Read more](/docs/api/rust/tauri/about:blank#method.flatten)

#### fn [flatten_stream](/docs/api/rust/tauri/about:blank#method.flatten_stream)(self) -> FlattenStream&lt;Self> where Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output"): Stream,

Flatten the execution of this future when the successful result of this future is a stream. [Read more](/docs/api/rust/tauri/about:blank#method.flatten_stream)

#### fn [fuse](/docs/api/rust/tauri/about:blank#method.fuse)(self) -> Fuse&lt;Self>

Fuse a future such that `poll` will never again be called once it has completed. This method can be used to turn any `Future` into a `FusedFuture`. [Read more](/docs/api/rust/tauri/about:blank#method.fuse)

#### fn [inspect](/docs/api/rust/tauri/about:blank#method.inspect)&lt;F>(self, f: F) -> Inspect&lt;Self, F> where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(&Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")),

Do something with the output of a future before passing it on. [Read more](/docs/api/rust/tauri/about:blank#method.inspect)

#### fn [catch_unwind](/docs/api/rust/tauri/about:blank#method.catch_unwind)(self) -> CatchUnwind&lt;Self> where Self: [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe"),

Catches unwinding panics while polling the future. [Read more](/docs/api/rust/tauri/about:blank#method.catch_unwind)

#### fn [shared](/docs/api/rust/tauri/about:blank#method.shared)(self) -> Shared&lt;Self> where Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output"): [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone"),

Create a cloneable handle to this future where all handles will resolve to the same result. [Read more](/docs/api/rust/tauri/about:blank#method.shared)

#### fn [remote_handle](/docs/api/rust/tauri/about:blank#method.remote_handle)(self) -> [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)Remote&lt;Self>, RemoteHandle&lt;Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")>[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)

Turn this future into a future that yields `()` on completion and sends its output to another future on a separate task. [Read more](/docs/api/rust/tauri/about:blank#method.remote_handle)

#### fn [boxed](/docs/api/rust/tauri/about:blank#method.boxed)&lt;'a>( self ) -> [Pin](https://doc.rust-lang.org/1.54.0/core/pin/struct.Pin.html "struct core::pin::Pin")&lt;[Box](https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html "struct alloc::boxed::Box")&lt;dyn [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")&lt;Output = Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")> + 'a + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"), [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")>> where Self: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'a,

Wrap the future in a Box, pinning it. [Read more](/docs/api/rust/tauri/about:blank#method.boxed)

#### fn [boxed_local](/docs/api/rust/tauri/about:blank#method.boxed_local)&lt;'a>( self ) -> [Pin](https://doc.rust-lang.org/1.54.0/core/pin/struct.Pin.html "struct core::pin::Pin")&lt;[Box](https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html "struct alloc::boxed::Box")&lt;dyn [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")&lt;Output = Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")> + 'a, [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")>> where Self: 'a,

Wrap the future in a Box, pinning it. [Read more](/docs/api/rust/tauri/about:blank#method.boxed_local)

#### fn [unit_error](/docs/api/rust/tauri/about:blank#method.unit_error)(self) -> UnitError&lt;Self>

Turns a [`Future<Output = T>`](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html) into a [`TryFuture<Ok = T, Error = ()`>](/docs/api/rust/tauri/futures_core::future::TryFuture). [Read more](/docs/api/rust/tauri/about:blank#method.unit_error)

#### fn [never_error](/docs/api/rust/tauri/about:blank#method.never_error)(self) -> NeverError&lt;Self>

Turns a [`Future<Output = T>`](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html) into a [`TryFuture<Ok = T, Error = Never`>](/docs/api/rust/tauri/futures_core::future::TryFuture). [Read more](/docs/api/rust/tauri/about:blank#method.never_error)

#### fn [poll_unpin](/docs/api/rust/tauri/about:blank#method.poll_unpin)(&mut self, cx: &mut [Context](https://doc.rust-lang.org/1.54.0/core/task/wake/struct.Context.html "struct core::task::wake::Context")&lt;'\_>) -> [Poll](https://doc.rust-lang.org/1.54.0/core/task/poll/enum.Poll.html "enum core::task::poll::Poll")&lt;Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")> where Self: [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"),

A convenience for calling `Future::poll` on `Unpin` future types.

#### fn [now_or_never](/docs/api/rust/tauri/about:blank#method.now_or_never)(self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")>

Evaluates and consumes the future, returning the resulting output if the future is ready after the first call to `Future::poll`. [Read more](/docs/api/rust/tauri/about:blank#method.now_or_never)

### impl&lt;T, U> [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;U> for T where U: [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540 "goto source code")

#### pub fn [into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into)(self) -> U[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

### impl&lt;F> [IntoFuture](https://doc.rust-lang.org/1.54.0/core/future/into_future/trait.IntoFuture.html "trait core::future::into_future::IntoFuture") for F where F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/future/into_future.rs.html#20-27 "goto source code")

#### type [Output](https://doc.rust-lang.org/1.54.0/core/future/into_future/trait.IntoFuture.html#associatedtype.Output) = &lt;F as [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")>::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")

🔬 This is a nightly-only experimental API. (`into_future`)

The output that the future will produce on completion.

#### type [Future](https://doc.rust-lang.org/1.54.0/core/future/into_future/trait.IntoFuture.html#associatedtype.Future) = F

🔬 This is a nightly-only experimental API. (`into_future`)

Which kind of future are we turning this into?

#### pub fn [into_future](https://doc.rust-lang.org/1.54.0/core/future/into_future/trait.IntoFuture.html#tymethod.into_future)(self) -> &lt;F as [IntoFuture](https://doc.rust-lang.org/1.54.0/core/future/into_future/trait.IntoFuture.html "trait core::future::into_future::IntoFuture")>::[Future](https://doc.rust-lang.org/1.54.0/core/future/into_future/trait.IntoFuture.html#associatedtype.Future "type core::future::into_future::IntoFuture::Future")[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/future/into_future.rs.html#24 "goto source code")

🔬 This is a nightly-only experimental API. (`into_future`)

Creates a future from a value.

### impl&lt;T, U> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U> for T where U: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [Infallible](https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html "enum core::convert::Infallible")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)(value: U) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;T, &lt;T as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587 "goto source code")

Performs the conversion.

### impl&lt;F, T, E> TryFuture for F where F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")&lt;Output = [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;T, E>> + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),

#### type [Ok](/docs/api/rust/tauri/about:blank#associatedtype.Ok) = T

The type of successful values yielded by this future

#### type [Error](/docs/api/rust/tauri/about:blank#associatedtype.Error) = E

The type of failures yielded by this future

#### pub fn [try_poll](/docs/api/rust/tauri/about:blank#tymethod.try_poll)( self: [Pin](https://doc.rust-lang.org/1.54.0/core/pin/struct.Pin.html "struct core::pin::Pin")&lt;[&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)F>, cx: &mut [Context](https://doc.rust-lang.org/1.54.0/core/task/wake/struct.Context.html "struct core::task::wake::Context")&lt;'\_> ) -> [Poll](https://doc.rust-lang.org/1.54.0/core/task/poll/enum.Poll.html "enum core::task::poll::Poll")&lt;&lt;F as [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")>::[Output](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output "type core::future::future::Future::Output")>

Poll this `TryFuture` as if it were a `Future`. [Read more](/docs/api/rust/tauri/about:blank#tymethod.try_poll)

### impl&lt;Fut> TryFutureExt for Fut where Fut: TryFuture + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),

#### fn [flatten_sink](/docs/api/rust/tauri/about:blank#method.flatten_sink)&lt;Item>(self) -> FlattenSink&lt;Self, Self::Ok> where Self::Ok: Sink&lt;Item>, &lt;Self::Ok as Sink&lt;Item>>::Error == Self::Error,

Flattens the execution of this future when the successful result of this future is a \[`Sink`]. [Read more](/docs/api/rust/tauri/about:blank#method.flatten_sink)

#### fn [map_ok](/docs/api/rust/tauri/about:blank#method.map_ok)&lt;T, F>(self, f: F) -> MapOk&lt;Self, F> where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(Self::Ok) -> T,

Maps this future’s success value to a different value. [Read more](/docs/api/rust/tauri/about:blank#method.map_ok)

#### fn [map_ok_or_else](/docs/api/rust/tauri/about:blank#method.map_ok_or_else)&lt;T, E, F>(self, e: E, f: F) -> MapOkOrElse&lt;Self, F, E> where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(Self::Ok) -> T, E: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(Self::Error) -> T,

Maps this future’s success value to a different value, and permits for error handling resulting in the same type. [Read more](/docs/api/rust/tauri/about:blank#method.map_ok_or_else)

#### fn [map_err](/docs/api/rust/tauri/about:blank#method.map_err)&lt;E, F>(self, f: F) -> MapErr&lt;Self, F> where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(Self::Error) -> E,

Maps this future’s error value to a different value. [Read more](/docs/api/rust/tauri/about:blank#method.map_err)

#### fn [err_into](/docs/api/rust/tauri/about:blank#method.err_into)&lt;E>(self) -> ErrInto&lt;Self, E> where Self::Error: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;E>,

Maps this future’s [`Error`](/docs/api/rust/tauri/tryfuture::Error) to a new error type using the [`Into`](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html) trait. [Read more](/docs/api/rust/tauri/about:blank#method.err_into)

#### fn [ok_into](/docs/api/rust/tauri/about:blank#method.ok_into)&lt;U>(self) -> OkInto&lt;Self, U> where Self::Ok: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;U>,

Maps this future’s [`Ok`](/docs/api/rust/tauri/tryfuture::Ok) to a new type using the [`Into`](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html) trait. [Read more](/docs/api/rust/tauri/about:blank#method.ok_into)

#### fn [and_then](/docs/api/rust/tauri/about:blank#method.and_then)&lt;Fut, F>(self, f: F) -> AndThen&lt;Self, Fut, F> where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(Self::Ok) -> Fut, Fut: TryFuture&lt;Error = Self::Error>,

Executes another future after this one resolves successfully. The success value is passed to a closure to create this subsequent future. [Read more](/docs/api/rust/tauri/about:blank#method.and_then)

#### fn [or_else](/docs/api/rust/tauri/about:blank#method.or_else)&lt;Fut, F>(self, f: F) -> OrElse&lt;Self, Fut, F> where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(Self::Error) -> Fut, Fut: TryFuture&lt;Ok = Self::Ok>,

Executes another future if this one resolves to an error. The error value is passed to a closure to create this subsequent future. [Read more](/docs/api/rust/tauri/about:blank#method.or_else)

#### fn [inspect_ok](/docs/api/rust/tauri/about:blank#method.inspect_ok)&lt;F>(self, f: F) -> InspectOk&lt;Self, F> where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(&Self::Ok),

Do something with the success value of a future before passing it on. [Read more](/docs/api/rust/tauri/about:blank#method.inspect_ok)

#### fn [inspect_err](/docs/api/rust/tauri/about:blank#method.inspect_err)&lt;F>(self, f: F) -> InspectErr&lt;Self, F> where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(&Self::Error),

Do something with the error value of a future before passing it on. [Read more](/docs/api/rust/tauri/about:blank#method.inspect_err)

#### fn [try_flatten](/docs/api/rust/tauri/about:blank#method.try_flatten)(self) -> TryFlatten&lt;Self, Self::Ok> where Self::Ok: TryFuture, &lt;Self::Ok as TryFuture>::Error == Self::Error,

Flatten the execution of this future when the successful result of this future is another future. [Read more](/docs/api/rust/tauri/about:blank#method.try_flatten)

#### fn [try_flatten_stream](/docs/api/rust/tauri/about:blank#method.try_flatten_stream)(self) -> TryFlattenStream&lt;Self> where Self::Ok: TryStream, &lt;Self::Ok as TryStream>::Error == Self::Error,

Flatten the execution of this future when the successful result of this future is a stream. [Read more](/docs/api/rust/tauri/about:blank#method.try_flatten_stream)

#### fn [unwrap_or_else](/docs/api/rust/tauri/about:blank#method.unwrap_or_else)&lt;F>(self, f: F) -> UnwrapOrElse&lt;Self, F> where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(Self::Error) -> Self::Ok,

Unwraps this future’s output, producing a future with this future’s [`Ok`](/docs/api/rust/tauri/tryfuture::Ok) type as its [`Output`](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output) type. [Read more](/docs/api/rust/tauri/about:blank#method.unwrap_or_else)

#### fn [into_future](/docs/api/rust/tauri/about:blank#method.into_future)(self) -> IntoFuture&lt;Self>

Wraps a \[`TryFuture`] into a type that implements [`Future`](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html). [Read more](/docs/api/rust/tauri/about:blank#method.into_future)

#### fn [try_poll_unpin](/docs/api/rust/tauri/about:blank#method.try_poll_unpin)( &mut self, cx: &mut [Context](https://doc.rust-lang.org/1.54.0/core/task/wake/struct.Context.html "struct core::task::wake::Context")&lt;'\_> ) -> [Poll](https://doc.rust-lang.org/1.54.0/core/task/poll/enum.Poll.html "enum core::task::poll::Poll")&lt;[Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;Self::Ok, Self::Error>> where Self: [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"),

A convenience method for calling \[`TryFuture::try_poll`] on [`Unpin`](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "Unpin") future types. [Read more](/docs/api/rust/tauri/about:blank#method.try_poll_unpin)

### impl&lt;T, U> [TryInto](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html "trait core::convert::TryInto")&lt;U> for T where U: [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error) = &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")

The type returned in the event of a conversion error.

#### pub fn [try_into](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into)(self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;U, &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573 "goto source code")

Performs the conversion.

### impl&lt;V, T> VZip&lt;V> for T where V: MultiLane&lt;T>,

#### pub fn [vzip](/docs/api/rust/tauri/about:blank#tymethod.vzip)(self) -> V
  