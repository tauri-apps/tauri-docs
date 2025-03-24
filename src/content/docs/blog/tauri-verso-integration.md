---
title: Experimental Tauri Verso Integration
date: 2025-03-17
authors: [tony]
excerpt: The first look of the integration with Verso, a browser based on Servo
---

## What is Verso?

So first off, what is `Verso`? [`Verso`](https://github.com/versotile-org/verso) is a browser based on [`Servo`](https://servo.org/), a web browser rendering engine written in Rust

## Why using Verso instead of Servo directly?

I believe there're quite a lot of people having thought about using Servo but got intimidated by the complex APIs and just gave up, which frankly I was one of them, so the goal of building the Verso webview is to make it easy enough to understand and use so that people will actually start to experiment and use it

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

<video controls src="/assets/blog/verso-integration/dev-show-case.mp4" title="Verso integration show case"></video>

#### Features you can see from the video:

- We have all the functions the `tauri-cli` provides
- We're using a modern framework, in this case [`React`](https://react.dev/)
- We have our offical log and opener plugins, they work exactly the same as if you're using Tauri with the other backends
- Windowing functions work, including size, postion, maximize, minimize, close, ...
- [`Vite`](https://vitejs.dev/)'s css hot reload works as well
- The `data-tauri-drag-region` attribute works

## Future works

The ultimate goal is to have a more stable API and more Tauri feature supports, then we could start thinking to make it a shared library

Right now, Verso and `tauri-runtime-verso` are still in active development so we'll need to see as we go, but we do have something planned to do next

### Pre-built Verso executable

Releasing an easy to use pre-built Verso executable to help people get started with it quicker and easier, as currently you need to compile Verso yourself to get started

Also if possible, we would like an evergreen shared Verso, similar to WebView2 on Windows which you would place it on the system and it would update itself automatically, and shared between multiple apps so you don't have to ship the browser inside your app to reduce the bundle size significantly

### More windowing and webview features support

We currently only support a small subset of features in Tauri, and we would like to expand this to include more things

### Initialization script without temp files

Currently Servo can only take an userscript directory to run on document start which is ok but for the Tauri's use case, we would like to do this programmatically without the help of files, as that could result in left over temp files that we never clean up, we have a draft [PR](https://github.com/servo/servo/pull/35388) up for this right now, but there're a lot more work to be done to make it happen

### Customization unique to the Verso runtime

Tauri is largely made with the assumption of the underlying webview libraries, so there're very little ways to use many Verso specific futures right now, for example, setting the verso executable path and resources directory are being done through global variables, which is not really applicable to window specific features (for example setting rounded conors), so we would like to add support for that next

## Thank you

At the end we want to thank [NLNet](https://nlnet.nl/) for supporting this project financially through grants!
