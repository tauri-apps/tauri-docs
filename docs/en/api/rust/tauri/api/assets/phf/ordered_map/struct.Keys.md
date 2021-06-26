---
title: Struct tauri::api::assets::phf::ordered_map::Keys
sidebar_label: struct.Keys
custom_edit_url: null
---

# Struct tauri::api::assets::phf::ordered_map::Keys,\[−]\[src],\[−],−

```rs
pub struct Keys<'a, K, V> where
    V: 'a,
    K: 'a,  { /* fields omitted */ }
```

An iterator over the keys in a `OrderedMap`.

## Trait Implementations

### `DoubleEndedIterator`

```rs
impl<'a, K, V> DoubleEndedIterator for Keys<'a, K, V>
```

_Defined in: [ordered_map.rs:219-223](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L219-223)_

#### `next_back`

```rs
pub fn next_back(&mut self) -> Option<&'a K>
```

Removes and returns an element from the end of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#tymethod.next_back)

_Defined in: [ordered_map.rs:220](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L220)_

#### `advance_back_by`

```rs
pub fn advance_back_by(&mut self, n: usize) -> Result<(), usize>
```

_Defined in: [double_ended.rs:130](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/double_ended.rs#L130)_

🔬 This is a nightly-only experimental API. (`iter_advance_by`)

recently added

Advances the iterator from the back by `n` elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.advance_back_by)

#### `nth_back`

```rs
pub fn nth_back(&mut self, n: usize) -> Option<Self::Item>
```

Returns the `n`th element from the end of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.nth_back)

_Defined in: [double_ended.rs:180](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/double_ended.rs#L180)_

#### `try_rfold`

```rs
pub fn try_rfold<B, F, R>(&mut self, init: B, f: F) -> R where
    F: FnMut(B, Self::Item) -> R,
    R: Try<Ok = B>, 
```

This is the reverse version of [`Iterator::try_fold()`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.try_fold "Iterator::try_fold()"): it takes elements starting from the back of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.try_rfold)

_Defined in: [double_ended.rs:217-221](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/double_ended.rs#L217-221)_

#### `rfold`

```rs
pub fn rfold<B, F>(self, init: B, f: F) -> B where
    F: FnMut(B, Self::Item) -> B, 
```

An iterator method that reduces the iterator’s elements to a single, final value, starting from the back. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.rfold)

_Defined in: [double_ended.rs:281-284](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/double_ended.rs#L281-284)_

#### `rfind`

```rs
pub fn rfind<P>(&mut self, predicate: P) -> Option<Self::Item> where
    P: FnMut(&Self::Item) -> bool, 
```

Searches for an element of an iterator from the back that satisfies a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.rfind)

_Defined in: [double_ended.rs:336-339](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/double_ended.rs#L336-339)_

### `ExactSizeIterator`

```rs
impl<'a, K, V> ExactSizeIterator for Keys<'a, K, V>
```

_Defined in: [ordered_map.rs:225](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L225)_

#### `len`

```rs
pub fn len(&self) -> usize
```

Returns the exact length of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html#method.len)

_Defined in: [exact_size.rs:103](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/exact_size.rs#L103)_

#### `is_empty`

```rs
pub fn is_empty(&self) -> bool
```

_Defined in: [exact_size.rs:135](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/exact_size.rs#L135)_

🔬 This is a nightly-only experimental API. (`exact_size_is_empty`)

Returns `true` if the iterator is empty. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html#method.is_empty)

### `Iterator`

```rs
impl<'a, K, V> Iterator for Keys<'a, K, V>
```

_Defined in: [ordered_map.rs:207-217](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L207-217)_

#### `type Item = &'aK`

The type of the elements being iterated over.

#### `next`

```rs
pub fn next(&mut self) -> Option<&'a K>
```

Advances the iterator and returns the next value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#tymethod.next)

_Defined in: [ordered_map.rs:210](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L210)_

#### `size_hint`

```rs
pub fn size_hint(&self) -> (usize, Option<usize>)
```

Returns the bounds on the remaining length of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.size_hint)

_Defined in: [ordered_map.rs:214](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L214)_

#### `count`

```rs
pub fn count(self) -> usize
```

Consumes the iterator, counting the number of iterations and returning it. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.count)

_Defined in: [iterator.rs:242-244](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L242-244)_

#### `last`

```rs
pub fn last(self) -> Option<Self::Item>
```

Consumes the iterator, returning the last element. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.last)

