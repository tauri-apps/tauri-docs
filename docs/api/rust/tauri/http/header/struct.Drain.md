---
title: Struct tauri::http::header::Drain
sidebar_label: struct.Drain
custom_edit_url: null
---

  # Struct tauri::http&#x3A;:header::Drain,

```rs
pub struct Drain<'a, T> { /* fields omitted */ }
```

Expand description

A drain iterator for `HeaderMap`.

## Trait Implementations

### impl&lt;'a, T> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Drain](/docs/api/rust/tauri/struct.Drain "struct tauri::http&#x3A;:header::Drain")&lt;'a, T> where T: [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#135 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#135 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl&lt;'a, T> [Drop](https://doc.rust-lang.org/1.54.0/core/ops/drop/trait.Drop.html "trait core::ops::drop::Drop") for [Drain](/docs/api/rust/tauri/struct.Drain "struct tauri::http&#x3A;:header::Drain")&lt;'a, T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2253-2257 "goto source code")

#### pub fn [drop](https://doc.rust-lang.org/1.54.0/core/ops/drop/trait.Drop.html#tymethod.drop)(&mut self)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2254 "goto source code")

Executes the destructor for this type. [Read more](https://doc.rust-lang.org/1.54.0/core/ops/drop/trait.Drop.html#tymethod.drop)

### impl&lt;'a, T> [Iterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "trait core::iter::traits::iterator::Iterator") for [Drain](/docs/api/rust/tauri/struct.Drain "struct tauri::http&#x3A;:header::Drain")&lt;'a, T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2199-2249 "goto source code")

#### type [Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item) = [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")>, T[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)

The type of the elements being iterated over.

#### pub fn [next](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#tymethod.next)(&mut self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;&lt;[Drain](/docs/api/rust/tauri/struct.Drain "struct tauri::http&#x3A;:header::Drain")&lt;'a, T> as [Iterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "trait core::iter::traits::iterator::Iterator")>::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2202 "goto source code")

Advances the iterator and returns the next value. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#tymethod.next)

#### pub fn [size_hint](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.size_hint)(&self) -> [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html), [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)>[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2239 "goto source code")

Returns the bounds on the remaining length of the iterator. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.size_hint)

#### fn [count](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.count)(self) -> [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#203-205 "goto source code")

Consumes the iterator, counting the number of iterations and returning it. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.count)

#### fn [last](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.last)(self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")>1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#233-235 "goto source code")

Consumes the iterator, returning the last element. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.last)

#### fn [advance_by](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.advance_by)(&mut self, n: [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#276 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_advance_by`)

recently added

Advances the iterator by `n` elements. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.advance_by)

#### fn [nth](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.nth)(&mut self, n: [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")>1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#324 "goto source code")

Returns the `n`th element of the iterator. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.nth)

#### fn [step_by](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.step_by)(self, step: [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)) -> [StepBy](https://doc.rust-lang.org/1.54.0/core/iter/adapters/step_by/struct.StepBy.html "struct core::iter::adapters::step_by::StepBy")&lt;Self>1.28.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#375-377 "goto source code")

Creates an iterator starting at the same point, but stepping by the given amount at each iteration. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.step_by)

#### fn [chain](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.chain)&lt;U>(self, other: U) -> [Chain](https://doc.rust-lang.org/1.54.0/core/iter/adapters/chain/struct.Chain.html "struct core::iter::adapters::chain::Chain")&lt;Self, &lt;U as [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")>::[IntoIter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter "type core::iter::traits::collect::IntoIterator::IntoIter")> where U: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")&lt;Item = Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")>,1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#446-449 "goto source code")

Takes two iterators and creates a new iterator over both in sequence. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.chain)

#### fn [zip](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.zip)&lt;U>(self, other: U) -> [Zip](https://doc.rust-lang.org/1.54.0/core/iter/adapters/zip/struct.Zip.html "struct core::iter::adapters::zip::Zip")&lt;Self, &lt;U as [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")>::[IntoIter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter "type core::iter::traits::collect::IntoIterator::IntoIter")> where U: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator"),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#522-525 "goto source code")

‘Zips up’ two iterators into a single iterator of pairs. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.zip)

