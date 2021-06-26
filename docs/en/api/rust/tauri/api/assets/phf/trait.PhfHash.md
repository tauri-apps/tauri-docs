---
title: Trait tauri::api::assets::phf::PhfHash
sidebar_label: trait.PhfHash
custom_edit_url: null
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

### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

Feeds the value into the state given, updating the hasher as necessary.

_Defined in: [lib.rs:65](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L65)_

## Provided methods

### `phf_hash_slice`

```rs
pub fn phf_hash_slice<H>(data: &[Self], state: &mut H) where
    H: Hasher, 
```

Feeds a slice of this type into the state provided.

_Defined in: [lib.rs:68-70](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L68-70)_

## Implementations on Foreign Types

### `PhfHash`

```rs
impl PhfHash for [u8; 4]
```

_Defined in: [lib.rs:393](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L393)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:393](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L393)_

### `PhfHash`

```rs
impl PhfHash for [u8; 15]
```

_Defined in: [lib.rs:404](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L404)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:404](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L404)_

### `PhfHash`

```rs
impl PhfHash for [u8; 5]
```

_Defined in: [lib.rs:394](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L394)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:394](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L394)_

### `PhfHash`

```rs
impl PhfHash for Vec<u8, Global>
```

_Defined in: [lib.rs:209-214](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L209-214)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:211](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L211)_

### `PhfHash`

```rs
impl PhfHash for i16
```

_Defined in: [lib.rs:346](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L346)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:346](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L346)_

### `PhfHash`

```rs
impl PhfHash for [u8; 14]
```

_Defined in: [lib.rs:403](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L403)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:403](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L403)_

### `PhfHash`

```rs
impl PhfHash for [u8; 22]
```

_Defined in: [lib.rs:411](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L411)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:411](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L411)_

### `PhfHash`

```rs
impl PhfHash for bool
```

_Defined in: [lib.rs:353](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L353)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:353](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L353)_

### `PhfHash`

```rs
impl PhfHash for [u8; 20]
```

_Defined in: [lib.rs:409](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L409)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:409](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L409)_

### `PhfHash`

```rs
impl PhfHash for u8
```

_Defined in: [lib.rs:343](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L343)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:343](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L343)_

### `PhfHash`

```rs
impl PhfHash for [u8; 2]
```

_Defined in: [lib.rs:391](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L391)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:391](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L391)_

### `PhfHash`

```rs
impl PhfHash for i32
```

_Defined in: [lib.rs:348](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L348)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:348](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L348)_

### `PhfHash`

```rs
impl PhfHash for [u8; 32]
```

_Defined in: [lib.rs:421](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L421)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:421](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L421)_

### `PhfHash`

```rs
impl PhfHash for i8
```

_Defined in: [lib.rs:344](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L344)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:344](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L344)_

### `PhfHash`

```rs
impl PhfHash for [u8; 7]
```

_Defined in: [lib.rs:396](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L396)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:396](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L396)_

### `PhfHash`

```rs
impl PhfHash for [u8; 3]
```

_Defined in: [lib.rs:392](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L392)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:392](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L392)_

### `PhfHash`

```rs
impl PhfHash for [u8; 27]
```

_Defined in: [lib.rs:416](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L416)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:416](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L416)_

### `PhfHash`

```rs
impl PhfHash for [u8; 10]
```

_Defined in: [lib.rs:399](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L399)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:399](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L399)_

### `PhfHash`

```rs
impl PhfHash for [u8]
```

_Defined in: [lib.rs:247-252](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L247-252)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:249](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L249)_

### `PhfHash`

```rs
impl PhfHash for [u8; 28]
```

_Defined in: [lib.rs:417](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L417)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:417](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L417)_

### `PhfHash`

```rs
impl PhfHash for [u8; 21]
```

_Defined in: [lib.rs:410](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L410)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:410](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L410)_

### `PhfHash`

```rs
impl PhfHash for i64
```

_Defined in: [lib.rs:350](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L350)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:350](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L350)_

### `PhfHash`

```rs
impl PhfHash for String
```

