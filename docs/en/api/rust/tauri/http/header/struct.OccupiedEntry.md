---
title: Struct tauri::http::header::OccupiedEntry
sidebar_label: struct.OccupiedEntry
custom_edit_url: null
---

  # Struct tauri::http&#x3A;:header::OccupiedEntry,

```rs
pub struct OccupiedEntry<'a, T> { /* fields omitted */ }
```

Expand description

A view into a single occupied location in a `HeaderMap`.

This struct is returned as part of the `Entry` enum.

## Implementations

### impl&lt;'a, T> [OccupiedEntry](/docs/api/rust/tauri/struct.OccupiedEntry "struct tauri::http&#x3A;:header::OccupiedEntry")&lt;'a, T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2738-3037 "goto source code")

#### pub fn [key](/docs/api/rust/tauri/about:blank#method.key)(&self) -> &[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2752 "goto source code")

Returns a reference to the entry’s key.

## Examples

```rs
let mut map = HeaderMap::new();
map.insert(HOST, "world".parse().unwrap());

if let Entry::Occupied(e) = map.entry("host") {
    assert_eq!("host", e.key());
}
```

#### pub fn [get](/docs/api/rust/tauri/about:blank#method.get)(&self) -> [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2779 "goto source code")

Get a reference to the first value in the entry.

Values are stored in insertion order.

## Panics

`get` panics if there are no values associated with the entry.

## Examples

```rs
let mut map = HeaderMap::new();
map.insert(HOST, "hello.world".parse().unwrap());

if let Entry::Occupied(mut e) = map.entry("host") {
    assert_eq!(e.get(), &"hello.world");

    e.append("hello.earth".parse().unwrap());

    assert_eq!(e.get(), &"hello.world");
}
```

#### pub fn [get_mut](/docs/api/rust/tauri/about:blank#method.get_mut)(&mut self) -> [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2803 "goto source code")

Get a mutable reference to the first value in the entry.

Values are stored in insertion order.

## Panics

`get_mut` panics if there are no values associated with the entry.

## Examples

```rs
let mut map = HeaderMap::default();
map.insert(HOST, "hello.world".to_string());

if let Entry::Occupied(mut e) = map.entry("host") {
    e.get_mut().push_str("-2");
    assert_eq!(e.get(), &"hello.world-2");
}
```

#### pub fn [into_mut](/docs/api/rust/tauri/about:blank#method.into_mut)(self) -> [&'a mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2830 "goto source code")

Converts the `OccupiedEntry` into a mutable reference to the **first** value.

The lifetime of the returned reference is bound to the original map.

## Panics

`into_mut` panics if there are no values associated with the entry.

## Examples

```rs
let mut map = HeaderMap::default();
map.insert(HOST, "hello.world".to_string());
map.append(HOST, "hello.earth".to_string());

if let Entry::Occupied(e) = map.entry("host") {
    e.into_mut().push_str("-2");
}

assert_eq!("hello.world-2", map["host"]);
```

#### pub fn [insert](/docs/api/rust/tauri/about:blank#method.insert)(&mut self, value: T) -> T[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2853 "goto source code")

Sets the value of the entry.

All previous values associated with the entry are removed and the first one is returned. See `insert_mult` for an API that returns all values.

## Examples

```rs
let mut map = HeaderMap::new();
map.insert(HOST, "hello.world".parse().unwrap());

if let Entry::Occupied(mut e) = map.entry("host") {
    let mut prev = e.insert("earth".parse().unwrap());
    assert_eq!("hello.world", prev);
}

assert_eq!("earth", map["host"]);
```

#### pub fn [insert_mult](/docs/api/rust/tauri/about:blank#method.insert_mult)(&mut self, value: T) -> [ValueDrain](/docs/api/rust/tauri/struct.ValueDrain "struct tauri::http&#x3A;:header::ValueDrain")&lt;'\_, T>ⓘNotable traits for [ValueDrain](/docs/api/rust/tauri/struct.ValueDrain "struct tauri::http&#x3A;:header::ValueDrain")&lt;'a, T>`impl<'a, T> Iterator for ValueDrain<'a, T>type Item = T;`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2879 "goto source code")