_Defined in: [iterator.rs:272-274](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L272-274)_

#### `advance_by`

```rs
pub fn advance_by(&mut self, n: usize) -> Result<(), usize>
```

_Defined in: [iterator.rs:315](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L315)_

🔬 This is a nightly-only experimental API. (`iter_advance_by`)

recently added

Advances the iterator by `n` elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.advance_by)

#### `nth`

```rs
pub fn nth(&mut self, n: usize) -> Option<Self::Item>
```

Returns the `n`th element of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.nth)

_Defined in: [iterator.rs:363](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L363)_

#### `step_by`

```rs
pub fn step_by(self, step: usize) -> StepBy<Self>
```

Creates an iterator starting at the same point, but stepping by the given amount at each iteration. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.step_by)

_Defined in: [iterator.rs:414-416](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L414-416)_

#### `chain`

```rs
pub fn chain<U>(self, other: U) -> Chain<Self, <U as IntoIterator>::IntoIter> where
    U: IntoIterator<Item = Self::Item>, 
```

Takes two iterators and creates a new iterator over both in sequence. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.chain)

_Defined in: [iterator.rs:485-488](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L485-488)_

#### `zip`

```rs
pub fn zip<U>(self, other: U) -> Zip<Self, <U as IntoIterator>::IntoIter> where
    U: IntoIterator, 
```

‘Zips up’ two iterators into a single iterator of pairs. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.zip)

_Defined in: [iterator.rs:561-564](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L561-564)_

#### `intersperse`

```rs
pub fn intersperse(self, separator: Self::Item) -> Intersperse<Self> where
    Self::Item: Clone, 
```

_Defined in: [iterator.rs:603-606](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L603-606)_

🔬 This is a nightly-only experimental API. (`iter_intersperse`)

recently added

Creates a new iterator which places a copy of `separator` between adjacent items of the original iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.intersperse)

#### `intersperse_with`

```rs
pub fn intersperse_with<G>(self, separator: G) -> IntersperseWith<Self, G> where
    G: FnMut() -> Self::Item, 
```

_Defined in: [iterator.rs:661-664](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L661-664)_

🔬 This is a nightly-only experimental API. (`iter_intersperse`)

recently added

Creates a new iterator which places an item generated by `separator` between adjacent items of the original iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.intersperse_with)

#### `map`

```rs
pub fn map<B, F>(self, f: F) -> Map<Self, F> where
    F: FnMut(Self::Item) -> B, 
```

Takes a closure and creates an iterator which calls that closure on each element. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.map)

_Defined in: [iterator.rs:720-723](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L720-723)_

#### `for_each`

```rs
pub fn for_each<F>(self, f: F) where
    F: FnMut(Self::Item), 
```

Calls a closure on each element of an iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.for_each)

_Defined in: [iterator.rs:765-768](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L765-768)_

#### `filter`

```rs
pub fn filter<P>(self, predicate: P) -> Filter<Self, P> where
    P: FnMut(&Self::Item) -> bool, 
```

Creates an iterator which uses a closure to determine if an element should be yielded. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.filter)

_Defined in: [iterator.rs:840-843](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L840-843)_

#### `filter_map`

```rs
pub fn filter_map<B, F>(self, f: F) -> FilterMap<Self, F> where
    F: FnMut(Self::Item) -> Option<B>, 
```

Creates an iterator that both filters and maps. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.filter_map)

_Defined in: [iterator.rs:885-888](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L885-888)_

#### `enumerate`

```rs
pub fn enumerate(self) -> Enumerate<Self>
```

Creates an iterator which gives the current iteration count as well as the next value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.enumerate)

_Defined in: [iterator.rs:932-934](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L932-934)_

#### `peekable`

```rs
pub fn peekable(self) -> Peekable<Self>
```

