---
title: "struct.System"
---

Struct [tauri\\\_api](/docs/api/rust/tauri\_api/../index.html)::[process](/docs/api/rust/tauri\_api/index.html)::[System](/docs/api/rust/tauri\_api/)
=====================================================================================================================================================

```rust
pub struct System { /\* fields omitted \*/ }
```

Structs containing system's information.

Trait Implementations
---------------------

### <span>impl [Debug](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [System](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.System.html "struct tauri\_api::process::System")</span>

#### <span>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/nightly/std/primitive.unit.html), [Error](https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html "struct core::fmt::Error")&gt;</span>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### <span>impl [Default](https://doc.rust-lang.org/nightly/core/default/trait.Default.html "trait core::default::Default") for [System](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.System.html "struct tauri\_api::process::System")</span>

#### <span>fn [default](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)() -&gt; [System](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.System.html "struct tauri\_api::process::System")</span>

Returns the "default value" for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

### <span>impl [SystemExt](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html "trait tauri\_api::process::SystemExt") for [System](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.System.html "struct tauri\_api::process::System")</span>

#### <span>fn [new\_with\_specifics](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.new\_with\_specifics)(refreshes: RefreshKind) -&gt; [System](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.System.html "struct tauri\_api::process::System")</span>

Creates a new \[<span>System</span>\] instance and refresh the data corresponding to the given \[<span>RefreshKind</span>\]. [Read more](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.new\_with\_specifics)

#### <span>fn [refresh\_memory](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.refresh\_memory)(&mut self)</span>

Refresh RAM and SWAP usage.

#### <span>fn [refresh\_cpu](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.refresh\_cpu)(&mut self)</span>

Refresh CPU usage.

#### <span>fn [refresh\_temperatures](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.refresh\_temperatures)(&mut self)</span>

Refresh components' temperature.

#### <span>fn [refresh\_processes](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.refresh\_processes)(&mut self)</span>

Get all processes and update their information.

#### <span>fn [refresh\_process](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.refresh\_process)(&mut self, pid: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>

Refresh only the process corresponding to <span>pid</span>. Returns <span>false</span> if the process doesn't exist. [Read more](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.refresh\_process)

#### <span>fn [refresh\_disks](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.refresh\_disks)(&mut self)</span>

Refreshes the listed disks' information.

#### <span>fn [refresh\_disk\_list](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.refresh\_disk\_list)(&mut self)</span>

The disk list will be emptied then completely recomputed.

#### <span>fn [refresh\_network](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.refresh\_network)(&mut self)</span>

Refresh data network.

#### <span>fn [get\_process\_list](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.get\_process\_list)(&self) -&gt; &[HashMap](https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html "struct std::collections::hash::map::HashMap")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html), [Process](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.Process.html "struct tauri\_api::process::Process"), [RandomState](https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.RandomState.html "struct std::collections::hash::map::RandomState")&gt;</span>

Returns the process list.

#### <span>fn [get\_process](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.get\_process)(&self, pid: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&[Process](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.Process.html "struct tauri\_api::process::Process")&gt;</span>

Returns the process corresponding to the given pid or <span>None</span> if no such process exists.

#### <span>fn [get\_network](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.get\_network)(&self) -&gt; &NetworkData</span>

Returns network data.

#### <span>fn [get\_processor\_list](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.get\_processor\_list)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)Processor[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

The first processor in the array is the "main" one (aka the addition of all the others).

#### <span>fn [get\_total\_memory](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.get\_total\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns total RAM size in KiB.

#### <span>fn [get\_free\_memory](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.get\_free\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns free RAM size in KiB.

#### <span>fn [get\_used\_memory](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.get\_used\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns used RAM size in KiB.

#### <span>fn [get\_total\_swap](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.get\_total\_swap)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns SWAP size in KiB.

#### <span>fn [get\_free\_swap](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.get\_free\_swap)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns free SWAP size in KiB.

#### <span>fn [get\_used\_swap](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.get\_used\_swap)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns used SWAP size in KiB.

#### <span>fn [get\_components\_list](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.get\_components\_list)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)Component[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

Returns components list.

#### <span>fn [get\_disks](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.get\_disks)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)Disk[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

Returns disks' list.

#### <span>fn [get\_uptime](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#tymethod.get\_uptime)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns system uptime.

#### <span>fn [new](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#method.new)() -&gt; Self</span>

Creates a new \[<span>System</span>\] instance. It only contains the disks' list and the processes list at this stage. Use the \[<span>refresh\_all</span>\] method to update its internal information (or any of the <span>refresh\_</span> method). [Read more](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#method.new)

#### <span>fn [refresh\_specifics](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#method.refresh\_specifics)(&mut self, refreshes: RefreshKind)</span>