#### fn [intersperse](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.intersperse)(self, separator: Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [Intersperse](https://doc.rust-lang.org/1.54.0/core/iter/adapters/intersperse/struct.Intersperse.html "struct core::iter::adapters::intersperse::Intersperse")&lt;Self> where Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"): [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#564-567 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_intersperse`)

recently added

Creates a new iterator which places a copy of `separator` between adjacent items of the original iterator. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.intersperse)

#### fn [intersperse_with](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.intersperse_with)&lt;G>(self, separator: G) -> [IntersperseWith](https://doc.rust-lang.org/1.54.0/core/iter/adapters/intersperse/struct.IntersperseWith.html "struct core::iter::adapters::intersperse::IntersperseWith")&lt;Self, G> where G: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")() -> Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#622-625 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_intersperse`)

recently added

Creates a new iterator which places an item generated by `separator` between adjacent items of the original iterator. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.intersperse_with)

#### fn [map](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.map)&lt;B, F>(self, f: F) -> [Map](https://doc.rust-lang.org/1.54.0/core/iter/adapters/map/struct.Map.html "struct core::iter::adapters::map::Map")&lt;Self, F> where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> B,1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#681-684 "goto source code")

Takes a closure and creates an iterator which calls that closure on each element. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.map)

#### fn [for_each](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.for_each)&lt;F>(self, f: F) where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")),1.21.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#726-729 "goto source code")

Calls a closure on each element of an iterator. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.for_each)

#### fn [filter](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.filter)&lt;P>(self, predicate: P) -> [Filter](https://doc.rust-lang.org/1.54.0/core/iter/adapters/filter/struct.Filter.html "struct core::iter::adapters::filter::Filter")&lt;Self, P> where P: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(&Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#801-804 "goto source code")

Creates an iterator which uses a closure to determine if an element should be yielded. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.filter)

#### fn [filter_map](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.filter_map)&lt;B, F>(self, f: F) -> [FilterMap](https://doc.rust-lang.org/1.54.0/core/iter/adapters/filter_map/struct.FilterMap.html "struct core::iter::adapters::filter_map::FilterMap")&lt;Self, F> where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;B>,1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#846-849 "goto source code")

Creates an iterator that both filters and maps. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.filter_map)

#### fn [enumerate](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.enumerate)(self) -> [Enumerate](https://doc.rust-lang.org/1.54.0/core/iter/adapters/enumerate/struct.Enumerate.html "struct core::iter::adapters::enumerate::Enumerate")&lt;Self>1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#893-895 "goto source code")

Creates an iterator which gives the current iteration count as well as the next value. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.enumerate)

#### fn [peekable](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.peekable)(self) -> [Peekable](https://doc.rust-lang.org/1.54.0/core/iter/adapters/peekable/struct.Peekable.html "struct core::iter::adapters::peekable::Peekable")&lt;Self>1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#964-966 "goto source code")

Creates an iterator which can use the [`peek`](https://doc.rust-lang.org/1.54.0/core/iter/adapters/peekable/struct.Peekable.html#method.peek) and [`peek_mut`](https://doc.rust-lang.org/1.54.0/core/iter/adapters/peekable/struct.Peekable.html#method.peek_mut) methods to look at the next element of the iterator without consuming it. See their documentation for more information. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.peekable)

#### fn [skip_while](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.skip_while)&lt;P>(self, predicate: P) -> [SkipWhile](https://doc.rust-lang.org/1.54.0/core/iter/adapters/skip_while/struct.SkipWhile.html "struct core::iter::adapters::skip_while::SkipWhile")&lt;Self, P> where P: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(&Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1028-1031 "goto source code")

Creates an iterator that [`skip`](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.skip)s elements based on a predicate. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.skip_while)

#### fn [take_while](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.take_while)&lt;P>(self, predicate: P) -> [TakeWhile](https://doc.rust-lang.org/1.54.0/core/iter/adapters/take_while/struct.TakeWhile.html "struct core::iter::adapters::take_while::TakeWhile")&lt;Self, P> where P: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(&Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1109-1112 "goto source code")

Creates an iterator that yields elements based on a predicate. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.take_while)

