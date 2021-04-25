---
title: "struct.Receiver"
---

# Struct [tauri](/docs/api/rust/tauri/../index.html)::​[async_runtime](/docs/api/rust/tauri/index.html)::​[Receiver](/docs/api/rust/tauri/)

    pub struct Receiver<T> { /* fields omitted */ }

Receive values from the associated `Sender`.

Instances are created by the [`channel`](/docs/api/rust/tauri/../../tauri/async_runtime/fn.channel.html) function.

This receiver can be turned into a `Stream` using [`ReceiverStream`](https://docs.rs/tokio-stream/0.1/tokio_stream/wrappers/struct.ReceiverStream.html).

## Implementations

### `impl<T> Receiver<T>`

#### `pub async fn recv(&'_ mut self) -> Option<T>`

Receives the next value for this receiver.

This method returns `None` if the channel has been closed and there are no remaining messages in the channel's buffer. This indicates that no further values can ever be received from this `Receiver`. The channel is closed when all senders have been dropped, or when [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html#method.close) is called.

If there are no messages in the channel's buffer, but the channel has not yet been closed, this method will sleep until a message is sent or the channel is closed.

Note that if [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html#method.close) is called, but there are still outstanding [`Permits`](/docs/api/rust/tauri/struct@crate::sync::mpsc::Permit) from before it was closed, the channel is not considered closed by `recv` until the permits are released.

# [Examples](/docs/api/rust/tauri/about:blank#examples)

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

Values are buffered:

    use tokio::sync::mpsc;

    #[tokio::main]
    async fn main() {
        let (tx, mut rx) = mpsc::channel(100);

        tx.send("hello").await.unwrap();
        tx.send("world").await.unwrap();

        assert_eq!(Some("hello"), rx.recv().await);
        assert_eq!(Some("world"), rx.recv().await);
    }

#### `pub fn blocking_recv(&mut self) -> Option<T>`

Blocking receive to call outside of asynchronous contexts.

This method returns `None` if the channel has been closed and there are no remaining messages in the channel's buffer. This indicates that no further values can ever be received from this `Receiver`. The channel is closed when all senders have been dropped, or when [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html#method.close) is called.

If there are no messages in the channel's buffer, but the channel has not yet been closed, this method will block until a message is sent or the channel is closed.

This method is intended for use cases where you are sending from asynchronous code to synchronous code, and will work even if the sender is not using [`blocking_send`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender.html#method.blocking_send) to send the message.

Note that if [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html#method.close) is called, but there are still outstanding [`Permits`](/docs/api/rust/tauri/struct@crate::sync::mpsc::Permit) from before it was closed, the channel is not considered closed by `blocking_recv` until the permits are released.

# [Panics](/docs/api/rust/tauri/about:blank#panics)

This function panics if called within an asynchronous execution context.

# [Examples](/docs/api/rust/tauri/about:blank#examples-1)

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

#### `pub fn close(&mut self)`

Closes the receiving half of a channel without dropping it.

This prevents any further messages from being sent on the channel while still enabling the receiver to drain messages that are buffered. Any outstanding [`Permit`](/docs/api/rust/tauri/Permit) values will still be able to send messages.

To guarantee that no messages are dropped, after calling `close()`, `recv()` must be called until `None` is returned. If there are outstanding [`Permit`](/docs/api/rust/tauri/Permit) values, the `recv` method will not return `None` until those are released.

# [Examples](/docs/api/rust/tauri/about:blank#examples-2)

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

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `pub fn type_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `pub fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `pub fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> From<T> for T`

#### `pub fn from(t: T) -> T`

Performs the conversion.

### `impl<T> Instrument for T`

#### `pub fn instrument(self, span: Span) -> Instrumented<Self>`

Instruments this type with the provided `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.25/tracing/instrument/trait.Instrument.html#method.instrument)

#### `pub fn in_current_span(self) -> Instrumented<Self>`

Instruments this type with the [current](/docs/api/rust/tauri/../struct.Span.html#method.current) `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.25/tracing/instrument/trait.Instrument.html#method.in_current_span)

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `pub fn into(self) -> U`

Performs the conversion.

### `impl<T> Pointable for T`

#### `pub const ALIGN: usize`

The alignment of pointer.

#### `type Init = T`

The type for initializers.

#### `pub unsafe fn init(init: <T as Pointable>::Init) -> usize`

Initializes a with the given initializer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.init)

#### `pub unsafe fn deref<'a>(ptr: usize) -> &'aT`

Dereferences the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.deref)

#### `pub unsafe fn deref_mut<'a>(ptr: usize) -> &'a mutT`

Mutably dereferences the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.deref_mut)

#### `pub unsafe fn drop(ptr: usize)`

Drops the object pointed to by the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.drop)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
