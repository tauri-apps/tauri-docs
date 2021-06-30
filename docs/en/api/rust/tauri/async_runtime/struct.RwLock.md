---
title: Struct tauri::async_runtime::RwLock
sidebar_label: struct.RwLock
custom_edit_url: null
---

# Struct tauri::async_runtime::RwLock,\[−],\[−],−

```rs
pub struct RwLock<T> where
    T: ?Sized,  { /* fields omitted */ }
```

An asynchronous reader-writer lock.

This type of lock allows a number of readers or at most one writer at any point in time. The write portion of this lock typically allows modification of the underlying data (exclusive access) and the read portion of this lock typically allows for read-only access (shared access).

In comparison, a [`Mutex`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Mutex) does not distinguish between readers or writers that acquire the lock, therefore causing any tasks waiting for the lock to become available to yield. An `RwLock` will allow any number of readers to acquire the lock as long as a writer is not holding the lock.

The priority policy of Tokio’s read-write lock is _fair_ (or [_write-preferring_](https://en.wikipedia.org/wiki/Readers%E2%80%93writer_lock#Priority_policies)), in order to ensure that readers cannot starve writers. Fairness is ensured using a first-in, first-out queue for the tasks awaiting the lock; if a task that wishes to acquire the write lock is at the head of the queue, read locks will not be given out until the write lock has been released. This is in contrast to the Rust standard library’s `std::sync::RwLock`, where the priority policy is dependent on the operating system’s implementation.

The type parameter `T` represents the data that this lock protects. It is required that `T` satisfies [`Send`](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html) to be shared across threads. The RAII guards returned from the locking methods implement [`Deref`](https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html) (and [`DerefMut`](https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html) for the `write` methods) to allow access to the content of the lock.

# [Examples](/docs/api/rust/tauri/about:blank#examples)

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

### `impl<T> RwLock<T> where T: ?Sized,`

#### `pub fn new(value: T) -> RwLock<T>`

Creates a new instance of an `RwLock<T>` which is unlocked.

# [Examples](/docs/api/rust/tauri/about:blank#examples-1)

```rs
use tokio::sync::RwLock;

let lock = RwLock::new(5);
```

#### `pub fn with_max_readers(value: T, max_reads: u32) -> RwLock<T>`

Creates a new instance of an `RwLock<T>` which is unlocked and allows a maximum of `max_reads` concurrent readers.

# [Examples](/docs/api/rust/tauri/about:blank#examples-2)

```rs
use tokio::sync::RwLock;

let lock = RwLock::with_max_readers(5, 1024);
```

# [Panics](/docs/api/rust/tauri/about:blank#panics)

Panics if `max_reads` is more than `u32::MAX >> 3`.

#### `pub async fn read(&'_ self) -> RwLockReadGuard<'_, T>`

Locks this `RwLock` with shared read access, causing the current task to yield until the lock has been acquired.

The calling task will yield until there are no writers which hold the lock. There may be other readers inside the lock when the task resumes.

Note that under the priority policy of [`RwLock`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.RwLock "RwLock"), read locks are not granted until prior write locks, to prevent starvation. Therefore deadlock may occur if a read lock is held by the current task, a write lock attempt is made, and then a subsequent read lock attempt is made by the current task.

Returns an RAII guard which will drop this read access of the `RwLock` when dropped.

# [Examples](/docs/api/rust/tauri/about:blank#examples-3)

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

#### `pub async fn read_owned(self: Arc<RwLock<T>>) -> OwnedRwLockReadGuard<T, T>`

Locks this `RwLock` with shared read access, causing the current task to yield until the lock has been acquired.

The calling task will yield until there are no writers which hold the lock. There may be other readers inside the lock when the task resumes.

This method is identical to [`RwLock::read`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.RwLock#method.read "RwLock::read"), except that the returned guard references the `RwLock` with an [`Arc`](https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html "Arc") rather than by borrowing it. Therefore, the `RwLock` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `RwLock` alive by holding an `Arc`.

Note that under the priority policy of [`RwLock`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.RwLock "RwLock"), read locks are not granted until prior write locks, to prevent starvation. Therefore deadlock may occur if a read lock is held by the current task, a write lock attempt is made, and then a subsequent read lock attempt is made by the current task.

Returns an RAII guard which will drop this read access of the `RwLock` when dropped.

# [Examples](/docs/api/rust/tauri/about:blank#examples-4)

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

#### `pub fn try_read(&self) -> Result<RwLockReadGuard<'_, T>, TryLockError>`

Attempts to acquire this `RwLock` with shared read access.

If the access couldn’t be acquired immediately, returns [`TryLockError`](/docs/api/rust/tauri/TryLockError). Otherwise, an RAII guard is returned which will release read access when dropped.

# [Examples](/docs/api/rust/tauri/about:blank#examples-5)

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

#### `pub fn try_read_owned( self: Arc<RwLock<T>> ) -> Result<OwnedRwLockReadGuard<T, T>, TryLockError>`

Attempts to acquire this `RwLock` with shared read access.

If the access couldn’t be acquired immediately, returns [`TryLockError`](/docs/api/rust/tauri/TryLockError). Otherwise, an RAII guard is returned which will release read access when dropped.

This method is identical to [`RwLock::try_read`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.RwLock#method.try_read "RwLock::try_read"), except that the returned guard references the `RwLock` with an [`Arc`](https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html "Arc") rather than by borrowing it. Therefore, the `RwLock` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `RwLock` alive by holding an `Arc`.

# [Examples](/docs/api/rust/tauri/about:blank#examples-6)

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

#### `pub async fn write(&'_ self) -> RwLockWriteGuard<'_, T>`

Locks this `RwLock` with exclusive write access, causing the current task to yield until the lock has been acquired.

The calling task will yield while other writers or readers currently have access to the lock.

Returns an RAII guard which will drop the write access of this `RwLock` when dropped.

# [Examples](/docs/api/rust/tauri/about:blank#examples-7)

```rs
use tokio::sync::RwLock;

#[tokio::main]
async fn main() {
  let lock = RwLock::new(1);

  let mut n = lock.write().await;
  *n = 2;
}
```

#### `pub async fn write_owned(self: Arc<RwLock<T>>) -> OwnedRwLockWriteGuard<T>`

Locks this `RwLock` with exclusive write access, causing the current task to yield until the lock has been acquired.

The calling task will yield while other writers or readers currently have access to the lock.

This method is identical to [`RwLock::write`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.RwLock#method.write "RwLock::write"), except that the returned guard references the `RwLock` with an [`Arc`](https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html "Arc") rather than by borrowing it. Therefore, the `RwLock` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `RwLock` alive by holding an `Arc`.

Returns an RAII guard which will drop the write access of this `RwLock` when dropped.

# [Examples](/docs/api/rust/tauri/about:blank#examples-8)

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

#### `pub fn try_write(&self) -> Result<RwLockWriteGuard<'_, T>, TryLockError>`

Attempts to acquire this `RwLock` with exclusive write access.

If the access couldn’t be acquired immediately, returns [`TryLockError`](/docs/api/rust/tauri/TryLockError). Otherwise, an RAII guard is returned which will release write access when dropped.

# [Examples](/docs/api/rust/tauri/about:blank#examples-9)

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

#### `pub fn try_write_owned( self: Arc<RwLock<T>> ) -> Result<OwnedRwLockWriteGuard<T>, TryLockError>`

Attempts to acquire this `RwLock` with exclusive write access.

If the access couldn’t be acquired immediately, returns [`TryLockError`](/docs/api/rust/tauri/TryLockError). Otherwise, an RAII guard is returned which will release write access when dropped.

This method is identical to [`RwLock::try_write`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.RwLock#method.try_write "RwLock::try_write"), except that the returned guard references the `RwLock` with an [`Arc`](https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html "Arc") rather than by borrowing it. Therefore, the `RwLock` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `RwLock` alive by holding an `Arc`.

# [Examples](/docs/api/rust/tauri/about:blank#examples-10)

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

#### `pub fn get_mut(&mut self) -> &mutT`

Returns a mutable reference to the underlying data.

Since this call borrows the `RwLock` mutably, no actual locking needs to take place – the mutable borrow statically guarantees no locks exist.

# [Examples](/docs/api/rust/tauri/about:blank#examples-11)

```rs
use tokio::sync::RwLock;

fn main() {
    let mut lock = RwLock::new(1);

    let n = lock.get_mut();
    *n = 2;
}
```

#### `pub fn into_inner(self) -> T`

Consumes the lock, returning the underlying data.

## Trait Implementations

### `impl<T> Debug for RwLock<T> where T: Debug + ?Sized,`

#### `pub fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<T> Default for RwLock<T> where T: Default + ?Sized,`

#### `pub fn default() -> RwLock<T>`

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

### `impl<T> From<T> for RwLock<T>`

#### `pub fn from(s: T) -> RwLock<T>`

Performs the conversion.

### `impl<T> Send for RwLock<T> where T: Send + ?Sized,`

### `impl<T> Sync for RwLock<T> where T: Send + Sync + ?Sized,`

## Auto Trait Implementations

### `impl<T> !RefUnwindSafe for RwLock<T>`

### `impl<T: ?Sized> Unpin for RwLock<T> where T: Unpin,`

### `impl<T: ?Sized> UnwindSafe for RwLock<T> where T: UnwindSafe,`

## Blanket Implementations

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)_

### `From`

```rs
impl<T> From<!> for T
```

_Defined in: [mod.rs:559-563](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L559-563)_

#### `from`

```rs
pub fn from(t: !) -> T
```

Performs the conversion.

_Defined in: [mod.rs:560](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L560)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)_

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
