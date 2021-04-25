---
title: "struct.Keys"
---

# Struct [tauri](/docs/api/rust/tauri/../../../../index.html)::​[api](/docs/api/rust/tauri/../../../index.html)::​[assets](/docs/api/rust/tauri/../../index.html)::​[phf](/docs/api/rust/tauri/../index.html)::​[map](/docs/api/rust/tauri/index.html)::​[Keys](/docs/api/rust/tauri/)

    pub struct Keys<'a, K, V> where
        K: 'a,
        V: 'a,  { /* fields omitted */ }

An iterator over the keys in a `Map`.

## Trait Implementations

### `impl<'a, K, V> DoubleEndedIterator for Keys<'a, K, V>`

#### `pub fn next_back(&mut self) -> Option<&'aK>`

Removes and returns an element from the end of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#tymethod.next_back)

#### `pub fn advance_back_by(&mut self, n: usize) -> Result<(), usize>`

🔬 This is a nightly-only experimental API. (`iter_advance_by`)

recently added

Advances the iterator from the back by `n` elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.advance_back_by)

#### `pub fn nth_back(&mut self, n: usize) -> Option<Self::Item>`1.37.0

Returns the `n`th element from the end of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.nth_back)

#### `pub fn try_rfold<B, F, R>(&mut self, init: B, f: F) -> R where F: FnMut(B, Self::Item) -> R, R: Try<Ok = B>,`1.27.0

This is the reverse version of [`Iterator::try_fold()`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.try_fold "Iterator::try_fold()"): it takes elements starting from the back of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.try_rfold)

#### `pub fn rfold<B, F>(self, init: B, f: F) -> B where F: FnMut(B, Self::Item) -> B,`1.27.0

An iterator method that reduces the iterator's elements to a single, final value, starting from the back. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.rfold)

#### `pub fn rfind<P>(&mut self, predicate: P) -> Option<Self::Item> where P: FnMut(&Self::Item) -> bool,`1.27.0

Searches for an element of an iterator from the back that satisfies a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.rfind)

### `impl<'a, K, V> ExactSizeIterator for Keys<'a, K, V>`

#### `pub fn len(&self) -> usize`1.0.0

Returns the exact length of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html#method.len)

#### `pub fn is_empty(&self) -> bool`

🔬 This is a nightly-only experimental API. (`exact_size_is_empty`)

Returns `true` if the iterator is empty. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html#method.is_empty)

### `impl<'a, K, V> Iterator for Keys<'a, K, V>`

#### `type Item = &'aK`

The type of the elements being iterated over.

#### `pub fn next(&mut self) -> Option<&'aK>`

Advances the iterator and returns the next value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#tymethod.next)

#### `pub fn size_hint(&self) -> (usize, Option<usize>)`

Returns the bounds on the remaining length of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.size_hint)

#### `pub fn count(self) -> usize`1.0.0

Consumes the iterator, counting the number of iterations and returning it. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.count)

#### `pub fn last(self) -> Option<Self::Item>`1.0.0

Consumes the iterator, returning the last element. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.last)

#### `pub fn advance_by(&mut self, n: usize) -> Result<(), usize>`

🔬 This is a nightly-only experimental API. (`iter_advance_by`)

recently added

Advances the iterator by `n` elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.advance_by)

#### `pub fn nth(&mut self, n: usize) -> Option<Self::Item>`1.0.0

Returns the `n`th element of the iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.nth)

#### `pub fn step_by(self, step: usize) -> StepBy<Self>`1.28.0

Creates an iterator starting at the same point, but stepping by the given amount at each iteration. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.step_by)

#### `pub fn chain<U>(self, other: U) -> Chain<Self, <U as IntoIterator>::IntoIter> where U: IntoIterator<Item = Self::Item>,`1.0.0

Takes two iterators and creates a new iterator over both in sequence. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.chain)

#### `pub fn zip<U>(self, other: U) -> Zip<Self, <U as IntoIterator>::IntoIter> where U: IntoIterator,`1.0.0

'Zips up' two iterators into a single iterator of pairs. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.zip)

