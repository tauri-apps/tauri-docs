---
title: "struct.Process"
---

# Struct [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[process](/docs/api/rust/tauri/index.html)::​[Process](/docs/api/rust/tauri/)

```rs
pub struct Process {
    pub uid: u32,
    pub gid: u32,
    pub tasks: HashMap<i32, Process, RandomState>,
    // some fields omitted
}
```

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

#### `pub fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Drop for Process`

#### `pub fn drop(&mut self)`

Executes the destructor for this type. [Read more](https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop)

### `impl ProcessExt for Process`

#### `pub fn new(pid: i32, parent: Option<i32>, start_time: u64) -> Process`

#### `pub fn kill(&self, signal: Signal) -> bool`

Sends the given `signal` to the process. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.kill)

#### `pub fn name(&self) -> &str`

Returns the name of the process. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.name)

#### `pub fn cmd(&self) -> &[String]`

Returns the command line. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.cmd)

#### `pub fn exe(&self) -> &Path`

Returns the path to the process. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.exe)

#### `pub fn pid(&self) -> i32`

Returns the pid of the process. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.pid)

#### `pub fn environ(&self) -> &[String]`

Returns the environment of the process. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.environ)

#### `pub fn cwd(&self) -> &Path`

Returns the current working directory. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.cwd)

#### `pub fn root(&self) -> &Path`

Returns the path of the root directory. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.root)

#### `pub fn memory(&self) -> u64`

Returns the memory usage (in kB). [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.memory)

#### `pub fn virtual_memory(&self) -> u64`

Returns the virtual memory usage (in kB). [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.virtual_memory)

#### `pub fn parent(&self) -> Option<i32>`

Returns the parent pid. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.parent)

#### `pub fn status(&self) -> ProcessStatus`

Returns the status of the processus (idle, run, zombie, etc). `None` means that `sysinfo` doesn't have enough rights to get this information.

#### `pub fn start_time(&self) -> u64`

Returns the time of process launch (in seconds). [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.start_time)

#### `pub fn cpu_usage(&self) -> f32`

Returns the total CPU usage (in %). Notice that it might be bigger than 100 if run on a multicore machine. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.cpu_usage)

#### `pub fn disk_usage(&self) -> DiskUsage`

Returns number of bytes read and written to disk. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.ProcessExt.html#tymethod.disk_usage)

## Auto Trait Implementations

### `impl RefUnwindSafe for Process`

### `impl Send for Process`

### `impl Sync for Process`

### `impl Unpin for Process`

### `impl UnwindSafe for Process`

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
