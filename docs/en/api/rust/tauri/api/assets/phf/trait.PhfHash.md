---
title: "trait.PhfHash"
---

# Trait [tauri](/docs/api/rust/tauri/../../../index.html)::​[api](/docs/api/rust/tauri/../../index.html)::​[assets](/docs/api/rust/tauri/../index.html)::​[phf](/docs/api/rust/tauri/index.html)::​[PhfHash](/docs/api/rust/tauri/)

```rs
pub trait PhfHash {
    pub fn phf_hash<H>(&self, state: &mut H)
    where
        H: Hasher;

    pub fn phf_hash_slice<H>(data: &[Self], state: &mut H)
    where
        H: Hasher,
    { ... }
}
```

A trait implemented by types which can be used in PHF data structures.

This differs from the standard library’s `Hash` trait in that `PhfHash`’s results must be architecture independent so that hashes will be consistent between the host and target when cross compiling.

## Required methods

### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

Feeds the value into the state given, updating the hasher as necessary.

Loading content...

## Provided methods

### `pub fn phf_hash_slice<H>(data: &[Self], state: &mutH) where H: Hasher,`

Feeds a slice of this type into the state provided.

Loading content...

## Implementations on Foreign Types

### `impl PhfHash for [u8; 7]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 29]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 23]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for char`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 15]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl<'a, T> PhfHash for &'aT where T: 'a + PhfHash + ?Sized,`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 26]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 31]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 32]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for u16`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for bool`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 30]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for u8`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 14]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 18]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 16]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 6]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 17]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for u64`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 2]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 28]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 5]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 9]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for i32`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 12]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 13]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 25]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for u128`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for u32`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 27]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 1]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 3]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for i128`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 11]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 22]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 10]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 8]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for i64`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 4]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for String`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 19]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for i8`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 21]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 24]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for i16`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for str`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for Vec<u8, Global>`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

### `impl PhfHash for [u8; 20]`

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`

Loading content...

## Implementors

Loading content...
