---
title: Struct tauri::async_runtime::RwLock
sidebar_label: struct.RwLock
custom_edit_url: null
---

  # Struct tauri::async_runtime::RwLock,

```rs
pub struct RwLock<T> where
    T: ?Sized,  { /* fields omitted */ }
```

Expand description

An asynchronous reader-writer lock.

This type of lock allows a number of readers or at most one writer at any point in time. The write portion of this lock typically allows modification of the underlying data (exclusive access) and the read portion of this lock typically allows for read-only access (shared access).

In comparison, a [`Mutex`](/docs/api/rust/tauri/struct.Mutex) does not distinguish between readers or writers that acquire the lock, therefore causing any tasks waiting for the lock to become available to yield. An `RwLock` will allow any number of readers to acquire the lock as long as a writer is not holding the lock.

The priority policy of Tokio’s read-write lock is _fair_ (or [_write-preferring_](https://en.wikipedia.org/wiki/Readers%E2%80%93writer_lock#Priority_policies)), in order to ensure that readers cannot starve writers. Fairness is ensured using a first-in, first-out queue for the tasks awaiting the lock; if a task that wishes to acquire the write lock is at the head of the queue, read locks will not be given out until the write lock has been released. This is in contrast to the Rust standard library’s `std::sync::RwLock`, where the priority policy is dependent on the operating system’s implementation.

The type parameter `T` represents the data that this lock protects. It is required that `T` satisfies [`Send`](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html) to be shared across threads. The RAII guards returned from the locking methods implement [`Deref`](https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html) (and [`DerefMut`](https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.DerefMut.html) for the `write` methods) to allow access to the content of the lock.

## Examples

```rs
use tokio::sync::RwLock;

#[tokio::main]

async fn main() {
    let lock = RwLock::new(5);

    // many reader locks can be held at once
    {
        let r1 = lock.read().await;
        let r2 = lock.read().await;
        assert_eq!(*r1, 5);
        assert_eq!(*r2, 5);
    } // read locks are dropped at this point

    // only one write lock may be held, however
    {
        let mut w = lock.write().await;
        *w += 1;
        assert_eq!(*w, 6);
    } // write lock is dropped here
}
```

## Implementations

### impl&lt;T> [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T> where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),

#### pub fn [new](/docs/api/rust/tauri/about:blank#method.new)(value: T) -> [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T>

Creates a new instance of an `RwLock<T>` which is unlocked.

## Examples

```rs
use tokio::sync::RwLock;

let lock = RwLock::new(5);
```

#### pub fn [with_max_readers](/docs/api/rust/tauri/about:blank#method.with_max_readers)(value: T, max_reads: [u32](https://doc.rust-lang.org/1.54.0/std/primitive.u32.html)) -> [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T>

Creates a new instance of an `RwLock<T>` which is unlocked and allows a maximum of `max_reads` concurrent readers.

## Examples

```rs
use tokio::sync::RwLock;

let lock = RwLock::with_max_readers(5, 1024);
```

## Panics

Panics if `max_reads` is more than `u32::MAX >> 3`.

#### pub const fn [const_new](/docs/api/rust/tauri/about:blank#method.const_new)(value: T) -> [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T>

Creates a new instance of an `RwLock<T>` which is unlocked.

## Examples

```rs
use tokio::sync::RwLock;

static LOCK: RwLock<i32> = RwLock::const_new(5);
```

#### pub const fn [const_with_max_readers](/docs/api/rust/tauri/about:blank#method.const_with_max_readers)(value: T, max_reads: [u32](https://doc.rust-lang.org/1.54.0/std/primitive.u32.html)) -> [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T>

Creates a new instance of an `RwLock<T>` which is unlocked and allows a maximum of `max_reads` concurrent readers.

## Examples

```rs
use tokio::sync::RwLock;

static LOCK: RwLock<i32> = RwLock::const_with_max_readers(5, 1024);
```

#### pub async fn [read](/docs/api/rust/tauri/about:blank#method.read)(&'\_ self) -> RwLockReadGuard&lt;'\_, T>

Locks this `RwLock` with shared read access, causing the current task to yield until the lock has been acquired.

The calling task will yield until there are no writers which hold the lock. There may be other readers inside the lock when the task resumes.

Note that under the priority policy of [`RwLock`](/docs/api/rust/tauri/struct.RwLock "RwLock"), read locks are not granted until prior write locks, to prevent starvation. Therefore deadlock may occur if a read lock is held by the current task, a write lock attempt is made, and then a subsequent read lock attempt is made by the current task.

Returns an RAII guard which will drop this read access of the `RwLock` when dropped.

## Cancel safety

This method uses a queue to fairly distribute locks in the order they were requested. Cancelling a call to `read` makes you lose your place in the queue.

## Examples

```rs
use std::sync::Arc;
use tokio::sync::RwLock;

#[tokio::main]

async fn main() {
    let lock = Arc::new(RwLock::new(1));
    let c_lock = lock.clone();

    let n = lock.read().await;
    assert_eq!(*n, 1);

    tokio::spawn(async move {
        // While main has an active read lock, we acquire one too.
        let r = c_lock.read().await;
        assert_eq!(*r, 1);
    }).await.expect("The spawned task has panicked");

    // Drop the guard after the spawned task finishes.
    drop(n);
}
```

#### pub async fn [read_owned](/docs/api/rust/tauri/about:blank#method.read_owned)(self: [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;[RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T>>) -> OwnedRwLockReadGuard&lt;T, T>

Locks this `RwLock` with shared read access, causing the current task to yield until the lock has been acquired.

The calling task will yield until there are no writers which hold the lock. There may be other readers inside the lock when the task resumes.

This method is identical to [`RwLock::read`](/docs/api/rust/tauri/struct.RwLock#method.read "RwLock::read"), except that the returned guard references the `RwLock` with an [`Arc`](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "Arc") rather than by borrowing it. Therefore, the `RwLock` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `RwLock` alive by holding an `Arc`.

Note that under the priority policy of [`RwLock`](/docs/api/rust/tauri/struct.RwLock "RwLock"), read locks are not granted until prior write locks, to prevent starvation. Therefore deadlock may occur if a read lock is held by the current task, a write lock attempt is made, and then a subsequent read lock attempt is made by the current task.

Returns an RAII guard which will drop this read access of the `RwLock` when dropped.

## Cancel safety

This method uses a queue to fairly distribute locks in the order they were requested. Cancelling a call to `read_owned` makes you lose your place in the queue.

## Examples

```rs
use std::sync::Arc;
use tokio::sync::RwLock;

#[tokio::main]

async fn main() {
    let lock = Arc::new(RwLock::new(1));
    let c_lock = lock.clone();

    let n = lock.read_owned().await;
    assert_eq!(*n, 1);

    tokio::spawn(async move {
        // While main has an active read lock, we acquire one too.
        let r = c_lock.read_owned().await;
        assert_eq!(*r, 1);
    }).await.expect("The spawned task has panicked");

    // Drop the guard after the spawned task finishes.
    drop(n);
}
```

#### pub fn [try_read](/docs/api/rust/tauri/about:blank#method.try_read)(&self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;RwLockReadGuard&lt;'\_, T>, TryLockError>

Attempts to acquire this `RwLock` with shared read access.

If the access couldn’t be acquired immediately, returns [`TryLockError`](/docs/api/rust/tauri/TryLockError). Otherwise, an RAII guard is returned which will release read access when dropped.

## Examples

```rs
use std::sync::Arc;
use tokio::sync::RwLock;

#[tokio::main]

async fn main() {
    let lock = Arc::new(RwLock::new(1));
    let c_lock = lock.clone();

    let v = lock.try_read().unwrap();
    assert_eq!(*v, 1);

    tokio::spawn(async move {
        // While main has an active read lock, we acquire one too.
        let n = c_lock.read().await;
        assert_eq!(*n, 1);
    }).await.expect("The spawned task has panicked");

    // Drop the guard when spawned task finishes.
    drop(v);
}
```

#### pub fn [try_read_owned](/docs/api/rust/tauri/about:blank#method.try_read_owned)( self: [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;[RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T>> ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;OwnedRwLockReadGuard&lt;T, T>, TryLockError>

Attempts to acquire this `RwLock` with shared read access.

If the access couldn’t be acquired immediately, returns [`TryLockError`](/docs/api/rust/tauri/TryLockError). Otherwise, an RAII guard is returned which will release read access when dropped.

This method is identical to [`RwLock::try_read`](/docs/api/rust/tauri/struct.RwLock#method.try_read "RwLock::try_read"), except that the returned guard references the `RwLock` with an [`Arc`](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "Arc") rather than by borrowing it. Therefore, the `RwLock` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `RwLock` alive by holding an `Arc`.

## Examples

```rs
use std::sync::Arc;
use tokio::sync::RwLock;

#[tokio::main]

async fn main() {
    let lock = Arc::new(RwLock::new(1));
    let c_lock = lock.clone();

    let v = lock.try_read_owned().unwrap();
    assert_eq!(*v, 1);

    tokio::spawn(async move {
        // While main has an active read lock, we acquire one too.
        let n = c_lock.read_owned().await;
        assert_eq!(*n, 1);
    }).await.expect("The spawned task has panicked");

    // Drop the guard when spawned task finishes.
    drop(v);
}
```

#### pub async fn [write](/docs/api/rust/tauri/about:blank#method.write)(&'\_ self) -> RwLockWriteGuard&lt;'\_, T>

Locks this `RwLock` with exclusive write access, causing the current task to yield until the lock has been acquired.

The calling task will yield while other writers or readers currently have access to the lock.

Returns an RAII guard which will drop the write access of this `RwLock` when dropped.

## Cancel safety

This method uses a queue to fairly distribute locks in the order they were requested. Cancelling a call to `write` makes you lose your place in the queue.

## Examples

```rs
use tokio::sync::RwLock;

#[tokio::main]

async fn main() {
  let lock = RwLock::new(1);

  let mut n = lock.write().await;
  *n = 2;
}
```

#### pub async fn [write_owned](/docs/api/rust/tauri/about:blank#method.write_owned)(self: [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;[RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T>>) -> OwnedRwLockWriteGuard&lt;T>

Locks this `RwLock` with exclusive write access, causing the current task to yield until the lock has been acquired.

The calling task will yield while other writers or readers currently have access to the lock.

This method is identical to [`RwLock::write`](/docs/api/rust/tauri/struct.RwLock#method.write "RwLock::write"), except that the returned guard references the `RwLock` with an [`Arc`](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "Arc") rather than by borrowing it. Therefore, the `RwLock` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `RwLock` alive by holding an `Arc`.

Returns an RAII guard which will drop the write access of this `RwLock` when dropped.

## Cancel safety

This method uses a queue to fairly distribute locks in the order they were requested. Cancelling a call to `write_owned` makes you lose your place in the queue.

## Examples

```rs
use std::sync::Arc;
use tokio::sync::RwLock;

#[tokio::main]

async fn main() {
  let lock = Arc::new(RwLock::new(1));

  let mut n = lock.write_owned().await;
  *n = 2;
}
```

#### pub fn [try_write](/docs/api/rust/tauri/about:blank#method.try_write)(&self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;RwLockWriteGuard&lt;'\_, T>, TryLockError>

Attempts to acquire this `RwLock` with exclusive write access.

If the access couldn’t be acquired immediately, returns [`TryLockError`](/docs/api/rust/tauri/TryLockError). Otherwise, an RAII guard is returned which will release write access when dropped.

## Examples

```rs
use tokio::sync::RwLock;

#[tokio::main]

async fn main() {
    let rw = RwLock::new(1);

    let v = rw.read().await;
    assert_eq!(*v, 1);

    assert!(rw.try_write().is_err());
}
```

#### pub fn [try_write_owned](/docs/api/rust/tauri/about:blank#method.try_write_owned)( self: [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;[RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T>> ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;OwnedRwLockWriteGuard&lt;T>, TryLockError>

Attempts to acquire this `RwLock` with exclusive write access.

If the access couldn’t be acquired immediately, returns [`TryLockError`](/docs/api/rust/tauri/TryLockError). Otherwise, an RAII guard is returned which will release write access when dropped.

This method is identical to [`RwLock::try_write`](/docs/api/rust/tauri/struct.RwLock#method.try_write "RwLock::try_write"), except that the returned guard references the `RwLock` with an [`Arc`](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "Arc") rather than by borrowing it. Therefore, the `RwLock` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `RwLock` alive by holding an `Arc`.

## Examples

```rs
use std::sync::Arc;
use tokio::sync::RwLock;

#[tokio::main]

async fn main() {
    let rw = Arc::new(RwLock::new(1));

    let v = Arc::clone(&rw).read_owned().await;
    assert_eq!(*v, 1);

    assert!(rw.try_write_owned().is_err());
}
```

#### pub fn [get_mut](/docs/api/rust/tauri/about:blank#method.get_mut)(&mut self) -> [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T

Returns a mutable reference to the underlying data.

Since this call borrows the `RwLock` mutably, no actual locking needs to take place – the mutable borrow statically guarantees no locks exist.

## Examples

```rs
use tokio::sync::RwLock;

fn main() {
    let mut lock = RwLock::new(1);

    let n = lock.get_mut();
    *n = 2;
}
```

#### pub fn [into_inner](/docs/api/rust/tauri/about:blank#method.into_inner)(self) -> T

Consumes the lock, returning the underlying data.

## Trait Implementations

### impl&lt;T> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T> where T: [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl&lt;T> [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") for [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T> where T: [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),

#### pub fn [default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)() -> [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T>

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)

### impl&lt;T> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T> for [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T>

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(s: T) -> [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T>

Performs the conversion.

### impl&lt;T> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),

### impl&lt;T> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),

## Auto Trait Implementations

### impl&lt;T> \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T>

### impl&lt;T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized")> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T> where T: [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"),

### impl&lt;T> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [RwLock](/docs/api/rust/tauri/struct.RwLock "struct tauri::async_runtime::RwLock")&lt;T>

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
  