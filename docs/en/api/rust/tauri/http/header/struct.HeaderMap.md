---
title: Struct tauri::http::header::HeaderMap
sidebar_label: struct.HeaderMap
custom_edit_url: null
---

  # Struct tauri::http&#x3A;:header::HeaderMap,

```rs
pub struct HeaderMap<T = HeaderValue> { /* fields omitted */ }
```

Expand description

A set of HTTP headers

`HeaderMap` is an multimap of [`HeaderName`](/docs/api/rust/tauri/struct.HeaderName) to values.

## Examples

Basic usage

```rs
let mut headers = HeaderMap::new();

headers.insert(HOST, "example.com".parse().unwrap());
headers.insert(CONTENT_LENGTH, "123".parse().unwrap());

assert!(headers.contains_key(HOST));
assert!(!headers.contains_key(LOCATION));

assert_eq!(headers[HOST], "example.com");

headers.remove(HOST);

assert!(!headers.contains_key(HOST));
```

## Implementations

### impl [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#426-444 "goto source code")

#### pub fn [new](/docs/api/rust/tauri/about:blank#method.new)() -> [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#441 "goto source code")

Create an empty `HeaderMap`.

The map will be created without any capacity. This function will not allocate.

## Examples

```rs
let map = HeaderMap::new();

assert!(map.is_empty());
assert_eq!(0, map.capacity());
```

### impl&lt;T> [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#446-1591 "goto source code")

#### pub fn [with_capacity](/docs/api/rust/tauri/about:blank#method.with_capacity)(capacity: [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)) -> [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#465 "goto source code")

Create an empty `HeaderMap` with the specified capacity.

The returned map will allocate internal storage in order to hold about `capacity` elements without reallocating. However, this is a “best effort” as there are usage patterns that could cause additional allocations before `capacity` headers are stored in the map.

More capacity than requested may be allocated.

## Examples

```rs
let map: HeaderMap<u32> = HeaderMap::with_capacity(10);

assert!(map.is_empty());
assert_eq!(12, map.capacity());
```

#### pub fn [len](/docs/api/rust/tauri/about:blank#method.len)(&self) -> [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#513 "goto source code")

Returns the number of headers stored in the map.

This number represents the total number of **values** stored in the map. This number can be greater than or equal to the number of **keys** stored given that a single key may have more than one associated value.

## Examples

```rs
let mut map = HeaderMap::new();

assert_eq!(0, map.len());

map.insert(ACCEPT, "text/plain".parse().unwrap());
map.insert(HOST, "localhost".parse().unwrap());

assert_eq!(2, map.len());

map.append(ACCEPT, "text/html".parse().unwrap());

assert_eq!(3, map.len());
```

#### pub fn [keys_len](/docs/api/rust/tauri/about:blank#method.keys_len)(&self) -> [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#540 "goto source code")

Returns the number of keys stored in the map.

This number will be less than or equal to `len()` as each key may have more than one associated value.

## Examples

```rs
let mut map = HeaderMap::new();

assert_eq!(0, map.keys_len());

map.insert(ACCEPT, "text/plain".parse().unwrap());
map.insert(HOST, "localhost".parse().unwrap());

assert_eq!(2, map.keys_len());

map.insert(ACCEPT, "text/html".parse().unwrap());

assert_eq!(2, map.keys_len());
```

#### pub fn [is_empty](/docs/api/rust/tauri/about:blank#method.is_empty)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#559 "goto source code")

Returns true if the map contains no elements.

## Examples

```rs
let mut map = HeaderMap::new();

assert!(map.is_empty());

map.insert(HOST, "hello.world".parse().unwrap());

assert!(!map.is_empty());
```

#### pub fn [clear](/docs/api/rust/tauri/about:blank#method.clear)(&mut self)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#578 "goto source code")

Clears the map, removing all key-value pairs. Keeps the allocated memory for reuse.

## Examples

