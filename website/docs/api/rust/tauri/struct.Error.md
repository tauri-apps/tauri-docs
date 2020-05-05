---
title: "struct.Error"
---

Struct [tauri](/api/rust/tauri/index.html)::[Error](/api/rust/tauri/)
=====================================================================

```rust
pub struct Error(pub [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind"), \_);
```

The Error type.

This tuple struct is made of two elements:

*   an <code>ErrorKind</code> which is used to determine the type of the error.
*   An internal <code>State</code>, not meant for direct use outside of <code>error_chain</code> internals, containing:
    *   a backtrace, generated when the error is created.
    *   an error chain, used for the implementation of <code>Error::cause()</code>.

Methods
-------

### <code>impl [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>pub fn [from_kind](/api/rust/tauri/about:blank#method.from_kind)(kind: [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")) -&gt; [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

Constructs an error from a kind, and generates a backtrace.

#### <code>pub fn [with_chain](/api/rust/tauri/about:blank#method.with_chain)&lt;E, K&gt;(error: E, kind: K) -&gt; [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error") where&lt;br/&gt;    E: [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error") + [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") + 'static,&lt;br/&gt;    K: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt;,</code> 

Constructs a chained error from another error and a kind, and generates a backtrace.

#### <code>pub fn [with_boxed_chain](/api/rust/tauri/about:blank#method.with_boxed_chain)&lt;K&gt;(error: [Box](https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html "struct alloc::boxed::Box")&lt;dyn [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error") + [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send")&gt;, kind: K) -&gt; [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error") where&lt;br/&gt;    K: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt;,</code> 

Construct a chained error from another boxed error and a kind, and generates a backtrace

#### <code>pub fn [kind](/api/rust/tauri/about:blank#method.kind)(&self) -&gt; &[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

Returns the kind of the error.

#### <code>pub fn [iter](/api/rust/tauri/about:blank#method.iter)(&self) -&gt; [Iter](https://docs.rs/error-chain/0.12.2/error_chain/struct.Iter.html "struct error_chain::Iter")</code>

Iterates over the error chain.

#### <code>pub fn [backtrace](/api/rust/tauri/about:blank#method.backtrace)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&[Backtrace](https://docs.rs/backtrace/backtrace/capture/struct.Backtrace.html "struct backtrace::capture::Backtrace")&gt;</code>

Returns the backtrace associated with this error.

#### <code>pub fn [chain_err](/api/rust/tauri/about:blank#method.chain_err)&lt;F, EK&gt;(self, error: F) -&gt; [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error") where&lt;br/&gt;    F: [FnOnce](https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")() -&gt; EK,&lt;br/&gt;    EK: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt;,</code> 

Extends the error chain with a new entry.

#### <code>pub fn [description](/api/rust/tauri/about:blank#method.description)(&self) -&gt; &[str](https://doc.rust-lang.org/nightly/std/primitive.str.html)</code>

