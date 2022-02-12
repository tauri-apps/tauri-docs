# Reducing the App Size

At Tauri, we are working on reducing the environmental footprint of applications by using system resources where available, providing compiled systems that don't need runtime evaluation, and offering guides so that engineers can go even smaller without sacrificing on performance or security. The point is, by saving resources, we are doing our part to help you help us save the planet -- which is the only bottom line that companies in the 21st Century should care about.

So if you are interested in learning how to improve your appsize and performance, read on dear friend:

### You can't improve what you can't measure

Before you can optimize your app you need to figure out what it is that takes up space in your app!
Here are a couple of tools that can assist you with that:

- **`cargo-bloat`**

  [`cargo-bloat`][cargo-bloat] is a rust utility to figure out what takes the most space in your app. It gives you a nice, sorted overview of the biggest rust functions.

- **`cargo-expand`**

  [Macros] make your rust code more concise and easier to read, but they are also hidden size traps! Use [`cargo-expand`][cargo-expand] to see what all those macros generate under the hood.

- **`rollup-plugin-visualizer`**

  [`rollup-plugin-visualizer`][rollup-plugin-visualizer] generates beautiful (and insightful) graphs from your rollup bundle. Very convenient for figuring out what JavaScript dependencies contribute to your final bundle size the most.

- **`rollup-plugin-graph`**

  You noticed a dependency was included in your final frontend bundle, but you are not sure why? [`rollup-plugin-graph`][rollup-plugin-graph] generates graphviz compatible visualizations of your entire dependency graph.

These are just a couple tools that you might use, make sure to check your frontend bundlers plugin list for more!

### Think twice before adding a dependency

## Checklist