```rs
let mut map = HeaderMap::new();
map.insert(HOST, "hello.world".parse().unwrap());

map.clear();
assert!(map.is_empty());
assert!(map.capacity() > 0);
```

#### pub fn [capacity](/docs/api/rust/tauri/about:blank#method.capacity)(&self) -> [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#605 "goto source code")

Returns the number of headers the map can hold without reallocating.

This number is an approximation as certain usage patterns could cause additional allocations before the returned capacity is filled.

## Examples

```rs
let mut map = HeaderMap::new();

assert_eq!(0, map.capacity());

map.insert(HOST, "hello.world".parse().unwrap());
assert_eq!(6, map.capacity());
```

#### pub fn [reserve](/docs/api/rust/tauri/about:blank#method.reserve)(&mut self, additional: [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html))[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#631 "goto source code")

Reserves capacity for at least `additional` more headers to be inserted into the `HeaderMap`.

The header map may reserve more space to avoid frequent reallocations. Like with `with_capacity`, this will be a “best effort” to avoid allocations until `additional` more headers are inserted. Certain usage patterns could cause additional allocations before the number is reached.

## Panics

Panics if the new allocation size overflows `usize`.

## Examples

```rs
let mut map = HeaderMap::new();
map.reserve(10);
```

#### pub fn [get](/docs/api/rust/tauri/about:blank#method.get)&lt;K>(&self, key: K) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T> where K: [AsHeaderName](/docs/api/rust/tauri/trait.AsHeaderName "trait tauri::http&#x3A;:header::AsHeaderName"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#676-678 "goto source code")

Returns a reference to the value associated with the key.

If there are multiple values associated with the key, then the first one is returned. Use `get_all` to get all values associated with a given key. Returns `None` if there are no values associated with the key.

## Examples

```rs
let mut map = HeaderMap::new();
assert!(map.get("host").is_none());

map.insert(HOST, "hello".parse().unwrap());
assert_eq!(map.get(HOST).unwrap(), &"hello");
assert_eq!(map.get("host").unwrap(), &"hello");

map.append(HOST, "world".parse().unwrap());
assert_eq!(map.get("host").unwrap(), &"hello");
```

#### pub fn [get_mut](/docs/api/rust/tauri/about:blank#method.get_mut)&lt;K>(&mut self, key: K) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T> where K: [AsHeaderName](/docs/api/rust/tauri/trait.AsHeaderName "trait tauri::http&#x3A;:header::AsHeaderName"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#713-715 "goto source code")

Returns a mutable reference to the value associated with the key.

If there are multiple values associated with the key, then the first one is returned. Use `entry` to get all values associated with a given key. Returns `None` if there are no values associated with the key.

## Examples

```rs
let mut map = HeaderMap::default();
map.insert(HOST, "hello".to_string());
map.get_mut("host").unwrap().push_str("-world");

assert_eq!(map.get(HOST).unwrap(), &"hello-world");
```

#### pub fn [get_all](/docs/api/rust/tauri/about:blank#method.get_all)&lt;K>(&self, key: K) -> [GetAll](/docs/api/rust/tauri/struct.GetAll "struct tauri::http&#x3A;:header::GetAll")&lt;'\_, T> where K: [AsHeaderName](/docs/api/rust/tauri/trait.AsHeaderName "trait tauri::http&#x3A;:header::AsHeaderName"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#751-753 "goto source code")

Returns a view of all values associated with a key.

The returned view does not incur any allocations and allows iterating the values associated with the key. See [`GetAll`](/docs/api/rust/tauri/struct.GetAll) for more details. Returns `None` if there are no values associated with the key.

## Examples

```rs
let mut map = HeaderMap::new();

map.insert(HOST, "hello".parse().unwrap());
map.append(HOST, "goodbye".parse().unwrap());

let view = map.get_all("host");

let mut iter = view.iter();
assert_eq!(&"hello", iter.next().unwrap());
assert_eq!(&"goodbye", iter.next().unwrap());
assert!(iter.next().is_none());
```

