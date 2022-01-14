---
title: Struct tauri::InvokeMessage
sidebar_label: struct.InvokeMessage
custom_edit_url: null
---

  # Struct tauri::InvokeMessage,

```rs
pub struct InvokeMessage<R: Runtime = Wry> { /* fields omitted */ }
```

Expand description

An invoke message.

## Implementations

### impl&lt;R: [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")> [InvokeMessage](/docs/api/rust/tauri/struct.InvokeMessage "struct tauri::InvokeMessage")&lt;R>[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#252-303 "goto source code")

#### pub fn [command](/docs/api/rust/tauri/about:blank#method.command)(&self) -> &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#270-272 "goto source code")

The invoke command.

#### pub fn [window](/docs/api/rust/tauri/about:blank#method.window)(&self) -> [Window](/docs/api/rust/tauri/window/struct.Window "struct tauri::window::Window")&lt;R>[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#276-278 "goto source code")

The window that received the invoke.

#### pub fn [window_ref](/docs/api/rust/tauri/about:blank#method.window_ref)(&self) -> &[Window](/docs/api/rust/tauri/window/struct.Window "struct tauri::window::Window")&lt;R>[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#282-284 "goto source code")

A reference to window that received the invoke.

#### pub fn [payload](/docs/api/rust/tauri/about:blank#method.payload)(&self) -> &[JsonValue](https://docs.rs/serde_json/1.0.66/serde_json/value/enum.Value.html "enum serde_json::value::Value")[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#288-290 "goto source code")

A reference to the payload the invoke received.

#### pub fn [state](/docs/api/rust/tauri/about:blank#method.state)(&self) -> [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;[StateManager](/docs/api/rust/tauri/struct.StateManager "struct tauri::StateManager")>[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#294-296 "goto source code")

The state manager associated with the application

#### pub fn [state_ref](/docs/api/rust/tauri/about:blank#method.state_ref)(&self) -> &[StateManager](/docs/api/rust/tauri/struct.StateManager "struct tauri::StateManager")[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#300-302 "goto source code")

A reference to the state manager associated with application.

## Trait Implementations

### impl&lt;R: [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") + [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [InvokeMessage](/docs/api/rust/tauri/struct.InvokeMessage "struct tauri::InvokeMessage")&lt;R>[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#240 "goto source code")

#### fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html "type core::fmt::Result")[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#240 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

## Auto Trait Implementations

### impl&lt;R = [Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry")> \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [InvokeMessage](/docs/api/rust/tauri/struct.InvokeMessage "struct tauri::InvokeMessage")&lt;R>

### impl&lt;R> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [InvokeMessage](/docs/api/rust/tauri/struct.InvokeMessage "struct tauri::InvokeMessage")&lt;R>

### impl&lt;R> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [InvokeMessage](/docs/api/rust/tauri/struct.InvokeMessage "struct tauri::InvokeMessage")&lt;R> where &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[ClipboardManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[GlobalShortcutManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[Handle](/docs/api/rust/tauri/trait.Runtime#associatedtype.Handle "type tauri::Runtime::Handle"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

### impl&lt;R> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [InvokeMessage](/docs/api/rust/tauri/struct.InvokeMessage "struct tauri::InvokeMessage")&lt;R> where &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[ClipboardManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[GlobalShortcutManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[Handle](/docs/api/rust/tauri/trait.Runtime#associatedtype.Handle "type tauri::Runtime::Handle"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"),

### impl&lt;R = [Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry")> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [InvokeMessage](/docs/api/rust/tauri/struct.InvokeMessage "struct tauri::InvokeMessage")&lt;R>

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
  