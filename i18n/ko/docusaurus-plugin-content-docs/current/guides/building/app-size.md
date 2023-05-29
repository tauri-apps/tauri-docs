---
sidebar_position: 6
---

# 앱 크기 줄이기

Tauri와 함께, 우리는 가능한 더 적은 시스템 자원을 사용하고, 런타임 평가가 필요하지 않은 컴파일된 시스템을 제공하여 엔지니어가 성능이나 보안을 희생하지 않고, 더 작은 규모로 작업할 수 있도록 안내를 제공함으로써 애플리케이션의 환경적 영향을 줄이기 위해 노력하고 있습니다. 자원을 절약함으로써 우리는 21세기 기업이 관심을 가져야 하는 유일한 수익인 지구를 구하는 데 도움이 되도록 우리의 역할을 다하고 있습니다.

당신의 앱 크기와 성능을 향상 시키는 방법에 관심이 있다면 읽어보세요!

### 측정하지 못한다면 아무것도 향상 시킬 수 없다

앱을 최적화하기 전에 앱에서 무엇이 공간을 차지하는지 파악해야 합니다! 여기 당신을 지원할 몇 가지 도구들 입니다:

- **[`cargo-bloat`][]** - A Rust utility to determine what takes the most space in your app. 가장 중요한 Rust 함수의 훌륭하고, 정렬된 개요를 제공합니다.

- **[`cargo-expand`][]** - [Macros][] make your rust code more concise and easier to read, but they are also hidden size traps! Use `cargo-expand` to see what those macros generate under the hood.

- **[`rollup-plugin-visualizer`][]** - A tool that generates beautiful (and insightful) graphs from your rollup bundle. 최종 번들 크기에 가장 많이 기여하는 JavaScript 종속성을 파악하는 데 매우 편리함을 제공합니다.

- **[`rollup-plugin-graph`][]** - You noticed a dependency included in your final frontend bundle, but you are unsure why? `rollup-plugin-graph` generates Graphviz-compatible visualizations of your entire dependency graph.

이들은 사용할 수 있는 몇 가지 도구에 불과합니다. 자세한 내용은 프론트엔드 번들러 플러그인 목록을 확인하세요!

## 체크리스트

