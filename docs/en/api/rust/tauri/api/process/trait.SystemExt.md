---
title: "trait.SystemExt"
---

# Trait [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[process](/docs/api/rust/tauri/index.html)::​[SystemExt](/docs/api/rust/tauri/)

```
pub trait SystemExt: Default + Debug {
    pub fn new_with_specifics(refreshes: RefreshKind) -> Self;

    pub fn refresh_memory(&mut self);

    pub fn refresh_cpu(&mut self);

    pub fn refresh_components_list(&mut self);

    pub fn refresh_processes(&mut self);

    pub fn refresh_process(&mut self, pid: i32) -> bool;

    pub fn refresh_disks_list(&mut self);

    pub fn refresh_users_list(&mut self);

    pub fn get_processes(&self) -> &HashMap<i32, Process, RandomState>;

    pub fn get_process(&self, pid: i32) -> Option<&Process>;

    pub fn get_global_processor_info(&self) -> &Processor;

    pub fn get_processors(&self) -> &[Processor];

    pub fn get_physical_core_count(&self) -> Option<usize>;

    pub fn get_total_memory(&self) -> u64;

    pub fn get_free_memory(&self) -> u64;

    pub fn get_available_memory(&self) -> u64;

    pub fn get_used_memory(&self) -> u64;

    pub fn get_total_swap(&self) -> u64;

    pub fn get_free_swap(&self) -> u64;

    pub fn get_used_swap(&self) -> u64;

    pub fn get_components(&self) -> &[Component];

    pub fn get_components_mut(&mut self) -> &mut [Component];

    pub fn get_disks(&self) -> &[Disk];

    pub fn get_users(&self) -> &[User];

    pub fn get_disks_mut(&mut self) -> &mut [Disk];

    pub fn get_networks(&self) -> &Networks;

    pub fn get_networks_mut(&mut self) -> &mut Networks;

    pub fn get_uptime(&self) -> u64;

    pub fn get_boot_time(&self) -> u64;

    pub fn get_load_average(&self) -> LoadAvg;

    pub fn get_name(&self) -> Option<String>;

    pub fn get_kernel_version(&self) -> Option<String>;

    pub fn get_os_version(&self) -> Option<String>;

    pub fn get_long_os_version(&self) -> Option<String>;

    pub fn get_host_name(&self) -> Option<String>;

    pub fn new() -> Self { ... }

    pub fn new_all() -> Self { ... }

    pub fn refresh_specifics(&mut self, refreshes: RefreshKind) { ... }

    pub fn refresh_system(&mut self) { ... }

    pub fn refresh_components(&mut self) { ... }

    pub fn refresh_disks(&mut self) { ... }

    pub fn refresh_networks(&mut self) { ... }

    pub fn refresh_networks_list(&mut self) { ... }

    pub fn refresh_all(&mut self) { ... }

    pub fn get_process_by_name(&self, name: &str) -> Vec<&Process, Global> { ... }
}
```

Contains all the methods of the [`System`](/docs/api/rust/tauri/../../../tauri/api/process/struct.System.html "crate::System") type.

## Required methods

### `pub fn new_with_specifics(refreshes: RefreshKind) -> Self`

Creates a new [`System`](/docs/api/rust/tauri/../../../tauri/api/process/struct.System.html) instance and refresh the data corresponding to the given \[`RefreshKind`].

```
use sysinfo::{RefreshKind, System, SystemExt};

// We want everything except disks.
let mut system = System::new_with_specifics(RefreshKind::everything().without_disks_list());

assert_eq!(system.get_disks().len(), 0);
assert!(system.get_processes().len() > 0);

// If you want the disks list afterwards, just call the corresponding
// "refresh_disks_list":
system.refresh_disks_list();
let disks = system.get_disks();
```

### `pub fn refresh_memory(&mut self)`

Refreshes RAM and SWAP usage.

```
use sysinfo::{System, SystemExt};

let mut s = System::new_all();
s.refresh_memory();
```

### `pub fn refresh_cpu(&mut self)`

Refreshes CPU usage.

```
use sysinfo::{System, SystemExt};

let mut s = System::new_all();
s.refresh_cpu();
```

### `pub fn refresh_components_list(&mut self)`

Refreshes components list.

```
use sysinfo::{System, SystemExt};

let mut s = System::new();
s.refresh_components_list();
```

### `pub fn refresh_processes(&mut self)`

Gets all processes and updates their information.

```
use sysinfo::{System, SystemExt};

let mut s = System::new_all();
s.refresh_processes();
```

### `pub fn refresh_process(&mut self, pid: i32) -> bool`

Refreshes _only_ the process corresponding to `pid`. Returns `false` if the process doesn't exist. If it isn't listed yet, it'll be added.