Creates an iterator which can use [`peek`](https://doc.rust-lang.org/nightly/core/iter/adapters/peekable/struct.Peekable.html#method.peek) to look at the next element of the iterator without consuming it. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.peekable)

_Defined in: [iterator.rs:981-983](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L981-983)_

#### `skip_while`

```rs
pub fn skip_while<P>(self, predicate: P) -> SkipWhile<Self, P> where
    P: FnMut(&Self::Item) -> bool, 
```

Creates an iterator that [`skip`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.skip)s elements based on a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.skip_while)

_Defined in: [iterator.rs:1045-1048](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1045-1048)_

#### `take_while`

```rs
pub fn take_while<P>(self, predicate: P) -> TakeWhile<Self, P> where
    P: FnMut(&Self::Item) -> bool, 
```

Creates an iterator that yields elements based on a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.take_while)

_Defined in: [iterator.rs:1126-1129](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1126-1129)_

#### `map_while`

```rs
pub fn map_while<B, P>(self, predicate: P) -> MapWhile<Self, P> where
    P: FnMut(Self::Item) -> Option<B>, 
```

_Defined in: [iterator.rs:1221-1224](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1221-1224)_

🔬 This is a nightly-only experimental API. (`iter_map_while`)

recently added

Creates an iterator that both yields elements based on a predicate and maps. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.map_while)

#### `skip`

```rs
pub fn skip(self, n: usize) -> Skip<Self>
```

Creates an iterator that skips the first `n` elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.skip)

_Defined in: [iterator.rs:1248-1250](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1248-1250)_

#### `take`

```rs
pub fn take(self, n: usize) -> Take<Self>
```

Creates an iterator that yields its first `n` elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.take)

_Defined in: [iterator.rs:1294-1296](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1294-1296)_

#### `scan`

```rs
pub fn scan<St, B, F>(self, initial_state: St, f: F) -> Scan<Self, St, F> where
    F: FnMut(&mut St, Self::Item) -> Option<B>, 
```

An iterator adaptor similar to [`fold`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.fold) that holds internal state and produces a new iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.scan)

_Defined in: [iterator.rs:1338-1341](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1338-1341)_

#### `flat_map`

```rs
pub fn flat_map<U, F>(self, f: F) -> FlatMap<Self, U, F> where
    F: FnMut(Self::Item) -> U,
    U: IntoIterator, 
```

Creates an iterator that works like map, but flattens nested structure. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.flat_map)

_Defined in: [iterator.rs:1378-1382](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1378-1382)_

#### `flatten`

```rs
pub fn flatten(self) -> Flatten<Self> where
    Self::Item: IntoIterator, 
```

Creates an iterator that flattens nested structure. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.flatten)

_Defined in: [iterator.rs:1450-1453](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1450-1453)_

#### `fuse`

```rs
pub fn fuse(self) -> Fuse<Self>
```

Creates an iterator which ends after the first [`None`](https://doc.rust-lang.org/nightly/core/option/enum.Option.html#variant.None "None"). [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.fuse)

_Defined in: [iterator.rs:1513-1515](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1513-1515)_

#### `inspect`

```rs
pub fn inspect<F>(self, f: F) -> Inspect<Self, F> where
    F: FnMut(&Self::Item), 
```

Does something with each element of an iterator, passing the value on. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.inspect)

_Defined in: [iterator.rs:1597-1600](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1597-1600)_

#### `by_ref`

```rs
pub fn by_ref(&mut self) -> &mut Self
```

Borrows an iterator, rather than consuming it. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.by_ref)

_Defined in: [iterator.rs:1642-1644](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1642-1644)_

#### `collect`

```rs
#[must_use =
  "if you really need to exhaust the iterator, consider `.for_each(drop)` instead"]pub fn collect<B>(self) -> B where
    B: FromIterator<Self::Item>, 
```

Transforms an iterator into a collection. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.collect)

_Defined in: [iterator.rs:1760-1762](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1760-1762)_

#### `partition`

```rs
pub fn partition<B, F>(self, f: F) -> (B, B) where
    F: FnMut(&Self::Item) -> bool,
    B: Default + Extend<Self::Item>, 
```

Consumes an iterator, creating two collections from it. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.partition)

_Defined in: [iterator.rs:1793-1797](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1793-1797)_

#### `partition_in_place`