#### pub fn [contains_key](/docs/api/rust/tauri/about:blank#method.contains_key)&lt;K>(&self, key: K) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where K: [AsHeaderName](/docs/api/rust/tauri/trait.AsHeaderName "trait tauri::http&#x3A;:header::AsHeaderName"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#774-776 "goto source code")

Returns true if the map contains a value for the specified key.

## Examples

```rs
let mut map = HeaderMap::new();
assert!(!map.contains_key(HOST));

map.insert(HOST, "world".parse().unwrap());
assert!(map.contains_key("host"));
```

#### pub fn [iter](/docs/api/rust/tauri/about:blank#method.iter)(&self) -> [Iter](/docs/api/rust/tauri/struct.Iter "struct tauri::http&#x3A;:header::Iter")&lt;'\_, T>ⓘNotable traits for [Iter](/docs/api/rust/tauri/struct.Iter "struct tauri::http&#x3A;:header::Iter")&lt;'a, T>`impl<'a, T> Iterator for Iter<'a, T>type Item = (&'a HeaderName, &'aT);`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#802 "goto source code")

An iterator visiting all key-value pairs.

The iteration order is arbitrary, but consistent across platforms for the same crate version. Each key will be yielded once per associated value. So, if a key has 3 associated values, it will be yielded 3 times.

## Examples

```rs
let mut map = HeaderMap::new();

map.insert(HOST, "hello".parse().unwrap());
map.append(HOST, "goodbye".parse().unwrap());
map.insert(CONTENT_LENGTH, "123".parse().unwrap());

for (key, value) in map.iter() {
    println!("{:?}: {:?}", key, value);
}
```

#### pub fn [iter_mut](/docs/api/rust/tauri/about:blank#method.iter_mut)(&mut self) -> [IterMut](/docs/api/rust/tauri/struct.IterMut "struct tauri::http&#x3A;:header::IterMut")&lt;'\_, T>ⓘNotable traits for [IterMut](/docs/api/rust/tauri/struct.IterMut "struct tauri::http&#x3A;:header::IterMut")&lt;'a, T>`impl<'a, T> Iterator for IterMut<'a, T>type Item = (&'a HeaderName, &'a mutT);`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#834 "goto source code")

An iterator visiting all key-value pairs, with mutable value references.

The iterator order is arbitrary, but consistent across platforms for the same crate version. Each key will be yielded once per associated value, so if a key has 3 associated values, it will be yielded 3 times.

## Examples

```rs
let mut map = HeaderMap::default();

map.insert(HOST, "hello".to_string());
map.append(HOST, "goodbye".to_string());
map.insert(CONTENT_LENGTH, "123".to_string());

for (key, value) in map.iter_mut() {
    value.push_str("-boop");
}
```

#### pub fn [keys](/docs/api/rust/tauri/about:blank#method.keys)(&self) -> [Keys](/docs/api/rust/tauri/struct.Keys "struct tauri::http&#x3A;:header::Keys")&lt;'\_, T>ⓘNotable traits for [Keys](/docs/api/rust/tauri/struct.Keys "struct tauri::http&#x3A;:header::Keys")&lt;'a, T>`impl<'a, T> Iterator for Keys<'a, T>type Item = &'a HeaderName;`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#864 "goto source code")

An iterator visiting all keys.

The iteration order is arbitrary, but consistent across platforms for the same crate version. Each key will be yielded only once even if it has multiple associated values.

## Examples

```rs
let mut map = HeaderMap::new();

map.insert(HOST, "hello".parse().unwrap());
map.append(HOST, "goodbye".parse().unwrap());
map.insert(CONTENT_LENGTH, "123".parse().unwrap());

for key in map.keys() {
    println!("{:?}", key);
}
```

