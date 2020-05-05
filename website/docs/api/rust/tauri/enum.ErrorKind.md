---
title: "enum.ErrorKind"
---

Enum [tauri](/api/rust/tauri/index.html)::[ErrorKind](/api/rust/tauri/)
=======================================================================

```rust
pub enum ErrorKind {
    Api([Error](/api/rust/tauri/../tauri_api/struct.Error.html "struct tauri_api::Error")),
    Json([Error](https://docs.rs/serde_json/1.0.45/serde_json/error/struct.Error.html "struct serde_json::error::Error")),
    Webview(Error),
    Io([Error](https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html "struct std::io::error::Error")),
    Msg([String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")),
    Promise([String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")),
    Command([String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")),
    Dialog([String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")),
    FileSystem([String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")),
    // some variants omitted
}
```

The kind of an error.

Variants
--------

<code>Api([Error](/api/rust/tauri/../tauri_api/struct.Error.html "struct tauri_api::Error"))</code>

<code>Json([Error](https://docs.rs/serde_json/1.0.45/serde_json/error/struct.Error.html "struct serde_json::error::Error"))</code>

<code>Webview(Error)</code>

<code>Io([Error](https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html "struct std::io::error::Error"))</code>

<code>Msg([String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String"))</code>

A convenient variant for String.

<code>Promise([String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String"))</code>

<code>Command([String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String"))</code>

<code>Dialog([String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String"))</code>

<code>FileSystem([String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String"))</code>

Methods
-------

### <code>impl [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

#### <code>pub fn [description](/api/rust/tauri/about:blank#method.description)(&self) -&gt; &[str](https://doc.rust-lang.org/nightly/std/primitive.str.html)</code>

A string describing the error kind.

Trait Implementations
---------------------

### <code>impl [Debug](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

#### <code>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/fmt/type.Result.html "type core::fmt::Result")</code>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### <code>impl [Display](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html "trait core::fmt::Display") for [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

#### <code>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)(&self, fmt: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/fmt/type.Result.html "type core::fmt::Result")</code>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)

### <code>impl&lt;'a&gt; [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;&'a [str](https://doc.rust-lang.org/nightly/std/primitive.str.html)&gt; for [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(s: &'a [str](https://doc.rust-lang.org/nightly/std/primitive.str.html)) -&gt; Self</code>

Performs the conversion.

### <code>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")&gt; for [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")) -&gt; Self</code>

Performs the conversion.

### <code>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")) -&gt; Self</code>

Performs the conversion.

### <code>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")&gt; for [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(s: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")) -&gt; Self</code>

Performs the conversion.

Auto Trait Implementations
--------------------------

### <code>impl 	&#33;[RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

### <code>impl [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") for [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

### <code>impl 	&#33;[Sync](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "trait core::marker::Sync") for [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

### <code>impl [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

### <code>impl 	&#33;[UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

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

### <code>impl&lt;T&gt; [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;T&gt; for T</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(t: T) -&gt; T</code>

Performs the conversion.

### <code>impl&lt;T, U&gt; [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;U&gt; for T where&lt;br/&gt;    U: [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;T&gt;,</code> 

#### <code>fn [into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html#tymethod.into)(self) -&gt; U</code>

Performs the conversion.

### <code>impl&lt;T&gt; [ToString](https://doc.rust-lang.org/nightly/alloc/string/trait.ToString.html "trait alloc::string::ToString") for T where&lt;br/&gt;    T: [Display](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html "trait core::fmt::Display") + ?[Sized](https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html "trait core::marker::Sized"),</code> 

#### <code>default fn [to_string](https://doc.rust-lang.org/nightly/alloc/string/trait.ToString.html#tymethod.to_string)(&self) -&gt; [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")</code>

Converts the given value to a <code>String</code>. [Read more](https://doc.rust-lang.org/nightly/alloc/string/trait.ToString.html#tymethod.to_string)

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
      