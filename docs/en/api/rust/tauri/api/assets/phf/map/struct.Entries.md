---
title: Struct tauri::api::assets::phf::map::Entries
sidebar_label: struct.Entries
custom_edit_url: null
---

# Struct tauri::api::assets::phf::map::Entries,\[−]\[src],\[−],−

```rs
pub struct Entries<'a, K, V> where
    V: 'a,
    K: 'a,  { /* fields omitted */ }
```

An iterator over the key/value pairs in a `Map`.

## Trait Implementations

### `impl<'a, K, V> DoubleEndedIterator for Entries<'a, K, V>`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#162-166 "goto source code")

#### `pub fn next_back(&mut self) -> Option<(&'aK, &'aV)>`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#163 "goto source code")

Removes and returns an element from the end of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#tymethod.next_back)

#### `pub fn advance_back_by(&mut self, n: usize) -> Result<(), usize>`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/double_ended.rs.html#130 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_advance_by`)

recently added

Advances the iterator from the back by `n` elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.advance_back_by)

#### `pub fn nth_back(&mut self, n: usize) -> Option<Self::Item>`1.37.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/double_ended.rs.html#180 "goto source code")

Returns the `n`th element from the end of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.nth_back)

#### `pub fn try_rfold<B, F, R>(&mut self, init: B, f: F) -> R where F: FnMut(B, Self::Item) -> R, R: Try<Ok = B>,`1.27.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/double_ended.rs.html#217-221 "goto source code")

This is the reverse version of [`Iterator::try_fold()`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.try_fold "Iterator::try_fold()"): it takes elements starting from the back of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.try_rfold)

#### `pub fn rfold<B, F>(self, init: B, f: F) -> B where F: FnMut(B, Self::Item) -> B,`1.27.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/double_ended.rs.html#281-284 "goto source code")

An iterator method that reduces the iterator’s elements to a single, final value, starting from the back. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.rfold)

#### `pub fn rfind<P>(&mut self, predicate: P) -> Option<Self::Item> where P: FnMut(&Self::Item) -> bool,`1.27.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/double_ended.rs.html#336-339 "goto source code")

Searches for an element of an iterator from the back that satisfies a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.rfind)

### `impl<'a, K, V> ExactSizeIterator for Entries<'a, K, V>`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#168 "goto source code")

#### `pub fn len(&self) -> usize`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/exact_size.rs.html#103 "goto source code")

Returns the exact length of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html#method.len)

#### `pub fn is_empty(&self) -> bool`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/exact_size.rs.html#135 "goto source code")

🔬 This is a nightly-only experimental API. (`exact_size_is_empty`)

Returns `true` if the iterator is empty. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html#method.is_empty)

### `impl<'a, K, V> Iterator for Entries<'a, K, V>`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#150-160 "goto source code")

#### `type Item = (&'aK, &'aV)`

The type of the elements being iterated over.

#### `pub fn next(&mut self) -> Option<(&'aK, &'aV)>`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#153 "goto source code")

Advances the iterator and returns the next value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#tymethod.next)

#### `pub fn size_hint(&self) -> (usize, Option<usize>)`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#157 "goto source code")

Returns the bounds on the remaining length of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.size_hint)

#### `pub fn count(self) -> usize`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#242-244 "goto source code")

Consumes the iterator, counting the number of iterations and returning it. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.count)

#### `pub fn last(self) -> Option<Self::Item>`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#272-274 "goto source code")

Consumes the iterator, returning the last element. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.last)

#### `pub fn advance_by(&mut self, n: usize) -> Result<(), usize>`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#315 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_advance_by`)

recently added

Advances the iterator by `n` elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.advance_by)

#### `pub fn nth(&mut self, n: usize) -> Option<Self::Item>`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#363 "goto source code")

Returns the `n`th element of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.nth)

#### `pub fn step_by(self, step: usize) -> StepBy<Self>`1.28.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#414-416 "goto source code")

Creates an iterator starting at the same point, but stepping by the given amount at each iteration. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.step_by)

#### `pub fn chain<U>(self, other: U) -> Chain<Self, <U as IntoIterator>::IntoIter> where U: IntoIterator<Item = Self::Item>,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#485-488 "goto source code")

Takes two iterators and creates a new iterator over both in sequence. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.chain)

#### `pub fn zip<U>(self, other: U) -> Zip<Self, <U as IntoIterator>::IntoIter> where U: IntoIterator,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#561-564 "goto source code")

‘Zips up’ two iterators into a single iterator of pairs. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.zip)