#### fn [map_while](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.map_while)&lt;B, P>(self, predicate: P) -> [MapWhile](https://doc.rust-lang.org/1.54.0/core/iter/adapters/map_while/struct.MapWhile.html "struct core::iter::adapters::map_while::MapWhile")&lt;Self, P> where P: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;B>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1204-1207 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_map_while`)

recently added

Creates an iterator that both yields elements based on a predicate and maps. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.map_while)

#### fn [skip](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.skip)(self, n: [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)) -> [Skip](https://doc.rust-lang.org/1.54.0/core/iter/adapters/skip/struct.Skip.html "struct core::iter::adapters::skip::Skip")&lt;Self>1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1235-1237 "goto source code")

Creates an iterator that skips the first `n` elements. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.skip)

#### fn [take](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.take)(self, n: [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)) -> [Take](https://doc.rust-lang.org/1.54.0/core/iter/adapters/take/struct.Take.html "struct core::iter::adapters::take::Take")&lt;Self>1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1288-1290 "goto source code")

Creates an iterator that yields the first `n` elements, or fewer if the underlying iterator ends sooner. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.take)

#### fn [scan](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.scan)&lt;St, B, F>(self, initial_state: St, f: F) -> [Scan](https://doc.rust-lang.org/1.54.0/core/iter/adapters/scan/struct.Scan.html "struct core::iter::adapters::scan::Scan")&lt;Self, St, F> where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")([&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)St, Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;B>,1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1332-1335 "goto source code")

An iterator adaptor similar to [`fold`](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.fold) that holds internal state and produces a new iterator. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.scan)

#### fn [flat_map](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.flat_map)&lt;U, F>(self, f: F) -> [FlatMap](https://doc.rust-lang.org/1.54.0/core/iter/adapters/flatten/struct.FlatMap.html "struct core::iter::adapters::flatten::FlatMap")&lt;Self, U, F> where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> U, U: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator"),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1372-1376 "goto source code")

Creates an iterator that works like map, but flattens nested structure. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.flat_map)

#### fn [flatten](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.flatten)(self) -> [Flatten](https://doc.rust-lang.org/1.54.0/core/iter/adapters/flatten/struct.Flatten.html "struct core::iter::adapters::flatten::Flatten")&lt;Self> where Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"): [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator"),1.29.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1444-1447 "goto source code")

Creates an iterator that flattens nested structure. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.flatten)

#### fn [fuse](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.fuse)(self) -> [Fuse](https://doc.rust-lang.org/1.54.0/core/iter/adapters/fuse/struct.Fuse.html "struct core::iter::adapters::fuse::Fuse")&lt;Self>1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1512-1514 "goto source code")

Creates an iterator which ends after the first [`None`](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html#variant.None "None"). [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.fuse)

#### fn [inspect](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.inspect)&lt;F>(self, f: F) -> [Inspect](https://doc.rust-lang.org/1.54.0/core/iter/adapters/inspect/struct.Inspect.html "struct core::iter::adapters::inspect::Inspect")&lt;Self, F> where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(&Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1596-1599 "goto source code")

Does something with each element of an iterator, passing the value on. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.inspect)

#### fn [by_ref](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.by_ref)(&mut self) -> [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1626-1628 "goto source code")

Borrows an iterator, rather than consuming it. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.by_ref)

#### \#\[must_use = "if you really need to exhaust the iterator, consider \`.for_each(drop)\` instead"]fn [collect](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.collect)&lt;B>(self) -> B where B: [FromIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.FromIterator.html "trait core::iter::traits::collect::FromIterator")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")>,1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1744-1746 "goto source code")

Transforms an iterator into a collection. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.collect)

#### fn [partition](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.partition)&lt;B, F>(self, f: F) -> [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)B, B[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html) where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(&Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html), B: [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") + [Extend](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html "trait core::iter::traits::collect::Extend")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")>,1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1777-1781 "goto source code")

Consumes an iterator, creating two collections from it. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.partition)

#### fn [partition_in_place](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.partition_in_place)&lt;'a, T, P>(self, predicate: P) -> [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html) where Self: [DoubleEndedIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/double_ended/trait.DoubleEndedIterator.html "trait core::iter::traits::double_ended::DoubleEndedIterator")&lt;Item = [&'a mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T>, T: 'a, P: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")([&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1838-1841 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_partition_in_place`)

