---
title: "struct.Move"
---

Struct [tauri\\\_api](/docs/api/rust/tauri\_api/../index.html)::[file](/docs/api/rust/tauri\_api/index.html)::[Move](/docs/api/rust/tauri\_api/)
================================================================================================================================================

```rust
pub struct Move&lt;'a&gt; { /\* fields omitted \*/ }
```

Moves a file from the given path to the specified destination.

<span>source</span> and <span>dest</span> must be on the same filesystem. If <span>replace\_using\_temp</span> is specified, the destination file will be replaced using the given temporary path.

*   Errors:
    *   Io - copying / renaming

Methods
-------

### <span>impl&lt;'a&gt; [Move](/docs/api/rust/tauri\_api/../../tauri\_api/file/struct.Move.html "struct tauri\_api::file::Move")&lt;'a&gt;</span>

#### <span>pub fn [from\_source](/docs/api/rust/tauri\_api/about:blank#method.from\_source)(source: &'a [Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")) -&gt; [Move](/docs/api/rust/tauri\_api/../../tauri\_api/file/struct.Move.html "struct tauri\_api::file::Move")&lt;'a&gt;</span>

Specify source file

#### <span>pub fn [replace\_using\_temp](/docs/api/rust/tauri\_api/about:blank#method.replace\_using\_temp)(&mut self, temp: &'a [Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")) -&gt; [&mut](https://doc.rust-lang.org/nightly/std/primitive.reference.html) Self</span>

If specified and the destination file already exists, the "destination" file will be moved to the given temporary location before the "source" file is moved to the "destination" file.

In the event of an <span>io</span> error while renaming "source" to "destination", the temporary file will be moved back to "destination".

The <span>temp</span> dir must be explicitly provided since <span>rename</span> operations require files to live on the same filesystem.

#### <span>pub fn [to\_dest](/docs/api/rust/tauri\_api/about:blank#method.to\_dest)(&self, dest: &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")) -&gt; [Result](/docs/api/rust/tauri\_api/../../tauri\_api/type.Result.html "type tauri\_api::Result")&lt;[()](https://doc.rust-lang.org/nightly/std/primitive.unit.html)&gt;</span>

Move source file to specified destination

Trait Implementations
---------------------

### <span>impl&lt;'a&gt; [Debug](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Move](/docs/api/rust/tauri\_api/../../tauri\_api/file/struct.Move.html "struct tauri\_api::file::Move")&lt;'a&gt;</span>

#### <span>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/fmt/type.Result.html "type core::fmt::Result")</span>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

Auto Trait Implementations
--------------------------

### <span>impl&lt;'a&gt; [RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Move](/docs/api/rust/tauri\_api/../../tauri\_api/file/struct.Move.html "struct tauri\_api::file::Move")&lt;'a&gt;</span>

### <span>impl&lt;'a&gt; [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") for [Move](/docs/api/rust/tauri\_api/../../tauri\_api/file/struct.Move.html "struct tauri\_api::file::Move")&lt;'a&gt;</span>

### <span>impl&lt;'a&gt; [Sync](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "trait core::marker::Sync") for [Move](/docs/api/rust/tauri\_api/../../tauri\_api/file/struct.Move.html "struct tauri\_api::file::Move")&lt;'a&gt;</span>

### <span>impl&lt;'a&gt; [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Move](/docs/api/rust/tauri\_api/../../tauri\_api/file/struct.Move.html "struct tauri\_api::file::Move")&lt;'a&gt;</span>

### <span>impl&lt;'a&gt; [UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Move](/docs/api/rust/tauri\_api/../../tauri\_api/file/struct.Move.html "struct tauri\_api::file::Move")&lt;'a&gt;</span>

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
      