```
use sysinfo::{System, SystemExt};

let mut s = System::new_all();
s.refresh_process(1337);
```

### `pub fn refresh_disks_list(&mut self)`

The disk list will be emptied then completely recomputed.

```
use sysinfo::{System, SystemExt};

let mut s = System::new_all();
s.refresh_disks_list();
```

### `pub fn refresh_users_list(&mut self)`

Refreshes users list.

```
use sysinfo::{System, SystemExt};

let mut s = System::new_all();
s.refresh_users_list();
```

### `pub fn get_processes(&self) -> &HashMap<i32, Process, RandomState>`

Returns the process list.

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new_all();
for (pid, process) in s.get_processes() {
    println!("{} {}", pid, process.name());
}
```

### `pub fn get_process(&self, pid: i32) -> Option<&Process>`

Returns the process corresponding to the given pid or `None` if no such process exists.

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new_all();
if let Some(process) = s.get_process(1337) {
    println!("{}", process.name());
}
```

### `pub fn get_global_processor_info(&self) -> &Processor`

Returns "global" processors information (aka the addition of all the processors).

```
use sysinfo::{ProcessorExt, System, SystemExt};

let s = System::new();
println!("{}%", s.get_global_processor_info().get_cpu_usage());
```

### `pub fn get_processors(&self) -> &[Processor]`

Returns the list of the processors.

```
use sysinfo::{ProcessorExt, System, SystemExt};

let s = System::new();
for processor in s.get_processors() {
    println!("{}%", processor.get_cpu_usage());
}
```

### `pub fn get_physical_core_count(&self) -> Option<usize>`

Returns the number of physical cores on the processor or `None` if it couldn't get it.

In case there are multiple CPUs, it will combine the physical core count of all the CPUs.

**Important**: this information is computed every time this function is called.

```
use sysinfo::{ProcessorExt, System, SystemExt};

let s = System::new();
println!("{:?}", s.get_physical_core_count());
```

### `pub fn get_total_memory(&self) -> u64`

Returns the RAM size in kB.

```
use sysinfo::{System, SystemExt};

let s = System::new_all();
println!("{} kB", s.get_total_memory());
```

### `pub fn get_free_memory(&self) -> u64`

Returns the amount of free RAM in kB.

Generally, "free" memory refers to unallocated memory whereas "available" memory refers to memory that is available for (re)use.

Side note: Windows doesn't report "free" memory so this method returns the same value as [`get_available_memory`](/docs/api/rust/tauri/about:blank#tymethod.get_available_memory).

```
use sysinfo::{System, SystemExt};

let s = System::new_all();
println!("{} kB", s.get_free_memory());
```

### `pub fn get_available_memory(&self) -> u64`

Returns the amount of available RAM in kB.

Generally, "free" memory refers to unallocated memory whereas "available" memory refers to memory that is available for (re)use.

Side note: Windows doesn't report "free" memory so [`get_free_memory`](/docs/api/rust/tauri/about:blank#tymethod.get_free_memory) returns the same value as this method.

```
use sysinfo::{System, SystemExt};

let s = System::new_all();
println!("{} kB", s.get_available_memory());
```

### `pub fn get_used_memory(&self) -> u64`

Returns the amound of used RAM in kB.

```
use sysinfo::{System, SystemExt};

let s = System::new_all();
println!("{} kB", s.get_used_memory());
```

### `pub fn get_total_swap(&self) -> u64`

Returns the SWAP size in kB.

```
use sysinfo::{System, SystemExt};

let s = System::new_all();
println!("{} kB", s.get_total_swap());
```

### `pub fn get_free_swap(&self) -> u64`

Returns the amount of free SWAP in kB.

```
use sysinfo::{System, SystemExt};

let s = System::new_all();
println!("{} kB", s.get_free_swap());
```

### `pub fn get_used_swap(&self) -> u64`

Returns the amount of used SWAP in kB.

```
use sysinfo::{System, SystemExt};

let s = System::new_all();
println!("{} kB", s.get_used_swap());
```

### `pub fn get_components(&self) -> &[Component]`

Returns the components list.

```
use sysinfo::{ComponentExt, System, SystemExt};

let s = System::new_all();
for component in s.get_components() {
    println!("{}: {}°C", component.get_label(), component.get_temperature());
}
```

### `pub fn get_components_mut(&mut self) -> &mut [Component]`

Returns a mutable components list.

```
use sysinfo::{ComponentExt, System, SystemExt};

let mut s = System::new_all();
for component in s.get_components_mut() {
    component.refresh();
}
```

### `pub fn get_disks(&self) -> &[Disk]`

Returns the disks list.

```
use sysinfo::{DiskExt, System, SystemExt};

let s = System::new_all();
for disk in s.get_disks() {
    println!("{:?}", disk.get_name());
}
```