#### pub fn [values](/docs/api/rust/tauri/about:blank#method.values)(&self) -> [Values](/docs/api/rust/tauri/struct.Values "struct tauri::http&#x3A;:header::Values")&lt;'\_, T>ⓘNotable traits for [Values](/docs/api/rust/tauri/struct.Values "struct tauri::http&#x3A;:header::Values")&lt;'a, T>`impl<'a, T> Iterator for Values<'a, T>type Item = &'aT;`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#890 "goto source code")

An iterator visiting all values.

The iteration order is arbitrary, but consistent across platforms for the same crate version.

## Examples

```rs
let mut map = HeaderMap::new();

map.insert(HOST, "hello".parse().unwrap());
map.append(HOST, "goodbye".parse().unwrap());
map.insert(CONTENT_LENGTH, "123".parse().unwrap());

for value in map.values() {
    println!("{:?}", value);
}
```

#### pub fn [values_mut](/docs/api/rust/tauri/about:blank#method.values_mut)(&mut self) -> [ValuesMut](/docs/api/rust/tauri/struct.ValuesMut "struct tauri::http&#x3A;:header::ValuesMut")&lt;'\_, T>ⓘNotable traits for [ValuesMut](/docs/api/rust/tauri/struct.ValuesMut "struct tauri::http&#x3A;:header::ValuesMut")&lt;'a, T>`impl<'a, T> Iterator for ValuesMut<'a, T>type Item = &'a mutT;`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#914 "goto source code")

An iterator visiting all values mutably.

The iteration order is arbitrary, but consistent across platforms for the same crate version.

## Examples

```rs
let mut map = HeaderMap::default();

map.insert(HOST, "hello".to_string());
map.append(HOST, "goodbye".to_string());
map.insert(CONTENT_LENGTH, "123".to_string());

for value in map.values_mut() {
    value.push_str("-boop");
}
```

#### pub fn [drain](/docs/api/rust/tauri/about:blank#method.drain)(&mut self) -> [Drain](/docs/api/rust/tauri/struct.Drain "struct tauri::http&#x3A;:header::Drain")&lt;'\_, T>ⓘNotable traits for [Drain](/docs/api/rust/tauri/struct.Drain "struct tauri::http&#x3A;:header::Drain")&lt;'a, T>`impl<'a, T> Iterator for Drain<'a, T>type Item = (Option<HeaderName>, T);`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#949 "goto source code")

Clears the map, returning all entries as an iterator.

The internal memory is kept for reuse.

For each yielded item that has `None` provided for the `HeaderName`, then the associated header name is the same as that of the previously yielded item. The first yielded item will have `HeaderName` set.

## Examples

```rs
let mut map = HeaderMap::new();

map.insert(HOST, "hello".parse().unwrap());
map.append(HOST, "goodbye".parse().unwrap());
map.insert(CONTENT_LENGTH, "123".parse().unwrap());

let mut drain = map.drain();


assert_eq!(drain.next(), Some((Some(HOST), "hello".parse().unwrap())));
assert_eq!(drain.next(), Some((None, "goodbye".parse().unwrap())));

assert_eq!(drain.next(), Some((Some(CONTENT_LENGTH), "123".parse().unwrap())));

assert_eq!(drain.next(), None);
```

#### pub fn [entry](/docs/api/rust/tauri/about:blank#method.entry)&lt;K>(&mut self, key: K) -> [Entry](/docs/api/rust/tauri/enum.Entry "enum tauri::http&#x3A;:header::Entry")&lt;'\_, T> where K: [IntoHeaderName](/docs/api/rust/tauri/trait.IntoHeaderName "trait tauri::http&#x3A;:header::IntoHeaderName"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1044-1046 "goto source code")

Gets the given key’s corresponding entry in the map for in-place manipulation.

## Examples

```rs
let mut map: HeaderMap<u32> = HeaderMap::default();

let headers = &[
    "content-length",
    "x-hello",
    "Content-Length",
    "x-world",
];

for &header in headers {
    let counter = map.entry(header).or_insert(0);
    *counter += 1;
}

assert_eq!(map["content-length"], 2);
assert_eq!(map["x-hello"], 1);
```

