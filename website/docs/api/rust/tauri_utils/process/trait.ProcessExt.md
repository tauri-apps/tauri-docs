---
title: "trait.ProcessExt"
---

Trait [tauri\\\_utils](/docs/api/rust/tauri\_utils/../index.html)::[process](/docs/api/rust/tauri\_utils/index.html)::[ProcessExt](/docs/api/rust/tauri\_utils/)
================================================================================================================================================================

```rust
pub trait ProcessExt {
    fn [new](/docs/api/rust/tauri\_utils/about:blank#tymethod.new)(pid: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html), parent: [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)\&gt;, start\\\_time: [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)) -&gt; Self;

    fn [kill](/docs/api/rust/tauri\_utils/about:blank#tymethod.kill)(&self, signal: [Signal](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/enum.Signal.html "enum tauri\_utils::process::Signal")) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html);

    fn [name](/docs/api/rust/tauri\_utils/about:blank#tymethod.name)(&self) -&gt; &[str](https://doc.rust-lang.org/nightly/std/primitive.str.html);

    fn [cmd](/docs/api/rust/tauri\_utils/about:blank#tymethod.cmd)(&self) -&gt; [&\[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")[\]](https://doc.rust-lang.org/nightly/std/primitive.slice.html);

    fn [exe](/docs/api/rust/tauri\_utils/about:blank#tymethod.exe)(&self) -&gt; &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path");

    fn [pid](/docs/api/rust/tauri\_utils/about:blank#tymethod.pid)(&self) -&gt; [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html);

    fn [environ](/docs/api/rust/tauri\_utils/about:blank#tymethod.environ)(&self) -&gt; [&\[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")[\]](https://doc.rust-lang.org/nightly/std/primitive.slice.html);

    fn [cwd](/docs/api/rust/tauri\_utils/about:blank#tymethod.cwd)(&self) -&gt; &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path");

    fn [root](/docs/api/rust/tauri\_utils/about:blank#tymethod.root)(&self) -&gt; &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path");

    fn [memory](/docs/api/rust/tauri\_utils/about:blank#tymethod.memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html);

    fn [virtual\\\_memory](/docs/api/rust/tauri\_utils/about:blank#tymethod.virtual\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html);

    fn [parent](/docs/api/rust/tauri\_utils/about:blank#tymethod.parent)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)\&gt;;

    fn [status](/docs/api/rust/tauri\_utils/about:blank#tymethod.status)(&self) -&gt; ProcessStatus;

    fn [start\\\_time](/docs/api/rust/tauri\_utils/about:blank#tymethod.start\_time)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html);

    fn [cpu\\\_usage](/docs/api/rust/tauri\_utils/about:blank#tymethod.cpu\_usage)(&self) -&gt; [f32](https://doc.rust-lang.org/nightly/std/primitive.f32.html);
}
```

Contains all the methods of the <span>Process</span> struct.

Required methods
----------------

### <span>fn [new](/docs/api/rust/tauri\_utils/about:blank#tymethod.new)(pid: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html), parent: [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)&gt;, start\_time: [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)) -&gt; Self</span>

Create a new process only containing the given information.

On windows, the <span>start\_time</span> argument is ignored.

### <span>fn [kill](/docs/api/rust/tauri\_utils/about:blank#tymethod.kill)(&self, signal: [Signal](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/enum.Signal.html "enum tauri\_utils::process::Signal")) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>

Sends the given <span>signal</span> to the process.

### <span>fn [name](/docs/api/rust/tauri\_utils/about:blank#tymethod.name)(&self) -&gt; &[str](https://doc.rust-lang.org/nightly/std/primitive.str.html)</span>

Returns the name of the process.

### <span>fn [cmd](/docs/api/rust/tauri\_utils/about:blank#tymethod.cmd)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

Returns the command line.

### <span>fn [exe](/docs/api/rust/tauri\_utils/about:blank#tymethod.exe)(&self) -&gt; &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")</span>

Returns the path to the process.

### <span>fn [pid](/docs/api/rust/tauri\_utils/about:blank#tymethod.pid)(&self) -&gt; [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)</span>

Returns the pid of the process.

### <span>fn [environ](/docs/api/rust/tauri\_utils/about:blank#tymethod.environ)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

Returns the environment of the process.

Always empty on Windows except for current process.

