---
title: "struct.Error"
---

Struct [tauri](/api/rust/tauri/index.html)::[Error](/api/rust/tauri/)
=====================================================================

```rust
pub struct Error(pub [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind"), \\\_);
```

The Error type.

This tuple struct is made of two elements:

*   an <span>ErrorKind</span> which is used to determine the type of the error.
*   An internal <span>State</span>, not meant for direct use outside of <span>error\_chain</span> internals, containing:
    *   a backtrace, generated when the error is created.
    *   an error chain, used for the implementation of <span>Error::cause()</span>.

Methods
-------

### <span>impl [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

#### <span>pub fn [from\_kind](/api/rust/tauri/about:blank#method.from\_kind)(kind: [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")) -&gt; [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

Constructs an error from a kind, and generates a backtrace.

#### <span>pub fn [with\_chain](/api/rust/tauri/about:blank#method.with\_chain)&lt;E, K&gt;(error: E, kind: K) -&gt; [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error") where&lt;br/&gt;    E: [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error") + [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") + 'static,&lt;br/&gt;    K: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt;,</span> 

Constructs a chained error from another error and a kind, and generates a backtrace.

#### <span>pub fn [with\_boxed\_chain](/api/rust/tauri/about:blank#method.with\_boxed\_chain)&lt;K&gt;(error: [Box](https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html "struct alloc::boxed::Box")&lt;dyn [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error") + [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send")&gt;, kind: K) -&gt; [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error") where&lt;br/&gt;    K: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt;,</span> 

Construct a chained error from another boxed error and a kind, and generates a backtrace

#### <span>pub fn [kind](/api/rust/tauri/about:blank#method.kind)(&self) -&gt; &[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</span>

Returns the kind of the error.

#### <span>pub fn [iter](/api/rust/tauri/about:blank#method.iter)(&self) -&gt; [Iter](https://docs.rs/error-chain/0.12.2/error\_chain/struct.Iter.html "struct error\_chain::Iter")</span>

Iterates over the error chain.

#### <span>pub fn [backtrace](/api/rust/tauri/about:blank#method.backtrace)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&[Backtrace](https://docs.rs/backtrace/backtrace/capture/struct.Backtrace.html "struct backtrace::capture::Backtrace")&gt;</span>

Returns the backtrace associated with this error.

#### <span>pub fn [chain\_err](/api/rust/tauri/about:blank#method.chain\_err)&lt;F, EK&gt;(self, error: F) -&gt; [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error") where&lt;br/&gt;    F: [FnOnce](https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")() -&gt; EK,&lt;br/&gt;    EK: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt;,</span> 

Extends the error chain with a new entry.

#### <span>pub fn [description](/api/rust/tauri/about:blank#method.description)(&self) -&gt; &[str](https://doc.rust-lang.org/nightly/std/primitive.str.html)</span>

