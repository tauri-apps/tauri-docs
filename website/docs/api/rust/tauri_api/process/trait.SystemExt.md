---
title: "trait.SystemExt"
---

Trait [tauri\\\_api](/docs/api/rust/tauri\_api/../index.html)::[process](/docs/api/rust/tauri\_api/index.html)::[SystemExt](/docs/api/rust/tauri\_api/)
=======================================================================================================================================================

```rust
pub trait SystemExt {
    fn [new\\\_with\\\_specifics](/docs/api/rust/tauri\_api/about:blank#tymethod.new\_with\_specifics)(refreshes: RefreshKind) -&gt; Self;

    fn [refresh\\\_memory](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_memory)(&mut self);

    fn [refresh\\\_cpu](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_cpu)(&mut self);

    fn [refresh\\\_temperatures](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_temperatures)(&mut self);

    fn [refresh\\\_processes](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_processes)(&mut self);

    fn [refresh\\\_process](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_process)(&mut self, pid: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html);

    fn [refresh\\\_disks](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_disks)(&mut self);

    fn [refresh\\\_disk\\\_list](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_disk\_list)(&mut self);

    fn [refresh\\\_network](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_network)(&mut self);

    fn [get\\\_process\\\_list](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_process\_list)(&self) -&gt; &[HashMap](https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html "struct std::collections::hash::map::HashMap")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html), [Process](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.Process.html "struct tauri\_api::process::Process"), [RandomState](https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.RandomState.html "struct std::collections::hash::map::RandomState")\&gt;;

    fn [get\\\_process](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_process)(&self, pid: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&[Process](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.Process.html "struct tauri\_api::process::Process")\&gt;;

    fn [get\\\_processor\\\_list](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_processor\_list)(&self) -&gt; [&\[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)Processor[\]](https://doc.rust-lang.org/nightly/std/primitive.slice.html);

    fn [get\\\_total\\\_memory](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_total\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html);

    fn [get\\\_free\\\_memory](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_free\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html);

    fn [get\\\_used\\\_memory](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_used\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html);

    fn [get\\\_total\\\_swap](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_total\_swap)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html);

    fn [get\\\_free\\\_swap](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_free\_swap)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html);

    fn [get\\\_used\\\_swap](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_used\_swap)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html);

    fn [get\\\_components\\\_list](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_components\_list)(&self) -&gt; [&\[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)Component[\]](https://doc.rust-lang.org/nightly/std/primitive.slice.html);

    fn [get\\\_disks](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_disks)(&self) -&gt; [&\[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)Disk[\]](https://doc.rust-lang.org/nightly/std/primitive.slice.html);

    fn [get\\\_network](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_network)(&self) -&gt; &NetworkData;

    fn [get\\\_uptime](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_uptime)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html);

    fn [new](/docs/api/rust/tauri\_api/about:blank#method.new)() -&gt; Self { ... }

    fn [refresh\\\_specifics](/docs/api/rust/tauri\_api/about:blank#method.refresh\_specifics)(&mut self, refreshes: RefreshKind) { ... }

    fn [refresh\\\_system](/docs/api/rust/tauri\_api/about:blank#method.refresh\_system)(&mut self) { ... }

    fn [refresh\\\_all](/docs/api/rust/tauri\_api/about:blank#method.refresh\_all)(&mut self) { ... }

    fn [get\\\_process\\\_by\\\_name](/docs/api/rust/tauri\_api/about:blank#method.get\_process\_by\_name)(&self, name: &[str](https://doc.rust-lang.org/nightly/std/primitive.str.html)) -&gt; [Vec](https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;&[Process](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.Process.html "struct tauri\_api::process::Process")\&gt; { ... }
}
```

Contains all the methods of the \[<span>System</span>\] type.

Required methods
----------------

### <span>fn [new\_with\_specifics](/docs/api/rust/tauri\_api/about:blank#tymethod.new\_with\_specifics)(refreshes: RefreshKind) -&gt; Self</span>

Creates a new \[<span>System</span>\] instance and refresh the data corresponding to the given \[<span>RefreshKind</span>\].