### `pub fn get_users(&self) -> &[User]`

Returns the users list.

```
use sysinfo::{System, SystemExt, UserExt};

let mut s = System::new_all();
for user in s.get_users() {
    println!("{} is in {} groups", user.get_name(), user.get_groups().len());
}
```

### `pub fn get_disks_mut(&mut self) -> &mut [Disk]`

Returns the disks list.

```
use sysinfo::{DiskExt, System, SystemExt};

let mut s = System::new_all();
for disk in s.get_disks_mut() {
    disk.refresh();
}
```

### `pub fn get_networks(&self) -> &Networks`

Returns the network interfaces object.

```
use sysinfo::{NetworkExt, NetworksExt, System, SystemExt};

let s = System::new_all();
let networks = s.get_networks();
for (interface_name, data) in networks {
    println!(
        "[{}] in: {}, out: {}",
        interface_name,
        data.get_received(),
        data.get_transmitted(),
    );
}
```

### `pub fn get_networks_mut(&mut self) -> &mut Networks`

Returns a mutable access to network interfaces.

```
use sysinfo::{NetworkExt, NetworksExt, System, SystemExt};

let mut s = System::new_all();
let networks = s.get_networks_mut();
networks.refresh_networks_list();
```

### `pub fn get_uptime(&self) -> u64`

Returns system uptime (in seconds).

```
use sysinfo::{System, SystemExt};

let s = System::new_all();
println!("System running since {} seconds", s.get_uptime());
```

### `pub fn get_boot_time(&self) -> u64`

Returns the time (in seconds) when the system booted since UNIX epoch.

```
use sysinfo::{System, SystemExt};

let s = System::new();
println!("System booted at {} seconds", s.get_boot_time());
```

### `pub fn get_load_average(&self) -> LoadAvg`

Returns the system load average value.

```
use sysinfo::{System, SystemExt};

let s = System::new_all();
let load_avg = s.get_load_average();
println!(
    "one minute: {}%, five minutes: {}%, fifteen minutes: {}%",
    load_avg.one,
    load_avg.five,
    load_avg.fifteen,
);
```

### `pub fn get_name(&self) -> Option<String>`

Returns the system name.

**Important**: this information is computed every time this function is called.

```
use sysinfo::{System, SystemExt};

let s = System::new();
println!("OS: {:?}", s.get_name());
```

### `pub fn get_kernel_version(&self) -> Option<String>`

Returns the system's kernel version.

**Important**: this information is computed every time this function is called.

```
use sysinfo::{System, SystemExt};

let s = System::new();
println!("kernel version: {:?}", s.get_kernel_version());
```

### `pub fn get_os_version(&self) -> Option<String>`

Returns the system version (e.g. for MacOS this will return 11.1 rather than the kernel version).

**Important**: this information is computed every time this function is called.

```
use sysinfo::{System, SystemExt};

let s = System::new();
println!("OS version: {:?}", s.get_os_version());
```

### `pub fn get_long_os_version(&self) -> Option<String>`

Returns the system long os version (e.g "MacOS 11.2 BigSur").

**Important**: this information is computed every time this function is called.

```
use sysinfo::{System, SystemExt};

let s = System::new();
println!("Long OS Version: {:?}", s.get_long_os_version());
```

### `pub fn get_host_name(&self) -> Option<String>`

Returns the system hostname based off DNS

**Important**: this information is computed every time this function is called.

```
use sysinfo::{System, SystemExt};

let s = System::new();
println!("Hostname: {:?}", s.get_host_name());
```

Loading content...

## Provided methods

### `pub fn new() -> Self`

Creates a new [`System`](/docs/api/rust/tauri/../../../tauri/api/process/struct.System.html) instance with nothing loaded except the processors list. If you want to load components, network interfaces or the disks, you'll have to use the `refresh_*_list` methods. [`SystemExt::refresh_networks_list`](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#method.refresh_networks_list "SystemExt::refresh_networks_list") for example.

