---
title: "trait.Pixel"
---

# Trait [tauri](/docs/api/rust/tauri/index.html)::​[Pixel](/docs/api/rust/tauri/)

```rs
pub trait Pixel: Copy + Into<f64> {
    pub fn from_f64(f: f64) -> Self;

    pub fn cast<P>(self) -> P
    where
        P: Pixel,
    { ... }
}
```

A pixel definition. Must be created from a `f64` value.

## Required methods

### `pub fn from_f64(f: f64) -> Self`

Creates the pixel from the `f64` value.

Loading content...

## Provided methods

### `pub fn cast<P>(self) -> P where P: Pixel,`

Casts a pixel.

Loading content...

## Implementations on Foreign Types

### `impl Pixel for i16`

#### `pub fn from_f64(f: f64) -> i16`

### `impl Pixel for i32`

#### `pub fn from_f64(f: f64) -> i32`

### `impl Pixel for u16`

#### `pub fn from_f64(f: f64) -> u16`

### `impl Pixel for i8`

#### `pub fn from_f64(f: f64) -> i8`

### `impl Pixel for f32`

#### `pub fn from_f64(f: f64) -> f32`

### `impl Pixel for u32`

#### `pub fn from_f64(f: f64) -> u32`

### `impl Pixel for u8`

#### `pub fn from_f64(f: f64) -> u8`

### `impl Pixel for f64`

#### `pub fn from_f64(f: f64) -> f64`

Loading content...

## Implementors

Loading content...