#### `pub fn intersperse(self, separator: Self::Item) -> Intersperse<Self> where Self::Item: Clone,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#603-606 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_intersperse`)

recently added

Creates a new iterator which places a copy of `separator` between adjacent items of the original iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.intersperse)

#### `pub fn intersperse_with<G>(self, separator: G) -> IntersperseWith<Self, G> where G: FnMut() -> Self::Item,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#661-664 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_intersperse`)

recently added

Creates a new iterator which places an item generated by `separator` between adjacent items of the original iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.intersperse_with)

#### `pub fn map<B, F>(self, f: F) -> Map<Self, F> where F: FnMut(Self::Item) -> B,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#720-723 "goto source code")

Takes a closure and creates an iterator which calls that closure on each element. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.map)

#### `pub fn for_each<F>(self, f: F) where F: FnMut(Self::Item),`1.21.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#765-768 "goto source code")

Calls a closure on each element of an iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.for_each)

#### `pub fn filter<P>(self, predicate: P) -> Filter<Self, P> where P: FnMut(&Self::Item) -> bool,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#840-843 "goto source code")

Creates an iterator which uses a closure to determine if an element should be yielded. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.filter)

#### `pub fn filter_map<B, F>(self, f: F) -> FilterMap<Self, F> where F: FnMut(Self::Item) -> Option<B>,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#885-888 "goto source code")

Creates an iterator that both filters and maps. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.filter_map)

#### `pub fn enumerate(self) -> Enumerate<Self>`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#932-934 "goto source code")

Creates an iterator which gives the current iteration count as well as the next value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.enumerate)

#### `pub fn peekable(self) -> Peekable<Self>`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#981-983 "goto source code")

Creates an iterator which can use [`peek`](https://doc.rust-lang.org/nightly/core/iter/adapters/peekable/struct.Peekable.html#method.peek) to look at the next element of the iterator without consuming it. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.peekable)

#### `pub fn skip_while<P>(self, predicate: P) -> SkipWhile<Self, P> where P: FnMut(&Self::Item) -> bool,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1045-1048 "goto source code")

Creates an iterator that [`skip`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.skip)s elements based on a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.skip_while)

#### `pub fn take_while<P>(self, predicate: P) -> TakeWhile<Self, P> where P: FnMut(&Self::Item) -> bool,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1126-1129 "goto source code")

Creates an iterator that yields elements based on a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.take_while)

#### `pub fn map_while<B, P>(self, predicate: P) -> MapWhile<Self, P> where P: FnMut(Self::Item) -> Option<B>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1221-1224 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_map_while`)

recently added

Creates an iterator that both yields elements based on a predicate and maps. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.map_while)

#### `pub fn skip(self, n: usize) -> Skip<Self>`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1248-1250 "goto source code")

Creates an iterator that skips the first `n` elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.skip)

#### `pub fn take(self, n: usize) -> Take<Self>`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1294-1296 "goto source code")

Creates an iterator that yields its first `n` elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.take)

#### `pub fn scan<St, B, F>(self, initial_state: St, f: F) -> Scan<Self, St, F> where F: FnMut(&mutSt, Self::Item) -> Option<B>,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1338-1341 "goto source code")

An iterator adaptor similar to [`fold`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.fold) that holds internal state and produces a new iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.scan)

#### `pub fn flat_map<U, F>(self, f: F) -> FlatMap<Self, U, F> where F: FnMut(Self::Item) -> U, U: IntoIterator,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1378-1382 "goto source code")

Creates an iterator that works like map, but flattens nested structure. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.flat_map)

#### `pub fn flatten(self) -> Flatten<Self> where Self::Item: IntoIterator,`1.29.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1450-1453 "goto source code")

Creates an iterator that flattens nested structure. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.flatten)

#### `pub fn fuse(self) -> Fuse<Self>`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1513-1515 "goto source code")

Creates an iterator which ends after the first [`None`](https://doc.rust-lang.org/nightly/core/option/enum.Option.html#variant.None "None"). [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.fuse)

#### `pub fn inspect<F>(self, f: F) -> Inspect<Self, F> where F: FnMut(&Self::Item),`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1597-1600 "goto source code")

Does something with each element of an iterator, passing the value on. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.inspect)

#### `pub fn by_ref(&mut self) -> &mutSelf`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1642-1644 "goto source code")

Borrows an iterator, rather than consuming it. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.by_ref)

#### ``#[must_use = "if you really need to exhaust the iterator, consider `.for_each(drop)` instead"]pub fn collect<B>(self) -> B where B: FromIterator<Self::Item>,``1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1760-1762 "goto source code")

