---
title: "trait.SystemExt"
---

# Trait [tauri\\\_api](/docs/api/rust/tauri\_api/../index.html)::​[process](/docs/api/rust/tauri\_api/index.html)::​[SystemExt](/docs/api/rust/tauri\_api/)

    pub trait SystemExt {
        fn new\_with\_specifics(refreshes: RefreshKind) -> Self;

        fn refresh\_memory(&mut self);

        fn refresh\_cpu(&mut self);

        fn refresh\_temperatures(&mut self);

        fn refresh\_processes(&mut self);

        fn refresh\_process(&mut self, pid: i32) -> bool;

        fn refresh\_disks(&mut self);

        fn refresh\_disk\_list(&mut self);

        fn refresh\_network(&mut self);

        fn get\_process\_list(&self) -> &HashMap<i32, Process, RandomState>;

        fn get\_process(&self, pid: i32) -> Option<&Process>;

        fn get\_processor\_list(&self) -> &[Processor];

        fn get\_total\_memory(&self) -> u64;

        fn get\_free\_memory(&self) -> u64;

        fn get\_used\_memory(&self) -> u64;

        fn get\_total\_swap(&self) -> u64;

        fn get\_free\_swap(&self) -> u64;

        fn get\_used\_swap(&self) -> u64;

        fn get\_components\_list(&self) -> &[Component];

        fn get\_disks(&self) -> &[Disk];

        fn get\_network(&self) -> &NetworkData;

        fn get\_uptime(&self) -> u64;

        fn new() -> Self { ... }

        fn refresh\_specifics(&mut self, refreshes: RefreshKind) { ... }

        fn refresh\_system(&mut self) { ... }

        fn refresh\_all(&mut self) { ... }

        fn get\_process\_by\_name(&self, name: &str) -> Vec<&Process> { ... }
    }

Contains all the methods of the \[`System`] type.

## Required methods

### `fn new\_with\_specifics(refreshes: RefreshKind) -> Self`

Creates a new \[`System`] instance and refresh the data corresponding to the given \[`RefreshKind`].

# [Example](/docs/api/rust/tauri\_api/about:blank#example)

    use sysinfo::{RefreshKind, System, SystemExt};

    // We want everything except disks.
    let mut system = System::new\_with\_specifics(RefreshKind::everything().without\_disk\_list());

    assert\_eq!(system.get\_disks().len(), 0);
    assert!(system.get\_process\_list().len() > 0);

    // If you want the disks list afterwards, just call the corresponding
    // "refresh\_disk\_list":
    system.refresh\_disk\_list();
    let disks = system.get\_disks();

### `fn refresh\_memory(&mut self)`

Refresh RAM and SWAP usage.

### `fn refresh\_cpu(&mut self)`

Refresh CPU usage.

### `fn refresh\_temperatures(&mut self)`

Refresh components' temperature.

### `fn refresh\_processes(&mut self)`

Get all processes and update their information.

### `fn refresh\_process(&mut self, pid: i32) -> bool`

Refresh _only_ the process corresponding to `pid`. Returns `false` if the process doesn't exist.

### `fn refresh\_disks(&mut self)`

Refreshes the listed disks' information.

### `fn refresh\_disk\_list(&mut self)`

The disk list will be emptied then completely recomputed.

### `fn refresh\_network(&mut self)`

Refresh data network.

### `fn get\_process\_list(&self) -> &HashMap<i32, Process, RandomState>`

Returns the process list.

### `fn get\_process(&self, pid: i32) -> Option<&Process>`

Returns the process corresponding to the given pid or `None` if no such process exists.

### `fn get\_processor\_list(&self) -> &[Processor]`

The first processor in the array is the "main" one (aka the addition of all the others).

### `fn get\_total\_memory(&self) -> u64`

Returns total RAM size in KiB.

### `fn get\_free\_memory(&self) -> u64`

Returns free RAM size in KiB.

### `fn get\_used\_memory(&self) -> u64`

Returns used RAM size in KiB.

### `fn get\_total\_swap(&self) -> u64`

Returns SWAP size in KiB.

### `fn get\_free\_swap(&self) -> u64`

Returns free SWAP size in KiB.

### `fn get\_used\_swap(&self) -> u64`

Returns used SWAP size in KiB.

### `fn get\_components\_list(&self) -> &[Component]`

Returns components list.

### `fn get\_disks(&self) -> &[Disk]`

Returns disks' list.

### `fn get\_network(&self) -> &NetworkData`

Returns network data.

### `fn get\_uptime(&self) -> u64`

Returns system uptime.

Loading content...

## Provided methods

### `fn new() -> Self`

Creates a new \[`System`] instance. It only contains the disks' list and the processes list at this stage. Use the [`refresh\_all`](/docs/api/rust/tauri\_api/about:blank#method.refresh\_all) method to update its internal information (or any of the `refresh\_` method).

### `fn refresh\_specifics(&mut self, refreshes: RefreshKind)`

Refreshes according to the given \[`RefreshKind`]. It calls the corresponding "refresh\\\_" methods.

# [Examples](/docs/api/rust/tauri\_api/about:blank#examples)

    use sysinfo::{RefreshKind, System, SystemExt};

    let mut s = System::new();

    // Let's just update network data and processes:
    s.refresh\_specifics(RefreshKind::new().with\_network().with\_processes());

### `fn refresh\_system(&mut self)`

Refresh system information (such as memory, swap, CPU usage and components' temperature).

If you want some more specific refresh, you might be interested into looking at [`refresh\_memory`](/docs/api/rust/tauri\_api/systemext::refresh\_memory), [`refresh\_cpu`](/docs/api/rust/tauri\_api/systemext::refresh\_memory) and [`refresh\_temperatures`](/docs/api/rust/tauri\_api/systemext::refresh\_temperatures).

### `fn refresh\_all(&mut self)`

Refreshes all system, processes and disks information.

### `fn get\_process\_by\_name(&self, name: &str) -> Vec<&Process>`

Returns a list of process containing the given `name`.

Loading content...

## Implementors

### `impl SystemExt for System`

#### `fn new\_with\_specifics(refreshes: RefreshKind) -> System`

#### `fn refresh\_memory(&mut self)`

#### `fn refresh\_cpu(&mut self)`

#### `fn refresh\_temperatures(&mut self)`

#### `fn refresh\_processes(&mut self)`

#### `fn refresh\_process(&mut self, pid: i32) -> bool`

#### `fn refresh\_disks(&mut self)`

#### `fn refresh\_disk\_list(&mut self)`

#### `fn refresh\_network(&mut self)`

#### `fn get\_process\_list(&self) -> &HashMap<i32, Process, RandomState>`

#### `fn get\_process(&self, pid: i32) -> Option<&Process>`

#### `fn get\_network(&self) -> &NetworkData`

#### `fn get\_processor\_list(&self) -> &[Processor]`

#### `fn get\_total\_memory(&self) -> u64`

#### `fn get\_free\_memory(&self) -> u64`

#### `fn get\_used\_memory(&self) -> u64`

#### `fn get\_total\_swap(&self) -> u64`

#### `fn get\_free\_swap(&self) -> u64`

#### `fn get\_used\_swap(&self) -> u64`

#### `fn get\_components\_list(&self) -> &[Component]`

#### `fn get\_disks(&self) -> &[Disk]`

#### `fn get\_uptime(&self) -> u64`

Loading content...

      