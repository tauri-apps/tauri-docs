---
title: "struct.Sender"
---

# Struct [tauri](/docs/api/rust/tauri/../index.html)::​[async_runtime](/docs/api/rust/tauri/index.html)::​[Sender](/docs/api/rust/tauri/)

    pub struct Sender<T> { /* fields omitted */ }

Send values to the associated `Receiver`.

Instances are created by the [`channel`](/docs/api/rust/tauri/../../tauri/async_runtime/fn.channel.html) function.

To use the `Sender` in a poll function, you can use the [`PollSender`](https://docs.rs/tokio-util/0.6/tokio_util/sync/struct.PollSender.html) utility.

## Implementations

### `impl<T> Sender<T>`

#### `pub async fn send(&'_ self, value: T) -> Result<(), SendError<T>>`

Sends a value, waiting until there is capacity.

A successful send occurs when it is determined that the other end of the channel has not hung up already. An unsuccessful send would be one where the corresponding receiver has already been closed. Note that a return value of `Err` means that the data will never be received, but a return value of `Ok` does not mean that the data will be received. It is possible for the corresponding receiver to hang up immediately after this function returns `Ok`.

# [Errors](/docs/api/rust/tauri/about:blank#errors)

If the receive half of the channel is closed, either due to [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html#method.close) being called or the [`Receiver`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html) handle dropping, the function returns an error. The error includes the value passed to `send`.

# [Examples](/docs/api/rust/tauri/about:blank#examples)

In the following example, each call to `send` will block until the previously sent value was received.

    use tokio::sync::mpsc;

    #[tokio::main]
    async fn main() {
        let (tx, mut rx) = mpsc::channel(1);

        tokio::spawn(async move {
            for i in 0..10 {
                if let Err(_) = tx.send(i).await {
                    println!("receiver dropped");
                    return;
                }
            }
        });

        while let Some(i) = rx.recv().await {
            println!("got = {}", i);
        }
    }

#### `pub async fn closed(&'_ self)`

Completes when the receiver has dropped.

This allows the producers to get notified when interest in the produced values is canceled and immediately stop doing work.

# [Examples](/docs/api/rust/tauri/about:blank#examples-1)

    use tokio::sync::mpsc;

    #[tokio::main]
    async fn main() {
        let (tx1, rx) = mpsc::channel::<()>(1);
        let tx2 = tx1.clone();
        let tx3 = tx1.clone();
        let tx4 = tx1.clone();
        let tx5 = tx1.clone();
        tokio::spawn(async move {
            drop(rx);
        });

        futures::join!(
            tx1.closed(),
            tx2.closed(),
            tx3.closed(),
            tx4.closed(),
            tx5.closed()
        );
        println!("Receiver dropped");
    }

#### `pub fn try_send(&self, message: T) -> Result<(), TrySendError<T>>`

Attempts to immediately send a message on this `Sender`

This method differs from [`send`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender.html#method.send) by returning immediately if the channel’s buffer is full or no receiver is waiting to acquire some data. Compared with [`send`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender.html#method.send), this function has two failure cases instead of one (one for disconnection, one for a full buffer).

# [Errors](/docs/api/rust/tauri/about:blank#errors-1)

If the channel capacity has been reached, i.e., the channel has `n` buffered values where `n` is the argument passed to [`channel`](/docs/api/rust/tauri/../../tauri/async_runtime/fn.channel.html), then an error is returned.

If the receive half of the channel is closed, either due to [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html#method.close) being called or the [`Receiver`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html "Receiver") handle dropping, the function returns an error. The error includes the value passed to `send`.

# [Examples](/docs/api/rust/tauri/about:blank#examples-2)

    use tokio::sync::mpsc;

    #[tokio::main]
    async fn main() {
        // Create a channel with buffer size 1
        let (tx1, mut rx) = mpsc::channel(1);
        let tx2 = tx1.clone();

        tokio::spawn(async move {
            tx1.send(1).await.unwrap();
            tx1.send(2).await.unwrap();
            // task waits until the receiver receives a value.
        });

        tokio::spawn(async move {
            // This will return an error and send
            // no message if the buffer is full
            let _ = tx2.try_send(3);
        });

        let mut msg;
        msg = rx.recv().await.unwrap();
        println!("message {} received", msg);

        msg = rx.recv().await.unwrap();
        println!("message {} received", msg);

        // Third message may have never been sent
        match rx.recv().await {
            Some(msg) => println!("message {} received", msg),
            None => println!("the third message was never sent"),
        }
    }

#### `pub async fn send_timeout( &'_ self, value: T, timeout: Duration ) -> Result<(), SendTimeoutError<T>>`

Sends a value, waiting until there is capacity, but only for a limited time.

Shares the same success and error conditions as [`send`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender.html#method.send), adding one more condition for an unsuccessful send, which is when the provided timeout has elapsed, and there is no capacity available.

# [Errors](/docs/api/rust/tauri/about:blank#errors-2)

If the receive half of the channel is closed, either due to [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html#method.close) being called or the [`Receiver`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html) having been dropped, the function returns an error. The error includes the value passed to `send`.

# [Examples](/docs/api/rust/tauri/about:blank#examples-3)

In the following example, each call to `send_timeout` will block until the previously sent value was received, unless the timeout has elapsed.

    use tokio::sync::mpsc;
    use tokio::time::{sleep, Duration};

    #[tokio::main]
    async fn main() {
        let (tx, mut rx) = mpsc::channel(1);

        tokio::spawn(async move {
            for i in 0..10 {
                if let Err(e) = tx.send_timeout(i, Duration::from_millis(100)).await {
                    println!("send error: #{:?}", e);
                    return;
                }
            }
        });

        while let Some(i) = rx.recv().await {
            println!("got = {}", i);
            sleep(Duration::from_millis(200)).await;
        }
    }

#### `pub fn blocking_send(&self, value: T) -> Result<(), SendError<T>>`

Blocking send to call outside of asynchronous contexts.

This method is intended for use cases where you are sending from synchronous code to asynchronous code, and will work even if the receiver is not using [`blocking_recv`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html#method.blocking_recv) to receive the message.

# [Panics](/docs/api/rust/tauri/about:blank#panics)

This function panics if called within an asynchronous execution context.

# [Examples](/docs/api/rust/tauri/about:blank#examples-4)

    use std::thread;
    use tokio::runtime::Runtime;
    use tokio::sync::mpsc;

    fn main() {
        let (tx, mut rx) = mpsc::channel::<u8>(1);

        let sync_code = thread::spawn(move || {
            tx.blocking_send(10).unwrap();
        });

        Runtime::new().unwrap().block_on(async move {
            assert_eq!(Some(10), rx.recv().await);
        });
        sync_code.join().unwrap()
    }

#### `pub fn is_closed(&self) -> bool`

Checks if the channel has been closed. This happens when the [`Receiver`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html) is dropped, or when the [`Receiver::close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html#method.close) method is called.

    let (tx, rx) = tokio::sync::mpsc::channel::<()>(42);
    assert!(!tx.is_closed());

    let tx2 = tx.clone();
    assert!(!tx2.is_closed());

    drop(rx);
    assert!(tx.is_closed());
    assert!(tx2.is_closed());

#### `pub async fn reserve(&'_ self) -> Result<Permit<'_, T>, SendError<()>>`

Wait for channel capacity. Once capacity to send one message is available, it is reserved for the caller.

If the channel is full, the function waits for the number of unreceived messages to become less than the channel capacity. Capacity to send one message is reserved for the caller. A [`Permit`](/docs/api/rust/tauri/Permit) is returned to track the reserved capacity. The [`send`](/docs/api/rust/tauri/permit::send) function on [`Permit`](/docs/api/rust/tauri/Permit) consumes the reserved capacity.

Dropping [`Permit`](/docs/api/rust/tauri/Permit) without sending a message releases the capacity back to the channel.

# [Examples](/docs/api/rust/tauri/about:blank#examples-5)

    use tokio::sync::mpsc;

    #[tokio::main]
    async fn main() {
        let (tx, mut rx) = mpsc::channel(1);

        // Reserve capacity
        let permit = tx.reserve().await.unwrap();

        // Trying to send directly on the `tx` will fail due to no
        // available capacity.
        assert!(tx.try_send(123).is_err());

        // Sending on the permit succeeds
        permit.send(456);

        // The value sent on the permit is received
        assert_eq!(rx.recv().await.unwrap(), 456);
    }

#### `pub fn try_reserve(&self) -> Result<Permit<'_, T>, TrySendError<()>>`

Try to acquire a slot in the channel without waiting for the slot to become available.

If the channel is full this function will return \[`TrySendError`], otherwise if there is a slot available it will return a [`Permit`](/docs/api/rust/tauri/Permit) that will then allow you to [`send`](/docs/api/rust/tauri/permit::send) on the channel with a guaranteed slot. This function is similar to [`reserve`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender.html#method.reserve) except it does not await for the slot to become available.

Dropping [`Permit`](/docs/api/rust/tauri/Permit) without sending a message releases the capacity back to the channel.

# [Examples](/docs/api/rust/tauri/about:blank#examples-6)

    use tokio::sync::mpsc;

    #[tokio::main]
    async fn main() {
        let (tx, mut rx) = mpsc::channel(1);

        // Reserve capacity
        let permit = tx.try_reserve().unwrap();

        // Trying to send directly on the `tx` will fail due to no
        // available capacity.
        assert!(tx.try_send(123).is_err());

        // Trying to reserve an additional slot on the `tx` will
        // fail because there is no capacity.
        assert!(tx.try_reserve().is_err());

        // Sending on the permit succeeds
        permit.send(456);

        // The value sent on the permit is received
        assert_eq!(rx.recv().await.unwrap(), 456);

    }

#### `pub fn same_channel(&self, other: &Sender<T>) -> bool`

Returns `true` if senders belong to the same channel.

# [Examples](/docs/api/rust/tauri/about:blank#examples-7)

    let (tx, rx) = tokio::sync::mpsc::channel::<()>(1);
    let  tx2 = tx.clone();
    assert!(tx.same_channel(&tx2));

    let (tx3, rx3) = tokio::sync::mpsc::channel::<()>(1);
    assert!(!tx3.same_channel(&tx2));

#### `pub fn capacity(&self) -> usize`

Returns the current capacity of the channel.

The capacity goes down when sending a value by calling [`send`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender.html#method.send) or by reserving capacity with [`reserve`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender.html#method.reserve). The capacity goes up when values are received by the [`Receiver`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver.html "Receiver").

# [Examples](/docs/api/rust/tauri/about:blank#examples-8)

    use tokio::sync::mpsc;

    #[tokio::main]
    async fn main() {
        let (tx, mut rx) = mpsc::channel::<()>(5);

        assert_eq!(tx.capacity(), 5);

        // Making a reservation drops the capacity by one.
        let permit = tx.reserve().await.unwrap();
        assert_eq!(tx.capacity(), 4);

        // Sending and receiving a value increases the caapcity by one.
        permit.send(());
        rx.recv().await.unwrap();
        assert_eq!(tx.capacity(), 5);
    }

## Trait Implementations

### `impl<T> Clone for Sender<T>`

#### `pub fn clone(&self) -> Sender<T>`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl<T> Debug for Sender<T>`

#### `pub fn fmt(&self, fmt: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

## Auto Trait Implementations

### `impl<T> !RefUnwindSafe for Sender<T>`

### `impl<T> Send for Sender<T> where T: Send,`

### `impl<T> Sync for Sender<T> where T: Send,`

### `impl<T> Unpin for Sender<T>`

### `impl<T> !UnwindSafe for Sender<T>`

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

Instruments this type with the provided `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.26/tracing/instrument/trait.Instrument.html#method.instrument)

#### `pub fn in_current_span(self) -> Instrumented<Self>`

Instruments this type with the [current](/docs/api/rust/tauri/../struct.Span.html#method.current) `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.26/tracing/instrument/trait.Instrument.html#method.in_current_span)

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

### `impl<T> ToOwned for T where T: Clone,`

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `pub fn to_owned(&self) -> T`

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### `pub fn clone_into(&self, target: &mutT)`

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

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
