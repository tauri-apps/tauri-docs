---
title: "trait.ProcessExt"
---

# Trait [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[process](/docs/api/rust/tauri/index.html)::​[ProcessExt](/docs/api/rust/tauri/)

```
pub trait ProcessExt: Debug {
    pub fn kill(&self, signal: Signal) -> bool;

    pub fn name(&self) -> &str;

    pub fn cmd(&self) -> &[String];

    pub fn exe(&self) -> &Path;

    pub fn pid(&self) -> i32;

    pub fn environ(&self) -> &[String];

    pub fn cwd(&self) -> &Path;

    pub fn root(&self) -> &Path;

    pub fn memory(&self) -> u64;

    pub fn virtual_memory(&self) -> u64;

    pub fn parent(&self) -> Option<i32>;

    pub fn status(&self) -> ProcessStatus;

    pub fn start_time(&self) -> u64;

    pub fn cpu_usage(&self) -> f32;

    pub fn disk_usage(&self) -> DiskUsage;
}
```

Contains all the methods of the [`Process`](/docs/api/rust/tauri/../../../tauri/api/process/struct.Process.html "crate::Process") struct.

## Required methods

### `pub fn kill(&self, signal: Signal) -> bool`

Sends the given `signal` to the process.

```
use sysinfo::{ProcessExt, Signal, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    process.kill(Signal::Kill);
}
```

### `pub fn name(&self) -> &str`

Returns the name of the process.

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    println!("{}", process.name());
}
```

### `pub fn cmd(&self) -> &[String]`

Returns the command line.

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    println!("{:?}", process.cmd());
}
```

### `pub fn exe(&self) -> &Path`

Returns the path to the process.

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    println!("{}", process.exe().display());
}
```

### `pub fn pid(&self) -> i32`

Returns the pid of the process.

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    println!("{}", process.pid());
}
```

### `pub fn environ(&self) -> &[String]`

Returns the environment of the process.

Always empty on Windows, except for current process.

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    println!("{:?}", process.environ());
}
```

### `pub fn cwd(&self) -> &Path`

Returns the current working directory.

Always empty on Windows.

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    println!("{}", process.cwd().display());
}
```

### `pub fn root(&self) -> &Path`

Returns the path of the root directory.

Always empty on Windows.

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    println!("{}", process.root().display());
}
```

### `pub fn memory(&self) -> u64`

Returns the memory usage (in kB).

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    println!("{} kB", process.memory());
}
```

### `pub fn virtual_memory(&self) -> u64`

Returns the virtual memory usage (in kB).

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    println!("{} kB", process.virtual_memory());
}
```

### `pub fn parent(&self) -> Option<i32>`

Returns the parent pid.

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    println!("{:?}", process.parent());
}
```

### `pub fn status(&self) -> ProcessStatus`

Returns the status of the processus.

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    println!("{:?}", process.status());
}
```

### `pub fn start_time(&self) -> u64`

Returns the time of process launch (in seconds).

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    println!("Running since {} seconds", process.start_time());
}
```

### `pub fn cpu_usage(&self) -> f32`

Returns the total CPU usage (in %). Notice that it might be bigger than 100 if run on a multicore machine.

If you want a value between 0% and 100%, divide the returned value by the number of CPU processors.

**Warning**: If you want accurate CPU usage number, better leave a bit of time between two calls of this method (200 ms for example).

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    println!("{}%", process.cpu_usage());
}
```

### `pub fn disk_usage(&self) -> DiskUsage`

Returns number of bytes read and written to disk.

/!\\ On Windows, this method actually returns **ALL** I/O read and written bytes.

```
use sysinfo::{ProcessExt, System, SystemExt};

let s = System::new();
if let Some(process) = s.get_process(1337) {
    let disk_usage = process.disk_usage();
    println!("read bytes   : new/total => {}/{}",
        disk_usage.read_bytes,
        disk_usage.total_read_bytes,
    );
    println!("written bytes: new/total => {}/{}",
        disk_usage.written_bytes,
        disk_usage.total_written_bytes,
    );
}
```

Loading content...

## Implementors

### `impl ProcessExt for Process`

#### `pub fn new(pid: i32, parent: Option<i32>, start_time: u64) -> Process`

#### `pub fn kill(&self, signal: Signal) -> bool`

#### `pub fn name(&self) -> &str`

#### `pub fn cmd(&self) -> &[String]`

#### `pub fn exe(&self) -> &Path`

#### `pub fn pid(&self) -> i32`

#### `pub fn environ(&self) -> &[String]`

#### `pub fn cwd(&self) -> &Path`

#### `pub fn root(&self) -> &Path`

#### `pub fn memory(&self) -> u64`

#### `pub fn virtual_memory(&self) -> u64`

#### `pub fn parent(&self) -> Option<i32>`

#### `pub fn status(&self) -> ProcessStatus`

Returns the status of the processus (idle, run, zombie, etc). `None` means that `sysinfo` doesn't have enough rights to get this information.

#### `pub fn start_time(&self) -> u64`

#### `pub fn cpu_usage(&self) -> f32`

#### `pub fn disk_usage(&self) -> DiskUsage`

Loading content...
