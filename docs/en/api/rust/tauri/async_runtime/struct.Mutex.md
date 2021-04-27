---
title: "struct.Mutex"
---

# Struct [tauri](/docs/api/rust/tauri/../index.html)::​[async_runtime](/docs/api/rust/tauri/index.html)::​[Mutex](/docs/api/rust/tauri/)

```
pub struct Mutex<T> where
    T: ?Sized,  { /* fields omitted */ }
```

An asynchronous `Mutex`-like type.

This type acts similarly to [`std::sync::Mutex`](https://doc.rust-lang.org/nightly/std/sync/mutex/struct.Mutex.html), with two major differences: [`lock`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Mutex.html#method.lock) is an async method so does not block, and the lock guard is designed to be held across `.await` points.

# [Which kind of mutex should you use?](/docs/api/rust/tauri/about:blank#which-kind-of-mutex-should-you-use)

Contrary to popular belief, it is ok and often preferred to use the ordinary [`Mutex`](https://doc.rust-lang.org/nightly/std/sync/mutex/struct.Mutex.html) from the standard library in asynchronous code.

The feature that the async mutex offers over the blocking mutex is the ability to keep it locked across an `.await` point. This makes the async mutex more expensive than the blocking mutex, so the blocking mutex should be preferred in the cases where it can be used. The primary use case for the async mutex is to provide shared mutable access to IO resources such as a database connection. If the value behind the mutex is just data, it's usually appropriate to use a blocking mutex such as the one in the standard library or [`parking_lot`](https://docs.rs/parking_lot).

Note that, although the compiler will not prevent the std `Mutex` from holding its guard across `.await` points in situations where the task is not movable between threads, this virtually never leads to correct concurrent code in practice as it can easily lead to deadlocks.

A common pattern is to wrap the `Arc<Mutex<...>>` in a struct that provides non-async methods for performing operations on the data within, and only lock the mutex inside these methods. The [mini-redis](https://github.com/tokio-rs/mini-redis/blob/master/src/db.rs) example provides an illustration of this pattern.

Additionally, when you _do_ want shared access to an IO resource, it is often better to spawn a task to manage the IO resource, and to use message passing to communicate with that task.

# [Examples:](/docs/api/rust/tauri/about:blank#examples)

```
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

```
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

1.  The mutex is wrapped in an [`Arc`](https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html) to allow it to be shared across threads.
2.  Each spawned task obtains a lock and releases it on every iteration.
3.  Mutation of the data protected by the Mutex is done by de-referencing the obtained lock as seen on lines 12 and 19.

Tokio's Mutex works in a simple FIFO (first in, first out) style where all calls to [`lock`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Mutex.html#method.lock) complete in the order they were performed. In that way the Mutex is "fair" and predictable in how it distributes the locks to inner data. Locks are released and reacquired after every iteration, so basically, each thread goes to the back of the line after it increments the value once. Note that there's some unpredictability to the timing between when the threads are started, but once they are going they alternate predictably. Finally, since there is only a single valid lock at any given time, there is no possibility of a race condition when mutating the inner value.

Note that in contrast to [`std::sync::Mutex`](https://doc.rust-lang.org/nightly/std/sync/mutex/struct.Mutex.html), this implementation does not poison the mutex when a thread holding the [`MutexGuard`](/docs/api/rust/tauri/struct@MutexGuard) panics. In such a case, the mutex will be unlocked. If the panic is caught, this might leave the data protected by the mutex in an inconsistent state.

## Implementations

### `impl<T> Mutex<T> where T: ?Sized,`

#### `pub fn new(t: T) -> Mutex<T>`

Creates a new lock in an unlocked state ready for use.

# [Examples](/docs/api/rust/tauri/about:blank#examples-1)

```
use tokio::sync::Mutex;

let lock = Mutex::new(5);
```

#### `pub async fn lock(&'_ self) -> MutexGuard<'_, T>`

Locks this mutex, causing the current task to yield until the lock has been acquired. When the lock has been acquired, function returns a \[`MutexGuard`].

# [Examples](/docs/api/rust/tauri/about:blank#examples-2)

```
use tokio::sync::Mutex;

#[tokio::main]
async fn main() {
    let mutex = Mutex::new(1);

    let mut n = mutex.lock().await;
    *n = 2;
}
```

#### `pub async fn lock_owned(self: Arc<Mutex<T>>) -> OwnedMutexGuard<T>`

Locks this mutex, causing the current task to yield until the lock has been acquired. When the lock has been acquired, this returns an \[`OwnedMutexGuard`].

This method is identical to [`Mutex::lock`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Mutex.html#method.lock "Mutex::lock"), except that the returned guard references the `Mutex` with an [`Arc`](https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html) rather than by borrowing it. Therefore, the `Mutex` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `Mutex` alive by holding an `Arc`.

# [Examples](/docs/api/rust/tauri/about:blank#examples-3)

```
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let mutex = Arc::new(Mutex::new(1));

    let mut n = mutex.clone().lock_owned().await;
    *n = 2;
}
```

#### `pub fn try_lock(&self) -> Result<MutexGuard<'_, T>, TryLockError>`

Attempts to acquire the lock, and returns [`TryLockError`](/docs/api/rust/tauri/TryLockError) if the lock is currently held somewhere else.

# [Examples](/docs/api/rust/tauri/about:blank#examples-4)

```
use tokio::sync::Mutex;

let mutex = Mutex::new(1);

let n = mutex.try_lock()?;
assert_eq!(*n, 1);
```

#### `pub fn get_mut(&mut self) -> &mutT`

Returns a mutable reference to the underlying data.

Since this call borrows the `Mutex` mutably, no actual locking needs to take place -- the mutable borrow statically guarantees no locks exist.

# [Examples](/docs/api/rust/tauri/about:blank#examples-5)

```
use tokio::sync::Mutex;

fn main() {
    let mut mutex = Mutex::new(1);

    let n = mutex.get_mut();
    *n = 2;
}
```

#### `pub fn try_lock_owned( self: Arc<Mutex<T>> ) -> Result<OwnedMutexGuard<T>, TryLockError>`

Attempts to acquire the lock, and returns [`TryLockError`](/docs/api/rust/tauri/TryLockError) if the lock is currently held somewhere else.

This method is identical to [`Mutex::try_lock`](/docs/api/rust/tauri/../../tauri/async_runtime/struct.Mutex.html#method.try_lock "Mutex::try_lock"), except that the returned guard references the `Mutex` with an [`Arc`](https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html) rather than by borrowing it. Therefore, the `Mutex` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `Mutex` alive by holding an `Arc`.

# [Examples](/docs/api/rust/tauri/about:blank#examples-6)

```
use tokio::sync::Mutex;
use std::sync::Arc;

let mutex = Arc::new(Mutex::new(1));

let n = mutex.clone().try_lock_owned()?;
assert_eq!(*n, 1);
```

#### `pub fn into_inner(self) -> T`

Consumes the mutex, returning the underlying data.

# [Examples](/docs/api/rust/tauri/about:blank#examples-7)

```
use tokio::sync::Mutex;

#[tokio::main]
async fn main() {
    let mutex = Mutex::new(1);

    let n = mutex.into_inner();
    assert_eq!(n, 1);
}
```

## Trait Implementations

### `impl<T> Debug for Mutex<T> where T: Debug,`

#### `pub fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<T> Default for Mutex<T> where T: Default,`

#### `pub fn default() -> Mutex<T>`

Returns the "default value" for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

### `impl<T> From<T> for Mutex<T>`

#### `pub fn from(s: T) -> Mutex<T>`

Performs the conversion.

### `impl<T> Send for Mutex<T> where T: Send + ?Sized,`

### `impl<T> Sync for Mutex<T> where T: Send + ?Sized,`

## Auto Trait Implementations

### `impl<T> !RefUnwindSafe for Mutex<T>`

### `impl<T: ?Sized> Unpin for Mutex<T> where T: Unpin,`

### `impl<T: ?Sized> UnwindSafe for Mutex<T> where T: UnwindSafe,`

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

### `impl<T> From<!> for T`

#### `pub fn from(t: !) -> T`

Performs the conversion.

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