new API

Reorders the elements of this iterator _in-place_ according to the given predicate, such that all those that return `true` precede all those that return `false`. Returns the number of `true` elements found. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.partition_in_place)

#### fn [is_partitioned](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.is_partitioned)&lt;P>(self, predicate: P) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where P: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1895-1898 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_is_partitioned`)

new API

Checks if the elements of this iterator are partitioned according to the given predicate, such that all those that return `true` precede all those that return `false`. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.is_partitioned)

#### fn [try_fold](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.try_fold)&lt;B, F, R>(&mut self, init: B, f: F) -> R where R: [Try](https://doc.rust-lang.org/1.54.0/core/ops/try_trait/trait.Try.html "trait core::ops::try_trait::Try")&lt;Output = B>, F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(B, Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> R,1.27.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#1964-1968 "goto source code")

An iterator method that applies a function as long as it returns successfully, producing a single, final value. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.try_fold)

#### fn [try_for_each](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.try_for_each)&lt;F, R>(&mut self, f: F) -> R where R: [Try](https://doc.rust-lang.org/1.54.0/core/ops/try_trait/trait.Try.html "trait core::ops::try_trait::Try")&lt;Output = [()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>, F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> R,1.27.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2006-2010 "goto source code")

An iterator method that applies a fallible function to each item in the iterator, stopping at the first error and returning that error. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.try_for_each)

#### fn [fold](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.fold)&lt;B, F>(self, init: B, f: F) -> B where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(B, Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> B,1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2105-2108 "goto source code")

Folds every element into an accumulator by applying an operation, returning the final result. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.fold)

#### fn [reduce](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.reduce)&lt;F>(self, f: F) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")> where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"), Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"),1.51.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2150-2153 "goto source code")

Reduces the elements to a single one, by repeatedly applying a reducing operation. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.reduce)

#### fn [all](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.all)&lt;F>(&mut self, f: F) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2199-2202 "goto source code")

Tests if every element of the iterator matches a predicate. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.all)

#### fn [any](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.any)&lt;F>(&mut self, f: F) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2252-2255 "goto source code")

Tests if any element of the iterator matches a predicate. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.any)

#### fn [find](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.find)&lt;P>(&mut self, predicate: P) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")> where P: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(&Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2312-2315 "goto source code")

Searches for an element of an iterator that satisfies a predicate. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.find)

#### fn [find_map](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.find_map)&lt;B, F>(&mut self, f: F) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;B> where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;B>,1.30.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2343-2346 "goto source code")

Applies function to the elements of iterator and returns the first non-none result. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.find_map)

#### fn [try_find](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.try_find)&lt;F, R, E>(&mut self, f: F) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")>, E> where R: [Try](https://doc.rust-lang.org/1.54.0/core/ops/try_trait/trait.Try.html "trait core::ops::try_trait::Try")&lt;Output = [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html), Residual = [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Infallible](https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html "enum core::convert::Infallible"), E>> + [Try](https://doc.rust-lang.org/1.54.0/core/ops/try_trait/trait.Try.html "trait core::ops::try_trait::Try"), F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(&Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> R,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2382-2389 "goto source code")

🔬 This is a nightly-only experimental API. (`try_find`)

new API

Applies function to the elements of iterator and returns the first true result or the first error. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.try_find)

#### fn [position](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.position)&lt;P>(&mut self, predicate: P) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)> where P: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2488-2491 "goto source code")

Searches for an element in an iterator, returning its index. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.position)

#### fn [rposition](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.rposition)&lt;P>(&mut self, predicate: P) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)> where Self: [ExactSizeIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/exact_size/trait.ExactSizeIterator.html "trait core::iter::traits::exact_size::ExactSizeIterator") + [DoubleEndedIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/double_ended/trait.DoubleEndedIterator.html "trait core::iter::traits::double_ended::DoubleEndedIterator"), P: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2545-2548 "goto source code")

Searches for an element in an iterator from the right, returning its index. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.rposition)

#### fn [max](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.max)(self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")> where Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"): [Ord](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html "trait core::cmp::Ord"),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2596-2599 "goto source code")