#### pub fn [try_entry](/docs/api/rust/tauri/about:blank#method.try_entry)&lt;K>( &mut self, key: K ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Entry](/docs/api/rust/tauri/enum.Entry "enum tauri::http&#x3A;:header::Entry")&lt;'\_, T>, [InvalidHeaderName](/docs/api/rust/tauri/struct.InvalidHeaderName "struct tauri::http&#x3A;:header::InvalidHeaderName")> where K: [AsHeaderName](/docs/api/rust/tauri/trait.AsHeaderName "trait tauri::http&#x3A;:header::AsHeaderName"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1060-1062 "goto source code")

Gets the given key’s corresponding entry in the map for in-place manipulation.

## Errors

This method differs from `entry` by allowing types that may not be valid `HeaderName`s to passed as the key (such as `String`). If they do not parse as a valid `HeaderName`, this returns an `InvalidHeaderName` error.

#### pub fn [insert](/docs/api/rust/tauri/about:blank#method.insert)&lt;K>(&mut self, key: K, val: T) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;T> where K: [IntoHeaderName](/docs/api/rust/tauri/trait.IntoHeaderName "trait tauri::http&#x3A;:header::IntoHeaderName"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1131-1133 "goto source code")

Inserts a key-value pair into the map.

If the map did not previously have this key present, then `None` is returned.

If the map did have this key present, the new value is associated with the key and all previous values are removed. **Note** that only a single one of the previous values is returned. If there are multiple values that have been previously associated with the key, then the first one is returned. See `insert_mult` on `OccupiedEntry` for an API that returns all values.

The key is not updated, though; this matters for types that can be `==` without being identical.

## Examples

```rs
let mut map = HeaderMap::new();
assert!(map.insert(HOST, "world".parse().unwrap()).is_none());
assert!(!map.is_empty());

let mut prev = map.insert(HOST, "earth".parse().unwrap()).unwrap();
assert_eq!("world", prev);
```

#### pub fn [append](/docs/api/rust/tauri/about:blank#method.append)&lt;K>(&mut self, key: K, value: T) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where K: [IntoHeaderName](/docs/api/rust/tauri/trait.IntoHeaderName "trait tauri::http&#x3A;:header::IntoHeaderName"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1234-1236 "goto source code")

Inserts a key-value pair into the map.

If the map did not previously have this key present, then `false` is returned.

If the map did have this key present, the new value is pushed to the end of the list of values currently associated with the key. The key is not updated, though; this matters for types that can be `==` without being identical.

## Examples

```rs
let mut map = HeaderMap::new();
assert!(map.insert(HOST, "world".parse().unwrap()).is_none());
assert!(!map.is_empty());

map.append(HOST, "earth".parse().unwrap());

let values = map.get_all("host");
let mut i = values.iter();
assert_eq!("world", *i.next().unwrap());
assert_eq!("earth", *i.next().unwrap());
```

#### pub fn [remove](/docs/api/rust/tauri/about:blank#method.remove)&lt;K>(&mut self, key: K) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;T> where K: [AsHeaderName](/docs/api/rust/tauri/trait.AsHeaderName "trait tauri::http&#x3A;:header::AsHeaderName"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1353-1355 "goto source code")

Removes a key from the map, returning the value associated with the key.

Returns `None` if the map does not contain the key. If there are multiple values associated with the key, then the first one is returned. See `remove_entry_mult` on `OccupiedEntry` for an API that yields all values.

## Examples

```rs
let mut map = HeaderMap::new();
map.insert(HOST, "hello.world".parse().unwrap());

let prev = map.remove(HOST).unwrap();
assert_eq!("hello.world", prev);

assert!(map.remove(HOST).is_none());
```

## Trait Implementations

### impl&lt;T> [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T> where T: [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#44 "goto source code")

#### pub fn [clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)(&self) -> [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#44 "goto source code")

Returns a copy of the value. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)