_Defined in: [lib.rs:201-206](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L201-206)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:203](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L203)_

### `PhfHash`

```rs
impl PhfHash for [u8; 11]
```

_Defined in: [lib.rs:400](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L400)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:400](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L400)_

### `PhfHash`

```rs
impl PhfHash for [u8; 30]
```

_Defined in: [lib.rs:419](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L419)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:419](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L419)_

### `PhfHash`

```rs
impl PhfHash for [u8; 16]
```

_Defined in: [lib.rs:405](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L405)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:405](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L405)_

### `PhfHash`

```rs
impl PhfHash for u32
```

_Defined in: [lib.rs:347](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L347)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:347](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L347)_

### `PhfHash`

```rs
impl PhfHash for [u8; 8]
```

_Defined in: [lib.rs:397](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L397)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:397](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L397)_

### `PhfHash`

```rs
impl PhfHash for [u8; 23]
```

_Defined in: [lib.rs:412](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L412)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:412](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L412)_

### `PhfHash`

```rs
impl PhfHash for u16
```

_Defined in: [lib.rs:345](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L345)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:345](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L345)_

### `PhfHash`

```rs
impl PhfHash for [u8; 19]
```

_Defined in: [lib.rs:408](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L408)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:408](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L408)_

### `PhfHash`

```rs
impl PhfHash for [u8; 31]
```

_Defined in: [lib.rs:420](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L420)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:420](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L420)_

### `PhfHash`

```rs
impl PhfHash for [u8; 6]
```

_Defined in: [lib.rs:395](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L395)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:395](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L395)_

### `PhfHash`

```rs
impl PhfHash for [u8; 25]
```

_Defined in: [lib.rs:414](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L414)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:414](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L414)_

### `PhfHash`

```rs
impl PhfHash for u64
```

_Defined in: [lib.rs:349](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L349)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:349](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L349)_

### `PhfHash`

```rs
impl PhfHash for i128
```

_Defined in: [lib.rs:352](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L352)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:352](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L352)_

### `PhfHash`

```rs
impl PhfHash for [u8; 12]
```

_Defined in: [lib.rs:401](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L401)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:401](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L401)_

### `PhfHash`

```rs
impl PhfHash for [u8; 18]
```

_Defined in: [lib.rs:407](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L407)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:407](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L407)_

### `PhfHash`

```rs
impl PhfHash for str
```

_Defined in: [lib.rs:240-245](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L240-245)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:242](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L242)_

### `PhfHash`

```rs
impl PhfHash for [u8; 13]
```

_Defined in: [lib.rs:402](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L402)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:402](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L402)_

### `PhfHash`

```rs
impl PhfHash for char
```

_Defined in: [lib.rs:355-360](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L355-360)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:357](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L357)_

### `PhfHash`

```rs
impl PhfHash for [u8; 24]
```

_Defined in: [lib.rs:413](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L413)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:413](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L413)_

### `PhfHash`

```rs
impl PhfHash for [u8; 9]
```

_Defined in: [lib.rs:398](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L398)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:398](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L398)_

### `PhfHash`

```rs
impl<'a, T> PhfHash for &'a T where
    T: 'a + PhfHash + ?Sized, 
```

_Defined in: [lib.rs:216-220](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L216-220)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:217](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L217)_

### `PhfHash`

```rs
impl PhfHash for [u8; 29]
```

_Defined in: [lib.rs:418](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L418)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:418](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L418)_

### `PhfHash`

```rs
impl PhfHash for [u8; 26]
```

_Defined in: [lib.rs:415](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L415)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:415](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L415)_

### `PhfHash`

```rs
impl PhfHash for [u8; 17]
```

_Defined in: [lib.rs:406](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L406)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:406](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L406)_

### `PhfHash`

```rs
impl PhfHash for [u8; 1]
```

_Defined in: [lib.rs:390](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L390)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:390](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L390)_

### `PhfHash`

```rs
impl PhfHash for u128
```

_Defined in: [lib.rs:351](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L351)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:351](https://github.com/https://blob/2a65ac1/core/tauri/src/https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs#L351)_

## Implementors
