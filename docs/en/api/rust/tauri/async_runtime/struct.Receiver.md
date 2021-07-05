---
title: Struct tauri::async_runtime::Receiver
sidebar_label: struct.Receiver
custom_edit_url: null
---

# Struct tauri::async_runtime::Receiver,\[−],\[−],−

```rs
pub struct Receiver<T> { /* fields omitted */ }
```

Receive values from the associated `Sender`.

Instances are created by the [`channel`](/docs/api/rust/tauri/../../tauri/async_runtime/fn.channel) function.

This receiver can be turned into a `Stream` using [`ReceiverStream`](https://docs.rs/tokio-stream/0.1/tokio_stream/wrappers/struct.ReceiverStream.html).

## Implementations

### `impl<T> Receiver<T>`

#### `pub async fn recv(&'_ mut self) -> Option<T>`

Receives the next value for this receiver.

This method returns `None` if the channel has been closed and there are no remaining messages in the channel’s buffer. This indicates that no further values can ever be received from this `Receiver`. The channel is closed when all senders have been dropped, or when [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver#method.close) is called.

If there are no messages in the channel’s buffer, but the channel has not yet been closed, this method will sleep until a message is sent or the channel is closed. Note that if [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver#method.close) is called, but there are still outstanding [`Permits`](/docs/api/rust/tauri/struct@crate::sync::mpsc::Permit) from before it was closed, the channel is not considered closed by `recv` until the permits are released.

# [Cancel safety](/docs/api/rust/tauri/about:blank#cancel-safety)

This method is cancel safe. If `recv` is used as the event in a [`tokio::select!`](/docs/api/rust/tauri/crate::select) statement and some other branch completes first, it is guaranteed that no messages were received on this channel.

# [Examples](/docs/api/rust/tauri/about:blank#examples)

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

#### `pub fn blocking_recv(&mut self) -> Option<T>`

Blocking receive to call outside of asynchronous contexts.

This method returns `None` if the channel has been closed and there are no remaining messages in the channel’s buffer. This indicates that no further values can ever be received from this `Receiver`. The channel is closed when all senders have been dropped, or when [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver#method.close) is called.

If there are no messages in the channel’s buffer, but the channel has not yet been closed, this method will block until a message is sent or the channel is closed.

This method is intended for use cases where you are sending from asynchronous code to synchronous code, and will work even if the sender is not using [`blocking_send`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender#method.blocking_send) to send the message.

Note that if [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver#method.close) is called, but there are still outstanding [`Permits`](/docs/api/rust/tauri/struct@crate::sync::mpsc::Permit) from before it was closed, the channel is not considered closed by `blocking_recv` until the permits are released.

# [Panics](/docs/api/rust/tauri/about:blank#panics)

This function panics if called within an asynchronous execution context.

# [Examples](/docs/api/rust/tauri/about:blank#examples-1)

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

#### `pub fn close(&mut self)`

Closes the receiving half of a channel without dropping it.

This prevents any further messages from being sent on the channel while still enabling the receiver to drain messages that are buffered. Any outstanding [`Permit`](/docs/api/rust/tauri/Permit) values will still be able to send messages.

To guarantee that no messages are dropped, after calling `close()`, `recv()` must be called until `None` is returned. If there are outstanding [`Permit`](/docs/api/rust/tauri/Permit) or [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit) values, the `recv` method will not return `None` until those are released.

# [Examples](/docs/api/rust/tauri/about:blank#examples-2)

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

#### `pub fn poll_recv(&mut self, cx: &mut Context<'_>) -> Poll<Option<T>>`

Polls to receive the next message on this channel.

This method returns:

-   `Poll::Pending` if no messages are available but the channel is not closed.
-   `Poll::Ready(Some(message))` if a message is available.
-   `Poll::Ready(None)` if the channel has been closed and all messages sent before it was closed have been received.

When the method returns `Poll::Pending`, the `Waker` in the provided `Context` is scheduled to receive a wakeup when a message is sent on any receiver, or when the channel is closed. Note that on multiple calls to `poll_recv`, only the `Waker` from the `Context` passed to the most recent call is scheduled to receive a wakeup.

## Trait Implementations

### `impl<T> Debug for Receiver<T>`

#### `pub fn fmt(&self, fmt: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<T> Unpin for Receiver<T>`

## Auto Trait Implementations

### `impl<T> !RefUnwindSafe for Receiver<T>`

### `impl<T> Send for Receiver<T> where T: Send,`

### `impl<T> Sync for Receiver<T> where T: Send,`

### `impl<T> !UnwindSafe for Receiver<T>`

## Blanket Implementations

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://doc.rust-lang.org/nightly/src/core/any.rs.html#131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://doc.rust-lang.org/nightly/src/core/any.rs.html#132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#217)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#537)_

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