#### fn [clone_from](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)

### impl&lt;T> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T> where T: [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1978-1982 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1979 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl&lt;T> [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1984-1988 "goto source code")

#### pub fn [default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)() -> [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1985 "goto source code")

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)

### impl&lt;T> [Extend](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html "trait core::iter::traits::collect::Extend")&lt;[(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), T[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)> for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1943-1963 "goto source code")

#### pub fn [extend](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html#tymethod.extend)&lt;I>(&mut self, iter: I) where I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")&lt;Item = [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), T[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)>,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1944 "goto source code")

Extends a collection with the contents of an iterator. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html#tymethod.extend)

#### fn [extend_one](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html#method.extend_one)(&mut self, item: A)[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/collect.rs.html#341 "goto source code")

🔬 This is a nightly-only experimental API. (`extend_one`)

Extends a collection with exactly one element.

#### fn [extend_reserve](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html#method.extend_reserve)(&mut self, additional: [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html))[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/collect.rs.html#349 "goto source code")

🔬 This is a nightly-only experimental API. (`extend_one`)

Reserves capacity in a collection for the given number of additional elements. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html#method.extend_reserve)

### impl&lt;T> [Extend](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html "trait core::iter::traits::collect::Extend")&lt;[(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")>, T[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)> for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1863-1941 "goto source code")

#### pub fn [extend](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html#tymethod.extend)&lt;I>(&mut self, iter: I) where I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")&lt;Item = [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")>, T[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)>,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1900 "goto source code")

Extend a `HeaderMap` with the contents of another `HeaderMap`.

This function expects the yielded items to follow the same structure as `IntoIter`.

## Panics

This panics if the first yielded item does not have a `HeaderName`.

## Examples

```rs
let mut map = HeaderMap::new();

map.insert(ACCEPT, "text/plain".parse().unwrap());
map.insert(HOST, "hello.world".parse().unwrap());

let mut extra = HeaderMap::new();

extra.insert(HOST, "foo.bar".parse().unwrap());
extra.insert(COOKIE, "hello".parse().unwrap());
extra.append(COOKIE, "world".parse().unwrap());

map.extend(extra);

assert_eq!(map["host"], "foo.bar");
assert_eq!(map["accept"], "text/plain");
assert_eq!(map["cookie"], "hello");

let v = map.get_all("host");
assert_eq!(1, v.iter().count());

let v = map.get_all("cookie");
assert_eq!(2, v.iter().count());
```

#### fn [extend_one](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html#method.extend_one)(&mut self, item: A)[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/collect.rs.html#341 "goto source code")

🔬 This is a nightly-only experimental API. (`extend_one`)

Extends a collection with exactly one element.

#### fn [extend_reserve](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html#method.extend_reserve)(&mut self, additional: [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html))[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/collect.rs.html#349 "goto source code")

🔬 This is a nightly-only experimental API. (`extend_one`)

Reserves capacity in a collection for the given number of additional elements. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html#method.extend_reserve)

### impl&lt;T> [FromIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.FromIterator.html "trait core::iter::traits::collect::FromIterator")&lt;[(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), T[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)> for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1816-1825 "goto source code")

#### pub fn [from_iter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter)&lt;I>(iter: I) -> [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T> where I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")&lt;Item = [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), T[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)>,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1817-1819 "goto source code")

Creates a value from an iterator. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter)

### impl&lt;'a, K, T> [Index](https://doc.rust-lang.org/1.54.0/core/ops/index/trait.Index.html "trait core::ops::index::Index")&lt;K> for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T> where K: [AsHeaderName](/docs/api/rust/tauri/trait.AsHeaderName "trait tauri::http&#x3A;:header::AsHeaderName"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1990-2005 "goto source code")

#### pub fn [index](https://doc.rust-lang.org/1.54.0/core/ops/index/trait.Index.html#tymethod.index)(&self, index: K) -> [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1999 "goto source code")

## Panics

