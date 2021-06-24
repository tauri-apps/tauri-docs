---
title: Trait tauri::api::assets::phf::PhfHash
sidebar_label: trait.PhfHash
---

# Trait tauri::api::assets::phf::PhfHash,\[−]\[src],\[−],−

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

### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#65 "goto source code")

Feeds the value into the state given, updating the hasher as necessary.

## Provided methods

### `pub fn phf_hash_slice<H>(data: &[Self], state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#68-70 "goto source code")

Feeds a slice of this type into the state provided.

## Implementations on Foreign Types

### `impl PhfHash for [u8; 4]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#393 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#393 "goto source code")

### `impl PhfHash for [u8; 15]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#404 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#404 "goto source code")

### `impl PhfHash for [u8; 5]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#394 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#394 "goto source code")

### `impl PhfHash for Vec<u8, Global>`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#209-214 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#211 "goto source code")

### `impl PhfHash for i16`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#346 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#346 "goto source code")

### `impl PhfHash for [u8; 14]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#403 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#403 "goto source code")

### `impl PhfHash for [u8; 22]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#411 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#411 "goto source code")

### `impl PhfHash for bool`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#353 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#353 "goto source code")

### `impl PhfHash for [u8; 20]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#409 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#409 "goto source code")

### `impl PhfHash for u8`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#343 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#343 "goto source code")

### `impl PhfHash for [u8; 2]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#391 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#391 "goto source code")

### `impl PhfHash for i32`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#348 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#348 "goto source code")

### `impl PhfHash for [u8; 32]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#421 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#421 "goto source code")

### `impl PhfHash for i8`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#344 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#344 "goto source code")

### `impl PhfHash for [u8; 7]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#396 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#396 "goto source code")

### `impl PhfHash for [u8; 3]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#392 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#392 "goto source code")

### `impl PhfHash for [u8; 27]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#416 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#416 "goto source code")

### `impl PhfHash for [u8; 10]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#399 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#399 "goto source code")

### `impl PhfHash for [u8]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#247-252 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#249 "goto source code")

### `impl PhfHash for [u8; 28]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#417 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#417 "goto source code")

### `impl PhfHash for [u8; 21]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#410 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#410 "goto source code")

### `impl PhfHash for i64`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#350 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#350 "goto source code")

### `impl PhfHash for String`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#201-206 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#203 "goto source code")

### `impl PhfHash for [u8; 11]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#400 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#400 "goto source code")

### `impl PhfHash for [u8; 30]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#419 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#419 "goto source code")

### `impl PhfHash for [u8; 16]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#405 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#405 "goto source code")

### `impl PhfHash for u32`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#347 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#347 "goto source code")

### `impl PhfHash for [u8; 8]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#397 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#397 "goto source code")

### `impl PhfHash for [u8; 23]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#412 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#412 "goto source code")

### `impl PhfHash for u16`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#345 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#345 "goto source code")

### `impl PhfHash for [u8; 19]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#408 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#408 "goto source code")

### `impl PhfHash for [u8; 31]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#420 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#420 "goto source code")

### `impl PhfHash for [u8; 6]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#395 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#395 "goto source code")

### `impl PhfHash for [u8; 25]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#414 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#414 "goto source code")

### `impl PhfHash for u64`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#349 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#349 "goto source code")

### `impl PhfHash for i128`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#352 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#352 "goto source code")

### `impl PhfHash for [u8; 12]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#401 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#401 "goto source code")

### `impl PhfHash for [u8; 18]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#407 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#407 "goto source code")

### `impl PhfHash for str`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#240-245 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#242 "goto source code")

### `impl PhfHash for [u8; 13]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#402 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#402 "goto source code")

### `impl PhfHash for char`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#355-360 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#357 "goto source code")

### `impl PhfHash for [u8; 24]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#413 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#413 "goto source code")

### `impl PhfHash for [u8; 9]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#398 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#398 "goto source code")

### `impl<'a, T> PhfHash for &'aT where T: 'a + PhfHash + ?Sized,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#216-220 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#217 "goto source code")

### `impl PhfHash for [u8; 29]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#418 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#418 "goto source code")

### `impl PhfHash for [u8; 26]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#415 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#415 "goto source code")

### `impl PhfHash for [u8; 17]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#406 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#406 "goto source code")

### `impl PhfHash for [u8; 1]`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#390 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#390 "goto source code")

### `impl PhfHash for u128`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#351 "goto source code")

#### `pub fn phf_hash<H>(&self, state: &mutH) where H: Hasher,`[\[src\]](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#351 "goto source code")

## Implementors
