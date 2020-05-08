---
title: "enum.ErrorKind"
---

Enum [tauri\\\_api](/api/rust/tauri\_api/index.html)::[ErrorKind](/api/rust/tauri\_api/)
========================================================================================

```rust
pub enum ErrorKind {
    Io([Error](https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html "struct std::io::error::Error")),
    Msg([String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")),
    // some variants omitted
}
```

The kind of an error.

Variants
--------

<span>Io([Error](https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html "struct std::io::error::Error"))</span>

<span>Msg([String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String"))</span>

A convenient variant for String.

Methods
-------

### <span>impl [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

#### <span>pub fn [description](/api/rust/tauri\_api/about:blank#method.description)(&self) -&gt; &[str](https://doc.rust-lang.org/nightly/std/primitive.str.html)</span>

A string describing the error kind.

Trait Implementations
---------------------

### <span>impl [Debug](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

#### <span>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/nightly/std/primitive.unit.html), [Error](https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html "struct core::fmt::Error")&gt;</span>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### <span>impl [Display](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html "trait core::fmt::Display") for [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

#### <span>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)(&self, fmt: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/nightly/std/primitive.unit.html), [Error](https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html "struct core::fmt::Error")&gt;</span>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)

### <span>impl&lt;'a&gt; [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;&'a [str](https://doc.rust-lang.org/nightly/std/primitive.str.html)&gt; for [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

#### <span>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(s: &'a [str](https://doc.rust-lang.org/nightly/std/primitive.str.html)) -&gt; [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

Performs the conversion.

### <span>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](/api/rust/tauri\_api/../tauri\_api/struct.Error.html "struct tauri\_api::Error")&gt; for [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

#### <span>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [Error](/api/rust/tauri\_api/../tauri\_api/struct.Error.html "struct tauri\_api::Error")) -&gt; [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

Performs the conversion.

### <span>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")&gt; for [Error](/api/rust/tauri\_api/../tauri\_api/struct.Error.html "struct tauri\_api::Error")</span>

#### <span>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")) -&gt; [Error](/api/rust/tauri\_api/../tauri\_api/struct.Error.html "struct tauri\_api::Error")</span>

Performs the conversion.

### <span>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")&gt; for [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

#### <span>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(s: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")) -&gt; [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

Performs the conversion.

Auto Trait Implementations
--------------------------

### <span>impl 	&#33;[RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

### <span>impl [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") for [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

### <span>impl [Sync](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "trait core::marker::Sync") for [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

### <span>impl [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

### <span>impl 	&#33;[UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [ErrorKind](/api/rust/tauri\_api/../tauri\_api/enum.ErrorKind.html "enum tauri\_api::ErrorKind")</span>

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

### <span>impl&lt;T&gt; [ToString](https://doc.rust-lang.org/nightly/alloc/string/trait.ToString.html "trait alloc::string::ToString") for T where&lt;br/&gt;    T: [Display](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html "trait core::fmt::Display") + ?[Sized](https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html "trait core::marker::Sized"),</span> 

#### <span>default fn [to\_string](https://doc.rust-lang.org/nightly/alloc/string/trait.ToString.html#tymethod.to\_string)(&self) -&gt; [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")</span>

Converts the given value to a <span>String</span>. [Read more](https://doc.rust-lang.org/nightly/alloc/string/trait.ToString.html#tymethod.to\_string)

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
      