Use the [`refresh_all`](/docs/api/rust/tauri/about:blank#method.refresh_all) method to update its internal information (or any of the `refresh_` method).

```
use sysinfo::{System, SystemExt};

let s = System::new();
```

### `pub fn new_all() -> Self`

Creates a new [`System`](/docs/api/rust/tauri/../../../tauri/api/process/struct.System.html) instance with everything loaded.

It is an equivalent of [`SystemExt::new_with_specifics`](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.new_with_specifics "SystemExt::new_with_specifics")`(`\[`RefreshKind::everything`]`())`.

```
use sysinfo::{System, SystemExt};

let s = System::new_all();
```

### `pub fn refresh_specifics(&mut self, refreshes: RefreshKind)`

Refreshes according to the given \[`RefreshKind`]. It calls the corresponding "refresh\_" methods.

```
use sysinfo::{RefreshKind, System, SystemExt};

let mut s = System::new_all();

// Let's just update networks and processes:
s.refresh_specifics(RefreshKind::new().with_networks().with_processes());
```

### `pub fn refresh_system(&mut self)`

Refreshes system information (RAM, swap, CPU usage and components' temperature).

If you want some more specific refreshes, you might be interested into looking at [`refresh_memory`](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.refresh_memory), [`refresh_cpu`](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#tymethod.refresh_memory) and [`refresh_components`](/docs/api/rust/tauri/../../../tauri/api/process/trait.SystemExt.html#method.refresh_components).

```
use sysinfo::{System, SystemExt};

let mut s = System::new_all();
s.refresh_system();
```

### `pub fn refresh_components(&mut self)`

Refreshes components' temperature.

```
use sysinfo::{System, SystemExt};

let mut s = System::new_all();
s.refresh_components();
```

### `pub fn refresh_disks(&mut self)`

Refreshes the listed disks' information.

```
use sysinfo::{System, SystemExt};

let mut s = System::new_all();
s.refresh_disks();
```

### `pub fn refresh_networks(&mut self)`

Refreshes networks data.

```
use sysinfo::{System, SystemExt};

let mut s = System::new_all();
s.refresh_networks();
```

It is a shortcut for:

```
use sysinfo::{NetworksExt, System, SystemExt};

let mut s = System::new_all();
let networks = s.get_networks_mut();
networks.refresh();
```

### `pub fn refresh_networks_list(&mut self)`

The network list will be updated: removing not existing anymore interfaces and adding new ones.

```
use sysinfo::{System, SystemExt};

let mut s = System::new_all();
s.refresh_networks_list();
```

This is a shortcut for:

```
use sysinfo::{NetworksExt, System, SystemExt};

let mut s = System::new_all();
let networks = s.get_networks_mut();
networks.refresh_networks_list();
```

### `pub fn refresh_all(&mut self)`

Refreshes all system, processes, disks and network interfaces information.

Please note that it doesn't recompute disks list, components list, network interfaces list nor users list.

```
use sysinfo::{System, SystemExt};

let mut s = System::new_all();
s.refresh_all();
```

### `pub fn get_process_by_name(&self, name: &str) -> Vec<&Process, Global>`

Returns a list of process containing the given `name`.

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new_all();
for process in s.get_process_by_name("htop") {
    println!("{} {}", process.pid(), process.name());
}
```

Loading content...

## Implementors

### `impl SystemExt for System`

#### `pub fn new_with_specifics(refreshes: RefreshKind) -> System`

#### `pub fn refresh_components_list(&mut self)`

#### `pub fn refresh_memory(&mut self)`

#### `pub fn refresh_cpu(&mut self)`

#### `pub fn refresh_processes(&mut self)`

#### `pub fn refresh_process(&mut self, pid: i32) -> bool`

#### `pub fn refresh_disks_list(&mut self)`

#### `pub fn refresh_users_list(&mut self)`

#### `pub fn get_processes(&self) -> &HashMap<i32, Process, RandomState>`

#### `pub fn get_process(&self, pid: i32) -> Option<&Process>`

#### `pub fn get_networks(&self) -> &Networks`

#### `pub fn get_networks_mut(&mut self) -> &mut Networks`

#### `pub fn get_global_processor_info(&self) -> &Processor`

#### `pub fn get_processors(&self) -> &[Processor]`

#### `pub fn get_physical_core_count(&self) -> Option<usize>`

#### `pub fn get_total_memory(&self) -> u64`

#### `pub fn get_free_memory(&self) -> u64`

#### `pub fn get_available_memory(&self) -> u64`

#### `pub fn get_used_memory(&self) -> u64`

#### `pub fn get_total_swap(&self) -> u64`

#### `pub fn get_free_swap(&self) -> u64`

#### `pub fn get_used_swap(&self) -> u64`

#### `pub fn get_components(&self) -> &[Component]`

#### `pub fn get_components_mut(&mut self) -> &mut [Component]`

#### `pub fn get_disks(&self) -> &[Disk]`

#### `pub fn get_disks_mut(&mut self) -> &mut [Disk]`

#### `pub fn get_uptime(&self) -> u64`

#### `pub fn get_boot_time(&self) -> u64`

#### `pub fn get_load_average(&self) -> LoadAvg`

#### `pub fn get_users(&self) -> &[User]`

#### `pub fn get_name(&self) -> Option<String>`

#### `pub fn get_long_os_version(&self) -> Option<String>`

#### `pub fn get_host_name(&self) -> Option<String>`

#### `pub fn get_kernel_version(&self) -> Option<String>`

#### `pub fn get_os_version(&self) -> Option<String>`

Loading content...