```rs
pub fn partition_in_place<'a, T, P>(self, predicate: P) -> usize where
    Self: DoubleEndedIterator<Item = &'a mut T>,
    T: 'a,
    P: FnMut(&T) -> bool, 
```

_Defined in: [iterator.rs:1848-1851](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1848-1851)_

🔬 This is a nightly-only experimental API. (`iter_partition_in_place`)

new API

Reorders the elements of this iterator _in-place_ according to the given predicate, such that all those that return `true` precede all those that return `false`. Returns the number of `true` elements found. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.partition_in_place)

#### `is_partitioned`

```rs
pub fn is_partitioned<P>(self, predicate: P) -> bool where
    P: FnMut(Self::Item) -> bool, 
```

_Defined in: [iterator.rs:1905-1908](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1905-1908)_

🔬 This is a nightly-only experimental API. (`iter_is_partitioned`)

new API

Checks if the elements of this iterator are partitioned according to the given predicate, such that all those that return `true` precede all those that return `false`. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.is_partitioned)

#### `try_fold`

```rs
pub fn try_fold<B, F, R>(&mut self, init: B, f: F) -> R where
    F: FnMut(B, Self::Item) -> R,
    R: Try<Ok = B>, 
```

An iterator method that applies a function as long as it returns successfully, producing a single, final value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.try_fold)

_Defined in: [iterator.rs:1974-1978](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L1974-1978)_

#### `try_for_each`

```rs
pub fn try_for_each<F, R>(&mut self, f: F) -> R where
    F: FnMut(Self::Item) -> R,
    R: Try<Ok = ()>, 
```

An iterator method that applies a fallible function to each item in the iterator, stopping at the first error and returning that error. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.try_for_each)

_Defined in: [iterator.rs:2016-2020](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2016-2020)_

#### `fold`

```rs
pub fn fold<B, F>(self, init: B, f: F) -> B where
    F: FnMut(B, Self::Item) -> B, 
```

Folds every element into an accumulator by applying an operation, returning the final result. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.fold)

_Defined in: [iterator.rs:2116-2119](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2116-2119)_

#### `reduce`

```rs
pub fn reduce<F>(self, f: F) -> Option<Self::Item> where
    F: FnMut(Self::Item, Self::Item) -> Self::Item, 
```

Reduces the elements to a single one, by repeatedly applying a reducing operation. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.reduce)

_Defined in: [iterator.rs:2161-2164](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2161-2164)_

#### `all`

```rs
pub fn all<F>(&mut self, f: F) -> bool where
    F: FnMut(Self::Item) -> bool, 
```

Tests if every element of the iterator matches a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.all)

_Defined in: [iterator.rs:2210-2213](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2210-2213)_

#### `any`

```rs
pub fn any<F>(&mut self, f: F) -> bool where
    F: FnMut(Self::Item) -> bool, 
```

Tests if any element of the iterator matches a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.any)

_Defined in: [iterator.rs:2263-2266](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2263-2266)_

#### `find`

```rs
pub fn find<P>(&mut self, predicate: P) -> Option<Self::Item> where
    P: FnMut(&Self::Item) -> bool, 
```

Searches for an element of an iterator that satisfies a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.find)

_Defined in: [iterator.rs:2323-2326](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2323-2326)_

#### `find_map`

```rs
pub fn find_map<B, F>(&mut self, f: F) -> Option<B> where
    F: FnMut(Self::Item) -> Option<B>, 
```

Applies function to the elements of iterator and returns the first non-none result. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.find_map)

_Defined in: [iterator.rs:2354-2357](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2354-2357)_

#### `try_find`

```rs
pub fn try_find<F, R>(
    &mut self, 
    f: F
) -> Result<Option<Self::Item>, <R as Try>::Error> where
    F: FnMut(&Self::Item) -> R,
    R: Try<Ok = bool>, 
```

_Defined in: [iterator.rs:2392-2396](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2392-2396)_

🔬 This is a nightly-only experimental API. (`try_find`)

new API

Applies function to the elements of iterator and returns the first true result or the first error. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.try_find)

#### `position`

```rs
pub fn position<P>(&mut self, predicate: P) -> Option<usize> where
    P: FnMut(Self::Item) -> bool, 
```

