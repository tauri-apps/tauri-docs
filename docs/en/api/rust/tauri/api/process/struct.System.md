---
title: "struct.System"
---

# Struct [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[process](/docs/api/rust/tauri/index.html)::​[System](/docs/api/rust/tauri/)

    pub struct System { /* fields omitted */ }

Structs containing system's information.

## Trait Implementations

### `impl Debug for System`

#### `pub fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Default for System`

#### `pub fn default() -> System`

Returns the "default value" for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

### `impl SystemExt for System`

#### `pub fn new_with_specifics(refreshes: RefreshKind) -> System`

Creates a new [`System`](/docs/api/rust/tauri/../../../tauri/api/process/struct.System.html) instance and refresh the data corresponding to the given \[`RefreshKind`]. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.new_with_specifics)

#### `pub fn refresh_components_list(&mut self)`

Refreshes components list. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.refresh_components_list)

#### `pub fn refresh_memory(&mut self)`

Refreshes RAM and SWAP usage. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.refresh_memory)

#### `pub fn refresh_cpu(&mut self)`

Refreshes CPU usage. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.refresh_cpu)

#### `pub fn refresh_processes(&mut self)`

Gets all processes and updates their information. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.refresh_processes)

#### `pub fn refresh_process(&mut self, pid: i32) -> bool`

Refreshes _only_ the process corresponding to `pid`. Returns `false` if the process doesn't exist. If it isn't listed yet, it'll be added. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.refresh_process)

#### `pub fn refresh_disks_list(&mut self)`

The disk list will be emptied then completely recomputed. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.refresh_disks_list)

#### `pub fn refresh_users_list(&mut self)`

Refreshes users list. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.refresh_users_list)

#### `pub fn get_processes(&self) -> &HashMap<i32, Process, RandomState>`

Returns the process list. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_processes)

#### `pub fn get_process(&self, pid: i32) -> Option<&Process>`

Returns the process corresponding to the given pid or `None` if no such process exists. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_process)

#### `pub fn get_networks(&self) -> &Networks`

Returns the network interfaces object. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_networks)

#### `pub fn get_networks_mut(&mut self) -> &mut Networks`

Returns a mutable access to network interfaces. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_networks_mut)

#### `pub fn get_global_processor_info(&self) -> &Processor`

Returns "global" processors information (aka the addition of all the processors). [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_global_processor_info)

#### `pub fn get_processors(&self) -> &[Processor]`

Returns the list of the processors. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_processors)

#### `pub fn get_physical_core_count(&self) -> Option<usize>`

Returns the number of physical cores on the processor or `None` if it couldn't get it. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_physical_core_count)

#### `pub fn get_total_memory(&self) -> u64`

Returns the RAM size in kB. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_total_memory)

#### `pub fn get_free_memory(&self) -> u64`

Returns the amount of free RAM in kB. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_free_memory)

#### `pub fn get_available_memory(&self) -> u64`

Returns the amount of available RAM in kB. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_available_memory)

#### `pub fn get_used_memory(&self) -> u64`

Returns the amound of used RAM in kB. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_used_memory)

#### `pub fn get_total_swap(&self) -> u64`

Returns the SWAP size in kB. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_total_swap)

#### `pub fn get_free_swap(&self) -> u64`

Returns the amount of free SWAP in kB. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_free_swap)

#### `pub fn get_used_swap(&self) -> u64`

Returns the amount of used SWAP in kB. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_used_swap)

#### `pub fn get_components(&self) -> &[Component]`

Returns the components list. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_components)

#### `pub fn get_components_mut(&mut self) -> &mut [Component]`

Returns a mutable components list. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_components_mut)

#### `pub fn get_disks(&self) -> &[Disk]`

Returns the disks list. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_disks)

#### `pub fn get_disks_mut(&mut self) -> &mut [Disk]`

Returns the disks list. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_disks_mut)

#### `pub fn get_uptime(&self) -> u64`

Returns system uptime (in seconds). [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_uptime)

#### `pub fn get_boot_time(&self) -> u64`

Returns the time (in seconds) when the system booted since UNIX epoch. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_boot_time)

#### `pub fn get_load_average(&self) -> LoadAvg`

Returns the system load average value. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_load_average)

#### `pub fn get_users(&self) -> &[User]`

Returns the users list. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_users)

#### `pub fn get_name(&self) -> Option<String>`

Returns the system name. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_name)

#### `pub fn get_long_os_version(&self) -> Option<String>`

Returns the system long os version (e.g "MacOS 11.2 BigSur"). [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_long_os_version)

#### `pub fn get_host_name(&self) -> Option<String>`

Returns the system hostname based off DNS [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_host_name)

#### `pub fn get_kernel_version(&self) -> Option<String>`

Returns the system's kernel version. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_kernel_version)

#### `pub fn get_os_version(&self) -> Option<String>`

Returns the system version (e.g. for MacOS this will return 11.1 rather than the kernel version). [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.get_os_version)

#### `pub fn new() -> Self`

Creates a new [`System`](/docs/api/rust/tauri/../../../tauri/api/process/struct.System.html) instance with nothing loaded except the processors list. If you want to load components, network interfaces or the disks, you'll have to use the `refresh_*_list` methods. [`SystemExt::refresh_networks_list`](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#method.refresh_networks_list "SystemExt::refresh_networks_list") for example. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#method.new)

#### `pub fn new_all() -> Self`

Creates a new [`System`](/docs/api/rust/tauri/../../../tauri/api/process/struct.System.html) instance with everything loaded. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#method.new_all)

#### `pub fn refresh_specifics(&mut self, refreshes: RefreshKind)`

Refreshes according to the given \[`RefreshKind`]. It calls the corresponding "refresh\_" methods. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#method.refresh_specifics)

#### `pub fn refresh_system(&mut self)`

Refreshes system information (RAM, swap, CPU usage and components' temperature). [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#method.refresh_system)

#### `pub fn refresh_components(&mut self)`

Refreshes components' temperature. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#method.refresh_components)

#### `pub fn refresh_disks(&mut self)`

Refreshes the listed disks' information. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#method.refresh_disks)

#### `pub fn refresh_networks(&mut self)`

Refreshes networks data. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#method.refresh_networks)

#### `pub fn refresh_networks_list(&mut self)`

The network list will be updated: removing not existing anymore interfaces and adding new ones. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#method.refresh_networks_list)

#### `pub fn refresh_all(&mut self)`

Refreshes all system, processes, disks and network interfaces information. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#method.refresh_all)

#### `pub fn get_process_by_name(&self, name: &str) -> Vec<&Process, Global>`

Returns a list of process containing the given `name`. [Read more](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#method.get_process_by_name)

## Auto Trait Implementations

### `impl RefUnwindSafe for System`

### `impl Send for System`

### `impl Sync for System`

### `impl Unpin for System`

### `impl UnwindSafe for System`

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