Refreshes according to the given \[<span>RefreshKind</span>\]. It calls the corresponding "refresh\\\_" methods. [Read more](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#method.refresh\_specifics)

#### <span>fn [refresh\_system](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#method.refresh\_system)(&mut self)</span>

Refresh system information (such as memory, swap, CPU usage and components' temperature). [Read more](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#method.refresh\_system)

#### <span>fn [refresh\_all](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#method.refresh\_all)(&mut self)</span>

Refreshes all system, processes and disks information.

#### <span>fn [get\_process\_by\_name](/docs/api/rust/tauri\_api/../../tauri\_api/process/trait.SystemExt.html#method.get\_process\_by\_name)(&self, name: &[str](https://doc.rust-lang.org/nightly/std/primitive.str.html)) -&gt; [Vec](https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;&[Process](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.Process.html "struct tauri\_api::process::Process")&gt;</span>

Returns a list of process containing the given <span>name</span>.

Auto Trait Implementations
--------------------------

### <span>impl [RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [System](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.System.html "struct tauri\_api::process::System")</span>

### <span>impl [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") for [System](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.System.html "struct tauri\_api::process::System")</span>

### <span>impl [Sync](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "trait core::marker::Sync") for [System](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.System.html "struct tauri\_api::process::System")</span>

### <span>impl [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [System](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.System.html "struct tauri\_api::process::System")</span>

### <span>impl [UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [System](/docs/api/rust/tauri\_api/../../tauri\_api/process/struct.System.html "struct tauri\_api::process::System")</span>

Blanket Implementations
-----------------------

### <span>impl&lt;T&gt; [Any](https://doc.rust-lang.org/nightly/core/any/trait.Any.html "trait core::any::Any") for T where&lt;br/&gt;    T: 'static + ?[Sized](https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html "trait core::marker::Sized"),</span> 

#### <span>fn [type\_id](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type\_id)(&self) -&gt; [TypeId](https://doc.rust-lang.org/nightly/core/any/struct.TypeId.html "struct core::any::TypeId")</span>

Gets the <span>TypeId</span> of <span>self</span>. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type\_id)

### <span>impl&lt;T&gt; [Borrow](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html "trait core::borrow::Borrow")&lt;T&gt; for T where&lt;br/&gt;    T: ?[Sized](https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html "trait core::marker::Sized"),</span> 

#### <span>fn [borrow](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)(&self) -&gt; [&](https://doc.rust-lang.org/nightly/std/primitive.reference.html)T</span>

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### <span>impl&lt;T&gt; [BorrowMut](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html "trait core::borrow::BorrowMut")&lt;T&gt; for T where&lt;br/&gt;    T: ?[Sized](https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html "trait core::marker::Sized"),</span> 

#### <span>fn [borrow\_mut](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow\_mut)(&mut self) -&gt; [&mut](https://doc.rust-lang.org/nightly/std/primitive.reference.html) T</span>

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow\_mut)

### <span>impl&lt;T&gt; [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;T&gt; for T</span>

#### <span>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(t: T) -&gt; T</span>

Performs the conversion.

### <span>impl&lt;T, U&gt; [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;U&gt; for T where&lt;br/&gt;    U: [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;T&gt;,</span> 

#### <span>fn [into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html#tymethod.into)(self) -&gt; U</span>

Performs the conversion.

### <span>impl&lt;T, U&gt; [TryFrom](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U&gt; for T where&lt;br/&gt;    U: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;T&gt;,</span> 

#### <span>type [Error](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error) = [Infallible](https://doc.rust-lang.org/nightly/core/convert/enum.Infallible.html "enum core::convert::Infallible")</span>

The type returned in the event of a conversion error.

#### <span>fn [try\_from](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#tymethod.try\_from)(value: U) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;T, &lt;T as [TryFrom](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U&gt;&gt;::[Error](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")&gt;</span>

Performs the conversion.

### <span>impl&lt;T, U&gt; [TryInto](https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html "trait core::convert::TryInto")&lt;U&gt; for T where&lt;br/&gt;    U: [TryFrom](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T&gt;,</span> 

#### <span>type [Error](https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html#associatedtype.Error) = &lt;U as [TryFrom](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T&gt;&gt;::[Error](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")</span>

The type returned in the event of a conversion error.

#### <span>fn [try\_into](https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html#tymethod.try\_into)(self) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;U, &lt;U as [TryFrom](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T&gt;&gt;::[Error](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")&gt;</span>

Performs the conversion.

### <span>impl&lt;V, T&gt; VZip&lt;V&gt; for T where&lt;br/&gt;    V: MultiLane&lt;T&gt;,</span> 

#### <span>fn [vzip](/docs/api/rust/tauri\_api/about:blank#method.vzip)(self) -&gt; V</span>
      