### <span>fn [cwd](/docs/api/rust/tauri\_utils/about:blank#tymethod.cwd)(&self) -&gt; &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")</span>

Returns the current working directory.

Always empty on Windows.

### <span>fn [root](/docs/api/rust/tauri\_utils/about:blank#tymethod.root)(&self) -&gt; &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")</span>

Returns the path of the root directory.

Always empty on Windows.

### <span>fn [memory](/docs/api/rust/tauri\_utils/about:blank#tymethod.memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns the memory usage (in KiB).

### <span>fn [virtual\_memory](/docs/api/rust/tauri\_utils/about:blank#tymethod.virtual\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns the virtual memory usage (in KiB).

### <span>fn [parent](/docs/api/rust/tauri\_utils/about:blank#tymethod.parent)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)&gt;</span>

Returns the parent pid.

### <span>fn [status](/docs/api/rust/tauri\_utils/about:blank#tymethod.status)(&self) -&gt; ProcessStatus</span>

Returns the status of the processus.

### <span>fn [start\_time](/docs/api/rust/tauri\_utils/about:blank#tymethod.start\_time)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

Returns the time of process launch (in seconds).

### <span>fn [cpu\_usage](/docs/api/rust/tauri\_utils/about:blank#tymethod.cpu\_usage)(&self) -&gt; [f32](https://doc.rust-lang.org/nightly/std/primitive.f32.html)</span>

Returns the total CPU usage.

Loading content...

Implementors
------------

### <span>impl ProcessExt for [Process](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/struct.Process.html "struct tauri\_utils::process::Process")</span>

#### <span>fn [new](/docs/api/rust/tauri\_utils/about:blank#method.new)(pid: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html), parent: [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)&gt;, start\_time: [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)) -&gt; [Process](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/struct.Process.html "struct tauri\_utils::process::Process")</span>

#### <span>fn [kill](/docs/api/rust/tauri\_utils/about:blank#method.kill)(&self, signal: [Signal](/docs/api/rust/tauri\_utils/../../tauri\_utils/process/enum.Signal.html "enum tauri\_utils::process::Signal")) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>

#### <span>fn [name](/docs/api/rust/tauri\_utils/about:blank#method.name)(&self) -&gt; &[str](https://doc.rust-lang.org/nightly/std/primitive.str.html)</span>

#### <span>fn [cmd](/docs/api/rust/tauri\_utils/about:blank#method.cmd)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

#### <span>fn [exe](/docs/api/rust/tauri\_utils/about:blank#method.exe)(&self) -&gt; &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")</span>

#### <span>fn [pid](/docs/api/rust/tauri\_utils/about:blank#method.pid)(&self) -&gt; [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)</span>

#### <span>fn [environ](/docs/api/rust/tauri\_utils/about:blank#method.environ)(&self) -&gt; [&[](https://doc.rust-lang.org/nightly/std/primitive.slice.html)[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")[]](https://doc.rust-lang.org/nightly/std/primitive.slice.html)</span>

#### <span>fn [cwd](/docs/api/rust/tauri\_utils/about:blank#method.cwd)(&self) -&gt; &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")</span>

#### <span>fn [root](/docs/api/rust/tauri\_utils/about:blank#method.root)(&self) -&gt; &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")</span>

#### <span>fn [memory](/docs/api/rust/tauri\_utils/about:blank#method.memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

#### <span>fn [virtual\_memory](/docs/api/rust/tauri\_utils/about:blank#method.virtual\_memory)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

#### <span>fn [parent](/docs/api/rust/tauri\_utils/about:blank#method.parent)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;[i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)&gt;</span>

#### <span>fn [status](/docs/api/rust/tauri\_utils/about:blank#method.status)(&self) -&gt; ProcessStatus</span>

Returns the status of the processus (idle, run, zombie, etc). <span>None</span> means that <span>sysinfo</span> doesn't have enough rights to get this information.

#### <span>fn [start\_time](/docs/api/rust/tauri\_utils/about:blank#method.start\_time)(&self) -&gt; [u64](https://doc.rust-lang.org/nightly/std/primitive.u64.html)</span>

#### <span>fn [cpu\_usage](/docs/api/rust/tauri\_utils/about:blank#method.cpu\_usage)(&self) -&gt; [f32](https://doc.rust-lang.org/nightly/std/primitive.f32.html)</span>

Loading content...window.inlined\\\_types=new Set(\[\]);
      