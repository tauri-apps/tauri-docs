---
title: Struct tauri::async_runtime::Sender
sidebar_label: struct.Sender
custom_edit_url: null
---

# Struct tauri::async_runtime::Sender,\[−],\[−],−

```rs
pub struct Sender<T> { /* fields omitted */ }
```

Send values to the associated `Receiver`.

Instances are created by the [`channel`](/docs/api/rust/tauri/../../tauri/async_runtime/fn.channel) function.

To use the `Sender` in a poll function, you can use the [`PollSender`](https://docs.rs/tokio-util/0.6/tokio_util/sync/struct.PollSender.html) utility.

## Implementations

### `impl<T> Sender<T>`

#### `pub async fn send(&'_ self, value: T) -> Result<(), SendError<T>>`

Sends a value, waiting until there is capacity.

A successful send occurs when it is determined that the other end of the channel has not hung up already. An unsuccessful send would be one where the corresponding receiver has already been closed. Note that a return value of `Err` means that the data will never be received, but a return value of `Ok` does not mean that the data will be received. It is possible for the corresponding receiver to hang up immediately after this function returns `Ok`.

# [Errors](/docs/api/rust/tauri/about:blank#errors)

If the receive half of the channel is closed, either due to [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver#method.close) being called or the [`Receiver`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver) handle dropping, the function returns an error. The error includes the value passed to `send`.

# [Examples](/docs/api/rust/tauri/about:blank#examples)

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

#### `pub async fn closed(&'_ self)`

Completes when the receiver has dropped.

This allows the producers to get notified when interest in the produced values is canceled and immediately stop doing work.

# [Examples](/docs/api/rust/tauri/about:blank#examples-1)

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

#### `pub fn try_send(&self, message: T) -> Result<(), TrySendError<T>>`

Attempts to immediately send a message on this `Sender`

This method differs from [`send`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender#method.send) by returning immediately if the channel’s buffer is full or no receiver is waiting to acquire some data. Compared with [`send`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender#method.send), this function has two failure cases instead of one (one for disconnection, one for a full buffer).

# [Errors](/docs/api/rust/tauri/about:blank#errors-1)

If the channel capacity has been reached, i.e., the channel has `n` buffered values where `n` is the argument passed to [`channel`](/docs/api/rust/tauri/../../tauri/async_runtime/fn.channel), then an error is returned.

If the receive half of the channel is closed, either due to [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver#method.close) being called or the [`Receiver`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver "Receiver") handle dropping, the function returns an error. The error includes the value passed to `send`.

# [Examples](/docs/api/rust/tauri/about:blank#examples-2)

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

#### `pub async fn send_timeout( &'_ self, value: T, timeout: Duration ) -> Result<(), SendTimeoutError<T>>`

Sends a value, waiting until there is capacity, but only for a limited time.

Shares the same success and error conditions as [`send`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender#method.send), adding one more condition for an unsuccessful send, which is when the provided timeout has elapsed, and there is no capacity available.

# [Errors](/docs/api/rust/tauri/about:blank#errors-2)

If the receive half of the channel is closed, either due to [`close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver#method.close) being called or the [`Receiver`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver) having been dropped, the function returns an error. The error includes the value passed to `send`.

# [Examples](/docs/api/rust/tauri/about:blank#examples-3)

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

#### `pub fn blocking_send(&self, value: T) -> Result<(), SendError<T>>`

Blocking send to call outside of asynchronous contexts.

This method is intended for use cases where you are sending from synchronous code to asynchronous code, and will work even if the receiver is not using [`blocking_recv`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver#method.blocking_recv) to receive the message.

# [Panics](/docs/api/rust/tauri/about:blank#panics)

This function panics if called within an asynchronous execution context.

# [Examples](/docs/api/rust/tauri/about:blank#examples-4)

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

#### `pub fn is_closed(&self) -> bool`

Checks if the channel has been closed. This happens when the [`Receiver`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver) is dropped, or when the [`Receiver::close`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver#method.close) method is called.

```rs
let (tx, rx) = tokio::sync::mpsc::channel::<()>(42);
assert!(!tx.is_closed());

let tx2 = tx.clone();
assert!(!tx2.is_closed());

drop(rx);
assert!(tx.is_closed());
assert!(tx2.is_closed());
```

#### `pub async fn reserve(&'_ self) -> Result<Permit<'_, T>, SendError<()>>`

Wait for channel capacity. Once capacity to send one message is available, it is reserved for the caller.

If the channel is full, the function waits for the number of unreceived messages to become less than the channel capacity. Capacity to send one message is reserved for the caller. A [`Permit`](/docs/api/rust/tauri/Permit) is returned to track the reserved capacity. The [`send`](/docs/api/rust/tauri/permit::send) function on [`Permit`](/docs/api/rust/tauri/Permit) consumes the reserved capacity.

Dropping [`Permit`](/docs/api/rust/tauri/Permit) without sending a message releases the capacity back to the channel.

# [Examples](/docs/api/rust/tauri/about:blank#examples-5)

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

#### `pub async fn reserve_owned(self) -> Result<OwnedPermit<T>, SendError<()>>`

Wait for channel capacity, moving the `Sender` and returning an owned permit. Once capacity to send one message is available, it is reserved for the caller.

This moves the sender _by value_, and returns an owned permit that can be used to send a message into the channel. Unlike [`Sender::reserve`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender#method.reserve), this method may be used in cases where the permit must be valid for the `'static` lifetime. `Sender`s may be cloned cheaply (`Sender::clone` is essentially a reference count increment, comparable to [`Arc::clone`](https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html#method.clone)), so when multiple [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit)s are needed or the `Sender` cannot be moved, it can be cloned prior to calling `reserve_owned`.

If the channel is full, the function waits for the number of unreceived messages to become less than the channel capacity. Capacity to send one message is reserved for the caller. An [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit) is returned to track the reserved capacity. The [`send`](/docs/api/rust/tauri/ownedpermit::send) function on [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit) consumes the reserved capacity.

Dropping the [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit) without sending a message releases the capacity back to the channel.

# [Examples](/docs/api/rust/tauri/about:blank#examples-6)

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

#### `pub fn try_reserve(&self) -> Result<Permit<'_, T>, TrySendError<()>>`

Try to acquire a slot in the channel without waiting for the slot to become available.

If the channel is full this function will return \[`TrySendError`], otherwise if there is a slot available it will return a [`Permit`](/docs/api/rust/tauri/Permit) that will then allow you to [`send`](/docs/api/rust/tauri/permit::send) on the channel with a guaranteed slot. This function is similar to [`reserve`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender#method.reserve) except it does not await for the slot to become available.

Dropping [`Permit`](/docs/api/rust/tauri/Permit) without sending a message releases the capacity back to the channel.

# [Examples](/docs/api/rust/tauri/about:blank#examples-7)

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

#### `pub fn try_reserve_owned( self ) -> Result<OwnedPermit<T>, TrySendError<Sender<T>>>`

Try to acquire a slot in the channel without waiting for the slot to become available, returning an owned permit.

This moves the sender _by value_, and returns an owned permit that can be used to send a message into the channel. Unlike [`Sender::try_reserve`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender#method.try_reserve "Sender::try_reserve"), this method may be used in cases where the permit must be valid for the `'static` lifetime. `Sender`s may be cloned cheaply (`Sender::clone` is essentially a reference count increment, comparable to [`Arc::clone`](https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html#method.clone)), so when multiple [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit)s are needed or the `Sender` cannot be moved, it can be cloned prior to calling `try_reserve_owned`.

If the channel is full this function will return a \[`TrySendError`]. Since the sender is taken by value, the `TrySendError` returned in this case contains the sender, so that it may be used again. Otherwise, if there is a slot available, this method will return an [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit) that can then be used to [`send`](/docs/api/rust/tauri/ownedpermit::send) on the channel with a guaranteed slot. This function is similar to [`reserve_owned`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender#method.reserve_owned) except it does not await for the slot to become available.

Dropping the [`OwnedPermit`](/docs/api/rust/tauri/OwnedPermit) without sending a message releases the capacity back to the channel.

# [Examples](/docs/api/rust/tauri/about:blank#examples-8)

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

#### `pub fn same_channel(&self, other: &Sender<T>) -> bool`

Returns `true` if senders belong to the same channel.

# [Examples](/docs/api/rust/tauri/about:blank#examples-9)

```rs
let (tx, rx) = tokio::sync::mpsc::channel::<()>(1);
let  tx2 = tx.clone();
assert!(tx.same_channel(&tx2));

let (tx3, rx3) = tokio::sync::mpsc::channel::<()>(1);
assert!(!tx3.same_channel(&tx2));
```

#### `pub fn capacity(&self) -> usize`

Returns the current capacity of the channel.

The capacity goes down when sending a value by calling [`send`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender#method.send) or by reserving capacity with [`reserve`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Sender#method.reserve). The capacity goes up when values are received by the [`Receiver`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Receiver "Receiver").

# [Examples](/docs/api/rust/tauri/about:blank#examples-10)

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

### `impl<T> Clone for Sender<T>`

#### `pub fn clone(&self) -> Sender<T>`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `clone_from`

```rs
pub fn clone_from(&mut self, source: &Self)
```

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

_Defined in: [clone.rs:130](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/clone.rs#L130)_

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

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)_

### `ToOwned`

```rs
impl<T> ToOwned for T where
    T: Clone, 
```

_Defined in: [borrow.rs:81-93](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L81-93)_

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `to_owned`

```rs
pub fn to_owned(&self) -> T
```

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

_Defined in: [borrow.rs:86](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L86)_

#### `clone_into`

```rs
pub fn clone_into(&self, target: &mut T)
```

_Defined in: [borrow.rs:90](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L90)_

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