Searches for an element in an iterator, returning its index. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.position)

_Defined in: [iterator.rs:2468-2471](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2468-2471)_

#### `rposition`

```rs
pub fn rposition<P>(&mut self, predicate: P) -> Option<usize> where
    Self: ExactSizeIterator + DoubleEndedIterator,
    P: FnMut(Self::Item) -> bool, 
```

Searches for an element in an iterator from the right, returning its index. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.rposition)

_Defined in: [iterator.rs:2525-2528](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2525-2528)_

#### `max`

```rs
pub fn max(self) -> Option<Self::Item> where
    Self::Item: Ord, 
```

Returns the maximum element of an iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.max)

_Defined in: [iterator.rs:2564-2567](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2564-2567)_

#### `min`

```rs
pub fn min(self) -> Option<Self::Item> where
    Self::Item: Ord, 
```

Returns the minimum element of an iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.min)

_Defined in: [iterator.rs:2590-2593](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2590-2593)_

#### `max_by_key`

```rs
pub fn max_by_key<B, F>(self, f: F) -> Option<Self::Item> where
    F: FnMut(&Self::Item) -> B,
    B: Ord, 
```

Returns the element that gives the maximum value from the specified function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.max_by_key)

_Defined in: [iterator.rs:2612-2615](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2612-2615)_

#### `max_by`

```rs
pub fn max_by<F>(self, compare: F) -> Option<Self::Item> where
    F: FnMut(&Self::Item, &Self::Item) -> Ordering, 
```

Returns the element that gives the maximum value with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.max_by)

_Defined in: [iterator.rs:2645-2648](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2645-2648)_

#### `min_by_key`

```rs
pub fn min_by_key<B, F>(self, f: F) -> Option<Self::Item> where
    F: FnMut(&Self::Item) -> B,
    B: Ord, 
```

Returns the element that gives the minimum value from the specified function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.min_by_key)

_Defined in: [iterator.rs:2672-2675](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2672-2675)_

#### `min_by`

```rs
pub fn min_by<F>(self, compare: F) -> Option<Self::Item> where
    F: FnMut(&Self::Item, &Self::Item) -> Ordering, 
```

Returns the element that gives the minimum value with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.min_by)

_Defined in: [iterator.rs:2705-2708](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2705-2708)_

#### `rev`

```rs
pub fn rev(self) -> Rev<Self> where
    Self: DoubleEndedIterator, 
```

Reverses an iterator’s direction. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.rev)

_Defined in: [iterator.rs:2742-2744](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2742-2744)_

#### `unzip`

```rs
pub fn unzip<A, B, FromA, FromB>(self) -> (FromA, FromB) where
    Self: Iterator<Item = (A, B)>,
    FromA: Default + Extend<A>,
    FromB: Default + Extend<B>, 
```

Converts an iterator of pairs into a pair of containers. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.unzip)

_Defined in: [iterator.rs:2772-2776](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2772-2776)_

#### `copied`

```rs
pub fn copied<'a, T>(self) -> Copied<Self> where
    Self: Iterator<Item = &'a T>,
    T: 'a + Copy, 
```

Creates an iterator which copies all of its elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.copied)

_Defined in: [iterator.rs:2823-2826](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2823-2826)_

#### `cloned`

```rs
pub fn cloned<'a, T>(self) -> Cloned<Self> where
    Self: Iterator<Item = &'a T>,
    T: 'a + Clone, 
```

Creates an iterator which [`clone`](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)s all of its elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.cloned)

_Defined in: [iterator.rs:2854-2857](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2854-2857)_

#### `cycle`

```rs
pub fn cycle(self) -> Cycle<Self> where
    Self: Clone, 
```

Repeats an iterator endlessly. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.cycle)

_Defined in: [iterator.rs:2887-2889](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2887-2889)_

#### `sum`

```rs
pub fn sum<S>(self) -> S where
    S: Sum<Self::Item>, 
```

Sums the elements of an iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.sum)

_Defined in: [iterator.rs:2917-2920](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2917-2920)_

#### `product`

```rs
pub fn product<P>(self) -> P where
    P: Product<Self::Item>, 
```