#### `pub fn intersperse(self, separator: Self::Item) -> Intersperse<Self> where Self::Item: Clone,`

🔬 This is a nightly-only experimental API. (`iter_intersperse`)

recently added

Creates a new iterator which places a copy of `separator` between adjacent items of the original iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.intersperse)

#### `pub fn intersperse_with<G>(self, separator: G) -> IntersperseWith<Self, G> where G: FnMut() -> Self::Item,`

🔬 This is a nightly-only experimental API. (`iter_intersperse`)

recently added

Creates a new iterator which places an item generated by `separator` between adjacent items of the original iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.intersperse_with)

#### `pub fn map<B, F>(self, f: F) -> Map<Self, F> where F: FnMut(Self::Item) -> B,`1.0.0

Takes a closure and creates an iterator which calls that closure on each element. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.map)

#### `pub fn for_each<F>(self, f: F) where F: FnMut(Self::Item),`1.21.0

Calls a closure on each element of an iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.for_each)

#### `pub fn filter<P>(self, predicate: P) -> Filter<Self, P> where P: FnMut(&Self::Item) -> bool,`1.0.0

Creates an iterator which uses a closure to determine if an element should be yielded. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.filter)

#### `pub fn filter_map<B, F>(self, f: F) -> FilterMap<Self, F> where F: FnMut(Self::Item) -> Option<B>,`1.0.0

Creates an iterator that both filters and maps. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.filter_map)

#### `pub fn enumerate(self) -> Enumerate<Self>`1.0.0

Creates an iterator which gives the current iteration count as well as the next value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.enumerate)

#### `pub fn peekable(self) -> Peekable<Self>`1.0.0

Creates an iterator which can use [`peek`](https://doc.rust-lang.org/nightly/core/iter/adapters/peekable/struct.Peekable.html#method.peek) to look at the next element of the iterator without consuming it. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.peekable)

#### `pub fn skip_while<P>(self, predicate: P) -> SkipWhile<Self, P> where P: FnMut(&Self::Item) -> bool,`1.0.0

Creates an iterator that [`skip`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.skip)s elements based on a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.skip_while)

#### `pub fn take_while<P>(self, predicate: P) -> TakeWhile<Self, P> where P: FnMut(&Self::Item) -> bool,`1.0.0

Creates an iterator that yields elements based on a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.take_while)

#### `pub fn map_while<B, P>(self, predicate: P) -> MapWhile<Self, P> where P: FnMut(Self::Item) -> Option<B>,`

🔬 This is a nightly-only experimental API. (`iter_map_while`)

recently added

Creates an iterator that both yields elements based on a predicate and maps. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.map_while)

#### `pub fn skip(self, n: usize) -> Skip<Self>`1.0.0

Creates an iterator that skips the first `n` elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.skip)

#### `pub fn take(self, n: usize) -> Take<Self>`1.0.0

Creates an iterator that yields its first `n` elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.take)

#### `pub fn scan<St, B, F>(self, initial_state: St, f: F) -> Scan<Self, St, F> where F: FnMut(&mutSt, Self::Item) -> Option<B>,`1.0.0

An iterator adaptor similar to [`fold`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.fold) that holds internal state and produces a new iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.scan)

#### `pub fn flat_map<U, F>(self, f: F) -> FlatMap<Self, U, F> where F: FnMut(Self::Item) -> U, U: IntoIterator,`1.0.0

Creates an iterator that works like map, but flattens nested structure. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.flat_map)

#### `pub fn flatten(self) -> Flatten<Self> where Self::Item: IntoIterator,`1.29.0

Creates an iterator that flattens nested structure. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.flatten)

#### `pub fn fuse(self) -> Fuse<Self>`1.0.0

Creates an iterator which ends after the first [`None`](https://doc.rust-lang.org/nightly/core/option/enum.Option.html#variant.None "None"). [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.fuse)

#### `pub fn inspect<F>(self, f: F) -> Inspect<Self, F> where F: FnMut(&Self::Item),`1.0.0

Does something with each element of an iterator, passing the value on. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.inspect)

#### `pub fn by_ref(&mut self) -> &mutSelf`1.0.0

