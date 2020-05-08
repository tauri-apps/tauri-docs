---
title: "struct.DiskEntry"
---

Struct [tauri\\\_api](/api/rust/tauri\_api/../index.html)::[dir](/api/rust/tauri\_api/index.html)::[DiskEntry](/api/rust/tauri\_api/)
=====================================================================================================================================

```rust
pub struct DiskEntry {
    pub path: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String"),
    pub is\\\_dir: [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html),
    pub name: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String"),
}
```

Fields
------

<span>path: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")</span><span>is\_dir: [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span><span>name: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")</span>

Trait Implementations
---------------------

### <span>impl [Debug](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [DiskEntry](/api/rust/tauri\_api/../../tauri\_api/dir/struct.DiskEntry.html "struct tauri\_api::dir::DiskEntry")</span>

#### <span>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/fmt/type.Result.html "type core::fmt::Result")</span>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### <span>impl [Serialize](https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html "trait serde::ser::Serialize") for [DiskEntry](/api/rust/tauri\_api/../../tauri\_api/dir/struct.DiskEntry.html "struct tauri\_api::dir::DiskEntry")</span>

#### <span>fn [serialize](https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html#tymethod.serialize)&lt;\_\_S&gt;(&self, \_\_serializer: \_\_S) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;\_\_S::[Ok](https://docs.rs/serde/1.0.104/serde/ser/trait.Serializer.html#associatedtype.Ok "type serde::ser::Serializer::Ok"), \_\_S::[Error](https://docs.rs/serde/1.0.104/serde/ser/trait.Serializer.html#associatedtype.Error "type serde::ser::Serializer::Error")&gt; where&lt;br/&gt;    \_\_S: [Serializer](https://docs.rs/serde/1.0.104/serde/ser/trait.Serializer.html "trait serde::ser::Serializer"),</span> 

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html#tymethod.serialize)

Auto Trait Implementations
--------------------------

### <span>impl [RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [DiskEntry](/api/rust/tauri\_api/../../tauri\_api/dir/struct.DiskEntry.html "struct tauri\_api::dir::DiskEntry")</span>

### <span>impl [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") for [DiskEntry](/api/rust/tauri\_api/../../tauri\_api/dir/struct.DiskEntry.html "struct tauri\_api::dir::DiskEntry")</span>

### <span>impl [Sync](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "trait core::marker::Sync") for [DiskEntry](/api/rust/tauri\_api/../../tauri\_api/dir/struct.DiskEntry.html "struct tauri\_api::dir::DiskEntry")</span>

### <span>impl [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [DiskEntry](/api/rust/tauri\_api/../../tauri\_api/dir/struct.DiskEntry.html "struct tauri\_api::dir::DiskEntry")</span>

### <span>impl [UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [DiskEntry](/api/rust/tauri\_api/../../tauri\_api/dir/struct.DiskEntry.html "struct tauri\_api::dir::DiskEntry")</span>

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
      