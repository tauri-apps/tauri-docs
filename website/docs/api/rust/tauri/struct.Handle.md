---
title: "struct.Handle"
---

Struct [tauri](/api/rust/tauri/index.html)::[Handle](/api/rust/tauri/)
======================================================================

```rust
pub struct Handle&lt;T&gt; { /\* fields omitted \*/ }
```

A thread-safe handle to a [<code>WebView</code>](/api/rust/tauri/struct.WebView.html) instance. Used to dispatch closures onto its task queue.

Methods
-------

### <code>impl&lt;T&gt; [Handle](/api/rust/tauri/../tauri/struct.Handle.html "struct tauri::Handle")&lt;T&gt;</code>

#### <code>pub fn [dispatch](/api/rust/tauri/about:blank#method.dispatch)&lt;F&gt;(&self, f: F) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/nightly/std/primitive.unit.html), Error&gt; where&lt;br/&gt;    F: [FnOnce](https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(&mut WebView&lt;T&gt;) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/nightly/std/primitive.unit.html), Error&gt; + [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") + 'static,</code> 

Schedules a closure to be run on the [<code>WebView</code>](/api/rust/tauri/struct.WebView.html) thread.

[Errors](/api/rust/tauri/about:blank#errors)
============================================

Returns [<code>Error::Dispatch</code>](/api/rust/tauri/enum.Error.html#variant.Dispatch) if the [<code>WebView</code>](/api/rust/tauri/struct.WebView.html) has been dropped.

If the closure returns an <code>Err</code>, it will be returned on the next call to [<code>step()</code>](/api/rust/tauri/struct.WebView.html#method.step).

Trait Implementations
---------------------

### <code>impl&lt;T&gt; [Clone](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html "trait core::clone::Clone") for [Handle](/api/rust/tauri/../tauri/struct.Handle.html "struct tauri::Handle")&lt;T&gt;</code>

#### <code>fn [clone](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)(&self) -&gt; [Handle](/api/rust/tauri/../tauri/struct.Handle.html "struct tauri::Handle")&lt;T&gt;</code>

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### <code>fn [clone_from](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/nightly/std/primitive.reference.html)Self)</code>1.0.0

Performs copy-assignment from <code>source</code>. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### <code>impl&lt;T&gt; [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") for [Handle](/api/rust/tauri/../tauri/struct.Handle.html "struct tauri::Handle")&lt;T&gt;</code>

### <code>impl&lt;T&gt; [Sync](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "trait core::marker::Sync") for [Handle](/api/rust/tauri/../tauri/struct.Handle.html "struct tauri::Handle")&lt;T&gt;</code>

Auto Trait Implementations
--------------------------

### <code>impl&lt;T&gt; [RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Handle](/api/rust/tauri/../tauri/struct.Handle.html "struct tauri::Handle")&lt;T&gt; where&lt;br/&gt;    T: [RefUnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe"),</code> 

### <code>impl&lt;T&gt; [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Handle](/api/rust/tauri/../tauri/struct.Handle.html "struct tauri::Handle")&lt;T&gt; where&lt;br/&gt;    T: [Unpin](https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html "trait core::marker::Unpin"),</code> 

### <code>impl&lt;T&gt; [UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Handle](/api/rust/tauri/../tauri/struct.Handle.html "struct tauri::Handle")&lt;T&gt; where&lt;br/&gt;    T: [UnwindSafe](https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe"),</code> 

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
      