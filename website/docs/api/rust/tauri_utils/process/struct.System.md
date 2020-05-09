---
title: "struct.System"
---

# Struct [tauri\\\_utils](/docs/api/rust/tauri\_utils/../index.html)::​[process](/docs/api/rust/tauri\_utils/index.html)::​[System](/docs/api/rust/tauri\_utils/)

    pub struct System { /* fields omitted */ }

Structs containing system's information.

## Trait Implementations

### `impl Debug for System`

#### `fn fmt(&self, f: &mut Formatter) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Default for System`

#### `fn default() -> System`

Returns the "default value" for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

### `impl SystemExt for System`

#### `fn new\_with\_specifics(refreshes: RefreshKind) -> System`

Creates a new \[`System`] instance and refresh the data corresponding to the given \[`RefreshKind`]. [Read more](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.SystemExt.html#tymethod.new\_with\_specifics)

#### `fn refresh\_memory(&mut self)`

Refresh RAM and SWAP usage.

#### `fn refresh\_cpu(&mut self)`

Refresh CPU usage.

#### `fn refresh\_temperatures(&mut self)`

Refresh components' temperature.

#### `fn refresh\_processes(&mut self)`

Get all processes and update their information.

#### `fn refresh\_process(&mut self, pid: i32) -> bool`

Refresh only the process corresponding to `pid`. Returns `false` if the process doesn't exist. [Read more](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.SystemExt.html#tymethod.refresh\_process)

#### `fn refresh\_disks(&mut self)`

Refreshes the listed disks' information.

#### `fn refresh\_disk\_list(&mut self)`

The disk list will be emptied then completely recomputed.

#### `fn refresh\_network(&mut self)`

Refresh data network.

#### `fn get\_process\_list(&self) -> &HashMap<i32, Process, RandomState>`

Returns the process list.

#### `fn get\_process(&self, pid: i32) -> Option<&Process>`

Returns the process corresponding to the given pid or `None` if no such process exists.

#### `fn get\_network(&self) -> &NetworkData`

Returns network data.

#### `fn get\_processor\_list(&self) -> &[Processor]`

The first processor in the array is the "main" one (aka the addition of all the others).

#### `fn get\_total\_memory(&self) -> u64`

Returns total RAM size in KiB.

#### `fn get\_free\_memory(&self) -> u64`

Returns free RAM size in KiB.

#### `fn get\_used\_memory(&self) -> u64`

Returns used RAM size in KiB.

#### `fn get\_total\_swap(&self) -> u64`

Returns SWAP size in KiB.

#### `fn get\_free\_swap(&self) -> u64`

Returns free SWAP size in KiB.

#### `fn get\_used\_swap(&self) -> u64`

Returns used SWAP size in KiB.

#### `fn get\_components\_list(&self) -> &[Component]`

Returns components list.

#### `fn get\_disks(&self) -> &[Disk]`

Returns disks' list.

#### `fn get\_uptime(&self) -> u64`

Returns system uptime.

#### `fn new() -> Self`

Creates a new \[`System`] instance. It only contains the disks' list and the processes list at this stage. Use the \[`refresh\_all`] method to update its internal information (or any of the `refresh\_` method). [Read more](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.SystemExt.html#method.new)

#### `fn refresh\_specifics(&mut self, refreshes: RefreshKind)`

Refreshes according to the given \[`RefreshKind`]. It calls the corresponding "refresh\\\_" methods. [Read more](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.SystemExt.html#method.refresh\_specifics)

#### `fn refresh\_system(&mut self)`

Refresh system information (such as memory, swap, CPU usage and components' temperature). [Read more](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.SystemExt.html#method.refresh\_system)

#### `fn refresh\_all(&mut self)`

Refreshes all system, processes and disks information.

#### `fn get\_process\_by\_name(&self, name: &str) -> Vec<&Process>`

Returns a list of process containing the given `name`.

## Auto Trait Implementations

### `impl RefUnwindSafe for System`

### `impl Send for System`

### `impl Sync for System`

### `impl Unpin for System`

### `impl UnwindSafe for System`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `fn type\_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type\_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `fn borrow\_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow\_mut)

### `impl<T> From<T> for T`

#### `fn from(t: T) -> T`

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `fn into(self) -> U`

Performs the conversion.

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `fn try\_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `fn try\_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

      