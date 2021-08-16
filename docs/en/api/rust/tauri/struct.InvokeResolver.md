---
title: Struct tauri::InvokeResolver
sidebar_label: struct.InvokeResolver
custom_edit_url: null
---

  # Struct tauri::InvokeResolver,

```rs
pub struct InvokeResolver<R: Runtime = Wry> { /* fields omitted */ }
```

Expand description

Resolver of a invoke message.

## Implementations

### impl&lt;R: [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")> [InvokeResolver](/docs/api/rust/tauri/struct.InvokeResolver "struct tauri::InvokeResolver")&lt;R>[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#127-236 "goto source code")

#### pub fn [respond_async](/docs/api/rust/tauri/about:blank#method.respond_async)&lt;T, F>(self, task: F) where T: [Serialize](https://docs.rs/serde/1.0.127/serde/ser/trait.Serialize.html "trait serde::ser::Serialize"), F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")&lt;Output = [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;T, [InvokeError](/docs/api/rust/tauri/struct.InvokeError "struct tauri::InvokeError")>> + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#137-145 "goto source code")

Reply to the invoke promise with an async task.

#### pub fn [respond_async_serialized](/docs/api/rust/tauri/about:blank#method.respond_async_serialized)&lt;F>(self, task: F) where F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")&lt;Output = [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[JsonValue](https://docs.rs/serde_json/1.0.66/serde_json/value/enum.Value.html "enum serde_json::value::Value"), [InvokeError](/docs/api/rust/tauri/struct.InvokeError "struct tauri::InvokeError")>> + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#148-155 "goto source code")

Reply to the invoke promise with an async task which is already serialized.

#### pub fn [respond](/docs/api/rust/tauri/about:blank#method.respond)&lt;T: [Serialize](https://docs.rs/serde/1.0.127/serde/ser/trait.Serialize.html "trait serde::ser::Serialize")>(self, value: [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;T, [InvokeError](/docs/api/rust/tauri/struct.InvokeError "struct tauri::InvokeError")>)[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#158-160 "goto source code")

Reply to the invoke promise with a serializable value.

#### pub fn [respond_closure](/docs/api/rust/tauri/about:blank#method.respond_closure)&lt;T, F>(self, f: F) where T: [Serialize](https://docs.rs/serde/1.0.127/serde/ser/trait.Serialize.html "trait serde::ser::Serialize"), F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")() -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;T, [InvokeError](/docs/api/rust/tauri/struct.InvokeError "struct tauri::InvokeError")>,[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#163-169 "goto source code")

Reply to the invoke promise running the given closure.

#### pub fn [resolve](/docs/api/rust/tauri/about:blank#method.resolve)&lt;T: [Serialize](https://docs.rs/serde/1.0.127/serde/ser/trait.Serialize.html "trait serde::ser::Serialize")>(self, value: T)[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#172-174 "goto source code")

Resolve the invoke promise with a value.

#### pub fn [reject](/docs/api/rust/tauri/about:blank#method.reject)&lt;T: [Serialize](https://docs.rs/serde/1.0.127/serde/ser/trait.Serialize.html "trait serde::ser::Serialize")>(self, value: T)[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#177-184 "goto source code")

Reject the invoke promise with a value.

#### pub fn [invoke_error](/docs/api/rust/tauri/about:blank#method.invoke_error)(self, error: [InvokeError](/docs/api/rust/tauri/struct.InvokeError "struct tauri::InvokeError"))[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#187-189 "goto source code")

Reject the invoke promise with an [`InvokeError`](/docs/api/rust/tauri/struct.InvokeError "InvokeError").

#### pub async fn [return_task](/docs/api/rust/tauri/about:blank#method.return_task)&lt;T, F>( window: [Window](/docs/api/rust/tauri/window/struct.Window "struct tauri::window::Window")&lt;R>, task: F, success_callback: [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String"), error_callback: [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String") ) where T: [Serialize](https://docs.rs/serde/1.0.127/serde/ser/trait.Serialize.html "trait serde::ser::Serialize"), F: [Future](https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html "trait core::future::future::Future")&lt;Output = [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;T, [InvokeError](/docs/api/rust/tauri/struct.InvokeError "struct tauri::InvokeError")>> + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#196-207 "goto source code")

Asynchronously executes the given task and evaluates its Result to the JS promise described by the `success_callback` and `error_callback` function names.

If the Result `is_ok()`, the callback will be the `success_callback` function name and the argument will be the Ok value. If the Result `is_err()`, the callback will be the `error_callback` function name and the argument will be the Err value.

## Trait Implementations

### impl&lt;R: [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") + [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [InvokeResolver](/docs/api/rust/tauri/struct.InvokeResolver "struct tauri::InvokeResolver")&lt;R>[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#120 "goto source code")

#### fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html "type core::fmt::Result")[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#120 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

## Auto Trait Implementations

### impl&lt;R = [Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry")> \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [InvokeResolver](/docs/api/rust/tauri/struct.InvokeResolver "struct tauri::InvokeResolver")&lt;R>

### impl&lt;R> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [InvokeResolver](/docs/api/rust/tauri/struct.InvokeResolver "struct tauri::InvokeResolver")&lt;R>

### impl&lt;R> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [InvokeResolver](/docs/api/rust/tauri/struct.InvokeResolver "struct tauri::InvokeResolver")&lt;R> where &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[ClipboardManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[GlobalShortcutManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[Handle](/docs/api/rust/tauri/trait.Runtime#associatedtype.Handle "type tauri::Runtime::Handle"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

### impl&lt;R> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [InvokeResolver](/docs/api/rust/tauri/struct.InvokeResolver "struct tauri::InvokeResolver")&lt;R> where &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[ClipboardManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[GlobalShortcutManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[Handle](/docs/api/rust/tauri/trait.Runtime#associatedtype.Handle "type tauri::Runtime::Handle"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"),

### impl&lt;R = [Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry")> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [InvokeResolver](/docs/api/rust/tauri/struct.InvokeResolver "struct tauri::InvokeResolver")&lt;R>

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
  