1. [Javascript 경량화](#minify-javascript)
2. [종속성 최적화](#optimize-dependencies)
3. [이미지 최적화](#optimize-images)
4. [불필요한 맞춤 글꼴 제거](#remove-unnecessary-custom-fonts)
5. [허용목록 구성](#allowlist-config)
6. [Rust 빌드타임 최적화](#rust-build-time-optimizations)
7. [조각화하기](#stripping)
8. [UPX](#upx)

### Javascript 경량화

JavaScript는 일반적인 Tauri 앱의 많은 부분을 구성하므로 JavaScript를 최대한 가볍게 만드는 것이 중요합니다.

수 많은 JavaScript 번들러 중에서 선택할 수 있습니다. [Vite][], [webpack][], [rollup][]는 인기 있는 선택입니다. All of them can produce minified JavaScript if configured correctly, so consult your bundler documentation for specific options. 일반적으로 다음을 확인해야 합니다:

#### 트리쉐이킹 활성화

이 옵션은 번들에서 사용하지 않는 JavaScript를 제거합니다. 유명한 모든 번들러들은 이 기능의 활성화를 기본으로 합니다.

#### 축소 활성화

축소는 불필요한 공백을 제거하고, 변수 이름을 간략하게 만들며, 그 외 최적화를 적용하는 것 입니다. 대부분 번들러는 축소를 기본으로 하고 있습니다. 주목할만한 예외는 [rollup-plugin-terser][] 또는 [rollup-plugin-uglify][]와 같은 플러그인이 필요한 [rollup][]입니다.

노트: 단독실행 도구인 [terser][]나 [esbuild][]와 같은 축소화 도구도 사용할 수 있습니다.

#### 소스맵 비활성화

소스 맵은 [TypeScript][]와 같이 JavaScript로 컴파일되는 언어로 작업할 때, 즐거운 개발자 환경을 제공합니다. 소스 맵은 상당히 큰 경향이 있으므로, 프로덕션용으로 빌드할 때는 비활성화해야 합니다. 최종 사용자에게 이점이 없으므로, 사실상 무거운 짐일 뿐입니다.

### 종속성 최적화

인기 있는 많은 라이브러리에는 선택할 수 있는 더 작고 빠른 대안이 있습니다.

사용하는 대부분의 라이브러리는 많은 라이브러리 자체에 의존하므로 처음에는 눈에 띄지 않게 보이는 라이브러리가 앱에 **수 메가바이트** 상당의 코드를 추가할 수 있습니다.

[Bundlephobia][]를 사용하여 JavaScript 종속성의 비용을 찾을 수 있습니다. Rust 의존성의 비용을 검사하는 것은 컴파일러가 많은 최적화를 수행하기 때문에 일반적으로 더 어렵습니다.

Google에서 지나치게 큰 라이브러리를 찾으면 다른 사람이 이미 같은 생각을 가지고 대안을 만들었을 가능성이 있습니다. A good example is [Moment.js][] and its [many alternatives][you-dont-need-momentjs].

하지만, 기억해야 할 것은 **가장 좋은 종속성은 종속성이 없는 것입니다**. 즉, 항상 타사 패키지보다 언어 내장을 선호해야 합니다.

### 이미지 최적화

[Http Archive][]에 따르면 이미지는 [웹사이트 무게에 지대한 영향을 미친다][http archive report, image bytes]고 합니다. 그래서, 앱에 이미지나 아이콘이 포함되었을 경우 반드시 이것들을 최적화 해야 합니다.

You can choose between a variety of manual options ([GIMP][], [Photoshop][], [Squoosh][]) or plugins for your favorite frontend build tools ([vite-imagetools][], [vite-plugin-imagemin][], [image-minimizer-webpack-plugin][]).

Do note that the `imagemin` library most of the plugins use is [officially unmaintained][imagemin is unmaintained].

#### 현대적인 이미지 형식 사용

Formats such as `webp` or `avif` offer size reductions of **up to 95%** compared to jpeg while maintaining excellent visual accuracy. You can use tools such as [Squoosh][] to try different formats on your images.

#### 적절한 이미지 크기 사용

No one appreciates you shipping the 6K raw image with your app, so make sure to size your image accordingly. Images that appear large on-screen should be sized larger than images that take up less screen space.

#### 반응형 이미지 사용하지 않기

In a Web Environment, you are supposed to use [Responsive Images][] to load the correct image size for each user dynamically. Since you are not dynamically distributing images over the web, using Responsive Images only needlessly bloats your app with redundant copies.

#### Metadata 제거

Images that were taken straight from a camera or stock photo side often include metadata about the camera and lens model or photographer. Not only are those wasted bytes, but metadata properties can also hold potentially sensitive information such as the time, day, and location of the photo.

### 불필요한 맞춤 글꼴 제거

Consider not shipping custom fonts with your app and relying on system fonts instead. If you must ship custom fonts, make sure they are in modern, optimized formats such as `woff2`.

글꼴은 꽤 클 수 있으므로 운영 체제에 포함된 글꼴을 사용하면 앱의 크기을 줄일 수 있습니다. It also avoids FOUT (Flash of Unstyled Text) and makes your app feel more "native" since it uses the same font as all other apps.

If you must include custom fonts, make sure you include them in modern formats such as `woff2` as those tend to be much smaller than legacy formats.

Use so-called **"System Font Stacks"** in your CSS. There are a number of variations, but here are 3 basic ones to get you started:

**Sans-Serif**

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
  sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
```

**Serif**

```css
font-family: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid
    Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe
    UI Symbol;
```

**Monospace**

```css
font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation
    Mono, monospace;
```

### 허용목록 구성

You can reduce the size of your app by only enabling the Tauri API features you need in the `allowlist` config.

The `allowlist` config determines what API features to enable; disabled features will **not be compiled into your app**. 이것은 여분의 무게를 줄이는 쉬운 방법입니다.

일반적인 `tauri.conf.json` 예제:

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

### Rust 빌드 타임 최적화

Cargo 프로젝트로 구성하게 되면 Rust 크기 최적화 기능을 활용할 수 있는 이점이 있습니다. [Rust 실행 파일이 큰 이유는 무엇인가?][]에서 이것이 왜 중요한지 깊이 있고 자세하게 설명해 줍니다. At the same time, [Minimizing Rust Binary Size][] is more up-to-date and has a couple of extra recommendations.

Rust is notorious for producing large binaries, but you can instruct the compiler to optimize the final executable's size.

Cargo exposes several options that determine how the compiler generates your binary. Tauri 앱의 "권장" 옵션은 다음과 같습니다:

```toml
[profile.release]
panic = "abort" # Strip expensive panic clean-up logic
codegen-units = 1 # Compile crates one after another so the compiler can optimize better
lto = true # Enables link to optimizations
opt-level = "s" # Optimize for binary size
strip = true # Remove debug symbols
```

:::note
There is also `opt-level = "z"` available to reduce the resulting binary size. `"s"` and `"z"` can sometimes be smaller than the other, so test it with your application!

We've seen smaller binary sizes from `"s"` for Tauri example applications, but real-world applications can always differ.
:::

For a detailed explanation of each option and a bunch more, refer to the [Cargo books Profiles section][cargo profiles].

#### Disable Tauri's Asset Compression

By default, Tauri uses Brotli to compress assets in the final binary. Brotli embeds a large (~170KiB) lookup table to achieve great results, but if the resources you embed are smaller than this or compress poorly, the resulting binary may be bigger than any savings.

Compression can be disabled by setting `default-features` to `false` and specifying everything except the `compression` feature:

```toml
[dependencies]
tauri = { version = "...", features = ["objc-exception", "wry"], default-features = false }
```

#### Unstable Rust Compression Features

:::caution
The following suggestions are all unstable features and require a nightly toolchain. See the [Unstable Features][cargo unstable features] documentation for more information on what this involves.
:::

The following methods involve using unstable compiler features and require the rust nightly toolchain. If you don't have the nightly toolchain + `rust-src` nightly component added, try the following:

```shell
rustup toolchain install nightly
rustup component add rust-src --toolchain nightly
```

To tell Cargo that the current project uses the nightly toolchain, we will create an [Override File][] at the root of our project called `rust-toolchain.toml`. This file will contain the following:

```toml title=rust-toolchain.toml
[toolchain]
channel = "nightly-2023-01-03" # The nightly release to use, you can update this to the most recent one if you want
profile = "minimal"
```

Rust 표준 라이브러리는 사전 컴파일된 상태로 제공됩니다. This means Rust is faster to install, but also that the compiler can't optimize the Standard Library. You can apply the optimization options for the rest of your binary + dependencies to the std with an unstable flag. This flag requires specifying your target, so know the target triple you are targeting.

```shell
cargo tauri build --target <Target triple to build for> -- -Z build-std
```

If you are using `panic = "abort"` in your release profile optimizations, you need to make sure the `panic_abort` crate is compiled with std. Additionally, an extra std feature can further reduce the binary size. 다음은 두 가지 모두에 적용됩니다:

```shell
cargo tauri build --target <Target triple to build for> -- -Z build-std=std,panic_abort -Z build-std-features=panic_immediate_abort
```

See the unstable documentation for more details about [`-Z build-std`][cargo build-std] and [`-Z build-std-features`][cargo build-std-features].

### 조각화하기

Strip 도구를 사용하면 컴파일된 앱에서 디버그 기호를 제거해줍니다.

Your compiled app includes so-called "Debug Symbols" that include function and variable names. Your end-users will probably not care about Debug Symbols, so this is a pretty surefire way to save some bytes!

The easiest way is to use the famous `strip` utility to remove this debugging information.

```shell
strip target/release/my_application
```

See your local `strip` manpage for more information and flags that can be used to specify what information gets stripped out from the binary.

:::info

Rust 1.59 버전은 `strip`이 내장되어 있습니다! `Cargo.toml`에 아래와 같이 추가하면 활성화 할 수 있습니다:

```toml
[profile.release]
strip = true  # Automatically strip symbols from the binary.
```

:::

### UPX

UPX, **Ultimate Packer for eXecutables**, is a dinosaur amongst the binary packers. This 23-year-old, well-maintained piece of kit is GPL-v2 licensed with a pretty liberal usage declaration. Our understanding of the licensing is that you can use it for any purposes (commercial or otherwise) without needing to change your license unless you modify the source code of UPX.

Maybe your target audience has very slow internet, or your app needs to fit on a tiny USB stick, and all the above steps haven't resulted in the savings you need. Fear not, as we have one last trick up our sleeves:

[UPX][] compresses your binary and creates a self-extracting executable that decompresses itself at runtime.

:::caution
You should know that this technique might flag your binary as a virus on Windows and macOS - so use it at your own discretion, and as always, validate with [Frida][] and do real distribution testing!
:::

#### MacOS 사용법

<!-- Add additional platforms -->

```
brew install upx
yarn tauri build
upx --ultra-brute src-tauri/target/release/bundle/macos/app.app/Contents/macOS/app

                        Ultimate Packer for eXecutables
                            Copyright (C) 1996 - 2018
UPX 3.95        Markus Oberhumer, Laszlo Molnar & John Reiser   Aug 26th 2018

        File size         Ratio      Format      Name
    --------------------   ------   -----------   -----------
    963140 ->    274448   28.50%   macho/amd64   app
```

[`cargo-bloat`]: https://github.com/RazrFalcon/cargo-bloat
[Macros]: https://doc.rust-lang.org/book/ch19-06-macros.html
[`cargo-expand`]: https://github.com/dtolnay/cargo-expand
[`rollup-plugin-visualizer`]: https://github.com/btd/rollup-plugin-visualizer
[`rollup-plugin-graph`]: https://github.com/ondras/rollup-plugin-graph
[Vite]: https://vitejs.dev
[webpack]: https://webpack.js.org
[rollup]: https://rollupjs.org/guide/en/
[rollup-plugin-terser]: https://github.com/TrySound/rollup-plugin-terser
[rollup-plugin-uglify]: https://github.com/TrySound/rollup-plugin-uglify
[terser]: https://terser.org
[esbuild]: https://esbuild.github.io
[TypeScript]: https://www.typescriptlang.org
[Moment.js]: https://momentjs.com
[you-dont-need-momentjs]: https://github.com/you-dont-need/You-Dont-Need-Momentjs
[Http Archive]: https://httparchive.org
[http archive report, image bytes]: https://httparchive.org/reports/page-weight#bytesImg
[imagemin is unmaintained]: https://github.com/imagemin/imagemin/issues/385
[GIMP]: https://www.gimp.org
[Photoshop]: https://www.adobe.com/de/products/photoshop.html
[vite-imagetools]: https://github.com/JonasKruckenberg/imagetools
[vite-plugin-imagemin]: https://github.com/vbenjs/vite-plugin-imagemin
[image-minimizer-webpack-plugin]: https://github.com/webpack-contrib/image-minimizer-webpack-plugin
[Squoosh]: https://squoosh.app
[Responsive Images]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
[Rust 실행 파일이 큰 이유는 무엇인가?]: https://lifthrasiir.github.io/rustlog/why-is-a-rust-executable-large.html
[Minimizing Rust Binary Size]: https://github.com/johnthagen/min-sized-rust
[cargo unstable features]: https://doc.rust-lang.org/cargo/reference/unstable.html#unstable-features
[Override File]: https://rust-lang.github.io/rustup/overrides.html#the-toolchain-file
[cargo profiles]: https://doc.rust-lang.org/cargo/reference/profiles.html
[cargo build-std]: https://doc.rust-lang.org/cargo/reference/unstable.html#build-std
[cargo build-std-features]: https://doc.rust-lang.org/cargo/reference/unstable.html#build-std-features
[Bundlephobia]: https://bundlephobia.com
[Frida]: https://frida.re/docs/home/
[UPX]: https://github.com/upx/upx