Borrows an iterator, rather than consuming it. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.by_ref)

#### ``#[must_use = "if you really need to exhaust the iterator, consider `.for_each(drop)` instead"]pub fn collect<B>(self) -> B where B: FromIterator<Self::Item>,``1.0.0

Transforms an iterator into a collection. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.collect)

#### `pub fn partition<B, F>(self, f: F) -> (B, B)where F: FnMut(&Self::Item) -> bool, B: Default + Extend<Self::Item>,`1.0.0

Consumes an iterator, creating two collections from it. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.partition)

#### `pub fn partition_in_place<'a, T, P>(self, predicate: P) -> usizewhere Self: DoubleEndedIterator<Item = &'a mutT>, T: 'a, P: FnMut(&T) -> bool,`

🔬 This is a nightly-only experimental API. (`iter_partition_in_place`)

new API

Reorders the elements of this iterator _in-place_ according to the given predicate, such that all those that return `true` precede all those that return `false`. Returns the number of `true` elements found. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.partition_in_place)

#### `pub fn is_partitioned<P>(self, predicate: P) -> boolwhere P: FnMut(Self::Item) -> bool,`

🔬 This is a nightly-only experimental API. (`iter_is_partitioned`)

new API

Checks if the elements of this iterator are partitioned according to the given predicate, such that all those that return `true` precede all those that return `false`. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.is_partitioned)

#### `pub fn try_fold<B, F, R>(&mut self, init: B, f: F) -> R where F: FnMut(B, Self::Item) -> R, R: Try<Ok = B>,`1.27.0

An iterator method that applies a function as long as it returns successfully, producing a single, final value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.try_fold)

#### `pub fn try_for_each<F, R>(&mut self, f: F) -> R where F: FnMut(Self::Item) -> R, R: Try<Ok = ()>,`1.27.0

An iterator method that applies a fallible function to each item in the iterator, stopping at the first error and returning that error. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.try_for_each)

#### `pub fn fold<B, F>(self, init: B, f: F) -> B where F: FnMut(B, Self::Item) -> B,`1.0.0

Folds every element into an accumulator by applying an operation, returning the final result. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.fold)

#### `pub fn reduce<F>(self, f: F) -> Option<Self::Item> where F: FnMut(Self::Item, Self::Item) -> Self::Item,`1.51.0

Reduces the elements to a single one, by repeatedly applying a reducing operation. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.reduce)

#### `pub fn all<F>(&mut self, f: F) -> boolwhere F: FnMut(Self::Item) -> bool,`1.0.0

Tests if every element of the iterator matches a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.all)

#### `pub fn any<F>(&mut self, f: F) -> boolwhere F: FnMut(Self::Item) -> bool,`1.0.0

Tests if any element of the iterator matches a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.any)

#### `pub fn find<P>(&mut self, predicate: P) -> Option<Self::Item> where P: FnMut(&Self::Item) -> bool,`1.0.0

Searches for an element of an iterator that satisfies a predicate. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.find)

#### `pub fn find_map<B, F>(&mut self, f: F) -> Option<B> where F: FnMut(Self::Item) -> Option<B>,`1.30.0

Applies function to the elements of iterator and returns the first non-none result. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.find_map)

#### `pub fn try_find<F, R>( &mut self, f: F ) -> Result<Option<Self::Item>, <R as Try>::Error> where F: FnMut(&Self::Item) -> R, R: Try<Ok = bool>,`

🔬 This is a nightly-only experimental API. (`try_find`)

new API

Applies function to the elements of iterator and returns the first true result or the first error. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.try_find)

#### `pub fn position<P>(&mut self, predicate: P) -> Option<usize> where P: FnMut(Self::Item) -> bool,`1.0.0

Searches for an element in an iterator, returning its index. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.position)

#### `pub fn rposition<P>(&mut self, predicate: P) -> Option<usize> where Self: ExactSizeIterator + DoubleEndedIterator, P: FnMut(Self::Item) -> bool,`1.0.0

Searches for an element in an iterator from the right, returning its index. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.rposition)

#### `pub fn max(self) -> Option<Self::Item> where Self::Item: Ord,`1.0.0

