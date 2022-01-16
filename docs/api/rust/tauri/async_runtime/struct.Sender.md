---
title: Struct tauri::async_runtime::Sender
sidebar_label: struct.Sender
custom_edit_url: null
---

  # Struct tauri::async_runtime::Sender,

```rs
pub struct Sender<T> { /* fields omitted */ }
```

Expand description

Send values to the associated `Receiver`.

Instances are created by the [`channel`](/docs/api/rust/tauri/fn.channel) function.

To use the `Sender` in a poll function, you can use the [`PollSender`](https://docs.rs/tokio-util/0.6/tokio_util/sync/struct.PollSender.html) utility.

## Implementations

### impl&lt;T> [Sender](/docs/api/rust/tauri/struct.Sender "struct tauri::async_runtime::Sender")&lt;T>

#### pub async fn [send](/docs/api/rust/tauri/about:blank#method.send)(&'\_ self, value: T) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), SendError&lt;T>>

Sends a value, waiting until there is capacity.

A successful send occurs when it is determined that the other end of the channel has not hung up already. An unsuccessful send would be one where the corresponding receiver has already been closed. Note that a return value of `Err` means that the data will never be received, but a return value of `Ok` does not mean that the data will be received. It is possible for the corresponding receiver to hang up immediately after this function returns `Ok`.

## Errors

If the receive half of the channel is closed, either due to [`close`](/docs/api/rust/tauri/struct.Receiver#method.close) being called or the [`Receiver`](/docs/api/rust/tauri/struct.Receiver) handle dropping, the function returns an error. The error includes the value passed to `send`.

## Cancel safety

If `send` is used as the event in a [`tokio::select!`](/docs/api/rust/tauri/crate::select) statement and some other branch completes first, then it is guaranteed that the message was not sent.

This channel uses a queue to ensure that calls to `send` and `reserve` complete in the order they were requested. Cancelling a call to `send` makes you lose your place in the queue.

## Examples

In the following example, each call to `send` will block until the previously sent value was received.

```rs
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
```

#### pub async fn [closed](/docs/api/rust/tauri/about:blank#method.closed)(&'\_ self)

Completes when the receiver has dropped.

This allows the producers to get notified when interest in the produced values is canceled and immediately stop doing work.

## Cancel safety

This method is cancel safe. Once the channel is closed, it stays closed forever and all future calls to `closed` will return immediately.

## Examples

```rs
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
```

#### pub fn [try_send](/docs/api/rust/tauri/about:blank#method.try_send)(&self, message: T) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), TrySendError&lt;T>>

Attempts to immediately send a message on this `Sender`

This method differs from [`send`](/docs/api/rust/tauri/struct.Sender#method.send) by returning immediately if the channel’s buffer is full or no receiver is waiting to acquire some data. Compared with [`send`](/docs/api/rust/tauri/struct.Sender#method.send), this function has two failure cases instead of one (one for disconnection, one for a full buffer).

## Errors

If the channel capacity has been reached, i.e., the channel has `n` buffered values where `n` is the argument passed to [`channel`](/docs/api/rust/tauri/fn.channel), then an error is returned.

If the receive half of the channel is closed, either due to [`close`](/docs/api/rust/tauri/struct.Receiver#method.close) being called or the [`Receiver`](/docs/api/rust/tauri/struct.Receiver "Receiver") handle dropping, the function returns an error. The error includes the value passed to `send`.

## Examples

```rs
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
```

#### pub async fn [send_timeout](/docs/api/rust/tauri/about:blank#method.send_timeout)( &'\_ self, value: T, timeout: [Duration](https://doc.rust-lang.org/1.54.0/core/time/struct.Duration.html "struct core::time::Duration") ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), SendTimeoutError&lt;T>>

Sends a value, waiting until there is capacity, but only for a limited time.

Shares the same success and error conditions as [`send`](/docs/api/rust/tauri/struct.Sender#method.send), adding one more condition for an unsuccessful send, which is when the provided timeout has elapsed, and there is no capacity available.

## Errors

If the receive half of the channel is closed, either due to [`close`](/docs/api/rust/tauri/struct.Receiver#method.close) being called or the [`Receiver`](/docs/api/rust/tauri/struct.Receiver) having been dropped, the function returns an error. The error includes the value passed to `send`.

## Examples

In the following example, each call to `send_timeout` will block until the previously sent value was received, unless the timeout has elapsed.

```rs
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
```

#### pub fn [blocking_send](/docs/api/rust/tauri/about:blank#method.blocking_send)(&self, value: T) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), SendError&lt;T>>

Blocking send to call outside of asynchronous contexts.

This method is intended for use cases where you are sending from synchronous code to asynchronous code, and will work even if the receiver is not using [`blocking_recv`](/docs/api/rust/tauri/struct.Receiver#method.blocking_recv) to receive the message.

## Panics

This function panics if called within an asynchronous execution context.

## Examples

```rs
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
```

#### pub fn [is_closed](/docs/api/rust/tauri/about:blank#method.is_closed)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)

Checks if the channel has been closed. This happens when the [`Receiver`](/docs/api/rust/tauri/struct.Receiver) is dropped, or when the [`Receiver::close`](/docs/api/rust/tauri/struct.Receiver#method.close) method is called.

```rs
let (tx, rx) = tokio::sync::mpsc::channel::<()>(42);
assert!(!tx.is_closed());

let tx2 = tx.clone();
assert!(!tx2.is_closed());

drop(rx);
assert!(tx.is_closed());
assert!(tx2.is_closed());
```

#### pub async fn [reserve](/docs/api/rust/tauri/about:blank#method.reserve)(&'\_ self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;Permit&lt;'\_, T>, SendError&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>>

Wait for channel capacity. Once capacity to send one message is available, it is reserved for the caller.

If the channel is full, the function waits for the number of unreceived messages to become less than the channel capacity. Capacity to send one message is reserved for the caller. A [`Permit`](/docs/api/rust/tauri/Permit) is returned to track the reserved capacity. The [`send`](/docs/api/rust/tauri/permit::send) function on [`Permit`](/docs/api/rust/tauri/Permit) consumes the reserved capacity.

Dropping [`Permit`](/docs/api/rust/tauri/Permit) without sending a message releases the capacity back to the channel.

## Cancel safety

This channel uses a queue to ensure that calls to `send` and `reserve` complete in the order they were requested. Cancelling a call to `reserve` makes you lose your place in the queue.

## Examples

```rs
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
```

#### pub async fn [reserve_owned](/docs/api/rust/tauri/about:blank#method.reserve_owned)(self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;OwnedPermit&lt;T>, SendError&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>>

Wait for channel capacity, moving the `Sender` and returning an owned permit. Once capacity to send one message is available, it is reserved for the caller.

This moves the sender _by value_, and returns an owned permit that can be used to send a message into the channel. Unlike [`Sender::reserve`](/docs/api/rust/tauri/struct.Sender#method.reserve), this method may be used in cases where the permit must be valid for the `'static` lifetime. `Sender`s may be cloned cheaply (`Sender::clone` is essentially a reference count increment, comparable to [`Arc::clone`](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html#method.clone)), so when multiple [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit)s are needed or the `Sender` cannot be moved, it can be cloned prior to calling `reserve_owned`.

If the channel is full, the function waits for the number of unreceived messages to become less than the channel capacity. Capacity to send one message is reserved for the caller. An [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit) is returned to track the reserved capacity. The [`send`](/docs/api/rust/tauri/ownedpermit::send) function on [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit) consumes the reserved capacity.

Dropping the [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit) without sending a message releases the capacity back to the channel.

## Cancel safety

This channel uses a queue to ensure that calls to `send` and `reserve` complete in the order they were requested. Cancelling a call to `reserve_owned` makes you lose your place in the queue.

## Examples

Sending a message using an [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit):

```rs
use tokio::sync::mpsc;

#[tokio::main]

async fn main() {
    let (tx, mut rx) = mpsc::channel(1);

    // Reserve capacity, moving the sender.
    let permit = tx.reserve_owned().await.unwrap();

    // Send a message, consuming the permit and returning
    // the moved sender.
    let tx = permit.send(123);

    // The value sent on the permit is received.
    assert_eq!(rx.recv().await.unwrap(), 123);

    // The sender can now be used again.
    tx.send(456).await.unwrap();
}
```

When multiple [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit)s are needed, or the sender cannot be moved by value, it can be inexpensively cloned before calling `reserve_owned`:

```rs
use tokio::sync::mpsc;

#[tokio::main]

async fn main() {
    let (tx, mut rx) = mpsc::channel(1);

    // Clone the sender and reserve capacity.
    let permit = tx.clone().reserve_owned().await.unwrap();

    // Trying to send directly on the `tx` will fail due to no
    // available capacity.
    assert!(tx.try_send(123).is_err());

    // Sending on the permit succeeds.
    permit.send(456);

    // The value sent on the permit is received
    assert_eq!(rx.recv().await.unwrap(), 456);
}
```

#### pub fn [try_reserve](/docs/api/rust/tauri/about:blank#method.try_reserve)(&self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;Permit&lt;'\_, T>, TrySendError&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>>

Try to acquire a slot in the channel without waiting for the slot to become available.

If the channel is full this function will return \[`TrySendError`], otherwise if there is a slot available it will return a [`Permit`](/docs/api/rust/tauri/Permit) that will then allow you to [`send`](/docs/api/rust/tauri/permit::send) on the channel with a guaranteed slot. This function is similar to [`reserve`](/docs/api/rust/tauri/struct.Sender#method.reserve) except it does not await for the slot to become available.

Dropping [`Permit`](/docs/api/rust/tauri/Permit) without sending a message releases the capacity back to the channel.

## Examples

```rs
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
```

#### pub fn [try_reserve_owned](/docs/api/rust/tauri/about:blank#method.try_reserve_owned)( self ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;OwnedPermit&lt;T>, TrySendError&lt;[Sender](/docs/api/rust/tauri/struct.Sender "struct tauri::async_runtime::Sender")&lt;T>>>

Try to acquire a slot in the channel without waiting for the slot to become available, returning an owned permit.

This moves the sender _by value_, and returns an owned permit that can be used to send a message into the channel. Unlike [`Sender::try_reserve`](/docs/api/rust/tauri/struct.Sender#method.try_reserve "Sender::try_reserve"), this method may be used in cases where the permit must be valid for the `'static` lifetime. `Sender`s may be cloned cheaply (`Sender::clone` is essentially a reference count increment, comparable to [`Arc::clone`](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html#method.clone)), so when multiple [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit)s are needed or the `Sender` cannot be moved, it can be cloned prior to calling `try_reserve_owned`.

If the channel is full this function will return a \[`TrySendError`]. Since the sender is taken by value, the `TrySendError` returned in this case contains the sender, so that it may be used again. Otherwise, if there is a slot available, this method will return an [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit) that can then be used to [`send`](/docs/api/rust/tauri/ownedpermit::send) on the channel with a guaranteed slot. This function is similar to [`reserve_owned`](/docs/api/rust/tauri/struct.Sender#method.reserve_owned) except it does not await for the slot to become available.

Dropping the [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit) without sending a message releases the capacity back to the channel.

## Examples

```rs
use tokio::sync::mpsc;

#[tokio::main]

async fn main() {
    let (tx, mut rx) = mpsc::channel(1);

    // Reserve capacity
    let permit = tx.clone().try_reserve_owned().unwrap();

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
```

#### pub fn [same_channel](/docs/api/rust/tauri/about:blank#method.same_channel)(&self, other: &[Sender](/docs/api/rust/tauri/struct.Sender "struct tauri::async_runtime::Sender")&lt;T>) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)

Returns `true` if senders belong to the same channel.

## Examples

```rs
let (tx, rx) = tokio::sync::mpsc::channel::<()>(1);
let  tx2 = tx.clone();
assert!(tx.same_channel(&tx2));

let (tx3, rx3) = tokio::sync::mpsc::channel::<()>(1);
assert!(!tx3.same_channel(&tx2));
```

#### pub fn [capacity](/docs/api/rust/tauri/about:blank#method.capacity)(&self) -> [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)

Returns the current capacity of the channel.

The capacity goes down when sending a value by calling [`send`](/docs/api/rust/tauri/struct.Sender#method.send) or by reserving capacity with [`reserve`](/docs/api/rust/tauri/struct.Sender#method.reserve). The capacity goes up when values are received by the [`Receiver`](/docs/api/rust/tauri/struct.Receiver "Receiver").

## Examples

```rs
use tokio::sync::mpsc;

#[tokio::main]

async fn main() {
    let (tx, mut rx) = mpsc::channel::<()>(5);

    assert_eq!(tx.capacity(), 5);

    // Making a reservation drops the capacity by one.
    let permit = tx.reserve().await.unwrap();
    assert_eq!(tx.capacity(), 4);

    // Sending and receiving a value increases the capacity by one.
    permit.send(());
    rx.recv().await.unwrap();
    assert_eq!(tx.capacity(), 5);
}
```

## Trait Implementations

### impl&lt;T> [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") for [Sender](/docs/api/rust/tauri/struct.Sender "struct tauri::async_runtime::Sender")&lt;T>

#### pub fn [clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)(&self) -> [Sender](/docs/api/rust/tauri/struct.Sender "struct tauri::async_runtime::Sender")&lt;T>

Returns a copy of the value. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)

#### fn [clone_from](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)

### impl&lt;T> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Sender](/docs/api/rust/tauri/struct.Sender "struct tauri::async_runtime::Sender")&lt;T>

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, fmt: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

## Auto Trait Implementations

### impl&lt;T> \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Sender](/docs/api/rust/tauri/struct.Sender "struct tauri::async_runtime::Sender")&lt;T>

### impl&lt;T> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Sender](/docs/api/rust/tauri/struct.Sender "struct tauri::async_runtime::Sender")&lt;T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

### impl&lt;T> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Sender](/docs/api/rust/tauri/struct.Sender "struct tauri::async_runtime::Sender")&lt;T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

### impl&lt;T> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Sender](/docs/api/rust/tauri/struct.Sender "struct tauri::async_runtime::Sender")&lt;T>

### impl&lt;T> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Sender](/docs/api/rust/tauri/struct.Sender "struct tauri::async_runtime::Sender")&lt;T>

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
  