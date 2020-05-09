---
title: "struct.Process"
---

Struct [tauri\\\_utils](/docs/api/rust/tauri\_utils/../index.html)::[process](/docs/api/rust/tauri\_utils/index.html)::[Process](/docs/api/rust/tauri\_utils/)
==============================================================================================================================================================

```rust
pub struct Process {
    pub uid: [u32](https://doc.rust-lang.org/nightly/std/primitive.u32.html),
    pub gid: [u32](https://doc.rust-lang.org/nightly/std/primitive.u32.html),
    pub tasks: [HashMap](https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html "struct std::collections::hash::map::HashMap")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html), [Process](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/struct.Process.html "struct tauri\_utils::process::Process"), [RandomState](https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.RandomState.html "struct std::collections::hash::map::RandomState")\&gt;,
    // some fields omitted
}
```

Struct containing a process' information.

Fields
------

<span>uid: [u32](https://doc.rust-lang.org/nightly/std/primitive.u32.html)</span>

User id of the process owner.

<span>gid: [u32](https://doc.rust-lang.org/nightly/std/primitive.u32.html)</span>

Group id of the process owner.

<span>tasks: [HashMap](https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html "struct std::collections::hash::map::HashMap")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html), [Process](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/struct.Process.html "struct tauri\_utils::process::Process"), [RandomState](https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.RandomState.html "struct std::collections::hash::map::RandomState")&gt;</span>

Tasks run by this process.

Trait Implementations
---------------------

### <span>impl [Debug](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Process](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/struct.Process.html "struct tauri\_utils::process::Process")</span>

#### <span>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/nightly/std/primitive.unit.html), [Error](https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html "struct core::fmt::Error")&gt;</span>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### <span>impl [Drop](https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html "trait core::ops::drop::Drop") for [Process](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/struct.Process.html "struct tauri\_utils::process::Process")</span>

#### <span>fn [drop](https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop)(&mut self)</span>

Executes the destructor for this type. [Read more](https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop)

### <span>impl [ProcessExt](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html "trait tauri\_utils::process::ProcessExt") for [Process](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/struct.Process.html "struct tauri\_utils::process::Process")</span>

#### <span>fn [new](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.new)(pid: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html), parent: [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)&gt;, start\_time: [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)) -&gt; [Process](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/struct.Process.html "struct tauri\_utils::process::Process")</span>

Create a new process only containing the given information. [Read more](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.new)

#### <span>fn [kill](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.kill)(&self, signal: [Signal](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/enum.Signal.html "enum tauri\_utils::process::Signal")) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>

Sends the given <span>signal</span> to the process.

#### <span>fn [name](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.name)(&self) -&gt; &[str](https://doc.rust-lang.org/nightly/std/primitive.str.html)</span>

Returns the name of the process.

#### <span>fn [cmd](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.cmd)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

Returns the command line.

#### <span>fn [exe](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.exe)(&self) -&gt; &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")</span>

Returns the path to the process.

#### <span>fn [pid](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.pid)(&self) -&gt; [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)</span>

Returns the pid of the process.

#### <span>fn [environ](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.environ)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

Returns the environment of the process. [Read more](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.environ)

#### <span>fn [cwd](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.cwd)(&self) -&gt; &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")</span>

Returns the current working directory. [Read more](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.cwd)

#### <span>fn [root](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.root)(&self) -&gt; &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")</span>

Returns the path of the root directory. [Read more](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.root)

#### <span>fn [memory](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns the memory usage (in KiB).

#### <span>fn [virtual\_memory](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.virtual\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns the virtual memory usage (in KiB).

#### <span>fn [parent](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.parent)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)&gt;</span>

Returns the parent pid.

#### <span>fn [status](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.status)(&self) -&gt; ProcessStatus</span>

Returns the status of the processus (idle, run, zombie, etc). <span>None</span> means that <span>sysinfo</span> doesn't have enough rights to get this information.

#### <span>fn [start\_time](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.start\_time)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns the time of process launch (in seconds).

#### <span>fn [cpu\_usage](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/trait.ProcessExt.html#tymethod.cpu\_usage)(&self) -&gt; [f32](https://doc.rust-lang.org/nightly/std/primitive.f32.html)</span>

Returns the total CPU usage.

Auto Trait Implementations
--------------------------

### <span>impl [RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Process](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/struct.Process.html "struct tauri\_utils::process::Process")</span>

### <span>impl [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") for [Process](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/struct.Process.html "struct tauri\_utils::process::Process")</span>

### <span>impl [Sync](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "trait core::marker::Sync") for [Process](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/struct.Process.html "struct tauri\_utils::process::Process")</span>

### <span>impl [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Process](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/struct.Process.html "struct tauri\_utils::process::Process")</span>

### <span>impl [UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Process](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/struct.Process.html "struct tauri\_utils::process::Process")</span>

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
      