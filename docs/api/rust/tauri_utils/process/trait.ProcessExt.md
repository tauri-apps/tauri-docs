---
title: "trait.ProcessExt"
---

# Trait [tauri_utils](/docs/api/rust/tauri_utils/../index.html)::​[process](/docs/api/rust/tauri_utils/index.html)::​[ProcessExt](/docs/api/rust/tauri_utils/)

    pub trait ProcessExt {
        fn new(pid: i32, parent: Option<i32>, start_time: u64) -> Self;

        fn kill(&self, signal: Signal) -> bool;

        fn name(&self) -> &str;

        fn cmd(&self) -> &[String];

        fn exe(&self) -> &Path;

        fn pid(&self) -> i32;

        fn environ(&self) -> &[String];

        fn cwd(&self) -> &Path;

        fn root(&self) -> &Path;

        fn memory(&self) -> u64;

        fn virtual_memory(&self) -> u64;

        fn parent(&self) -> Option<i32>;

        fn status(&self) -> ProcessStatus;

        fn start_time(&self) -> u64;

        fn cpu_usage(&self) -> f32;
    }

Contains all the methods of the `Process` struct.

## Required methods

### `fn new(pid: i32, parent: Option<i32>, start_time: u64) -> Self`

Create a new process only containing the given information.

On windows, the `start_time` argument is ignored.

### `fn kill(&self, signal: Signal) -> bool`

Sends the given `signal` to the process.

### `fn name(&self) -> &str`

Returns the name of the process.

### `fn cmd(&self) -> &[String]`

Returns the command line.

### `fn exe(&self) -> &Path`

Returns the path to the process.

### `fn pid(&self) -> i32`

Returns the pid of the process.

### `fn environ(&self) -> &[String]`

Returns the environment of the process.

Always empty on Windows except for current process.

### `fn cwd(&self) -> &Path`

Returns the current working directory.

Always empty on Windows.

### `fn root(&self) -> &Path`

Returns the path of the root directory.

Always empty on Windows.

### `fn memory(&self) -> u64`

Returns the memory usage (in KiB).

### `fn virtual_memory(&self) -> u64`

Returns the virtual memory usage (in KiB).

### `fn parent(&self) -> Option<i32>`

Returns the parent pid.

### `fn status(&self) -> ProcessStatus`

Returns the status of the processus.

### `fn start_time(&self) -> u64`

Returns the time of process launch (in seconds).

### `fn cpu_usage(&self) -> f32`

Returns the total CPU usage.

Loading content...

## Implementors

### `impl ProcessExt for Process`

#### `fn new(pid: i32, parent: Option<i32>, start_time: u64) -> Process`

#### `fn kill(&self, signal: Signal) -> bool`

#### `fn name(&self) -> &str`

#### `fn cmd(&self) -> &[String]`

#### `fn exe(&self) -> &Path`

#### `fn pid(&self) -> i32`

#### `fn environ(&self) -> &[String]`

#### `fn cwd(&self) -> &Path`

#### `fn root(&self) -> &Path`

#### `fn memory(&self) -> u64`

#### `fn virtual_memory(&self) -> u64`

#### `fn parent(&self) -> Option<i32>`

#### `fn status(&self) -> ProcessStatus`

Returns the status of the processus (idle, run, zombie, etc). `None` means that `sysinfo` doesn't have enough rights to get this information.

#### `fn start_time(&self) -> u64`

#### `fn cpu_usage(&self) -> f32`

Loading content...
      