A short description of the error. This method is identical to [<span>Error::description()</span>](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#tymethod.description)

Trait Implementations
---------------------

### <span>impl [ChainedError](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html "trait error\_chain::ChainedError") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

#### <span>type [ErrorKind](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#associatedtype.ErrorKind) = [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</span>

Associated kind type.

#### <span>fn [new](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#tymethod.new)(kind: [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind"), state: State) -&gt; [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

#### <span>fn [from\_kind](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#tymethod.from\_kind)(kind: Self::[ErrorKind](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#associatedtype.ErrorKind "type error\_chain::ChainedError::ErrorKind")) -&gt; Self</span>

Constructs an error from a kind, and generates a backtrace.

#### <span>fn [with\_chain](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#tymethod.with\_chain)&lt;E, K&gt;(error: E, kind: K) -&gt; Self where&lt;br/&gt;    E: [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error") + [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") + 'static,&lt;br/&gt;    K: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;Self::[ErrorKind](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#associatedtype.ErrorKind "type error\_chain::ChainedError::ErrorKind")&gt;,</span> 

Constructs a chained error from another error and a kind, and generates a backtrace.

#### <span>fn [kind](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#tymethod.kind)(&self) -&gt; &Self::[ErrorKind](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#associatedtype.ErrorKind "type error\_chain::ChainedError::ErrorKind")</span>

Returns the kind of the error.

#### <span>fn [iter](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#tymethod.iter)(&self) -&gt; [Iter](https://docs.rs/error-chain/0.12.2/error\_chain/struct.Iter.html "struct error\_chain::Iter")</span>

Iterates over the error chain.

#### <span>fn [chain\_err](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#tymethod.chain\_err)&lt;F, EK&gt;(self, error: F) -&gt; Self where&lt;br/&gt;    F: [FnOnce](https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")() -&gt; EK,&lt;br/&gt;    EK: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt;,</span> 

Extends the error chain with a new entry.

#### <span>fn [backtrace](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#tymethod.backtrace)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&[Backtrace](https://docs.rs/backtrace/backtrace/capture/struct.Backtrace.html "struct backtrace::capture::Backtrace")&gt;</span>

Returns the backtrace associated with this error.

#### <span>fn [extract\_backtrace](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#tymethod.extract\_backtrace)(&lt;br/&gt;    e: &(dyn [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error") + [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") + 'static)&lt;br/&gt;) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;InternalBacktrace&gt;</span>

#### <span>fn [display\_chain](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#method.display\_chain)(&'a self) -&gt; [DisplayChain](https://docs.rs/error-chain/0.12.2/error\_chain/struct.DisplayChain.html "struct error\_chain::DisplayChain")&lt;'a, Self&gt;</span>

Returns an object which implements <span>Display</span> for printing the full context of this error. [Read more](https://docs.rs/error-chain/0.12.2/error\_chain/trait.ChainedError.html#method.display\_chain)

### <span>impl [Debug](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

#### <span>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/fmt/type.Result.html "type core::fmt::Result")</span>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### <span>impl [Display](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html "trait core::fmt::Display") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

#### <span>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/fmt/type.Result.html "type core::fmt::Result")</span>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)

### <span>impl [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

#### <span>fn [description](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.description)(&self) -&gt; &[str](https://doc.rust-lang.org/nightly/std/primitive.str.html)</span>

This method is soft-deprecated. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.description)

#### <span>fn [source](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.source)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&(dyn [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error") + 'static)&gt;</span>

The lower-level source of this error, if any. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.source)

#### <span>fn [cause](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.cause)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&dyn [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error")&gt;</span>1.0.0

Deprecated since 1.33.0:

replaced by Error::source, which can support downcasting

The lower-level cause of this error, if any. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.cause)

#### <span>fn [backtrace](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.backtrace)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&[Backtrace](https://doc.rust-lang.org/nightly/std/backtrace/struct.Backtrace.html "struct std::backtrace::Backtrace")&gt;</span>

🔬 This is a nightly-only experimental API. (<span>backtrace</span>)

Returns a stack backtrace, if available, of where this error occurred. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.backtrace)

### <span>impl&lt;'a&gt; [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;&'a [str](https://doc.rust-lang.org/nightly/std/primitive.str.html)&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

#### <span>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(s: &'a [str](https://doc.rust-lang.org/nightly/std/primitive.str.html)) -&gt; Self</span>

Performs the conversion.

### <span>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](/api/rust/tauri/../tauri\_api/struct.Error.html "struct tauri\_api::Error")&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

#### <span>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [Error](/api/rust/tauri/../tauri\_api/struct.Error.html "struct tauri\_api::Error")) -&gt; Self</span>

Performs the conversion.

### <span>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](https://docs.rs/serde\_json/1.0.45/serde\_json/error/struct.Error.html "struct serde\_json::error::Error")&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

#### <span>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [Error](https://docs.rs/serde\_json/1.0.45/serde\_json/error/struct.Error.html "struct serde\_json::error::Error")) -&gt; Self</span>

Performs the conversion.

### <span>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;Error&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

#### <span>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: Error) -&gt; Self</span>

Performs the conversion.

### <span>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html "struct std::io::error::Error")&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

#### <span>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [Error](https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html "struct std::io::error::Error")) -&gt; Self</span>

Performs the conversion.

### <span>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")&gt; for [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</span>

#### <span>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")) -&gt; Self</span>

Performs the conversion.

### <span>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

#### <span>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")) -&gt; Self</span>

Performs the conversion.

### <span>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

#### <span>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(s: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")) -&gt; Self</span>

Performs the conversion.

Auto Trait Implementations
--------------------------

### <span>impl 	&#33;[RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

### <span>impl [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

### <span>impl 	&#33;[Sync](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "trait core::marker::Sync") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

### <span>impl [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

### <span>impl 	&#33;[UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</span>

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

#### <span>fn [vzip](/api/rust/tauri/about:blank#method.vzip)(self) -&gt; V</span>
      