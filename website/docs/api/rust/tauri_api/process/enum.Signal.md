---
title: "enum.Signal"
---

Enum [tauri\\\_api](/docs/api/rust/tauri\_api/../index.html)::[process](/docs/api/rust/tauri\_api/index.html)::[Signal](/docs/api/rust/tauri\_api/)
===================================================================================================================================================

```rust
#\[repr(C)\] pub enum Signal {
    Hangup,
    Interrupt,
    Quit,
    Illegal,
    Trap,
    Abort,
    Bus,
    FloatingPointException,
    Kill,
    User1,
    Segv,
    User2,
    Pipe,
    Alarm,
    Term,
    Stklft,
    Child,
    Continue,
    Stop,
    TSTP,
    TTIN,
    TTOU,
    Urgent,
    XCPU,
    XFSZ,
    VirtualAlarm,
    Profiling,
    Winch,
    IO,
    Power,
    Sys,
}
```

An enum representing signal on UNIX-like systems.

Variants
--------

<span>Hangup</span>

Hangup detected on controlling terminal or death of controlling process.

<span>Interrupt</span>

Interrupt from keyboard.

<span>Quit</span>

Quit from keyboard.

<span>Illegal</span>

Illegal instruction.

<span>Trap</span>

Trace/breakpoint trap.

<span>Abort</span>

Abort signal from C abort function.

<span>Bus</span>

Bus error (bad memory access).

<span>FloatingPointException</span>

Floating point exception.

<span>Kill</span>

Kill signal.

<span>User1</span>

User-defined signal 1.

<span>Segv</span>

Invalid memory reference.

<span>User2</span>

User-defined signal 2.

<span>Pipe</span>

Broken pipe: write to pipe with no readers.

<span>Alarm</span>

Timer signal from C alarm function.

<span>Term</span>

Termination signal.

<span>Stklft</span>

Stack fault on coprocessor (unused).

<span>Child</span>

Child stopped or terminated.

<span>Continue</span>

Continue if stopped.

<span>Stop</span>

Stop process.

<span>TSTP</span>

Stop typed at terminal.

<span>TTIN</span>

Terminal input for background process.

<span>TTOU</span>

Terminal output for background process.

<span>Urgent</span>

Urgent condition on socket.

<span>XCPU</span>

CPU time limit exceeded.

<span>XFSZ</span>

File size limit exceeded.

<span>VirtualAlarm</span>

Virtual alarm clock.

<span>Profiling</span>

Profiling time expired.

<span>Winch</span>

Windows resize signal.

<span>IO</span>

I/O now possible.

<span>Power</span>

Power failure (System V).

<span>Sys</span>

Bad argument to routine (SVr4).

Trait Implementations
---------------------

### <span>impl [Clone](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html "trait core::clone::Clone") for [Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")</span>

#### <span>fn [clone](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)(&self) -&gt; [Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")</span>

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### <span>fn [clone\_from](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone\_from)(&mut self, source: [&](https://doc.rust-lang.org/nightly/std/primitive.reference.html)Self)</span>1.0.0

Performs copy-assignment from <span>source</span>. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone\_from)

### <span>impl [Copy](https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html "trait core::marker::Copy") for [Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")</span>

### <span>impl [Debug](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")</span>

#### <span>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/nightly/std/primitive.unit.html), [Error](https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html "struct core::fmt::Error")&gt;</span>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### <span>impl [PartialEq](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")&gt; for [Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")</span>

#### <span>fn [eq](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>

This method tests for <span>self</span> and <span>other</span> values to be equal, and is used by <span>==</span>. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### <span>#[must\_use] fn [ne](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/nightly/std/primitive.reference.html)Rhs) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>1.0.0

This method tests for <span>!=</span>.

### <span>impl [PartialOrd](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;[Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")&gt; for [Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")</span>

#### <span>fn [partial\_cmp](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial\_cmp)(&self, other: &[Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;[Ordering](https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")&gt;</span>

This method returns an ordering between <span>self</span> and <span>other</span> values if one exists. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial\_cmp)

#### <span>#[must\_use] fn [lt](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt)(&self, other: [&](https://doc.rust-lang.org/nightly/std/primitive.reference.html)Rhs) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>1.0.0

This method tests less than (for <span>self</span> and <span>other</span>) and is used by the <span>&lt;</span> operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt)

#### <span>#[must\_use] fn [le](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le)(&self, other: [&](https://doc.rust-lang.org/nightly/std/primitive.reference.html)Rhs) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>1.0.0

This method tests less than or equal to (for <span>self</span> and <span>other</span>) and is used by the <span>&lt;=</span> operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le)

#### <span>#[must\_use] fn [gt](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt)(&self, other: [&](https://doc.rust-lang.org/nightly/std/primitive.reference.html)Rhs) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>1.0.0

This method tests greater than (for <span>self</span> and <span>other</span>) and is used by the <span>&gt;</span> operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt)

#### <span>#[must\_use] fn [ge](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge)(&self, other: [&](https://doc.rust-lang.org/nightly/std/primitive.reference.html)Rhs) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>1.0.0

This method tests greater than or equal to (for <span>self</span> and <span>other</span>) and is used by the <span>&gt;=</span> operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge)

### <span>impl [StructuralPartialEq](https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html "trait core::marker::StructuralPartialEq") for [Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")</span>

Auto Trait Implementations
--------------------------

### <span>impl [RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")</span>

### <span>impl [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") for [Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")</span>

### <span>impl [Sync](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "trait core::marker::Sync") for [Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")</span>

### <span>impl [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")</span>

### <span>impl [UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Signal](/docs/api/rust/tauri\_api/../../tauri\_api/process/enum.Signal.html "enum tauri\_api::process::Signal")</span>

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

### <span>impl&lt;T&gt; [ToOwned](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html "trait alloc::borrow::ToOwned") for T where&lt;br/&gt;    T: [Clone](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html "trait core::clone::Clone"),</span> 

#### <span>type [Owned](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#associatedtype.Owned) = T</span>

The resulting type after obtaining ownership.

#### <span>fn [to\_owned](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to\_owned)(&self) -&gt; T</span>

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to\_owned)

#### <span>fn [clone\_into](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone\_into)(&self, target: [&mut](https://doc.rust-lang.org/nightly/std/primitive.reference.html) T)</span>

🔬 This is a nightly-only experimental API. (<span>toowned\_clone\_into</span>)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone\_into)

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
      