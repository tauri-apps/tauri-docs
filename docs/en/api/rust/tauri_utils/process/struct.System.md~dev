---
title: "struct.System"
---

# Struct [tauri_utils](/docs/api/rust/tauri_utils/../index.html)::​[process](/docs/api/rust/tauri_utils/index.html)::​[System](/docs/api/rust/tauri_utils/)

    pub struct System { /* fields omitted */ }

Structs containing system's information.

## Trait Implementations

### `impl Debug for System`

#### `fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Default for System`

#### `fn default() -> System`

Returns the "default value" for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

### `impl SystemExt for System`

#### `fn new_with_specifics(refreshes: RefreshKind) -> System`

Creates a new \[`System`] instance and refresh the data corresponding to the given \[`RefreshKind`]. [Read more](/docs/api/rust/tauri_utils/../../tauri_utils/process/trait.SystemExt.html#tymethod.new_with_specifics)

#### `fn refresh_memory(&mut self)`

Refresh RAM and SWAP usage.

#### `fn refresh_cpu(&mut self)`

Refresh CPU usage.

#### `fn refresh_temperatures(&mut self)`

Refresh components' temperature.

#### `fn refresh_processes(&mut self)`

Get all processes and update their information.

#### `fn refresh_process(&mut self, pid: i32) -> bool`

Refresh only the process corresponding to `pid`. Returns `false` if the process doesn't exist. [Read more](/docs/api/rust/tauri_utils/../../tauri_utils/process/trait.SystemExt.html#tymethod.refresh_process)

#### `fn refresh_disks(&mut self)`

Refreshes the listed disks' information.

#### `fn refresh_disk_list(&mut self)`

The disk list will be emptied then completely recomputed.

#### `fn refresh_network(&mut self)`

Refresh data network.

#### `fn get_process_list(&self) -> &HashMap<i32, Process, RandomState>`

Returns the process list.

#### `fn get_process(&self, pid: i32) -> Option<&Process>`

Returns the process corresponding to the given pid or `None` if no such process exists.

#### `fn get_network(&self) -> &NetworkData`

Returns network data.

#### `fn get_processor_list(&self) -> &[Processor]`

The first processor in the array is the "main" one (aka the addition of all the others).

#### `fn get_total_memory(&self) -> u64`

Returns total RAM size in KiB.

#### `fn get_free_memory(&self) -> u64`

Returns free RAM size in KiB.

#### `fn get_used_memory(&self) -> u64`

Returns used RAM size in KiB.

#### `fn get_total_swap(&self) -> u64`

Returns SWAP size in KiB.

#### `fn get_free_swap(&self) -> u64`

Returns free SWAP size in KiB.

#### `fn get_used_swap(&self) -> u64`

Returns used SWAP size in KiB.

#### `fn get_components_list(&self) -> &[Component]`

Returns components list.

#### `fn get_disks(&self) -> &[Disk]`

Returns disks' list.

#### `fn get_uptime(&self) -> u64`

Returns system uptime.

#### `fn new() -> Self`

Creates a new \[`System`] instance. It only contains the disks' list and the processes list at this stage. Use the \[`refresh_all`] method to update its internal information (or any of the `refresh_` method). [Read more](/docs/api/rust/tauri_utils/../../tauri_utils/process/trait.SystemExt.html#method.new)

#### `fn refresh_specifics(&mut self, refreshes: RefreshKind)`

Refreshes according to the given \[`RefreshKind`]. It calls the corresponding "refresh\_" methods. [Read more](/docs/api/rust/tauri_utils/../../tauri_utils/process/trait.SystemExt.html#method.refresh_specifics)

#### `fn refresh_system(&mut self)`

Refresh system information (such as memory, swap, CPU usage and components' temperature). [Read more](/docs/api/rust/tauri_utils/../../tauri_utils/process/trait.SystemExt.html#method.refresh_system)

#### `fn refresh_all(&mut self)`

Refreshes all system, processes and disks information.

#### `fn get_process_by_name(&self, name: &str) -> Vec<&Process>`

Returns a list of process containing the given `name`.

## Auto Trait Implementations

### `impl RefUnwindSafe for System`

### `impl Send for System`

### `impl Sync for System`

### `impl Unpin for System`

### `impl UnwindSafe for System`

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

Initializes a with the given initializer. [Read more](/docs/api/rust/tauri_utils/about:blank#tymethod.init)

#### `unsafe fn deref<'a>(ptr: usize) -> &'aT`

Dereferences the given pointer. [Read more](/docs/api/rust/tauri_utils/about:blank#tymethod.deref)

#### `unsafe fn deref_mut<'a>(ptr: usize) -> &'a mutT`

Mutably dereferences the given pointer. [Read more](/docs/api/rust/tauri_utils/about:blank#tymethod.deref_mut)

#### `unsafe fn drop(ptr: usize)`

Drops the object pointed to by the given pointer. [Read more](/docs/api/rust/tauri_utils/about:blank#tymethod.drop)

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