Returns the maximum element of an iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.max)

#### `pub fn min(self) -> Option<Self::Item> where Self::Item: Ord,`1.0.0

Returns the minimum element of an iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.min)

#### `pub fn max_by_key<B, F>(self, f: F) -> Option<Self::Item> where F: FnMut(&Self::Item) -> B, B: Ord,`1.6.0

Returns the element that gives the maximum value from the specified function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.max_by_key)

#### `pub fn max_by<F>(self, compare: F) -> Option<Self::Item> where F: FnMut(&Self::Item, &Self::Item) -> Ordering,`1.15.0

Returns the element that gives the maximum value with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.max_by)

#### `pub fn min_by_key<B, F>(self, f: F) -> Option<Self::Item> where F: FnMut(&Self::Item) -> B, B: Ord,`1.6.0

Returns the element that gives the minimum value from the specified function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.min_by_key)

#### `pub fn min_by<F>(self, compare: F) -> Option<Self::Item> where F: FnMut(&Self::Item, &Self::Item) -> Ordering,`1.15.0

Returns the element that gives the minimum value with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.min_by)

#### `pub fn rev(self) -> Rev<Self> where Self: DoubleEndedIterator,`1.0.0

Reverses an iterator's direction. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.rev)

#### `pub fn unzip<A, B, FromA, FromB>(self) -> (FromA, FromB)where Self: Iterator<Item = (A, B)>, FromA: Default + Extend<A>, FromB: Default + Extend<B>,`1.0.0

Converts an iterator of pairs into a pair of containers. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.unzip)

#### `pub fn copied<'a, T>(self) -> Copied<Self> where Self: Iterator<Item = &'aT>, T: 'a + Copy,`1.36.0

Creates an iterator which copies all of its elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.copied)

#### `pub fn cloned<'a, T>(self) -> Cloned<Self> where Self: Iterator<Item = &'aT>, T: 'a + Clone,`1.0.0

Creates an iterator which [`clone`](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)s all of its elements. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.cloned)

#### `pub fn cycle(self) -> Cycle<Self> where Self: Clone,`1.0.0

Repeats an iterator endlessly. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.cycle)

#### `pub fn sum<S>(self) -> S where S: Sum<Self::Item>,`1.11.0

Sums the elements of an iterator. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.sum)

#### `pub fn product<P>(self) -> P where P: Product<Self::Item>,`1.11.0

Iterates over the entire iterator, multiplying all the elements [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.product)

#### `pub fn cmp<I>(self, other: I) -> Orderingwhere I: IntoIterator<Item = Self::Item>, Self::Item: Ord,`1.5.0

[Lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.cmp)

#### `pub fn cmp_by<I, F>(self, other: I, cmp: F) -> Orderingwhere F: FnMut(Self::Item, <I as IntoIterator>::Item) -> Ordering, I: IntoIterator,`

🔬 This is a nightly-only experimental API. (`iter_order_by`)

[Lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.cmp_by)

#### `pub fn partial_cmp<I>(self, other: I) -> Option<Ordering> where I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>,`1.5.0

[Lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.partial_cmp)

#### `pub fn partial_cmp_by<I, F>(self, other: I, partial_cmp: F) -> Option<Ordering> where F: FnMut(Self::Item, <I as IntoIterator>::Item) -> Option<Ordering>, I: IntoIterator,`

🔬 This is a nightly-only experimental API. (`iter_order_by`)

[Lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) compares the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") with those of another with respect to the specified comparison function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.partial_cmp_by)

#### `pub fn eq<I>(self, other: I) -> boolwhere I: IntoIterator, Self::Item: PartialEq<<I as IntoIterator>::Item>,`1.5.0

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are equal to those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.eq)

#### `pub fn eq_by<I, F>(self, other: I, eq: F) -> boolwhere F: FnMut(Self::Item, <I as IntoIterator>::Item) -> bool, I: IntoIterator,`

🔬 This is a nightly-only experimental API. (`iter_order_by`)

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are equal to those of another with respect to the specified equality function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.eq_by)

