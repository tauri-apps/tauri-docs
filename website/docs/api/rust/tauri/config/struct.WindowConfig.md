---
title: "struct.WindowConfig"
---

Struct [tauri](/api/rust/tauri/../index.html)::[config](/api/rust/tauri/index.html)::[WindowConfig](/api/rust/tauri/)
=====================================================================================================================

```rust
pub struct WindowConfig {
    pub width: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html),
    pub height: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html),
    pub resizable: [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html),
    pub title: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String"),
    pub fullscreen: [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html),
}
```

Fields
------

<code>width: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)</code><code>height: [i32](https://doc.rust-lang.org/nightly/std/primitive.i32.html)</code><code>resizable: [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</code><code>title: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")</code><code>fullscreen: [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</code>

Trait Implementations
---------------------

### <code>impl [Clone](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html "trait core::clone::Clone") for [WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")</code>

#### <code>fn [clone](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)(&self) -&gt; [WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")</code>

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### <code>fn [clone_from](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/nightly/std/primitive.reference.html)Self)</code>1.0.0

Performs copy-assignment from <code>source</code>. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### <code>impl [Debug](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")</code>

#### <code>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/fmt/type.Result.html "type core::fmt::Result")</code>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### <code>impl&lt;'de&gt; [Deserialize](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de&gt; for [WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")</code>

#### <code>fn [deserialize](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html#tymethod.deserialize)&lt;__D&gt;(__deserializer: __D) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;Self, __D::[Error](https://docs.rs/serde/1.0.104/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")&gt; where&lt;br/&gt;    __D: [Deserializer](https://docs.rs/serde/1.0.104/serde/de/trait.Deserializer.html "trait serde::de::Deserializer")&lt;'de&gt;,</code> 

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html#tymethod.deserialize)

### <code>impl [PartialEq](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")&gt; for [WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")</code>

#### <code>fn [eq](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</code>

This method tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### <code>fn [ne](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne)(&self, other: &[WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")) -&gt; [bool](https://doc.rust-lang.org/nightly/std/primitive.bool.html)</code>

This method tests for <code>!=</code>.

### <code>impl [StructuralPartialEq](https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html "trait core::marker::StructuralPartialEq") for [WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")</code>

Auto Trait Implementations
--------------------------

### <code>impl [RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")</code>

### <code>impl [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") for [WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")</code>

### <code>impl [Sync](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "trait core::marker::Sync") for [WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")</code>

### <code>impl [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")</code>

### <code>impl [UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [WindowConfig](/api/rust/tauri/../../tauri/config/struct.WindowConfig.html "struct tauri::config::WindowConfig")</code>

Blanket Implementations
-----------------------

### <code>impl&lt;T&gt; [Any](https://doc.rust-lang.org/nightly/core/any/trait.Any.html "trait core::any::Any") for T where&lt;br/&gt;    T: 'static + ?[Sized](https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html "trait core::marker::Sized"),</code> 

#### <code>fn [type_id](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)(&self) -&gt; [TypeId](https://doc.rust-lang.org/nightly/core/any/struct.TypeId.html "struct core::any::TypeId")</code>

Gets the <code>TypeId</code> of <code>self</code>. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### <code>impl&lt;T&gt; [Borrow](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html "trait core::borrow::Borrow")&lt;T&gt; for T where&lt;br/&gt;    T: ?[Sized](https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html "trait core::marker::Sized"),</code> 

#### <code>fn [borrow](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)(&self) -&gt; [&](https://doc.rust-lang.org/nightly/std/primitive.reference.html)T</code>

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### <code>impl&lt;T&gt; [BorrowMut](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html "trait core::borrow::BorrowMut")&lt;T&gt; for T where&lt;br/&gt;    T: ?[Sized](https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html "trait core::marker::Sized"),</code> 

#### <code>fn [borrow_mut](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)(&mut self) -&gt; [&mut](https://doc.rust-lang.org/nightly/std/primitive.reference.html) T</code>

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### <code>impl&lt;T&gt; [DeserializeOwned](https://docs.rs/serde/1.0.104/serde/de/trait.DeserializeOwned.html "trait serde::de::DeserializeOwned") for T where&lt;br/&gt;    T: [Deserialize](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de&gt;,</code> 

### <code>impl&lt;T&gt; [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;T&gt; for T</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(t: T) -&gt; T</code>

Performs the conversion.

### <code>impl&lt;T, U&gt; [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;U&gt; for T where&lt;br/&gt;    U: [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;T&gt;,</code> 

#### <code>fn [into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html#tymethod.into)(self) -&gt; U</code>

Performs the conversion.

### <code>impl&lt;T&gt; [ToOwned](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html "trait alloc::borrow::ToOwned") for T where&lt;br/&gt;    T: [Clone](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html "trait core::clone::Clone"),</code> 

#### <code>type [Owned](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#associatedtype.Owned) = T</code>

The resulting type after obtaining ownership.

#### <code>fn [to_owned](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)(&self) -&gt; T</code>

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### <code>fn [clone_into](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)(&self, target: [&mut](https://doc.rust-lang.org/nightly/std/primitive.reference.html) T)</code>

🔬 This is a nightly-only experimental API. (<code>toowned_clone_into</code>)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

### <code>impl&lt;T, U&gt; [TryFrom](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U&gt; for T where&lt;br/&gt;    U: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;T&gt;,</code> 

#### <code>type [Error](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error) = [Infallible](https://doc.rust-lang.org/nightly/core/convert/enum.Infallible.html "enum core::convert::Infallible")</code>

The type returned in the event of a conversion error.

#### <code>fn [try_from](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#tymethod.try_from)(value: U) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;T, &lt;T as [TryFrom](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U&gt;&gt;::[Error](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")&gt;</code>

Performs the conversion.

### <code>impl&lt;T, U&gt; [TryInto](https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html "trait core::convert::TryInto")&lt;U&gt; for T where&lt;br/&gt;    U: [TryFrom](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T&gt;,</code> 

#### <code>type [Error](https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html#associatedtype.Error) = &lt;U as [TryFrom](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T&gt;&gt;::[Error](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")</code>

The type returned in the event of a conversion error.

#### <code>fn [try_into](https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html#tymethod.try_into)(self) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;U, &lt;U as [TryFrom](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T&gt;&gt;::[Error](https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")&gt;</code>

Performs the conversion.

### <code>impl&lt;V, T&gt; VZip&lt;V&gt; for T where&lt;br/&gt;    V: MultiLane&lt;T&gt;,</code> 

#### <code>fn [vzip](/api/rust/tauri/about:blank#method.vzip)(self) -&gt; V</code>
      