- [Reducing the App Size](#reducing-the-app-size)
    - [You can't improve what you can't measure](#you-cant-improve-what-you-cant-measure)
    - [Think twice before adding a dependency](#think-twice-before-adding-a-dependency)
  - [Checklist](#checklist)
  - [1. Minify Javascript](#1-minify-javascript)
    - [Why?](#why)
    - [How?](#how)
  - [2. Optimize Dependecies](#2-optimize-dependecies)
    - [Why?](#why-1)
    - [How?](#how-1)
  - [3. Optimize Images](#3-optimize-images)
    - [Why?](#why-2)
    - [How?](#how-2)
  - [4. Remove Unnecessary Custom Fonts](#4-remove-unnecessary-custom-fonts)
    - [Why?](#why-3)
    - [How?](#how-3)
  - [5. Allowlist Config](#5-allowlist-config)
    - [Why?](#why-4)
    - [How?](#how-4)
  - [6. Rust Build-time Optimizations](#6-rust-build-time-optimizations)
    - [Why?](#why-5)
    - [How?](#how-5)
    - [Unstable Rust Compression Features](#unstable-rust-compression-features)
  - [7. Stripping](#7-stripping)
    - [Why?](#why-6)
    - [How?](#how-6)
  - [8. UPX](#8-upx)
    - [Why?](#why-7)
    - [How?](#how-7)
      - [Usage on macOS](#usage-on-macos)

## 1. Minify Javascript

### Why?

JavaScript makes up a large portion of a typical Tauri app, so it's important to make the JavaScript as lightweight as possible.

### How?

You can choose among a plethora of JavaScript bundlers, popular choices are [Vite], [webpack] and [rollup].
All of them can produce minified JavaScript if configured correctly, so please consult your bundler documentation for specific options.
Generally speaking however, you should make sure to:

- **Enable tree shaking**

  This option removes unused JavaScript from your bundle. All popular bundlers enable this by default.

- **Enable minification**

  Minification removes unnecessary whitespace, shortens variable names and applies various other optimizations.
  Most bundlers enable this by default, a notable exception is [rollup] where you need a plugins like [rollup-plugin-terser] or [rollup-plugin-uglify].

  :::note
  Minifiers like [terser] and [esbuild] can also be used as standalone tools.
  :::

- **Disable source maps**

  Source maps provide a nice developer experience when working with languages that compile to JavaScript such as [TypeScript].
  As source maps tend to be quite large though, it's important that you disable them when building for production.
  They have no benefit to your end user, so it's effectively dead weight.

## 2. Optimize Dependecies

Many popular libraries have smaller and faster alternatives that you can choose instead.

### Why?

Most libraries you use depend on a number of libraries themselves,
so a library that looks inconspicuous at first glance might add **several megabytes** worth of code to your app.

### How?

You can use [Bundlephobia] to find the cost of JavaScript dependencies.
Inspecting the cost of rust dependencies is generally harder since the compiler will do a number of optimizations.

If you find a library that seems excessively large, google around, chances are someone else already had the same though and created an alternative.
A good example is [Moment.js] and it's [Many alternatives][you-dont-need-momentjs].

But keep in mind: **The best dependency is no dependency**, meaning that you should always prefer language builtins over 3rd party packages.

## 3. Optimize Images

### Why?

According to the [Http Archive], images are the [biggest contributor to website weight][http archive report, image bytes]. So if your app includes have background images or icons, make sure to optimize them!

### How?

You can choose between a variety of manual options ([GIMP], [Photoshop], [Squoosh]) or plugins for your favorite frontend build tools ([vite-imagetools], [vite-plugin-imagemin], [image-minimizer-webpack-plugin]).

:::caution
The `imagemin` library most of the plugins use is [officially unmaintained][imagemin is unmaintained].
:::

- **Use modern image formats**

  Formats such as `webp` or `avif` offer size reductions of **up to 95%** compared to jpeg while maintaining excellent visual accuracy. You can use tools such as [Squoosh] to try different formats on your images.

- **Size images accordingly**

  No one will appreciate you shipping the 6K raw image with your app, so make sure to size your image accordingly. Images that appear large on screen should be sized larger than images that take up less screen space.

- **Don't use Responsive Images**

  In a Web Environment it's recommended to use a [Responsive Images] as they will dynamically load the correct image size for each user. You are not building a simple website though: All your images are already downloaded. So using Responsive Images will only bloat your app with redundant copies.

- **Remove Metadata**

  Images taken straight from a camera or stock photo side often include metadata about the Camera and Lens model or Photographer. Not only are those wasted bytes, metadata properties can also hold potentially sensitive information such as the time, day and location of the photo.

## 4. Remove Unnecessary Custom Fonts

Consider not shipping custom fonts with your app and relying on system fonts instead. If you must ship custom fonts, make sure they are in modern, optimized formats such as `woff2`.

### Why?

Fonts can be quite large in size, so using the fonts already included in the Operating System will reduce your apps footprint. It will also avoid FOUT (Flash of Unstyled Text) and make your app feel more "native" since it uses the same font as all other apps.

If you must include a custom fonts, make sure you include them in modern formats such as `woff2` as those tend to be way smaller than legacy formats.

### How?

Use so called **"System Font Stacks"** in your CSS. There are number of variations, but here are 3 basic ones to get you started:

- **Sans-serif**

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
  sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
```

- **Serif**

```css
font-family: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid
    Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe
    UI Symbol;
```

- **Monospace**

```css
font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation
    Mono, monospace;
```

## 5. Allowlist Config

You can reduce your apps size by only enabling the tauri api features you need in the `allowlist` config.

### Why?

The `allowlist` config determines what api features to enable, disabled features will **not be compiled into your app**. This is a great way of shedding some extra weight.

### How?

And example from a typical `tauri.conf.json`:

```json
{
  "tauri": {
    "allowlist": {
      "all": false,
      "fs": {
        "writeFile": true
      },
      "shell": {
        "execute": true
      },
      "dialog": {
        "save": true
      }
    }
  }
}
```

## 6. Rust Build-time Optimizations

Configure your cargo project to take advantage of rusts size optimization features.
[Why is a rust executable large ?] provides an excellent explanation on why this matters and an in depth walkthrough, while [Minimizing Rust Binary Size] is more up to date and has a couple recommendations.

### Why?

Rust is notorious for producing rather large binaries, but the compiler offers a number of options to improve the final size.

### How?

Cargo exposes a number of options that determine how the compiler generates your binary.
The "recommended" options for tauri apps are these:

```toml
[profile.release]
panic = "abort" # Strip expensive panic clean-up logic
codegen-units = 1 # Compile crates one after another so the compiler can optimize better
lto = true # Enables link to optimizations
opt-level = "s" # Optimize for binary size
```

:::note
There is also `opt-level = "z"` available to try to reduce the resulting binary size. `"s"` and `"z"` can sometimes be smaller than the other, so test it with your own application!

We've seen smaller binary sizes from `"s"` for Tauri example applications, but real world applications can always differ.
:::

For a detailed explanation of each option and a bunch more, refer to the [Cargo books Profiles section][cargo profiles].

### Unstable Rust Compression Features

:::caution
The following suggestions are all unstable features and require a nightly toolchain. See the [Unstable Features][cargo unstable features] documentation for more information of what this involves.
:::

The following methods involve using unstable compiler features and require having a rust nightly toolchain installed. If you don't have the nightly toolchain + `rust-src` nightly component added, try the following:

```sh
$ rustup toolchain install nightly
$ rustup component add rust-src --toolchain nightly
```

The Rust Standard Library comes precompiled. You can instead apply the optimization options used for the rest of your binary + dependencies to the std with an unstable flag. This flag requires specifying your target, so know the target triple that you are targeting.

```sh
$ cargo +nightly build --release -Z build-std --target x86_64-unknown-linux-gnu
```

If you are using `panic = "abort"` in your release profile optimizations, then you need to make sure the `panic_abort` crate is compiled with std. Additionally, an extra std feature can be used to further reduce the binary size. The following applies both:

```sh
$ cargo +nightly build --release -Z build-std=std,panic_abort -Z build-std-features=panic_immediate_abort --target x86_64-unknown-linux-gnu
```

See the unstable documentation for more details about [`-Z build-std`][cargo build-std] and [`-Z build-std-features`][cargo build-std-features].

## 7. Stripping

Use strip utilities to remove debug symbols from your compiled app.

### Why?

Your compiled app will include so-called "Debug Symbols" that include information such as function and variable names. As your end users will most likely not care about debug symbols this is a pretty surefire way to save some bytes!

### How?

The easiest way is to use the famous `strip` utility to remove this debugging information.

```sh
$ strip target/release/my_application
```

See your local `strip` manpage for more information and flags that can be used to specify what information gets stripped out from the binary.

<!-- TODO: add note that strip if builtin with rust nightly -->

## 8. UPX

UPX, **Ultimate Packer for eXecutables**, is a dinosaur amongst the binary packers. This 23-year old, well-maintained piece of kit is GPL-v2 licensed with a pretty liberal usage declaration. Our understanding of the licensing is that you can use it for any purposes (commercial or otherwise) without needing to change your license unless you modify the source code of UPX.

### Why?

Maybe your target audience has very slow internet, or your app needs to fit on a really small USB stick and all the above steps haven't resulted in the savings you need. Fear not, as we have one last trick up our sleeves:

[UPX] compresses your binary and creates a self-extracting executable that will decompress itself at runtime.

### How?

:::caution
You should know that this technique might flag your binary as a virus on Windows and macOS - so use at your own discretion, and as always validate with [Frida] and do real distribution testing!
:::

#### Usage on macOS

```sh
$ brew install upx
$ yarn tauri build
$ upx --ultra-brute src-tauri/target/release/bundle/macos/app.app/Contents/macOS/app
                        Ultimate Packer for eXecutables
                            Copyright (C) 1996 - 2018
UPX 3.95        Markus Oberhumer, Laszlo Molnar & John Reiser   Aug 26th 2018

        File size         Ratio      Format      Name
    --------------------   ------   -----------   -----------
    963140 ->    274448   28.50%   macho/amd64   app
```

[cargo-bloat]: https://github.com/RazrFalcon/cargo-bloat
[Macros]: https://doc.rust-lang.org/book/ch19-06-macros.html
[cargo-expand]: https://github.com/dtolnay/cargo-expand
[rollup-plugin-visualizer]: https://github.com/btd/rollup-plugin-visualizer
[rollup-plugin-graph]: https://github.com/ondras/rollup-plugin-graph
[vite]: https://vitejs.dev
[webpack]: https://webpack.js.org
[rollup]: https://rollupjs.org/guide/en/
[rollup-plugin-terser]: https://github.com/TrySound/rollup-plugin-terser
[rollup-plugin-uglify]: https://github.com/TrySound/rollup-plugin-uglify
[terser]: https://terser.org
[esbuild]: https://esbuild.github.io
[typescript]: https://www.typescriptlang.org
[moment.js]: https://momentjs.com
[you-dont-need-momentjs]: https://github.com/you-dont-need/You-Dont-Need-Momentjs
[http archive]: https://httparchive.org
[http archive report, image bytes]: https://httparchive.org/reports/page-weight#bytesImg
[imagemin is unmaintained]: https://github.com/imagemin/imagemin/issues/385
[gimp]: https://www.gimp.org
[photoshop]: https://www.adobe.com/de/products/photoshop.html
[vite-imagetools]: https://github.com/JonasKruckenberg/imagetools
[vite-plugin-imagemin]: https://github.com/vbenjs/vite-plugin-imagemin
[image-minimizer-webpack-plugin]: https://github.com/webpack-contrib/image-minimizer-webpack-plugin
[squoosh]: https://squoosh.app
[responsive images]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
[why is a rust executable large ?]: https://lifthrasiir.github.io/rustlog/why-is-a-rust-executable-large.html
[minimizing rust binary size]: https://github.com/johnthagen/min-sized-rust
[cargo unstable features]: https://doc.rust-lang.org/cargo/reference/unstable.html#unstable-features
[cargo profiles]: https://doc.rust-lang.org/cargo/reference/profiles.html
[cargo build-std]: https://doc.rust-lang.org/cargo/reference/unstable.html#build-std
[cargo build-std-features]: https://doc.rust-lang.org/cargo/reference/unstable.html#build-std-features
[Bundlephobia]: https://bundlephobia.com
[Frida]: https://frida.re/docs/home/
[UPX]: https://github.com/upx/upx
