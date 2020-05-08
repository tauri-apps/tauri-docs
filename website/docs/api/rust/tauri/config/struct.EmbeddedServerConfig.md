---
title: "struct.EmbeddedServerConfig"
---

Struct [tauri](/api/rust/tauri/../index.html)::[config](/api/rust/tauri/index.html)::[EmbeddedServerConfig](/api/rust/tauri/)
=============================================================================================================================

```rust
pub struct EmbeddedServerConfig {
    pub host: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String"),
    pub port: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String"),
}
```

Fields
------

<span>host: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")</span><span>port: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")</span>

Trait Implementations
---------------------

### <span>impl [Clone](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html "trait core::clone::Clone") for [EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")</span>

#### <span>fn [clone](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)(&self) -&gt; [EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")</span>

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### <span>fn [clone\_from](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone\_from)(&mut self, source: [&](https://doc.rust-lang.org/nightly/std/primitive.reference.html)Self)</span>1.0.0

Performs copy-assignment from <span>source</span>. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone\_from)

### <span>impl [Debug](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")</span>

#### <span>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/fmt/type.Result.html "type core::fmt::Result")</span>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### <span>impl&lt;'de&gt; [Deserialize](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de&gt; for [EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")</span>

#### <span>fn [deserialize](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html#tymethod.deserialize)&lt;\_\_D&gt;(\_\_deserializer: \_\_D) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;Self, \_\_D::[Error](https://docs.rs/serde/1.0.104/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")&gt; where&lt;br/&gt;    \_\_D: [Deserializer](https://docs.rs/serde/1.0.104/serde/de/trait.Deserializer.html "trait serde::de::Deserializer")&lt;'de&gt;,</span> 

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html#tymethod.deserialize)

### <span>impl [PartialEq](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")&gt; for [EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")</span>

#### <span>fn [eq](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>

This method tests for <span>self</span> and <span>other</span> values to be equal, and is used by <span>==</span>. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### <span>fn [ne](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne)(&self, other: &[EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</span>

This method tests for <span>!=</span>.

### <span>impl [StructuralPartialEq](https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html "trait core::marker::StructuralPartialEq") for [EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")</span>

Auto Trait Implementations
--------------------------

### <span>impl [RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")</span>

### <span>impl [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") for [EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")</span>

### <span>impl [Sync](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "trait core::marker::Sync") for [EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")</span>

### <span>impl [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")</span>

### <span>impl [UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [EmbeddedServerConfig](/api/rust/tauri/../../tauri/config/struct.EmbeddedServerConfig.html "struct tauri::config::EmbeddedServerConfig")</span>

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

### <span>impl&lt;T&gt; [DeserializeOwned](https://docs.rs/serde/1.0.104/serde/de/trait.DeserializeOwned.html "trait serde::de::DeserializeOwned") for T where&lt;br/&gt;    T: [Deserialize](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de&gt;,</span> 

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

#### <span>fn [vzip](/api/rust/tauri/about:blank#method.vzip)(self) -&gt; V</span>
      