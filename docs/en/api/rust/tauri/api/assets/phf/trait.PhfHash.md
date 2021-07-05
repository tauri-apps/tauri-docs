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

    pub fn phf_hash_slice<H>(data: &[Self]
, state: &mut H)
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

_Defined in: [lib.rs:65](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#65)_

## Provided methods

### `phf_hash_slice`

```rs
pub fn phf_hash_slice<H>(data: &[Self]

, state: &mut H) where
    H: Hasher, 
```

Feeds a slice of this type into the state provided.

_Defined in: [lib.rs:68-70](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#68-70)_

## Implementations on Foreign Types

### `PhfHash`

```rs
impl PhfHash for [u8; 4]


```

_Defined in: [lib.rs:393](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#393)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:393](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#393)_

### `PhfHash`

```rs
impl PhfHash for [u8; 15]


```

_Defined in: [lib.rs:404](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#404)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:404](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#404)_

### `PhfHash`

```rs
impl PhfHash for [u8; 5]


```

_Defined in: [lib.rs:394](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#394)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:394](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#394)_

### `PhfHash`

```rs
impl PhfHash for Vec<u8, Global>
```

_Defined in: [lib.rs:209-214](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#209-214)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:211](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#211)_

### `PhfHash`

```rs
impl PhfHash for i16
```

_Defined in: [lib.rs:346](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#346)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:346](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#346)_

### `PhfHash`

```rs
impl PhfHash for [u8; 14]


```

_Defined in: [lib.rs:403](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#403)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:403](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#403)_

### `PhfHash`

```rs
impl PhfHash for [u8; 22]


```

_Defined in: [lib.rs:411](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#411)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:411](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#411)_

### `PhfHash`

```rs
impl PhfHash for bool
```

_Defined in: [lib.rs:353](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#353)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:353](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#353)_

### `PhfHash`

```rs
impl PhfHash for [u8; 20]


```

_Defined in: [lib.rs:409](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#409)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:409](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#409)_

### `PhfHash`

```rs
impl PhfHash for u8
```

_Defined in: [lib.rs:343](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#343)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:343](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#343)_

### `PhfHash`

```rs
impl PhfHash for [u8; 2]


```

_Defined in: [lib.rs:391](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#391)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:391](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#391)_

### `PhfHash`

```rs
impl PhfHash for i32
```

_Defined in: [lib.rs:348](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#348)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:348](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#348)_

### `PhfHash`

```rs
impl PhfHash for [u8; 32]


```

_Defined in: [lib.rs:421](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#421)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:421](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#421)_

### `PhfHash`

```rs
impl PhfHash for i8
```

_Defined in: [lib.rs:344](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#344)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:344](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#344)_

### `PhfHash`

```rs
impl PhfHash for [u8; 7]


```

_Defined in: [lib.rs:396](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#396)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:396](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#396)_

### `PhfHash`

```rs
impl PhfHash for [u8; 3]


```

_Defined in: [lib.rs:392](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#392)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:392](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#392)_

### `PhfHash`

```rs
impl PhfHash for [u8; 27]


```

_Defined in: [lib.rs:416](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#416)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:416](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#416)_

### `PhfHash`

```rs
impl PhfHash for [u8; 10]


```

_Defined in: [lib.rs:399](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#399)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:399](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#399)_

### `PhfHash`

```rs
impl PhfHash for [u8]


```

_Defined in: [lib.rs:247-252](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#247-252)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:249](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#249)_

### `PhfHash`

```rs
impl PhfHash for [u8; 28]


```

_Defined in: [lib.rs:417](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#417)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:417](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#417)_

### `PhfHash`

```rs
impl PhfHash for [u8; 21]


```

_Defined in: [lib.rs:410](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#410)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:410](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#410)_

### `PhfHash`

```rs
impl PhfHash for i64
```

_Defined in: [lib.rs:350](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#350)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:350](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#350)_

### `PhfHash`

```rs
impl PhfHash for String
```

_Defined in: [lib.rs:201-206](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#201-206)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:203](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#203)_

### `PhfHash`

```rs
impl PhfHash for [u8; 11]


```

_Defined in: [lib.rs:400](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#400)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:400](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#400)_

### `PhfHash`

```rs
impl PhfHash for [u8; 30]


```

_Defined in: [lib.rs:419](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#419)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:419](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#419)_

### `PhfHash`

```rs
impl PhfHash for [u8; 16]


```

_Defined in: [lib.rs:405](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#405)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:405](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#405)_

### `PhfHash`

```rs
impl PhfHash for u32
```

_Defined in: [lib.rs:347](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#347)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:347](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#347)_

### `PhfHash`

```rs
impl PhfHash for [u8; 8]


```

_Defined in: [lib.rs:397](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#397)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:397](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#397)_

### `PhfHash`

```rs
impl PhfHash for [u8; 23]


```

_Defined in: [lib.rs:412](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#412)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:412](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#412)_

### `PhfHash`

```rs
impl PhfHash for u16
```

_Defined in: [lib.rs:345](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#345)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:345](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#345)_

### `PhfHash`

```rs
impl PhfHash for [u8; 19]


```

_Defined in: [lib.rs:408](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#408)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:408](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#408)_

### `PhfHash`

```rs
impl PhfHash for [u8; 31]


```

_Defined in: [lib.rs:420](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#420)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:420](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#420)_

### `PhfHash`

```rs
impl PhfHash for [u8; 6]


```

_Defined in: [lib.rs:395](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#395)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:395](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#395)_

### `PhfHash`

```rs
impl PhfHash for [u8; 25]


```

_Defined in: [lib.rs:414](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#414)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:414](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#414)_

### `PhfHash`

```rs
impl PhfHash for u64
```

_Defined in: [lib.rs:349](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#349)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:349](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#349)_

### `PhfHash`

```rs
impl PhfHash for i128
```

_Defined in: [lib.rs:352](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#352)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:352](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#352)_

### `PhfHash`

```rs
impl PhfHash for [u8; 12]


```

_Defined in: [lib.rs:401](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#401)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:401](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#401)_

### `PhfHash`

```rs
impl PhfHash for [u8; 18]


```

_Defined in: [lib.rs:407](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#407)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:407](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#407)_

### `PhfHash`

```rs
impl PhfHash for str
```

_Defined in: [lib.rs:240-245](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#240-245)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:242](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#242)_

### `PhfHash`

```rs
impl PhfHash for [u8; 13]


```

_Defined in: [lib.rs:402](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#402)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:402](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#402)_

### `PhfHash`

```rs
impl PhfHash for char
```

_Defined in: [lib.rs:355-360](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#355-360)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:357](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#357)_

### `PhfHash`

```rs
impl PhfHash for [u8; 24]


```

_Defined in: [lib.rs:413](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#413)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:413](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#413)_

### `PhfHash`

```rs
impl PhfHash for [u8; 9]


```

_Defined in: [lib.rs:398](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#398)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:398](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#398)_

### `PhfHash`

```rs
impl<'a, T> PhfHash for &'a T where
    T: 'a + PhfHash + ?Sized, 
```

_Defined in: [lib.rs:216-220](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#216-220)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:217](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#217)_

### `PhfHash`

```rs
impl PhfHash for [u8; 29]


```

_Defined in: [lib.rs:418](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#418)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:418](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#418)_

### `PhfHash`

```rs
impl PhfHash for [u8; 26]


```

_Defined in: [lib.rs:415](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#415)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:415](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#415)_

### `PhfHash`

```rs
impl PhfHash for [u8; 17]


```

_Defined in: [lib.rs:406](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#406)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:406](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#406)_

### `PhfHash`

```rs
impl PhfHash for [u8; 1]


```

_Defined in: [lib.rs:390](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#390)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:390](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#390)_

### `PhfHash`

```rs
impl PhfHash for u128
```

_Defined in: [lib.rs:351](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#351)_

#### `phf_hash`

```rs
pub fn phf_hash<H>(&self, state: &mut H) where
    H: Hasher, 
```

_Defined in: [lib.rs:351](https://docs.rs/phf_shared/0.9/src/phf_shared/lib.rs.html#351)_

## Implementors