[Example](/docs/api/rust/tauri\_api/about:blank#example)
========================================================

```rust
use sysinfo::{RefreshKind, System, SystemExt};

// We want everything except disks.
let mut system \= System::new\\\_with\\\_specifics(RefreshKind::everything().without\\\_disk\\\_list());

assert\\\_eq!(system.get\\\_disks().len(), 0);
assert!(system.get\\\_process\\\_list().len() \&gt; 0);

// If you want the disks list afterwards, just call the corresponding
// "refresh\\\_disk\\\_list":
system.refresh\\\_disk\\\_list();
let disks \= system.get\\\_disks();
```

### <span>fn [refresh\_memory](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_memory)(&mut self)</span>

Refresh RAM and SWAP usage.

### <span>fn [refresh\_cpu](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_cpu)(&mut self)</span>

Refresh CPU usage.

### <span>fn [refresh\_temperatures](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_temperatures)(&mut self)</span>

Refresh components' temperature.

### <span>fn [refresh\_processes](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_processes)(&mut self)</span>

Get all processes and update their information.

### <span>fn [refresh\_process](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_process)(&mut self, pid: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>

Refresh &lt;em&gt;only&lt;/em&gt; the process corresponding to <span>pid</span>. Returns <span>false</span> if the process doesn't exist.

### <span>fn [refresh\_disks](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_disks)(&mut self)</span>

Refreshes the listed disks' information.

### <span>fn [refresh\_disk\_list](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_disk\_list)(&mut self)</span>

The disk list will be emptied then completely recomputed.

### <span>fn [refresh\_network](/docs/api/rust/tauri\_api/about:blank#tymethod.refresh\_network)(&mut self)</span>

Refresh data network.

### <span>fn [get\_process\_list](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_process\_list)(&self) -&gt; &[HashMap](https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html "struct std::collections::hash::map::HashMap")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html), [Process](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.Process.html "struct tauri\_api::process::Process"), [RandomState](https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.RandomState.html "struct std::collections::hash::map::RandomState")&gt;</span>

Returns the process list.

### <span>fn [get\_process](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_process)(&self, pid: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&[Process](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.Process.html "struct tauri\_api::process::Process")&gt;</span>

Returns the process corresponding to the given pid or <span>None</span> if no such process exists.

### <span>fn [get\_processor\_list](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_processor\_list)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)Processor[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

The first processor in the array is the "main" one (aka the addition of all the others).

### <span>fn [get\_total\_memory](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_total\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns total RAM size in KiB.

### <span>fn [get\_free\_memory](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_free\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns free RAM size in KiB.

### <span>fn [get\_used\_memory](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_used\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns used RAM size in KiB.

### <span>fn [get\_total\_swap](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_total\_swap)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns SWAP size in KiB.

### <span>fn [get\_free\_swap](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_free\_swap)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns free SWAP size in KiB.

### <span>fn [get\_used\_swap](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_used\_swap)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns used SWAP size in KiB.

### <span>fn [get\_components\_list](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_components\_list)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)Component[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

Returns components list.

### <span>fn [get\_disks](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_disks)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)Disk[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

Returns disks' list.

### <span>fn [get\_network](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_network)(&self) -&gt; &NetworkData</span>

Returns network data.

### <span>fn [get\_uptime](/docs/api/rust/tauri\_api/about:blank#tymethod.get\_uptime)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns system uptime.

Loading content...

Provided methods
----------------

### <span>fn [new](/docs/api/rust/tauri\_api/about:blank#method.new)() -&gt; Self</span>

Creates a new \[<span>System</span>\] instance. It only contains the disks' list and the processes list at this stage. Use the [<span>refresh\_all</span>](/docs/api/rust/tauri\_api/about:blank#method.refresh\_all) method to update its internal information (or any of the <span>refresh\_</span> method).

### <span>fn [refresh\_specifics](/docs/api/rust/tauri\_api/about:blank#method.refresh\_specifics)(&mut self, refreshes: RefreshKind)</span>

Refreshes according to the given \[<span>RefreshKind</span>\]. It calls the corresponding "refresh\\\_" methods.

[Examples](/docs/api/rust/tauri\_api/about:blank#examples)
==========================================================

```rust
use sysinfo::{RefreshKind, System, SystemExt};

let mut s \= System::new();

// Let's just update network data and processes:
s.refresh\\\_specifics(RefreshKind::new().with\\\_network().with\\\_processes());
```

### <span>fn [refresh\_system](/docs/api/rust/tauri\_api/about:blank#method.refresh\_system)(&mut self)</span>

Refresh system information (such as memory, swap, CPU usage and components' temperature).

If you want some more specific refresh, you might be interested into looking at [<span>refresh\_memory</span>](/docs/api/rust/tauri\_api/systemext::refresh\_memory), [<span>refresh\_cpu</span>](/docs/api/rust/tauri\_api/systemext::refresh\_memory) and [<span>refresh\_temperatures</span>](/docs/api/rust/tauri\_api/systemext::refresh\_temperatures).

### <span>fn [refresh\_all](/docs/api/rust/tauri\_api/about:blank#method.refresh\_all)(&mut self)</span>

Refreshes all system, processes and disks information.

### <span>fn [get\_process\_by\_name](/docs/api/rust/tauri\_api/about:blank#method.get\_process\_by\_name)(&self, name: &[str](https://doc.rust-lang.org/nightly/std/primitive.str.html)) -&gt; [Vec](https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;&[Process](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.Process.html "struct tauri\_api::process::Process")&gt;</span>

Returns a list of process containing the given <span>name</span>.

Loading content...

Implementors
------------

### <span>impl SystemExt for [System](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.System.html "struct tauri\_api::process::System")</span>

#### <span>fn [new\_with\_specifics](/docs/api/rust/tauri\_api/about:blank#method.new\_with\_specifics)(refreshes: RefreshKind) -&gt; [System](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.System.html "struct tauri\_api::process::System")</span>

#### <span>fn [refresh\_memory](/docs/api/rust/tauri\_api/about:blank#method.refresh\_memory)(&mut self)</span>

#### <span>fn [refresh\_cpu](/docs/api/rust/tauri\_api/about:blank#method.refresh\_cpu)(&mut self)</span>

#### <span>fn [refresh\_temperatures](/docs/api/rust/tauri\_api/about:blank#method.refresh\_temperatures)(&mut self)</span>

#### <span>fn [refresh\_processes](/docs/api/rust/tauri\_api/about:blank#method.refresh\_processes)(&mut self)</span>

#### <span>fn [refresh\_process](/docs/api/rust/tauri\_api/about:blank#method.refresh\_process)(&mut self, pid: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>

#### <span>fn [refresh\_disks](/docs/api/rust/tauri\_api/about:blank#method.refresh\_disks)(&mut self)</span>

#### <span>fn [refresh\_disk\_list](/docs/api/rust/tauri\_api/about:blank#method.refresh\_disk\_list)(&mut self)</span>

#### <span>fn [refresh\_network](/docs/api/rust/tauri\_api/about:blank#method.refresh\_network)(&mut self)</span>

#### <span>fn [get\_process\_list](/docs/api/rust/tauri\_api/about:blank#method.get\_process\_list)(&self) -&gt; &[HashMap](https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html "struct std::collections::hash::map::HashMap")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html), [Process](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.Process.html "struct tauri\_api::process::Process"), [RandomState](https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.RandomState.html "struct std::collections::hash::map::RandomState")&gt;</span>

#### <span>fn [get\_process](/docs/api/rust/tauri\_api/about:blank#method.get\_process)(&self, pid: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&[Process](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.Process.html "struct tauri\_api::process::Process")&gt;</span>

#### <span>fn [get\_network](/docs/api/rust/tauri\_api/about:blank#method.get\_network)(&self) -&gt; &NetworkData</span>

#### <span>fn [get\_processor\_list](/docs/api/rust/tauri\_api/about:blank#method.get\_processor\_list)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)Processor[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

#### <span>fn [get\_total\_memory](/docs/api/rust/tauri\_api/about:blank#method.get\_total\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

#### <span>fn [get\_free\_memory](/docs/api/rust/tauri\_api/about:blank#method.get\_free\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

#### <span>fn [get\_used\_memory](/docs/api/rust/tauri\_api/about:blank#method.get\_used\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

#### <span>fn [get\_total\_swap](/docs/api/rust/tauri\_api/about:blank#method.get\_total\_swap)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

#### <span>fn [get\_free\_swap](/docs/api/rust/tauri\_api/about:blank#method.get\_free\_swap)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

#### <span>fn [get\_used\_swap](/docs/api/rust/tauri\_api/about:blank#method.get\_used\_swap)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

#### <span>fn [get\_components\_list](/docs/api/rust/tauri\_api/about:blank#method.get\_components\_list)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)Component[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

#### <span>fn [get\_disks](/docs/api/rust/tauri\_api/about:blank#method.get\_disks)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)Disk[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

#### <span>fn [get\_uptime](/docs/api/rust/tauri\_api/about:blank#method.get\_uptime)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Loading content...window.inlined\\\_types=new Set(\[\]);
      