Iterates over the entire iterator, multiplying all the elements [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.product)

_Defined in: [iterator.rs:2946-2949](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2946-2949)_

#### `cmp`

```rs
pub fn cmp<I>(self, other: I) -> Ordering where
    I: IntoIterator<Item = Self::Item>,
    Self::Item: Ord, 
```

[Lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.cmp)

_Defined in: [iterator.rs:2967-2971](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2967-2971)_

#### `cmp_by`

```rs
pub fn cmp_by<I, F>(self, other: I, cmp: F) -> Ordering where
    F: FnMut(Self::Item, <I as IntoIterator>::Item) -> Ordering,
    I: IntoIterator, 
```

_Defined in: [iterator.rs:2996-3000](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L2996-3000)_

🔬 This is a nightly-only experimental API. (`iter_order_by`)

[Lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.cmp_by)

#### `partial_cmp`

```rs
pub fn partial_cmp<I>(self, other: I) -> Option<Ordering> where
    I: IntoIterator,
    Self::Item: PartialOrd<<I as IntoIterator>::Item>, 
```

[Lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.partial_cmp)

_Defined in: [iterator.rs:3043-3047](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L3043-3047)_

#### `partial_cmp_by`

```rs
pub fn partial_cmp_by<I, F>(self, other: I, partial_cmp: F) -> Option<Ordering> where
    F: FnMut(Self::Item, <I as IntoIterator>::Item) -> Option<Ordering>,
    I: IntoIterator, 
```

_Defined in: [iterator.rs:3081-3085](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L3081-3085)_

🔬 This is a nightly-only experimental API. (`iter_order_by`)

[Lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.partial_cmp_by)

#### `eq`

```rs
pub fn eq<I>(self, other: I) -> bool where
    I: IntoIterator,
    Self::Item: PartialEq<<I as IntoIterator>::Item>, 
```

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are equal to those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.eq)

_Defined in: [iterator.rs:3123-3127](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L3123-3127)_

#### `eq_by`

```rs
pub fn eq_by<I, F>(self, other: I, eq: F) -> bool where
    F: FnMut(Self::Item, <I as IntoIterator>::Item) -> bool,
    I: IntoIterator, 
```

_Defined in: [iterator.rs:3148-3152](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L3148-3152)_

🔬 This is a nightly-only experimental API. (`iter_order_by`)

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are equal to those of another with respect to the specified equality function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.eq_by)

#### `ne`

```rs
pub fn ne<I>(self, other: I) -> bool where
    I: IntoIterator,
    Self::Item: PartialEq<<I as IntoIterator>::Item>, 
```

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are unequal to those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.ne)

_Defined in: [iterator.rs:3183-3187](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L3183-3187)_

#### `lt`

```rs
pub fn lt<I>(self, other: I) -> bool where
    I: IntoIterator,
    Self::Item: PartialOrd<<I as IntoIterator>::Item>, 
```

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) less than those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.lt)

_Defined in: [iterator.rs:3204-3208](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L3204-3208)_

#### `le`

```rs
pub fn le<I>(self, other: I) -> bool where
    I: IntoIterator,
    Self::Item: PartialOrd<<I as IntoIterator>::Item>, 
```

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) less or equal to those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.le)

_Defined in: [iterator.rs:3225-3229](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L3225-3229)_

#### `gt`

```rs
pub fn gt<I>(self, other: I) -> bool where
    I: IntoIterator,
    Self::Item: PartialOrd<<I as IntoIterator>::Item>, 
```

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) greater than those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.gt)

_Defined in: [iterator.rs:3246-3250](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L3246-3250)_

#### `ge`

```rs
pub fn ge<I>(self, other: I) -> bool where
    I: IntoIterator,
    Self::Item: PartialOrd<<I as IntoIterator>::Item>, 
```

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) greater than or equal to those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.ge)

_Defined in: [iterator.rs:3267-3271](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L3267-3271)_

#### `is_sorted`

```rs
pub fn is_sorted(self) -> bool where
    Self::Item: PartialOrd<Self::Item>, 
```

_Defined in: [iterator.rs:3298-3301](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L3298-3301)_

🔬 This is a nightly-only experimental API. (`is_sorted`)