Returns the maximum element of an iterator. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.max)

#### fn [min](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.min)(self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")> where Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"): [Ord](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html "trait core::cmp::Ord"),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2634-2637 "goto source code")

Returns the minimum element of an iterator. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.min)

#### fn [max_by_key](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.max_by_key)&lt;B, F>(self, f: F) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")> where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(&Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> B, B: [Ord](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html "trait core::cmp::Ord"),1.6.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2656-2659 "goto source code")

Returns the element that gives the maximum value from the specified function. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.max_by_key)

#### fn [max_by](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.max_by)&lt;F>(self, compare: F) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")> where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(&Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"), &Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering"),1.15.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2689-2692 "goto source code")

Returns the element that gives the maximum value with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.max_by)

#### fn [min_by_key](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.min_by_key)&lt;B, F>(self, f: F) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")> where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(&Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> B, B: [Ord](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html "trait core::cmp::Ord"),1.6.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2716-2719 "goto source code")

Returns the element that gives the minimum value from the specified function. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.min_by_key)

#### fn [min_by](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.min_by)&lt;F>(self, compare: F) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")> where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(&Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"), &Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering"),1.15.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2749-2752 "goto source code")

Returns the element that gives the minimum value with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.min_by)

#### fn [rev](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.rev)(self) -> [Rev](https://doc.rust-lang.org/1.54.0/core/iter/adapters/rev/struct.Rev.html "struct core::iter::adapters::rev::Rev")&lt;Self> where Self: [DoubleEndedIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/double_ended/trait.DoubleEndedIterator.html "trait core::iter::traits::double_ended::DoubleEndedIterator"),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2786-2788 "goto source code")

Reverses an iterator’s direction. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.rev)

#### fn [unzip](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.unzip)&lt;A, B, FromA, FromB>(self) -> [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)FromA, FromB[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html) where Self: [Iterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "trait core::iter::traits::iterator::Iterator")&lt;Item = [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)A, B[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)>, FromA: [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") + [Extend](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html "trait core::iter::traits::collect::Extend")&lt;A>, FromB: [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") + [Extend](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.Extend.html "trait core::iter::traits::collect::Extend")&lt;B>,1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2816-2820 "goto source code")

Converts an iterator of pairs into a pair of containers. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.unzip)

#### fn [copied](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.copied)&lt;'a, T>(self) -> [Copied](https://doc.rust-lang.org/1.54.0/core/iter/adapters/copied/struct.Copied.html "struct core::iter::adapters::copied::Copied")&lt;Self> where Self: [Iterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "trait core::iter::traits::iterator::Iterator")&lt;Item = [&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T>, T: 'a + [Copy](https://doc.rust-lang.org/1.54.0/core/marker/trait.Copy.html "trait core::marker::Copy"),1.36.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2867-2870 "goto source code")

Creates an iterator which copies all of its elements. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.copied)

#### fn [cloned](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.cloned)&lt;'a, T>(self) -> [Cloned](https://doc.rust-lang.org/1.54.0/core/iter/adapters/cloned/struct.Cloned.html "struct core::iter::adapters::cloned::Cloned")&lt;Self> where Self: [Iterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "trait core::iter::traits::iterator::Iterator")&lt;Item = [&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T>, T: 'a + [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone"),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2898-2901 "goto source code")

Creates an iterator which [`clone`](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)s all of its elements. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.cloned)

#### fn [cycle](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.cycle)(self) -> [Cycle](https://doc.rust-lang.org/1.54.0/core/iter/adapters/cycle/struct.Cycle.html "struct core::iter::adapters::cycle::Cycle")&lt;Self> where Self: [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone"),1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2931-2933 "goto source code")

Repeats an iterator endlessly. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.cycle)

#### fn [sum](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.sum)&lt;S>(self) -> S where S: [Sum](https://doc.rust-lang.org/1.54.0/core/iter/traits/accum/trait.Sum.html "trait core::iter::traits::accum::Sum")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")>,1.11.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2961-2964 "goto source code")

Sums the elements of an iterator. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.sum)

