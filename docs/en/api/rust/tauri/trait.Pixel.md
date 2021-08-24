---
title: Trait tauri::Pixel
sidebar_label: trait.Pixel
custom_edit_url: null
---

  # Trait tauri::Pixel,

```rs
pub trait Pixel: Copy + Into<f64> {
    fn from_f64(f: f64) -> Self;

    fn cast<P>(self) -> P
    where
        P: Pixel,
    { ... }
}
```

Expand description

A pixel definition. Must be created from a `f64` value.

## Required methods

#### fn [from_f64](/docs/api/rust/tauri/about:blank#tymethod.from_f64)(f: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> Self

Creates the pixel from the `f64` value.

## Provided methods

#### fn [cast](/docs/api/rust/tauri/about:blank#method.cast)&lt;P>(self) -> P where P: [Pixel](/docs/api/rust/tauri/trait.Pixel "trait tauri::Pixel"),

Casts a pixel.

## Implementations on Foreign Types

### impl [Pixel](/docs/api/rust/tauri/trait.Pixel "trait tauri::Pixel") for [i16](https://doc.rust-lang.org/1.54.0/std/primitive.i16.html)

#### pub fn [from_f64](/docs/api/rust/tauri/about:blank#tymethod.from_f64)(f: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> [i16](https://doc.rust-lang.org/1.54.0/std/primitive.i16.html)

### impl [Pixel](/docs/api/rust/tauri/trait.Pixel "trait tauri::Pixel") for [u16](https://doc.rust-lang.org/1.54.0/std/primitive.u16.html)

#### pub fn [from_f64](/docs/api/rust/tauri/about:blank#tymethod.from_f64)(f: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> [u16](https://doc.rust-lang.org/1.54.0/std/primitive.u16.html)

### impl [Pixel](/docs/api/rust/tauri/trait.Pixel "trait tauri::Pixel") for [f32](https://doc.rust-lang.org/1.54.0/std/primitive.f32.html)

#### pub fn [from_f64](/docs/api/rust/tauri/about:blank#tymethod.from_f64)(f: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> [f32](https://doc.rust-lang.org/1.54.0/std/primitive.f32.html)

### impl [Pixel](/docs/api/rust/tauri/trait.Pixel "trait tauri::Pixel") for [u32](https://doc.rust-lang.org/1.54.0/std/primitive.u32.html)

#### pub fn [from_f64](/docs/api/rust/tauri/about:blank#tymethod.from_f64)(f: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> [u32](https://doc.rust-lang.org/1.54.0/std/primitive.u32.html)

### impl [Pixel](/docs/api/rust/tauri/trait.Pixel "trait tauri::Pixel") for [u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)

#### pub fn [from_f64](/docs/api/rust/tauri/about:blank#tymethod.from_f64)(f: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> [u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)

### impl [Pixel](/docs/api/rust/tauri/trait.Pixel "trait tauri::Pixel") for [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)

#### pub fn [from_f64](/docs/api/rust/tauri/about:blank#tymethod.from_f64)(f: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)

### impl [Pixel](/docs/api/rust/tauri/trait.Pixel "trait tauri::Pixel") for [i8](https://doc.rust-lang.org/1.54.0/std/primitive.i8.html)

#### pub fn [from_f64](/docs/api/rust/tauri/about:blank#tymethod.from_f64)(f: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> [i8](https://doc.rust-lang.org/1.54.0/std/primitive.i8.html)

### impl [Pixel](/docs/api/rust/tauri/trait.Pixel "trait tauri::Pixel") for [i32](https://doc.rust-lang.org/1.54.0/std/primitive.i32.html)

#### pub fn [from_f64](/docs/api/rust/tauri/about:blank#tymethod.from_f64)(f: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> [i32](https://doc.rust-lang.org/1.54.0/std/primitive.i32.html)

## Implementors
  