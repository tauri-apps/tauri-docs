---
title: "trait.SystemExt"
---

# Trait [tauri_utils](/docs/api/rust/tauri_utils/../index.html)::​[process](/docs/api/rust/tauri_utils/index.html)::​[SystemExt](/docs/api/rust/tauri_utils/)

    pub trait SystemExt {
        fn new_with_specifics(refreshes: RefreshKind) -> Self;
    
        fn refresh_memory(&mut self);
    
        fn refresh_cpu(&mut self);
    
        fn refresh_temperatures(&mut self);
    
        fn refresh_processes(&mut self);
    
        fn refresh_process(&mut self, pid: i32) -> bool;
    
        fn refresh_disks(&mut self);
    
        fn refresh_disk_list(&mut self);
    
        fn refresh_network(&mut self);
    
        fn get_process_list(&self) -> &HashMap<i32, Process, RandomState>;
    
        fn get_process(&self, pid: i32) -> Option<&Process>;
    
        fn get_processor_list(&self) -> &[Processor];
    
        fn get_total_memory(&self) -> u64;
    
        fn get_free_memory(&self) -> u64;
    
        fn get_used_memory(&self) -> u64;
    
        fn get_total_swap(&self) -> u64;
    
        fn get_free_swap(&self) -> u64;
    
        fn get_used_swap(&self) -> u64;
    
        fn get_components_list(&self) -> &[Component];
    
        fn get_disks(&self) -> &[Disk];
    
        fn get_network(&self) -> &NetworkData;
    
        fn get_uptime(&self) -> u64;
    
        fn new() -> Self { ... }
    
        fn refresh_specifics(&mut self, refreshes: RefreshKind) { ... }
    
        fn refresh_system(&mut self) { ... }
    
        fn refresh_all(&mut self) { ... }
    
        fn get_process_by_name(&self, name: &str) -> Vec<&Process> { ... }
    }

Contains all the methods of the \[`System`] type.

## Méthodes requises

### `fn new_with_specifics(refreshes: RefreshKind) -> Self`

Creates a new \[`System`] instance and refresh the data corresponding to the given \[`RefreshKind`].

# [Example](/docs/api/rust/tauri_utils/about:blank#example)

    use sysinfo::{RefreshKind, System, SystemExt};
    
    // We want everything except disks.
    let mut system = System::new_with_specifics(RefreshKind::everything().without_disk_list());
    
    assert_eq!(system.get_disks().len(), 0);
    assert!(system.get_process_list().len() > 0);
    
    // If you want the disks list afterwards, just call the corresponding
    // "refresh_disk_list":
    system.refresh_disk_list();
    let disks = system.get_disks();

### `fn refresh_memory(&mut self)`

Refresh RAM and SWAP usage.

### `fn refresh_cpu(&mut self)`

Refresh CPU usage.

### `fn refresh_temperatures(&mut self)`

Refresh components' temperature.

### `fn refresh_processes(&mut self)`

Get all processes and update their information.

### `fn refresh_process(&mut self, pid: i32) -> bool`

Refresh _only_ the process corresponding to `pid`. Returns `false` if the process doesn't exist.

### `fn refresh_disks(&mut self)`

Refreshes the listed disks' information.

### `fn refresh_disk_list(&mut self)`

The disk list will be emptied then completely recomputed.

### `fn refresh_network(&mut self)`

Refresh data network.

### `fn get_process_list(&self) -> &HashMap<i32, Process, RandomState>`

Returns the process list.

### `fn get_process(&self, pid: i32) -> Option<&Process>`

Returns the process corresponding to the given pid or `None` if no such process exists.

### `fn get_processor_list(&self) -> &[Processor]`

The first processor in the array is the "main" one (aka the addition of all the others).

### `fn get_total_memory(&self) -> u64`

Returns total RAM size in KiB.

### `fn get_free_memory(&self) -> u64`

Returns free RAM size in KiB.

### `fn get_used_memory(&self) -> u64`

Returns used RAM size in KiB.

### `fn get_total_swap(&self) -> u64`

Returns SWAP size in KiB.

### `fn get_free_swap(&self) -> u64`

Returns free SWAP size in KiB.

### `fn get_used_swap(&self) -> u64`

Returns used SWAP size in KiB.

### `fn get_components_list(&self) -> &[Component]`

Returns components list.

### `fn get_disks(&self) -> &[Disk]`

Returns disks' list.

### `fn get_network(&self) -> &NetworkData`

Returns network data.

### `fn get_uptime(&self) -> u64`

Returns system uptime.

Chargement du contenu...

## Méthodes fournies

### `fn new() -> Self`

Creates a new \[`System`] instance. It only contains the disks' list and the processes list at this stage. Use the [`refresh_all`](/docs/api/rust/tauri_utils/about:blank#method.refresh_all) method to update its internal information (or any of the `refresh_` method).

### `fn refresh_specifics(&mut self, refreshes: RefreshKind)`

Refreshes according to the given \[`RefreshKind`]. It calls the corresponding "refresh\_" methods.

# [Exemples](/docs/api/rust/tauri_utils/about:blank#examples)

    use sysinfo::{RefreshKind, System, SystemExt};
    
    let mut s = System::new();
    
    // Let's just update network data and processes:
    s.refresh_specifics(RefreshKind::new().with_network().with_processes());

### `fn refresh_system(&mut self)`

Refresh system information (such as memory, swap, CPU usage and components' temperature).

If you want some more specific refresh, you might be interested into looking at [`refresh_memory`](/docs/api/rust/tauri_utils/systemext::refresh_memory), [`refresh_cpu`](/docs/api/rust/tauri_utils/systemext::refresh_memory) and [`refresh_temperatures`](/docs/api/rust/tauri_utils/systemext::refresh_temperatures).

### `fn refresh_all(&mut self)`

Refreshes all system, processes and disks information.

### `fn get_process_by_name(&self, name: &str) -> Vec<&Process>`

Returns a list of process containing the given `name`.

Chargement du contenu...

## Mise en œuvre

### `impl SystemExt for System`

#### `fn new_with_specifics(refreshes: RefreshKind) -> System`

#### `fn refresh_memory(&mut self)`

#### `fn refresh_cpu(&mut self)`

#### `fn refresh_temperatures(&mut self)`

#### `fn refresh_processes(&mut self)`

#### `fn refresh_process(&mut self, pid: i32) -> bool`

#### `fn refresh_disks(&mut self)`

#### `fn refresh_disk_list(&mut self)`

#### `fn refresh_network(&mut self)`

#### `fn get_process_list(&self) -> &HashMap<i32, Process, RandomState>`

#### `fn get_process(&self, pid: i32) -> Option<&Process>`

#### `fn get_network(&self) -> &NetworkData`

#### `fn get_processor_list(&self) -> &[Processor]`

#### `fn get_total_memory(&self) -> u64`

#### `fn get_free_memory(&self) -> u64`

#### `fn get_used_memory(&self) -> u64`

#### `fn get_total_swap(&self) -> u64`

#### `fn get_free_swap(&self) -> u64`

#### `fn get_used_swap(&self) -> u64`

#### `fn get_components_list(&self) -> &[Component]`

#### `fn get_disks(&self) -> &[Disk]`

#### `fn get_uptime(&self) -> u64`

Chargement du contenu...