Sets the value of the entry.

This function does the same as `insert` except it returns an iterator that yields all values previously associated with the key.

## Examples

```rs
let mut map = HeaderMap::new();
map.insert(HOST, "world".parse().unwrap());
map.append(HOST, "world2".parse().unwrap());

if let Entry::Occupied(mut e) = map.entry("host") {
    let mut prev = e.insert_mult("earth".parse().unwrap());
    assert_eq!("world", prev.next().unwrap());
    assert_eq!("world2", prev.next().unwrap());
    assert!(prev.next().is_none());
}

assert_eq!("earth", map["host"]);
```

#### pub fn [append](/docs/api/rust/tauri/about:blank#method.append)(&mut self, value: T)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2904 "goto source code")

Insert the value into the entry.

The new value is appended to the end of the entry’s value list. All previous values associated with the entry are retained.

## Examples

```rs
let mut map = HeaderMap::new();
map.insert(HOST, "world".parse().unwrap());

if let Entry::Occupied(mut e) = map.entry("host") {
    e.append("earth".parse().unwrap());
}

let values = map.get_all("host");
let mut i = values.iter();
assert_eq!("world", *i.next().unwrap());
assert_eq!("earth", *i.next().unwrap());
```

#### pub fn [remove](/docs/api/rust/tauri/about:blank#method.remove)(self) -> T[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2929 "goto source code")

Remove the entry from the map.

All values associated with the entry are removed and the first one is returned. See `remove_entry_mult` for an API that returns all values.

## Examples

```rs
let mut map = HeaderMap::new();
map.insert(HOST, "world".parse().unwrap());

if let Entry::Occupied(e) = map.entry("host") {
    let mut prev = e.remove();
    assert_eq!("world", prev);
}

assert!(!map.contains_key("host"));
```

#### pub fn [remove_entry](/docs/api/rust/tauri/about:blank#method.remove_entry)(self) -> [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), T[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2954 "goto source code")

Remove the entry from the map.

The key and all values associated with the entry are removed and the first one is returned. See `remove_entry_mult` for an API that returns all values.

## Examples

```rs
let mut map = HeaderMap::new();
map.insert(HOST, "world".parse().unwrap());

if let Entry::Occupied(e) = map.entry("host") {
    let (key, mut prev) = e.remove_entry();
    assert_eq!("host", key.as_str());
    assert_eq!("world", prev);
}

assert!(!map.contains_key("host"));
```

#### pub fn [remove_entry_mult](/docs/api/rust/tauri/about:blank#method.remove_entry_mult)(self) -> [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), [ValueDrain](/docs/api/rust/tauri/struct.ValueDrain "struct tauri::http&#x3A;:header::ValueDrain")&lt;'a, T>[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2968 "goto source code")

Remove the entry from the map.

The key and all values associated with the entry are removed and returned.

#### pub fn [iter](/docs/api/rust/tauri/about:blank#method.iter)(&self) -> [ValueIter](/docs/api/rust/tauri/struct.ValueIter "struct tauri::http&#x3A;:header::ValueIter")&lt;'\_, T>ⓘNotable traits for [ValueIter](/docs/api/rust/tauri/struct.ValueIter "struct tauri::http&#x3A;:header::ValueIter")&lt;'a, T>`impl<'a, T> Iterator for ValueIter<'a, T> where T: 'a,type Item = &'aT;`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3006 "goto source code")

Returns an iterator visiting all values associated with the entry.

Values are iterated in insertion order.

## Examples