#### `pub fn ne<I>(self, other: I) -> boolwhere I: IntoIterator, Self::Item: PartialEq<<I as IntoIterator>::Item>,`1.5.0

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are unequal to those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.ne)

#### `pub fn lt<I>(self, other: I) -> boolwhere I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>,`1.5.0

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) less than those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.lt)

#### `pub fn le<I>(self, other: I) -> boolwhere I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>,`1.5.0

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) less or equal to those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.le)

#### `pub fn gt<I>(self, other: I) -> boolwhere I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>,`1.5.0

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) greater than those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.gt)

#### `pub fn ge<I>(self, other: I) -> boolwhere I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>,`1.5.0

Determines if the elements of this [`Iterator`](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html "Iterator") are [lexicographically](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#lexicographical-comparison) greater than or equal to those of another. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.ge)

#### `pub fn is_sorted(self) -> boolwhere Self::Item: PartialOrd<Self::Item>,`

🔬 This is a nightly-only experimental API. (`is_sorted`)

new API

Checks if the elements of this iterator are sorted. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted)

#### `pub fn is_sorted_by<F>(self, compare: F) -> boolwhere F: FnMut(&Self::Item, &Self::Item) -> Option<Ordering>,`

🔬 This is a nightly-only experimental API. (`is_sorted`)

new API

Checks if the elements of this iterator are sorted using the given comparator function. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted_by)

#### `pub fn is_sorted_by_key<F, K>(self, f: F) -> boolwhere F: FnMut(Self::Item) -> K, K: PartialOrd<K>,`

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

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `pub fn type_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `pub fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `pub fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> From<T> for T`

#### `pub fn from(t: T) -> T`

Performs the conversion.

### `impl<T> Instrument for T`

#### `pub fn instrument(self, span: Span) -> Instrumented<Self>`

Instruments this type with the provided `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.25/tracing/instrument/trait.Instrument.html#method.instrument)

#### `pub fn in_current_span(self) -> Instrumented<Self>`

Instruments this type with the [current](/docs/api/rust/tauri/../struct.Span.html#method.current) `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.25/tracing/instrument/trait.Instrument.html#method.in_current_span)

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `pub fn into(self) -> U`

Performs the conversion.

### `impl<I> IntoIterator for I where I: Iterator,`

#### `type Item = <I as Iterator>::Item`

The type of the elements being iterated over.

#### `type IntoIter = I`

Which kind of iterator are we turning this into?

#### `pub fn into_iter(self) -> I`

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

### `impl<I> IteratorRandom for I where I: Iterator,`

#### `pub fn choose<R>(self, rng: &mutR) -> Option<Self::Item> where R: Rng + ?Sized,`

Choose one element at random from the iterator. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose)

#### `pub fn choose_stable<R>(self, rng: &mutR) -> Option<Self::Item> where R: Rng + ?Sized,`

Choose one element at random from the iterator. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_stable)

#### `pub fn choose_multiple_fill<R>( self, rng: &mutR, buf: &mut [Self::Item] ) -> usizewhere R: Rng + ?Sized,`

Collects values at random from the iterator into a supplied buffer until that buffer is filled. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_multiple_fill)

#### `pub fn choose_multiple<R>( self, rng: &mutR, amount: usize ) -> Vec<Self::Item, Global> where R: Rng + ?Sized,`

Collects `amount` values at random from the iterator into a vector. [Read more](https://rust-random.github.io/rand/rand/seq/trait.IteratorRandom.html#method.choose_multiple)

### `impl<T> Pointable for T`

#### `pub const ALIGN: usize`

The alignment of pointer.

#### `type Init = T`

The type for initializers.

#### `pub unsafe fn init(init: <T as Pointable>::Init) -> usize`

Initializes a with the given initializer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.init)

#### `pub unsafe fn deref<'a>(ptr: usize) -> &'aT`

Dereferences the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.deref)

#### `pub unsafe fn deref_mut<'a>(ptr: usize) -> &'a mutT`

Mutably dereferences the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.deref_mut)

#### `pub unsafe fn drop(ptr: usize)`

Drops the object pointed to by the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.drop)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
