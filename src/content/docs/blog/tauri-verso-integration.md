---
title: Experimental Tauri Verso Integration
date: 2025-03-17
authors: [tony]
excerpt: The first look of the integration with Verso, a browser based on Servo
---

## What is Verso?

So first off, what is `Verso`? [`Verso`](https://github.com/versotile-org/verso) is a browser based on [`Servo`](https://servo.org/), a web browser rendering engine written in Rust

## Why using Verso instead of Servo directly?

Servo itself is made to be very easy to embed compared to other browsers, but the APIs are still way too low level and it's quite daunting to use, you can take a look at the minimal example for running Servo with Winit at (note this is not even a fully functional example): https://github.com/servo/servo/blob/8d39d7706aee50971e848a5e31fc6bfd7ef552c1/components/servo/examples/winit_minimal.rs

And compared to that, Verso's API looks like this, which is much easier and ergonomic to use

```rust
use std::time::Duration;

fn main() {
    let versoview_path = current_exe().unwrap().parent().unwrap().join("versoview");
    let controller = verso::VersoBuilder::new()
        .with_panel(true)
        .maximized(true)
        .build(
            versoview_path,
            url::Url::parse("https://example.com").unwrap(),
        );
    loop {
        sleep(Duration::MAX);
    }
}
```

> https://github.com/versotile-org/verso/blob/2e853d4f3f4cb88274daa211b7a2eb3bd1517115/verso/src/main.rs

It's not to say Servo's API is bad though, as they need to support a lot more use cases while we just need it for building applications with Tauri

## `tauri-runtime-verso`

So let's talke about the integration!

We have a working Tauri runtime [`tauri-runtime-verso`](https://github.com/versotile-org/tauri-runtime-verso) integrating Verso and Tauri now, just note that it's not as feature rich and powerful as the current backends used by Tauri in production yet, but it still has a lot to it, and we have built an example show casing it at https://github.com/versotile-org/tauri-runtime-verso/tree/main/examples/api

<video controls src="/public/assets/blog/verso-integration/dev-show-case.mp4" title="Verso integration show case"></video>

#### Features you can see from the video:

- We have all the functions the `tauri-cli` provides
- We're using a modern framework, in this case [`React`](https://react.dev/)
- We have our offical log and opener plugins, they work exactly the same as if you're using Tauri with the other backends
- [`Vite`](https://vitejs.dev/)'s css hot reload works as well
- The `data-tauri-drag-region` attribute works

## Thank you

At the end we want to thank [NLNet](https://nlnet.nl/) for supporting this project financially through grants!