```rs
let mut map = HeaderMap::new();
map.insert(HOST, "world".parse().unwrap());
map.append(HOST, "earth".parse().unwrap());

if let Entry::Occupied(e) = map.entry("host") {
    let mut iter = e.iter();
    assert_eq!(&"world", iter.next().unwrap());
    assert_eq!(&"earth", iter.next().unwrap());
    assert!(iter.next().is_none());
}
```

#### pub fn [iter_mut](/docs/api/rust/tauri/about:blank#method.iter_mut)(&mut self) -> [ValueIterMut](/docs/api/rust/tauri/struct.ValueIterMut "struct tauri::http&#x3A;:header::ValueIterMut")&lt;'\_, T>ⓘNotable traits for [ValueIterMut](/docs/api/rust/tauri/struct.ValueIterMut "struct tauri::http&#x3A;:header::ValueIterMut")&lt;'a, T>`impl<'a, T> Iterator for ValueIterMut<'a, T> where T: 'a,type Item = &'a mutT;`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3034 "goto source code")

Returns an iterator mutably visiting all values associated with the entry.

Values are iterated in insertion order.

## Examples

```rs
let mut map = HeaderMap::default();
map.insert(HOST, "world".to_string());
map.append(HOST, "earth".to_string());

if let Entry::Occupied(mut e) = map.entry("host") {
    for e in e.iter_mut() {
        e.push_str("-boop");
    }
}

let mut values = map.get_all("host");
let mut i = values.iter();
assert_eq!(&"world-boop", i.next().unwrap());
assert_eq!(&"earth-boop", i.next().unwrap());
```

## Trait Implementations

### impl&lt;'a, T> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [OccupiedEntry](/docs/api/rust/tauri/struct.OccupiedEntry "struct tauri::http&#x3A;:header::OccupiedEntry")&lt;'a, T> where T: [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#180 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#180 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl&lt;'a, T> [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator") for [OccupiedEntry](/docs/api/rust/tauri/struct.OccupiedEntry "struct tauri::http&#x3A;:header::OccupiedEntry")&lt;'a, T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3039-3046 "goto source code")

#### type [Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item) = [&'a mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T

The type of the elements being iterated over.

#### type [IntoIter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter) = [ValueIterMut](/docs/api/rust/tauri/struct.ValueIterMut "struct tauri::http&#x3A;:header::ValueIterMut")&lt;'a, T>

Which kind of iterator are we turning this into?

#### pub fn [into_iter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)(self) -> [ValueIterMut](/docs/api/rust/tauri/struct.ValueIterMut "struct tauri::http&#x3A;:header::ValueIterMut")&lt;'a, T>ⓘNotable traits for [ValueIterMut](/docs/api/rust/tauri/struct.ValueIterMut "struct tauri::http&#x3A;:header::ValueIterMut")&lt;'a, T>`impl<'a, T> Iterator for ValueIterMut<'a, T> where T: 'a,type Item = &'a mutT;`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3043 "goto source code")

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

### impl&lt;'a, 'b, T> [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator") for &'b [OccupiedEntry](/docs/api/rust/tauri/struct.OccupiedEntry "struct tauri::http&#x3A;:header::OccupiedEntry")&lt;'a, T> where 'b: 'a,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3048-3055 "goto source code")

#### type [Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item) = [&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T

The type of the elements being iterated over.

#### type [IntoIter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter) = [ValueIter](/docs/api/rust/tauri/struct.ValueIter "struct tauri::http&#x3A;:header::ValueIter")&lt;'a, T>

Which kind of iterator are we turning this into?

#### pub fn [into_iter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)(self) -> [ValueIter](/docs/api/rust/tauri/struct.ValueIter "struct tauri::http&#x3A;:header::ValueIter")&lt;'a, T>ⓘNotable traits for [ValueIter](/docs/api/rust/tauri/struct.ValueIter "struct tauri::http&#x3A;:header::ValueIter")&lt;'a, T>`impl<'a, T> Iterator for ValueIter<'a, T> where T: 'a,type Item = &'aT;`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3052 "goto source code")

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