A short description of the error. This method is identical to [<code>Error::description()</code>](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#tymethod.description)

Trait Implementations
---------------------

### <code>impl [ChainedError](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html "trait error_chain::ChainedError") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>type [ErrorKind](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#associatedtype.ErrorKind) = [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

Associated kind type.

#### <code>fn [new](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#tymethod.new)(kind: [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind"), state: State) -&gt; [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>fn [from_kind](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#tymethod.from_kind)(kind: Self::[ErrorKind](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#associatedtype.ErrorKind "type error_chain::ChainedError::ErrorKind")) -&gt; Self</code>

Constructs an error from a kind, and generates a backtrace.

#### <code>fn [with_chain](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#tymethod.with_chain)&lt;E, K&gt;(error: E, kind: K) -&gt; Self where&lt;br/&gt;    E: [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error") + [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") + 'static,&lt;br/&gt;    K: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;Self::[ErrorKind](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#associatedtype.ErrorKind "type error_chain::ChainedError::ErrorKind")&gt;,</code> 

Constructs a chained error from another error and a kind, and generates a backtrace.

#### <code>fn [kind](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#tymethod.kind)(&self) -&gt; &Self::[ErrorKind](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#associatedtype.ErrorKind "type error_chain::ChainedError::ErrorKind")</code>

Returns the kind of the error.

#### <code>fn [iter](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#tymethod.iter)(&self) -&gt; [Iter](https://docs.rs/error-chain/0.12.2/error_chain/struct.Iter.html "struct error_chain::Iter")</code>

Iterates over the error chain.

#### <code>fn [chain_err](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#tymethod.chain_err)&lt;F, EK&gt;(self, error: F) -&gt; Self where&lt;br/&gt;    F: [FnOnce](https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")() -&gt; EK,&lt;br/&gt;    EK: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt;,</code> 

Extends the error chain with a new entry.

#### <code>fn [backtrace](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#tymethod.backtrace)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&[Backtrace](https://docs.rs/backtrace/backtrace/capture/struct.Backtrace.html "struct backtrace::capture::Backtrace")&gt;</code>

Returns the backtrace associated with this error.

#### <code>fn [extract_backtrace](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#tymethod.extract_backtrace)(&lt;br/&gt;    e: &(dyn [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error") + [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") + 'static)&lt;br/&gt;) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;InternalBacktrace&gt;</code>

#### <code>fn [display_chain](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#method.display_chain)(&'a self) -&gt; [DisplayChain](https://docs.rs/error-chain/0.12.2/error_chain/struct.DisplayChain.html "struct error_chain::DisplayChain")&lt;'a, Self&gt;</code>

Returns an object which implements <code>Display</code> for printing the full context of this error. [Read more](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#method.display_chain)

### <code>impl [Debug](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/fmt/type.Result.html "type core::fmt::Result")</code>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### <code>impl [Display](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html "trait core::fmt::Display") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>fn [fmt](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")) -&gt; [Result](https://doc.rust-lang.org/nightly/core/fmt/type.Result.html "type core::fmt::Result")</code>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)

### <code>impl [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>fn [description](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.description)(&self) -&gt; &[str](https://doc.rust-lang.org/nightly/std/primitive.str.html)</code>

This method is soft-deprecated. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.description)

#### <code>fn [source](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.source)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&(dyn [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error") + 'static)&gt;</code>

The lower-level source of this error, if any. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.source)

#### <code>fn [cause](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.cause)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&dyn [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error")&gt;</code>1.0.0

Deprecated since 1.33.0:

replaced by Error::source, which can support downcasting

The lower-level cause of this error, if any. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.cause)

#### <code>fn [backtrace](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.backtrace)(&self) -&gt; [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;&[Backtrace](https://doc.rust-lang.org/nightly/std/backtrace/struct.Backtrace.html "struct std::backtrace::Backtrace")&gt;</code>

🔬 This is a nightly-only experimental API. (<code>backtrace</code>)

Returns a stack backtrace, if available, of where this error occurred. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.backtrace)

### <code>impl&lt;'a&gt; [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;&'a [str](https://doc.rust-lang.org/nightly/std/primitive.str.html)&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(s: &'a [str](https://doc.rust-lang.org/nightly/std/primitive.str.html)) -&gt; Self</code>

Performs the conversion.

### <code>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](/api/rust/tauri/../tauri_api/struct.Error.html "struct tauri_api::Error")&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [Error](/api/rust/tauri/../tauri_api/struct.Error.html "struct tauri_api::Error")) -&gt; Self</code>

Performs the conversion.

### <code>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](https://docs.rs/serde_json/1.0.45/serde_json/error/struct.Error.html "struct serde_json::error::Error")&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [Error](https://docs.rs/serde_json/1.0.45/serde_json/error/struct.Error.html "struct serde_json::error::Error")) -&gt; Self</code>

Performs the conversion.

### <code>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;Error&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: Error) -&gt; Self</code>

Performs the conversion.

### <code>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html "struct std::io::error::Error")&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [Error](https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html "struct std::io::error::Error")) -&gt; Self</code>

Performs the conversion.

### <code>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")&gt; for [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")) -&gt; Self</code>

Performs the conversion.

### <code>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(e: [ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")) -&gt; Self</code>

Performs the conversion.

### <code>impl [From](https://doc.rust-lang.org/nightly/core/convert/trait.From.html "trait core::convert::From")&lt;[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")&gt; for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

#### <code>fn [from](https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from)(s: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")) -&gt; Self</code>

Performs the conversion.

Auto Trait Implementations
--------------------------

### <code>impl 	&#33;[RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

### <code>impl [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

### <code>impl 	&#33;[Sync](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "trait core::marker::Sync") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

### <code>impl [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

### <code>impl 	&#33;[UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")</code>

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
      