Using the index operator will cause a panic if the header you’re querying isn’t set.

#### type [Output](https://doc.rust-lang.org/1.54.0/core/ops/index/trait.Index.html#associatedtype.Output) = T

The returned type after indexing.

### impl&lt;'a, T> [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator") for &'a [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1736-1743 "goto source code")

#### type [Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item) = [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)&'a [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), [&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)

The type of the elements being iterated over.

#### type [IntoIter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter) = [Iter](/docs/api/rust/tauri/struct.Iter "struct tauri::http&#x3A;:header::Iter")&lt;'a, T>

Which kind of iterator are we turning this into?

#### pub fn [into_iter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)(self) -> [Iter](/docs/api/rust/tauri/struct.Iter "struct tauri::http&#x3A;:header::Iter")&lt;'a, T>ⓘNotable traits for [Iter](/docs/api/rust/tauri/struct.Iter "struct tauri::http&#x3A;:header::Iter")&lt;'a, T>`impl<'a, T> Iterator for Iter<'a, T>type Item = (&'a HeaderName, &'aT);`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1740 "goto source code")

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

### impl&lt;'a, T> [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator") for &'a mut [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1745-1752 "goto source code")

#### type [Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item) = [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)&'a [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), [&'a mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)

The type of the elements being iterated over.

#### type [IntoIter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter) = [IterMut](/docs/api/rust/tauri/struct.IterMut "struct tauri::http&#x3A;:header::IterMut")&lt;'a, T>

Which kind of iterator are we turning this into?

#### pub fn [into_iter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)(self) -> [IterMut](/docs/api/rust/tauri/struct.IterMut "struct tauri::http&#x3A;:header::IterMut")&lt;'a, T>ⓘNotable traits for [IterMut](/docs/api/rust/tauri/struct.IterMut "struct tauri::http&#x3A;:header::IterMut")&lt;'a, T>`impl<'a, T> Iterator for IterMut<'a, T>type Item = (&'a HeaderName, &'a mutT);`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1749 "goto source code")

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

### impl&lt;T> [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator") for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1754-1814 "goto source code")

#### pub fn [into_iter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)(self) -> [IntoIter](/docs/api/rust/tauri/struct.IntoIter "struct tauri::http&#x3A;:header::IntoIter")&lt;T>ⓘNotable traits for [IntoIter](/docs/api/rust/tauri/struct.IntoIter "struct tauri::http&#x3A;:header::IntoIter")&lt;T>`impl<T> Iterator for IntoIter<T>type Item = (Option<HeaderName>, T);`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1807 "goto source code")

Creates a consuming iterator, that is, one that moves keys and values out of the map in arbitrary order. The map cannot be used after calling this.

For each yielded item that has `None` provided for the `HeaderName`, then the associated header name is the same as that of the previously yielded item. The first yielded item will have `HeaderName` set.

## Examples

Basic usage.

```rs
let mut map = HeaderMap::new();
map.insert(header::CONTENT_LENGTH, "123".parse().unwrap());
map.insert(header::CONTENT_TYPE, "json".parse().unwrap());

let mut iter = map.into_iter();
assert_eq!(iter.next(), Some((Some(header::CONTENT_LENGTH), "123".parse().unwrap())));
assert_eq!(iter.next(), Some((Some(header::CONTENT_TYPE), "json".parse().unwrap())));
assert!(iter.next().is_none());
```

Multiple values per key.

```rs
let mut map = HeaderMap::new();

map.append(header::CONTENT_LENGTH, "123".parse().unwrap());
map.append(header::CONTENT_LENGTH, "456".parse().unwrap());

map.append(header::CONTENT_TYPE, "json".parse().unwrap());
map.append(header::CONTENT_TYPE, "html".parse().unwrap());
map.append(header::CONTENT_TYPE, "xml".parse().unwrap());

let mut iter = map.into_iter();

assert_eq!(iter.next(), Some((Some(header::CONTENT_LENGTH), "123".parse().unwrap())));
assert_eq!(iter.next(), Some((None, "456".parse().unwrap())));

assert_eq!(iter.next(), Some((Some(header::CONTENT_TYPE), "json".parse().unwrap())));
assert_eq!(iter.next(), Some((None, "html".parse().unwrap())));
assert_eq!(iter.next(), Some((None, "xml".parse().unwrap())));
assert!(iter.next().is_none());
```