### impl&lt;'a, 'b, T> [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator") for &'b mut [OccupiedEntry](/docs/api/rust/tauri/struct.OccupiedEntry "struct tauri::http&#x3A;:header::OccupiedEntry")&lt;'a, T> where 'b: 'a,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3057-3064 "goto source code")

#### type [Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item) = [&'a mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T

The type of the elements being iterated over.

#### type [IntoIter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter) = [ValueIterMut](/docs/api/rust/tauri/struct.ValueIterMut "struct tauri::http&#x3A;:header::ValueIterMut")&lt;'a, T>

Which kind of iterator are we turning this into?

#### pub fn [into_iter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)(self) -> [ValueIterMut](/docs/api/rust/tauri/struct.ValueIterMut "struct tauri::http&#x3A;:header::ValueIterMut")&lt;'a, T>ⓘNotable traits for [ValueIterMut](/docs/api/rust/tauri/struct.ValueIterMut "struct tauri::http&#x3A;:header::ValueIterMut")&lt;'a, T>`impl<'a, T> Iterator for ValueIterMut<'a, T> where T: 'a,type Item = &'a mutT;`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3061 "goto source code")

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

## Auto Trait Implementations

### impl&lt;'a, T> [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [OccupiedEntry](/docs/api/rust/tauri/struct.OccupiedEntry "struct tauri::http&#x3A;:header::OccupiedEntry")&lt;'a, T> where T: [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe"),

### impl&lt;'a, T> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [OccupiedEntry](/docs/api/rust/tauri/struct.OccupiedEntry "struct tauri::http&#x3A;:header::OccupiedEntry")&lt;'a, T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

### impl&lt;'a, T> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [OccupiedEntry](/docs/api/rust/tauri/struct.OccupiedEntry "struct tauri::http&#x3A;:header::OccupiedEntry")&lt;'a, T> where T: [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

### impl&lt;'a, T> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [OccupiedEntry](/docs/api/rust/tauri/struct.OccupiedEntry "struct tauri::http&#x3A;:header::OccupiedEntry")&lt;'a, T>

### impl&lt;'a, T> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [OccupiedEntry](/docs/api/rust/tauri/struct.OccupiedEntry "struct tauri::http&#x3A;:header::OccupiedEntry")&lt;'a, T>

## Blanket Implementations

### impl&lt;T> [Any](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html "trait core::any::Any") for T where T: 'static + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135 "goto source code")

#### pub fn [type_id](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id)(&self) -> [TypeId](https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html "struct core::any::TypeId")[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132 "goto source code")

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id)

### impl&lt;T> [Borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html "trait core::borrow::Borrow")&lt;T> for T where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213 "goto source code")

#### pub fn [borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)(&self) -> [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210 "goto source code")

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)

### impl&lt;T> [BorrowMut](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html "trait core::borrow::BorrowMut")&lt;T> for T where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220 "goto source code")

#### pub fn [borrow_mut](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)(&mut self) -> [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217 "goto source code")

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### impl&lt;T> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T> for T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(t: T) -> T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545 "goto source code")

Performs the conversion.

### impl&lt;T, U> [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;U> for T where U: [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540 "goto source code")

#### pub fn [into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into)(self) -> U[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

### impl&lt;T, U> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U> for T where U: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [Infallible](https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html "enum core::convert::Infallible")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)(value: U) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;T, &lt;T as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587 "goto source code")

Performs the conversion.

### impl&lt;T, U> [TryInto](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html "trait core::convert::TryInto")&lt;U> for T where U: [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error) = &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")

The type returned in the event of a conversion error.

#### pub fn [try_into](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into)(self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;U, &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573 "goto source code")

Performs the conversion.

### impl&lt;V, T> VZip&lt;V> for T where V: MultiLane&lt;T>,

#### pub fn [vzip](/docs/api/rust/tauri/about:blank#tymethod.vzip)(self) -> V
  