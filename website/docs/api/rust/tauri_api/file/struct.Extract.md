---
title: "struct.Extract"
---

Struct [tauri\\\_api](/api/rust/tauri\_api/../index.html)::[file](/api/rust/tauri\_api/index.html)::[Extract](/api/rust/tauri\_api/)
====================================================================================================================================

```rust
pub struct Extract&lt;'a&gt; { /\* fields omitted \*/ }
```

Methods
-------

### <span>impl&lt;'a&gt; [Extract](/api/rust/tauri\_api/../../tauri\_api/file/struct.Extract.html "struct tauri\_api::file::Extract")&lt;'a&gt;</span>

#### <span>pub fn [from\_source](/api/rust/tauri\_api/about:blank#method.from\_source)(source: &'a [Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")) -&gt; [Extract](/api/rust/tauri\_api/../../tauri\_api/file/struct.Extract.html "struct tauri\_api::file::Extract")&lt;'a&gt;</span>

Create an \`Extractor from a source path

#### <span>pub fn [archive\_format](/api/rust/tauri\_api/about:blank#method.archive\_format)(&mut self, format: [ArchiveFormat](/api/rust/tauri\_api/../../tauri\_api/file/enum.ArchiveFormat.html "enum tauri\_api::file::ArchiveFormat")) -&gt; [&mut](https://doc.rust-lang.org/nightly/std/primitive.reference.html) Self</span>

Specify an archive format of the source being extracted. If not specified, the archive format will determined from the file extension.

#### <span>pub fn [extract\_into](/api/rust/tauri\_api/about:blank#method.extract\_into)(&self, into\_dir: &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")) -&gt; [Result](/api/rust/tauri\_api/../../tauri\_api/type.Result.html "type tauri\_api::Result")&lt;[()](https://doc.rust-lang.org/nightly/std/primitive.unit.html)&gt;</span>

Extract an entire source archive into a specified path. If the source is a single compressed file and not an archive, it will be extracted into a file with the same name inside of <span>into\_dir</span>.

#### <span>pub fn [extract\_file](/api/rust/tauri\_api/about:blank#method.extract\_file)&lt;T: [AsRef](https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html "trait core::convert::AsRef")&lt;[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path")&gt;&gt;(&lt;br/&gt;    &self,&lt;br/&gt;    into\_dir: &[Path](https://doc.rust-lang.org/nightly/std/path/struct.Path.html "struct std::path::Path"),&lt;br/&gt;    file\_to\_extract: T&lt;br/&gt;) -&gt; [Result](/api/rust/tauri\_api/../../tauri\_api/type.Result.html "type tauri\_api::Result")&lt;[()](https://doc.rust-lang.org/nightly/std/primitive.unit.html)&gt;</span>

Extract a single file from a source and save to a file of the same name in <span>into\_dir</span>. If the source is a single compressed file, it will be saved with the name <span>file\_to\_extract</span> in the specified <span>into\_dir</span>.

Trait Implementations
---------------------

### <span>impl&lt;'a&gt; [Debug](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Extract](/api/rust/tauri\_api/../../tauri\_api/file/struct.Extract.html "struct tauri\_api::file::Extract")&lt;'a&gt;</span>

#### <span>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/fmt/type.Result.html "type core::fmt::Result")</span>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

Auto Trait Implementations
--------------------------

### <span>impl&lt;'a&gt; [RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Extract](/api/rust/tauri\_api/../../tauri\_api/file/struct.Extract.html "struct tauri\_api::file::Extract")&lt;'a&gt;</span>

### <span>impl&lt;'a&gt; [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") for [Extract](/api/rust/tauri\_api/../../tauri\_api/file/struct.Extract.html "struct tauri\_api::file::Extract")&lt;'a&gt;</span>

### <span>impl&lt;'a&gt; [Sync](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "trait core::marker::Sync") for [Extract](/api/rust/tauri\_api/../../tauri\_api/file/struct.Extract.html "struct tauri\_api::file::Extract")&lt;'a&gt;</span>

### <span>impl&lt;'a&gt; [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Extract](/api/rust/tauri\_api/../../tauri\_api/file/struct.Extract.html "struct tauri\_api::file::Extract")&lt;'a&gt;</span>

### <span>impl&lt;'a&gt; [UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Extract](/api/rust/tauri\_api/../../tauri\_api/file/struct.Extract.html "struct tauri\_api::file::Extract")&lt;'a&gt;</span>

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

#### <span>fn [vzip](/api/rust/tauri\_api/about:blank#method.vzip)(self) -&gt; V</span>
      