---
title: "struct.Process"
---

# Struct [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[process](/docs/api/rust/tauri_api/index.html)::​[Process](/docs/api/rust/tauri_api/)

    pub struct Process {
        pub uid: u32,
        pub gid: u32,
        pub tasks: HashMap<i32, Process, RandomState>,
        // some fields omitted
    }

Struct containing a process' information.

## Fields

`uid: u32`

User id of the process owner.

`gid: u32`

Group id of the process owner.

`tasks: HashMap<i32, Process, RandomState>`

Tasks run by this process.

## Trait Implementations

### `impl Debug for Process`

#### `fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Drop for Process`

#### `fn drop(&mut self)`

Executes the destructor for this type. [Read more](https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop)

### `impl ProcessExt for Process`

#### `fn new(pid: i32, parent: Option<i32>, start_time: u64) -> Process`

Create a new process only containing the given information. [Read more](/docs/api/rust/tauri_api/../../tauri_api/process/trait.ProcessExt.html#tymethod.new)

#### `fn kill(&self, signal: Signal) -> bool`

Sends the given `signal` to the process.

#### `fn name(&self) -> &str`

Returns the name of the process.

#### `fn cmd(&self) -> &[String]`

Returns the command line.

#### `fn exe(&self) -> &Path`

Returns the path to the process.

#### `fn pid(&self) -> i32`

Returns the pid of the process.

#### `fn environ(&self) -> &[String]`

Returns the environment of the process. [Read more](/docs/api/rust/tauri_api/../../tauri_api/process/trait.ProcessExt.html#tymethod.environ)

#### `fn cwd(&self) -> &Path`

Returns the current working directory. [Read more](/docs/api/rust/tauri_api/../../tauri_api/process/trait.ProcessExt.html#tymethod.cwd)

#### `fn root(&self) -> &Path`

Returns the path of the root directory. [Read more](/docs/api/rust/tauri_api/../../tauri_api/process/trait.ProcessExt.html#tymethod.root)

#### `fn memory(&self) -> u64`

Returns the memory usage (in KiB).

#### `fn virtual_memory(&self) -> u64`

Returns the virtual memory usage (in KiB).

#### `fn parent(&self) -> Option<i32>`

Returns the parent pid.

#### `fn status(&self) -> ProcessStatus`

Returns the status of the processus (idle, run, zombie, etc). `None` means that `sysinfo` doesn't have enough rights to get this information.

#### `fn start_time(&self) -> u64`

Returns the time of process launch (in seconds).

#### `fn cpu_usage(&self) -> f32`

Returns the total CPU usage.

## Auto Trait Implementations

### `impl RefUnwindSafe for Process`

### `impl Send for Process`

### `impl Sync for Process`

### `impl Unpin for Process`

### `impl UnwindSafe for Process`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `fn type_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> From<T> for T`

#### `fn from(t: T) -> T`

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `fn into(self) -> U`

Performs the conversion.

### `impl<T> Pointable for T`

#### `const ALIGN: usize`

The alignment of pointer.

#### `type Init = T`

The type for initializers.

#### `unsafe fn init(init: <T as Pointable>::Init) -> usize`

Initializes a with the given initializer. [Read more](/docs/api/rust/tauri_api/about:blank#tymethod.init)

#### `unsafe fn deref<'a>(ptr: usize) -> &'aT`

Dereferences the given pointer. [Read more](/docs/api/rust/tauri_api/about:blank#tymethod.deref)

#### `unsafe fn deref_mut<'a>(ptr: usize) -> &'a mutT`

Mutably dereferences the given pointer. [Read more](/docs/api/rust/tauri_api/about:blank#tymethod.deref_mut)

#### `unsafe fn drop(ptr: usize)`

Drops the object pointed to by the given pointer. [Read more](/docs/api/rust/tauri_api/about:blank#tymethod.drop)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `fn vzip(self) -> V`