#### fn [product](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.product)&lt;P>(self) -> P where P: [Product](https://doc.rust-lang.org/1.54.0/core/iter/traits/accum/trait.Product.html "trait core::iter::traits::accum::Product")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")>,1.11.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#2990-2993 "goto source code")

Iterates over the entire iterator, multiplying all the elements [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.product)

#### fn [cmp](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.cmp)&lt;I>(self, other: I) -> [Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering") where I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")&lt;Item = Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")>, Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"): [Ord](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html "trait core::cmp::Ord"),1.5.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3011-3015 "goto source code")

[Lexicographically](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.cmp)

#### fn [cmp_by](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.cmp_by)&lt;I, F>(self, other: I, cmp: F) -> [Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering") where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"), &lt;I as [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")>::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item "type core::iter::traits::collect::IntoIterator::Item")) -> [Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering"), I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3040-3044 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_order_by`)

[Lexicographically](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.cmp_by)

#### fn [partial_cmp](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.partial_cmp)&lt;I>(self, other: I) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")> where I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator"), Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"): [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;&lt;I as [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")>::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item "type core::iter::traits::collect::IntoIterator::Item")>,1.5.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3087-3091 "goto source code")

[Lexicographically](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.partial_cmp)

#### fn [partial_cmp_by](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.partial_cmp_by)&lt;I, F>(self, other: I, partial_cmp: F) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")> where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"), &lt;I as [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")>::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item "type core::iter::traits::collect::IntoIterator::Item")) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")>, I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3125-3129 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_order_by`)

[Lexicographically](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.partial_cmp_by)

#### fn [eq](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.eq)&lt;I>(self, other: I) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator"), Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"): [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;&lt;I as [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")>::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item "type core::iter::traits::collect::IntoIterator::Item")>,1.5.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3167-3171 "goto source code")

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "Iterator") are equal to those of another. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.eq)

#### fn [eq_by](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.eq_by)&lt;I, F>(self, other: I, eq: F) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"), &lt;I as [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")>::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item "type core::iter::traits::collect::IntoIterator::Item")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html), I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3192-3196 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_order_by`)

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "Iterator") are equal to those of another with respect to the specified equality function. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.eq_by)

#### fn [ne](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.ne)&lt;I>(self, other: I) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator"), Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"): [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;&lt;I as [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")>::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item "type core::iter::traits::collect::IntoIterator::Item")>,1.5.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3227-3231 "goto source code")

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "Iterator") are unequal to those of another. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.ne)

#### fn [lt](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.lt)&lt;I>(self, other: I) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator"), Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"): [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;&lt;I as [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")>::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item "type core::iter::traits::collect::IntoIterator::Item")>,1.5.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3248-3252 "goto source code")

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#lexicographical-comparison) less than those of another. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.lt)

#### fn [le](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.le)&lt;I>(self, other: I) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator"), Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"): [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;&lt;I as [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")>::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item "type core::iter::traits::collect::IntoIterator::Item")>,1.5.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3269-3273 "goto source code")

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#lexicographical-comparison) less or equal to those of another. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.le)

#### fn [gt](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.gt)&lt;I>(self, other: I) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator"), Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"): [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;&lt;I as [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")>::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item "type core::iter::traits::collect::IntoIterator::Item")>,1.5.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3290-3294 "goto source code")

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#lexicographical-comparison) greater than those of another. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.gt)

#### fn [ge](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.ge)&lt;I>(self, other: I) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where I: [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator"), Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"): [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;&lt;I as [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator")>::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item "type core::iter::traits::collect::IntoIterator::Item")>,1.5.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3311-3315 "goto source code")

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#lexicographical-comparison) greater than or equal to those of another. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.ge)

#### fn [is_sorted](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted)(self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"): [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3342-3345 "goto source code")

🔬 This is a nightly-only experimental API. (`is_sorted`)

new API

Checks if the elements of this iterator are sorted. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted)

#### fn [is_sorted_by](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted_by)&lt;F>(self, compare: F) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(&Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"), &Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3370-3373 "goto source code")

🔬 This is a nightly-only experimental API. (`is_sorted`)

new API

Checks if the elements of this iterator are sorted using the given comparator function. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted_by)