new API

Checks if the elements of this iterator are sorted. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted)

#### `is_sorted_by`

```rs
pub fn is_sorted_by<F>(self, compare: F) -> bool where
    F: FnMut(&Self::Item, &Self::Item) -> Option<Ordering>, 
```

_Defined in: [iterator.rs:3326-3329](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L3326-3329)_

🔬 This is a nightly-only experimental API. (`is_sorted`)

new API

Checks if the elements of this iterator are sorted using the given comparator function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted_by)

#### `is_sorted_by_key`

```rs
pub fn is_sorted_by_key<F, K>(self, f: F) -> bool where
    F: FnMut(Self::Item) -> K,
    K: PartialOrd<K>, 
```

_Defined in: [iterator.rs:3372-3376](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs#L3372-3376)_

🔬 This is a nightly-only experimental API. (`is_sorted`)

new API

Checks if the elements of this iterator are sorted using the given key extraction function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted_by_key)

## Auto Trait Implementations

### `impl<'a, K, V> RefUnwindSafe for Keys<'a, K, V> where K: RefUnwindSafe, V: RefUnwindSafe,`

### `impl<'a, K, V> Send for Keys<'a, K, V> where K: Sync, V: Sync,`

### `impl<'a, K, V> Sync for Keys<'a, K, V> where K: Sync, V: Sync,`

### `impl<'a, K, V> Unpin for Keys<'a, K, V>`

### `impl<'a, K, V> UnwindSafe for Keys<'a, K, V> where K: RefUnwindSafe, V: RefUnwindSafe,`

## Blanket Implementations

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)_

### `IntoIterator`

```rs
impl<I> IntoIterator for I where
    I: Iterator, 
```

_Defined in: [collect.rs:236-243](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs#L236-243)_

#### `type Item = <I as Iterator>::Item`

The type of the elements being iterated over.

#### `type IntoIter = I`

Which kind of iterator are we turning this into?

#### `into_iter`

```rs
pub fn into_iter(self) -> I
```

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

_Defined in: [collect.rs:240](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs#L240)_

### `IteratorRandom`

```rs
impl<I> IteratorRandom for I where
    I: Iterator, 
```

_Defined in: [mod.rs:615](https://github.com/https://blob/2a65ac1/core/tauri/src/https://rust-random.github.io/rand/src/rand/seq/mod.rs#L615)_

#### `choose`

```rs
pub fn choose<R>(self, rng: &mut R) -> Option<Self::Item> where
    R: Rng + ?Sized, 
```

Choose one element at random from the iterator. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose)

_Defined in: [mod.rs:304-305](https://github.com/https://blob/2a65ac1/core/tauri/src/https://rust-random.github.io/rand/src/rand/seq/mod.rs#L304-305)_

#### `choose_stable`

```rs
pub fn choose_stable<R>(self, rng: &mut R) -> Option<Self::Item> where
    R: Rng + ?Sized, 
```

Choose one element at random from the iterator. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_stable)

_Defined in: [mod.rs:373-374](https://github.com/https://blob/2a65ac1/core/tauri/src/https://rust-random.github.io/rand/src/rand/seq/mod.rs#L373-374)_

#### `choose_multiple_fill`

```rs
pub fn choose_multiple_fill<R>(
    self, 
    rng: &mut R, 
    buf: &mut [Self::Item]
) -> usize where
    R: Rng + ?Sized, 
```

Collects values at random from the iterator into a supplied buffer until that buffer is filled. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_multiple_fill)

_Defined in: [mod.rs:426-427](https://github.com/https://blob/2a65ac1/core/tauri/src/https://rust-random.github.io/rand/src/rand/seq/mod.rs#L426-427)_

#### `choose_multiple`

```rs
pub fn choose_multiple<R>(
    self, 
    rng: &mut R, 
    amount: usize
) -> Vec<Self::Item, Global> where
    R: Rng + ?Sized, 
```

Collects `amount` values at random from the iterator into a vector. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_multiple)

_Defined in: [mod.rs:466-467](https://github.com/https://blob/2a65ac1/core/tauri/src/https://rust-random.github.io/rand/src/rand/seq/mod.rs#L466-467)_

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