Transforms an iterator into a collection. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.collect)

#### `pub fn partition<B, F>(self, f: F) -> (B, B)where F: FnMut(&Self::Item) -> bool, B: Default + Extend<Self::Item>,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1793-1797 "goto source code")

Consumes an iterator, creating two collections from it. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.partition)

#### `pub fn partition_in_place<'a, T, P>(self, predicate: P) -> usizewhere Self: DoubleEndedIterator<Item = &'a mutT>, T: 'a, P: FnMut(&T) -> bool,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1848-1851 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_partition_in_place`)

new API

Reorders the elements of this iterator _in-place_ according to the given predicate, such that all those that return `true` precede all those that return `false`. Returns the number of `true` elements found. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.partition_in_place)

#### `pub fn is_partitioned<P>(self, predicate: P) -> boolwhere P: FnMut(Self::Item) -> bool,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1905-1908 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_is_partitioned`)

new API

Checks if the elements of this iterator are partitioned according to the given predicate, such that all those that return `true` precede all those that return `false`. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.is_partitioned)

#### `pub fn try_fold<B, F, R>(&mut self, init: B, f: F) -> R where F: FnMut(B, Self::Item) -> R, R: Try<Ok = B>,`1.27.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#1974-1978 "goto source code")

An iterator method that applies a function as long as it returns successfully, producing a single, final value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.try_fold)

#### `pub fn try_for_each<F, R>(&mut self, f: F) -> R where F: FnMut(Self::Item) -> R, R: Try<Ok = ()>,`1.27.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2016-2020 "goto source code")

An iterator method that applies a fallible function to each item in the iterator, stopping at the first error and returning that error. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.try_for_each)

#### `pub fn fold<B, F>(self, init: B, f: F) -> B where F: FnMut(B, Self::Item) -> B,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2116-2119 "goto source code")

Folds every element into an accumulator by applying an operation, returning the final result. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.fold)

#### `pub fn reduce<F>(self, f: F) -> Option<Self::Item> where F: FnMut(Self::Item, Self::Item) -> Self::Item,`1.51.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2161-2164 "goto source code")

Reduces the elements to a single one, by repeatedly applying a reducing operation. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.reduce)

#### `pub fn all<F>(&mut self, f: F) -> boolwhere F: FnMut(Self::Item) -> bool,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2210-2213 "goto source code")

Tests if every element of the iterator matches a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.all)

#### `pub fn any<F>(&mut self, f: F) -> boolwhere F: FnMut(Self::Item) -> bool,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2263-2266 "goto source code")

Tests if any element of the iterator matches a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.any)

#### `pub fn find<P>(&mut self, predicate: P) -> Option<Self::Item> where P: FnMut(&Self::Item) -> bool,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2323-2326 "goto source code")

Searches for an element of an iterator that satisfies a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.find)

#### `pub fn find_map<B, F>(&mut self, f: F) -> Option<B> where F: FnMut(Self::Item) -> Option<B>,`1.30.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2354-2357 "goto source code")

Applies function to the elements of iterator and returns the first non-none result. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.find_map)

#### `pub fn try_find<F, R>( &mut self, f: F ) -> Result<Option<Self::Item>, <R as Try>::Error> where F: FnMut(&Self::Item) -> R, R: Try<Ok = bool>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2392-2396 "goto source code")

🔬 This is a nightly-only experimental API. (`try_find`)

new API

Applies function to the elements of iterator and returns the first true result or the first error. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.try_find)

#### `pub fn position<P>(&mut self, predicate: P) -> Option<usize> where P: FnMut(Self::Item) -> bool,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2468-2471 "goto source code")

Searches for an element in an iterator, returning its index. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.position)

#### `pub fn rposition<P>(&mut self, predicate: P) -> Option<usize> where Self: ExactSizeIterator + DoubleEndedIterator, P: FnMut(Self::Item) -> bool,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2525-2528 "goto source code")

Searches for an element in an iterator from the right, returning its index. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.rposition)

#### `pub fn max(self) -> Option<Self::Item> where Self::Item: Ord,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2564-2567 "goto source code")

Returns the maximum element of an iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.max)

#### `pub fn min(self) -> Option<Self::Item> where Self::Item: Ord,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2590-2593 "goto source code")

Returns the minimum element of an iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.min)

#### `pub fn max_by_key<B, F>(self, f: F) -> Option<Self::Item> where F: FnMut(&Self::Item) -> B, B: Ord,`1.6.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2612-2615 "goto source code")

