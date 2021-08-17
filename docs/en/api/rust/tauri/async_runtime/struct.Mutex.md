---
title: Struct tauri::async_runtime::Mutex
sidebar_label: struct.Mutex
custom_edit_url: null
---

  # Struct tauri::async_runtime::Mutex,

```rs
pub struct Mutex<T> where
    T: ?Sized,  { /* fields omitted */ }
```

Expand description

An asynchronous `Mutex`-like type.

This type acts similarly to [`std::sync::Mutex`](https://doc.rust-lang.org/1.54.0/std/sync/mutex/struct.Mutex.html), with two major differences: [`lock`](/docs/api/rust/tauri/struct.Mutex#method.lock) is an async method so does not block, and the lock guard is designed to be held across `.await` points.

## Which kind of mutex should you use?

Contrary to popular belief, it is ok and often preferred to use the ordinary [`Mutex`](https://doc.rust-lang.org/1.54.0/std/sync/mutex/struct.Mutex.html) from the standard library in asynchronous code.

The feature that the async mutex offers over the blocking mutex is the ability to keep it locked across an `.await` point. This makes the async mutex more expensive than the blocking mutex, so the blocking mutex should be preferred in the cases where it can be used. The primary use case for the async mutex is to provide shared mutable access to IO resources such as a database connection. If the value behind the mutex is just data, it’s usually appropriate to use a blocking mutex such as the one in the standard library or [`parking_lot`](https://docs.rs/parking_lot).

Note that, although the compiler will not prevent the std `Mutex` from holding its guard across `.await` points in situations where the task is not movable between threads, this virtually never leads to correct concurrent code in practice as it can easily lead to deadlocks.

A common pattern is to wrap the `Arc<Mutex<...>>` in a struct that provides non-async methods for performing operations on the data within, and only lock the mutex inside these methods. The [mini-redis](https://github.com/tokio-rs/mini-redis/blob/master/src/db.rs) example provides an illustration of this pattern.

Additionally, when you _do_ want shared access to an IO resource, it is often better to spawn a task to manage the IO resource, and to use message passing to communicate with that task.

## Examples:

```rs
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]

async fn main() {
    let data1 = Arc::new(Mutex::new(0));
    let data2 = Arc::clone(&data1);

    tokio::spawn(async move {
        let mut lock = data2.lock().await;
        *lock += 1;
    });

    let mut lock = data1.lock().await;
    *lock += 1;
}
```

```rs
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]

async fn main() {
    let count = Arc::new(Mutex::new(0));

    for i in 0..5 {
        let my_count = Arc::clone(&count);
        tokio::spawn(async move {
            for j in 0..10 {
                let mut lock = my_count.lock().await;
                *lock += 1;
                println!("{} {} {}", i, j, lock);
            }
        });
    }

    loop {
        if *count.lock().await >= 50 {
            break;
        }
    }
    println!("Count hit 50.");
}
```

There are a few things of note here to pay attention to in this example.

1.  The mutex is wrapped in an [`Arc`](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html) to allow it to be shared across threads.
2.  Each spawned task obtains a lock and releases it on every iteration.
3.  Mutation of the data protected by the Mutex is done by de-referencing the obtained lock as seen on lines 12 and 19.

Tokio’s Mutex works in a simple FIFO (first in, first out) style where all calls to [`lock`](/docs/api/rust/tauri/struct.Mutex#method.lock) complete in the order they were performed. In that way the Mutex is “fair” and predictable in how it distributes the locks to inner data. Locks are released and reacquired after every iteration, so basically, each thread goes to the back of the line after it increments the value once. Note that there’s some unpredictability to the timing between when the threads are started, but once they are going they alternate predictably. Finally, since there is only a single valid lock at any given time, there is no possibility of a race condition when mutating the inner value.

Note that in contrast to [`std::sync::Mutex`](https://doc.rust-lang.org/1.54.0/std/sync/mutex/struct.Mutex.html), this implementation does not poison the mutex when a thread holding the [`MutexGuard`](/docs/api/rust/tauri/struct@MutexGuard) panics. In such a case, the mutex will be unlocked. If the panic is caught, this might leave the data protected by the mutex in an inconsistent state.

## Implementations

### impl&lt;T> [Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T> where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),

#### pub fn [new](/docs/api/rust/tauri/about:blank#method.new)(t: T) -> [Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T>

Creates a new lock in an unlocked state ready for use.

## Examples

```rs
use tokio::sync::Mutex;

let lock = Mutex::new(5);
```

#### pub const fn [const_new](/docs/api/rust/tauri/about:blank#method.const_new)(t: T) -> [Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T>

Creates a new lock in an unlocked state ready for use.

## Examples

```rs
use tokio::sync::Mutex;

static LOCK: Mutex<i32> = Mutex::const_new(5);
```

#### pub async fn [lock](/docs/api/rust/tauri/about:blank#method.lock)(&'\_ self) -> MutexGuard&lt;'\_, T>

Locks this mutex, causing the current task to yield until the lock has been acquired. When the lock has been acquired, function returns a \[`MutexGuard`].

## Cancel safety

This method uses a queue to fairly distribute locks in the order they were requested. Cancelling a call to `lock` makes you lose your place in the queue.

## Examples

```rs
use tokio::sync::Mutex;

#[tokio::main]

async fn main() {
    let mutex = Mutex::new(1);

    let mut n = mutex.lock().await;
    *n = 2;
}
```

#### pub async fn [lock_owned](/docs/api/rust/tauri/about:blank#method.lock_owned)(self: [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;[Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T>>) -> OwnedMutexGuard&lt;T>

Locks this mutex, causing the current task to yield until the lock has been acquired. When the lock has been acquired, this returns an \[`OwnedMutexGuard`].

This method is identical to [`Mutex::lock`](/docs/api/rust/tauri/struct.Mutex#method.lock "Mutex::lock"), except that the returned guard references the `Mutex` with an [`Arc`](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html) rather than by borrowing it. Therefore, the `Mutex` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `Mutex` alive by holding an `Arc`.

## Cancel safety

This method uses a queue to fairly distribute locks in the order they were requested. Cancelling a call to `lock_owned` makes you lose your place in the queue.

## Examples

```rs
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]

async fn main() {
    let mutex = Arc::new(Mutex::new(1));

    let mut n = mutex.clone().lock_owned().await;
    *n = 2;
}
```

#### pub fn [try_lock](/docs/api/rust/tauri/about:blank#method.try_lock)(&self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;MutexGuard&lt;'\_, T>, TryLockError>

Attempts to acquire the lock, and returns [`TryLockError`](/docs/api/rust/tauri/TryLockError) if the lock is currently held somewhere else.

## Examples

```rs
use tokio::sync::Mutex;

let mutex = Mutex::new(1);

let n = mutex.try_lock()?;
assert_eq!(*n, 1);
```

#### pub fn [get_mut](/docs/api/rust/tauri/about:blank#method.get_mut)(&mut self) -> [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T

Returns a mutable reference to the underlying data.

Since this call borrows the `Mutex` mutably, no actual locking needs to take place – the mutable borrow statically guarantees no locks exist.

## Examples

```rs
use tokio::sync::Mutex;

fn main() {
    let mut mutex = Mutex::new(1);

    let n = mutex.get_mut();
    *n = 2;
}
```

#### pub fn [try_lock_owned](/docs/api/rust/tauri/about:blank#method.try_lock_owned)( self: [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;[Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T>> ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;OwnedMutexGuard&lt;T>, TryLockError>

Attempts to acquire the lock, and returns [`TryLockError`](/docs/api/rust/tauri/TryLockError) if the lock is currently held somewhere else.

This method is identical to [`Mutex::try_lock`](/docs/api/rust/tauri/struct.Mutex#method.try_lock "Mutex::try_lock"), except that the returned guard references the `Mutex` with an [`Arc`](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html) rather than by borrowing it. Therefore, the `Mutex` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `Mutex` alive by holding an `Arc`.

## Examples

```rs
use tokio::sync::Mutex;
use std::sync::Arc;

let mutex = Arc::new(Mutex::new(1));

let n = mutex.clone().try_lock_owned()?;
assert_eq!(*n, 1);
```

#### pub fn [into_inner](/docs/api/rust/tauri/about:blank#method.into_inner)(self) -> T

Consumes the mutex, returning the underlying data.

## Examples

```rs
use tokio::sync::Mutex;

#[tokio::main]

async fn main() {
    let mutex = Mutex::new(1);

    let n = mutex.into_inner();
    assert_eq!(n, 1);
}
```

## Trait Implementations

### impl&lt;T> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T> where T: [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug"),

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl&lt;T> [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") for [Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T> where T: [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default"),

#### pub fn [default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)() -> [Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T>

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)

### impl&lt;T> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T> for [Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T>

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(s: T) -> [Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T>

Performs the conversion.

### impl&lt;T> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),

### impl&lt;T> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),

## Auto Trait Implementations

### impl&lt;T> \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T>

### impl&lt;T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized")> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T> where T: [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"),

### impl&lt;T> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Mutex](/docs/api/rust/tauri/struct.Mutex "struct tauri::async_runtime::Mutex")&lt;T>

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

### impl&lt;T> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[!](https://doc.rust-lang.org/1.54.0/std/primitive.never.html)> for T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#559-563 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(t: [!](https://doc.rust-lang.org/1.54.0/std/primitive.never.html)) -> T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#560 "goto source code")

Performs the conversion.

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
  