#### type [Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item) = [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")>, T[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)

The type of the elements being iterated over.

#### type [IntoIter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter) = [IntoIter](/docs/api/rust/tauri/struct.IntoIter "struct tauri::http&#x3A;:header::IntoIter")&lt;T>

Which kind of iterator are we turning this into?

### impl&lt;T> [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>> for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T> where T: [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;T>,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1965-1974 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1966 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl&lt;'a, K, V, T> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [HashMap](https://doc.rust-lang.org/1.54.0/std/collections/hash/map/struct.HashMap.html "struct std::collections::hash::map::HashMap")&lt;K, V, [RandomState](https://doc.rust-lang.org/1.54.0/std/collections/hash/map/struct.RandomState.html "struct std::collections::hash::map::RandomState")>> for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T> where T: [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)V>, K: [Eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html "trait core::cmp::Eq") + [Hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html "trait core::hash::Hash"), [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"): [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)K>, &lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)K>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error"): [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[Error](https://docs.rs/http/0.2.4/http/error/struct.Error.html "struct http&#x3A;:error::Error")>, &lt;T as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)V>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error"): [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[Error](https://docs.rs/http/0.2.4/http/error/struct.Error.html "struct http&#x3A;:error::Error")>,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1842-1861 "goto source code")

Try to convert a `HashMap` into a `HeaderMap`.

## Examples

```rs
use std::collections::HashMap;
use std::convert::TryInto;
use http::HeaderMap;

let mut map = HashMap::new();
map.insert("X-Custom-Header".to_string(), "my value".to_string());

let headers: HeaderMap = (&map).try_into().expect("valid headers");
assert_eq!(headers["X-Custom-Header"], "my value");
```

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [Error](https://docs.rs/http/0.2.4/http/error/struct.Error.html "struct http&#x3A;:error::Error")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( c: &'a [HashMap](https://doc.rust-lang.org/1.54.0/std/collections/hash/map/struct.HashMap.html "struct std::collections::hash::map::HashMap")&lt;K, V, [RandomState](https://doc.rust-lang.org/1.54.0/std/collections/hash/map/struct.RandomState.html "struct std::collections::hash::map::RandomState")> ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T>, &lt;[HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T> as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [HashMap](https://doc.rust-lang.org/1.54.0/std/collections/hash/map/struct.HashMap.html "struct std::collections::hash::map::HashMap")&lt;K, V, [RandomState](https://doc.rust-lang.org/1.54.0/std/collections/hash/map/struct.RandomState.html "struct std::collections::hash::map::RandomState")>>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1852 "goto source code")

Performs the conversion.

### impl&lt;T> [Eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html "trait core::cmp::Eq") for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T> where T: [Eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html "trait core::cmp::Eq"),

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#1976 "goto source code")

## Auto Trait Implementations

### impl&lt;T> [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T> where T: [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe"),

### impl&lt;T> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

### impl&lt;T> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T> where T: [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

### impl&lt;T> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T> where T: [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"),

### impl&lt;T> [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [HeaderMap](/docs/api/rust/tauri/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;T> where T: [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe"),

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

### impl&lt;T> [ToOwned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html "trait alloc::borrow::ToOwned") for T where T: [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#84-96 "goto source code")

#### type [Owned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#associatedtype.Owned) = T

The resulting type after obtaining ownership.

#### pub fn [to_owned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)(&self) -> T[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#89 "goto source code")

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### pub fn [clone_into](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into)(&self, target: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T)[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#93 "goto source code")

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into)

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
  