Returns the element that gives the maximum value from the specified function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.max_by_key)

#### `pub fn max_by<F>(self, compare: F) -> Option<Self::Item> where F: FnMut(&Self::Item, &Self::Item) -> Ordering,`1.15.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2645-2648 "goto source code")

Returns the element that gives the maximum value with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.max_by)

#### `pub fn min_by_key<B, F>(self, f: F) -> Option<Self::Item> where F: FnMut(&Self::Item) -> B, B: Ord,`1.6.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2672-2675 "goto source code")

Returns the element that gives the minimum value from the specified function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.min_by_key)

#### `pub fn min_by<F>(self, compare: F) -> Option<Self::Item> where F: FnMut(&Self::Item, &Self::Item) -> Ordering,`1.15.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2705-2708 "goto source code")

Returns the element that gives the minimum value with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.min_by)

#### `pub fn rev(self) -> Rev<Self> where Self: DoubleEndedIterator,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2742-2744 "goto source code")

Reverses an iterator’s direction. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.rev)

#### `pub fn unzip<A, B, FromA, FromB>(self) -> (FromA, FromB)where Self: Iterator<Item = (A, B)>, FromA: Default + Extend<A>, FromB: Default + Extend<B>,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2772-2776 "goto source code")

Converts an iterator of pairs into a pair of containers. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.unzip)

#### `pub fn copied<'a, T>(self) -> Copied<Self> where Self: Iterator<Item = &'aT>, T: 'a + Copy,`1.36.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2823-2826 "goto source code")

Creates an iterator which copies all of its elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.copied)

#### `pub fn cloned<'a, T>(self) -> Cloned<Self> where Self: Iterator<Item = &'aT>, T: 'a + Clone,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2854-2857 "goto source code")

Creates an iterator which [`clone`](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)s all of its elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.cloned)

#### `pub fn cycle(self) -> Cycle<Self> where Self: Clone,`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2887-2889 "goto source code")

Repeats an iterator endlessly. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.cycle)

#### `pub fn sum<S>(self) -> S where S: Sum<Self::Item>,`1.11.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2917-2920 "goto source code")

Sums the elements of an iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.sum)

#### `pub fn product<P>(self) -> P where P: Product<Self::Item>,`1.11.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2946-2949 "goto source code")

Iterates over the entire iterator, multiplying all the elements [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.product)

#### `pub fn cmp<I>(self, other: I) -> Orderingwhere I: IntoIterator<Item = Self::Item>, Self::Item: Ord,`1.5.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2967-2971 "goto source code")

[Lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.cmp)

#### `pub fn cmp_by<I, F>(self, other: I, cmp: F) -> Orderingwhere F: FnMut(Self::Item, <I as IntoIterator>::Item) -> Ordering, I: IntoIterator,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#2996-3000 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_order_by`)

[Lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.cmp_by)

#### `pub fn partial_cmp<I>(self, other: I) -> Option<Ordering> where I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>,`1.5.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#3043-3047 "goto source code")

[Lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.partial_cmp)

#### `pub fn partial_cmp_by<I, F>(self, other: I, partial_cmp: F) -> Option<Ordering> where F: FnMut(Self::Item, <I as IntoIterator>::Item) -> Option<Ordering>, I: IntoIterator,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#3081-3085 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_order_by`)

[Lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.partial_cmp_by)

#### `pub fn eq<I>(self, other: I) -> boolwhere I: IntoIterator, Self::Item: PartialEq<<I as IntoIterator>::Item>,`1.5.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#3123-3127 "goto source code")

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are equal to those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.eq)

#### `pub fn eq_by<I, F>(self, other: I, eq: F) -> boolwhere F: FnMut(Self::Item, <I as IntoIterator>::Item) -> bool, I: IntoIterator,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#3148-3152 "goto source code")

🔬 This is a nightly-only experimental API. (`iter_order_by`)

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are equal to those of another with respect to the specified equality function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.eq_by)

#### `pub fn ne<I>(self, other: I) -> boolwhere I: IntoIterator, Self::Item: PartialEq<<I as IntoIterator>::Item>,`1.5.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#3183-3187 "goto source code")

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are unequal to those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.ne)

#### `pub fn lt<I>(self, other: I) -> boolwhere I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>,`1.5.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#3204-3208 "goto source code")

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) less than those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.lt)

#### `pub fn le<I>(self, other: I) -> boolwhere I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>,`1.5.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#3225-3229 "goto source code")

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) less or equal to those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.le)