#### fn [is_sorted_by_key](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted_by_key)&lt;F, K>(self, f: F) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html) where F: [FnMut](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnMut.html "trait core::ops::function::FnMut")(Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")) -> K, K: [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;K>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/iterator.rs.html#3416-3420 "goto source code")

🔬 This is a nightly-only experimental API. (`is_sorted`)

new API

Checks if the elements of this iterator are sorted using the given key extraction function. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted_by_key)

### impl&lt;'a, T> [FusedIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/marker/trait.FusedIterator.html "trait core::iter::traits::marker::FusedIterator") for [Drain](/docs/api/rust/tauri/struct.Drain "struct tauri::http&#x3A;:header::Drain")&lt;'a, T>

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2251 "goto source code")

### impl&lt;'a, T> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Drain](/docs/api/rust/tauri/struct.Drain "struct tauri::http&#x3A;:header::Drain")&lt;'a, T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2260 "goto source code")

### impl&lt;'a, T> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Drain](/docs/api/rust/tauri/struct.Drain "struct tauri::http&#x3A;:header::Drain")&lt;'a, T> where T: [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2259 "goto source code")

## Auto Trait Implementations

### impl&lt;'a, T> [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Drain](/docs/api/rust/tauri/struct.Drain "struct tauri::http&#x3A;:header::Drain")&lt;'a, T> where T: [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe"),

### impl&lt;'a, T> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Drain](/docs/api/rust/tauri/struct.Drain "struct tauri::http&#x3A;:header::Drain")&lt;'a, T>

### impl&lt;'a, T> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Drain](/docs/api/rust/tauri/struct.Drain "struct tauri::http&#x3A;:header::Drain")&lt;'a, T>

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

### impl&lt;I> [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator") for I where I: [Iterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "trait core::iter::traits::iterator::Iterator"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/collect.rs.html#237-244 "goto source code")

#### type [Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item) = &lt;I as [Iterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "trait core::iter::traits::iterator::Iterator")>::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")

The type of the elements being iterated over.

#### type [IntoIter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter) = I

Which kind of iterator are we turning this into?

#### pub fn [into_iter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)(self) -> I[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/iter/traits/collect.rs.html#241 "goto source code")

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

### impl&lt;I> [IteratorRandom](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html "trait rand::seq::IteratorRandom") for I where I: [Iterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html "trait core::iter::traits::iterator::Iterator"),[\[src\]](https://rust-random.github.io/rand/src/rand/seq/mod.rs.html#615 "goto source code")

#### fn [choose](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose)&lt;R>(self, rng: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)R) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")> where R: [Rng](https://rust-random.github.io/rand/rand/rng/trait.Rng.html "trait rand::rng::Rng") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://rust-random.github.io/rand/src/rand/seq/mod.rs.html#304-305 "goto source code")

Choose one element at random from the iterator. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose)

#### fn [choose_stable](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_stable)&lt;R>(self, rng: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)R) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")> where R: [Rng](https://rust-random.github.io/rand/rand/rng/trait.Rng.html "trait rand::rng::Rng") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://rust-random.github.io/rand/src/rand/seq/mod.rs.html#373-374 "goto source code")

Choose one element at random from the iterator. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_stable)

#### fn [choose_multiple_fill](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_multiple_fill)&lt;R>(self, rng: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)R, buf: [&mut \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item")[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)) -> [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html) where R: [Rng](https://rust-random.github.io/rand/rand/rng/trait.Rng.html "trait rand::rng::Rng") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://rust-random.github.io/rand/src/rand/seq/mod.rs.html#426-427 "goto source code")

Collects values at random from the iterator into a supplied buffer until that buffer is filled. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_multiple_fill)

#### fn [choose_multiple](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_multiple)&lt;R>( self, rng: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)R, amount: [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html) ) -> [Vec](https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;Self::[Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item "type core::iter::traits::iterator::Iterator::Item"), [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")> where R: [Rng](https://rust-random.github.io/rand/rand/rng/trait.Rng.html "trait rand::rng::Rng") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://rust-random.github.io/rand/src/rand/seq/mod.rs.html#466-467 "goto source code")

Collects `amount` values at random from the iterator into a vector. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_multiple)

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
  