---
title: Struct tauri::async_runtime::Receiver
sidebar_label: struct.Receiver
custom_edit_url: null
---

  # Struct tauri::async_runtime::Receiver,

```rs
pub struct Receiver<T> { /* fields omitted */ }
```

Expand description

Receive values from the associated `Sender`.

Instances are created by the [`channel`](/docs/api/rust/tauri/fn.channel) function.

This receiver can be turned into a `Stream` using [`ReceiverStream`](https://docs.rs/tokio-stream/0.1/tokio_stream/wrappers/struct.ReceiverStream.html).

## Implementations

### impl&lt;T> [Receiver](/docs/api/rust/tauri/struct.Receiver "struct tauri::async_runtime::Receiver")&lt;T>

#### pub async fn [recv](/docs/api/rust/tauri/about:blank#method.recv)(&'\_ mut self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;T>

Receives the next value for this receiver.

This method returns `None` if the channel has been closed and there are no remaining messages in the channel’s buffer. This indicates that no further values can ever be received from this `Receiver`. The channel is closed when all senders have been dropped, or when [`close`](/docs/api/rust/tauri/struct.Receiver#method.close) is called.

If there are no messages in the channel’s buffer, but the channel has not yet been closed, this method will sleep until a message is sent or the channel is closed. Note that if [`close`](/docs/api/rust/tauri/struct.Receiver#method.close) is called, but there are still outstanding [`Permits`](/docs/api/rust/tauri/struct@crate::sync::mpsc::Permit) from before it was closed, the channel is not considered closed by `recv` until the permits are released.

## Cancel safety

This method is cancel safe. If `recv` is used as the event in a [`tokio::select!`](/docs/api/rust/tauri/crate::select) statement and some other branch completes first, it is guaranteed that no messages were received on this channel.

## Examples

```rs
use tokio::sync::mpsc;

#[tokio::main]

async fn main() {
    let (tx, mut rx) = mpsc::channel(100);

    tokio::spawn(async move {
        tx.send("hello").await.unwrap();
    });

    assert_eq!(Some("hello"), rx.recv().await);
    assert_eq!(None, rx.recv().await);
}
```

Values are buffered:

```rs
use tokio::sync::mpsc;

#[tokio::main]

async fn main() {
    let (tx, mut rx) = mpsc::channel(100);

    tx.send("hello").await.unwrap();
    tx.send("world").await.unwrap();

    assert_eq!(Some("hello"), rx.recv().await);
    assert_eq!(Some("world"), rx.recv().await);
}
```

#### pub fn [blocking_recv](/docs/api/rust/tauri/about:blank#method.blocking_recv)(&mut self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;T>

Blocking receive to call outside of asynchronous contexts.

This method returns `None` if the channel has been closed and there are no remaining messages in the channel’s buffer. This indicates that no further values can ever be received from this `Receiver`. The channel is closed when all senders have been dropped, or when [`close`](/docs/api/rust/tauri/struct.Receiver#method.close) is called.

If there are no messages in the channel’s buffer, but the channel has not yet been closed, this method will block until a message is sent or the channel is closed.

This method is intended for use cases where you are sending from asynchronous code to synchronous code, and will work even if the sender is not using [`blocking_send`](/docs/api/rust/tauri/struct.Sender#method.blocking_send) to send the message.

Note that if [`close`](/docs/api/rust/tauri/struct.Receiver#method.close) is called, but there are still outstanding [`Permits`](/docs/api/rust/tauri/struct@crate::sync::mpsc::Permit) from before it was closed, the channel is not considered closed by `blocking_recv` until the permits are released.

## Panics

This function panics if called within an asynchronous execution context.

## Examples

```rs
use std::thread;
use tokio::runtime::Runtime;
use tokio::sync::mpsc;

fn main() {
    let (tx, mut rx) = mpsc::channel::<u8>(10);

    let sync_code = thread::spawn(move || {
        assert_eq!(Some(10), rx.blocking_recv());
    });

    Runtime::new()
        .unwrap()
        .block_on(async move {
            let _ = tx.send(10).await;
        });
    sync_code.join().unwrap()
}
```

#### pub fn [close](/docs/api/rust/tauri/about:blank#method.close)(&mut self)

Closes the receiving half of a channel without dropping it.

This prevents any further messages from being sent on the channel while still enabling the receiver to drain messages that are buffered. Any outstanding [`Permit`](/docs/api/rust/tauri/Permit) values will still be able to send messages.

To guarantee that no messages are dropped, after calling `close()`, `recv()` must be called until `None` is returned. If there are outstanding [`Permit`](/docs/api/rust/tauri/Permit) or [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit) values, the `recv` method will not return `None` until those are released.

## Examples

```rs
use tokio::sync::mpsc;

#[tokio::main]

async fn main() {
    let (tx, mut rx) = mpsc::channel(20);

    tokio::spawn(async move {
        let mut i = 0;
        while let Ok(permit) = tx.reserve().await {
            permit.send(i);
            i += 1;
        }
    });

    rx.close();

    while let Some(msg) = rx.recv().await {
        println!("got {}", msg);
    }

    // Channel closed and no messages are lost.
}
```

#### pub fn [poll_recv](/docs/api/rust/tauri/about:blank#method.poll_recv)(&mut self, cx: &mut [Context](https://doc.rust-lang.org/1.54.0/core/task/wake/struct.Context.html "struct core::task::wake::Context")&lt;'\_>) -> [Poll](https://doc.rust-lang.org/1.54.0/core/task/poll/enum.Poll.html "enum core::task::poll::Poll")&lt;[Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;T>>

Polls to receive the next message on this channel.

This method returns:

-   `Poll::Pending` if no messages are available but the channel is not closed.
-   `Poll::Ready(Some(message))` if a message is available.
-   `Poll::Ready(None)` if the channel has been closed and all messages sent before it was closed have been received.

When the method returns `Poll::Pending`, the `Waker` in the provided `Context` is scheduled to receive a wakeup when a message is sent on any receiver, or when the channel is closed. Note that on multiple calls to `poll_recv`, only the `Waker` from the `Context` passed to the most recent call is scheduled to receive a wakeup.

## Trait Implementations

### impl&lt;T> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Receiver](/docs/api/rust/tauri/struct.Receiver "struct tauri::async_runtime::Receiver")&lt;T>

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, fmt: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl&lt;T> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Receiver](/docs/api/rust/tauri/struct.Receiver "struct tauri::async_runtime::Receiver")&lt;T>

## Auto Trait Implementations

### impl&lt;T> \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Receiver](/docs/api/rust/tauri/struct.Receiver "struct tauri::async_runtime::Receiver")&lt;T>

### impl&lt;T> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Receiver](/docs/api/rust/tauri/struct.Receiver "struct tauri::async_runtime::Receiver")&lt;T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

### impl&lt;T> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Receiver](/docs/api/rust/tauri/struct.Receiver "struct tauri::async_runtime::Receiver")&lt;T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

### impl&lt;T> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Receiver](/docs/api/rust/tauri/struct.Receiver "struct tauri::async_runtime::Receiver")&lt;T>

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
  