#### `pub fn gt<I>(self, other: I) -> boolwhere I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>,`1.5.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#3246-3250 "goto source code")

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) greater than those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.gt)

#### `pub fn ge<I>(self, other: I) -> boolwhere I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>,`1.5.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#3267-3271 "goto source code")

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) greater than or equal to those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.ge)

#### `pub fn is_sorted(self) -> boolwhere Self::Item: PartialOrd<Self::Item>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#3298-3301 "goto source code")

🔬 This is a nightly-only experimental API. (`is_sorted`)

new API

Checks if the elements of this iterator are sorted. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted)

#### `pub fn is_sorted_by<F>(self, compare: F) -> boolwhere F: FnMut(&Self::Item, &Self::Item) -> Option<Ordering>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#3326-3329 "goto source code")

🔬 This is a nightly-only experimental API. (`is_sorted`)

new API

Checks if the elements of this iterator are sorted using the given comparator function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted_by)

#### `pub fn is_sorted_by_key<F, K>(self, f: F) -> boolwhere F: FnMut(Self::Item) -> K, K: PartialOrd<K>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/iterator.rs.html#3372-3376 "goto source code")

🔬 This is a nightly-only experimental API. (`is_sorted`)

new API

Checks if the elements of this iterator are sorted using the given key extraction function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted_by_key)

## Auto Trait Implementations

### `impl<'a, K, V> RefUnwindSafe for Entries<'a, K, V> where K: RefUnwindSafe, V: RefUnwindSafe,`

### `impl<'a, K, V> Send for Entries<'a, K, V> where K: Sync, V: Sync,`

### `impl<'a, K, V> Sync for Entries<'a, K, V> where K: Sync, V: Sync,`

### `impl<'a, K, V> Unpin for Entries<'a, K, V>`

### `impl<'a, K, V> UnwindSafe for Entries<'a, K, V> where K: RefUnwindSafe, V: RefUnwindSafe,`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/any.rs.html#131-135 "goto source code")

#### `pub fn type_id(&self) -> TypeId`[\[src\]](https://doc.rust-lang.org/nightly/src/core/any.rs.html#132 "goto source code")

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#208-213 "goto source code")

#### `pub fn borrow(&self) -> &T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#210 "goto source code")

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#216-220 "goto source code")

#### `pub fn borrow_mut(&mut self) -> &mutT`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#217 "goto source code")

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> From<T> for T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#544-548 "goto source code")

#### `pub fn from(t: T) -> T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#545 "goto source code")

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#533-540 "goto source code")

#### `pub fn into(self) -> U`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

### `impl<I> IntoIterator for I where I: Iterator,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#236-243 "goto source code")

#### `type Item = <I as Iterator>::Item`

The type of the elements being iterated over.

#### `type IntoIter = I`

Which kind of iterator are we turning this into?

#### `pub fn into_iter(self) -> I`[\[src\]](https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#240 "goto source code")

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

### `impl<I> IteratorRandom for I where I: Iterator,`[\[src\]](https://rust-random.github.io/rand/src/rand/seq/mod.rs.html#615 "goto source code")

#### `pub fn choose<R>(self, rng: &mutR) -> Option<Self::Item> where R: Rng + ?Sized,`[\[src\]](https://rust-random.github.io/rand/src/rand/seq/mod.rs.html#304-305 "goto source code")

Choose one element at random from the iterator. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose)

#### `pub fn choose_stable<R>(self, rng: &mutR) -> Option<Self::Item> where R: Rng + ?Sized,`[\[src\]](https://rust-random.github.io/rand/src/rand/seq/mod.rs.html#373-374 "goto source code")

Choose one element at random from the iterator. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_stable)

#### `pub fn choose_multiple_fill<R>( self, rng: &mutR, buf: &mut [Self::Item] ) -> usizewhere R: Rng + ?Sized,`[\[src\]](https://rust-random.github.io/rand/src/rand/seq/mod.rs.html#426-427 "goto source code")

Collects values at random from the iterator into a supplied buffer until that buffer is filled. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_multiple_fill)

#### `pub fn choose_multiple<R>( self, rng: &mutR, amount: usize ) -> Vec<Self::Item, Global> where R: Rng + ?Sized,`[\[src\]](https://rust-random.github.io/rand/src/rand/seq/mod.rs.html#466-467 "goto source code")

Collects `amount` values at random from the iterator into a vector. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_multiple)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#581-590 "goto source code")

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#587 "goto source code")

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#567-576 "goto source code")

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#573 "goto source code")

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
