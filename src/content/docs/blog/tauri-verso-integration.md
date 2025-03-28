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

Servo itself is made to be relatively easy to embed compared to other browsers, but the APIs are still way too low level and it's quite daunting to use, you can take a look at the minimal example for running Servo with Winit at (note this is not even a fully functional example): https://github.com/servo/servo/blob/8d39d7706aee50971e848a5e31fc6bfd7ef552c1/components/servo/examples/winit_minimal.rs

And compared to that, Verso's API looks like this, which is much easier and ergonomic to use

```rust
use std::env::current_exe;
use std::thread::sleep;
use std::time::Duration;
use url::Url;
use verso::VersoBuilder;

fn main() {
    let versoview_path = current_exe().unwrap().parent().unwrap().join("versoview");
    let controller = VersoBuilder::new()
        .with_panel(true)
        .maximized(true)
        .build(versoview_path, Url::parse("https://example.com").unwrap());
    loop {
        sleep(Duration::MAX);
    }
}
```

> https://github.com/versotile-org/verso/blob/2e853d4f3f4cb88274daa211b7a2eb3bd1517115/verso/src/main.rs

It's not to say Servo's API is bad though, as they need to support a lot more use cases while we just need it for building applications with Tauri

## `tauri-runtime-verso`

So let's talk about the integration with Tauri!

We choose to integrate Verso and Tauri through a new custom runtime [`tauri-runtime-verso`](https://github.com/versotile-org/tauri-runtime-verso) for this time, this is similar to our default runtime `tauri-runtime-wry`.

With this approach, you can easily swap out the runtime and use Tauri like what you'll normally do:

```rust
use tauri_runtime_verso::{
    INVOKE_SYSTEM_SCRIPTS, VersoRuntime, set_verso_path, set_verso_resource_directory,
};

fn main() {
    // You need to set this to the path of the versoview executable
    // before creating any of the webview windows
    set_verso_path("../verso/target/debug/versoview");
    // Set this to verso/servo's resources directory before creating any of the webview windows
    // this is optional but recommended, this directory will include very important things
    // like user agent stylesheet
    set_verso_resource_directory("../verso/resources");
    tauri::Builder::<VersoRuntime>::new()
        // Make sure to do this or some of the commands will not work
        .invoke_system(INVOKE_SYSTEM_SCRIPTS.to_owned())
        .run(tauri::generate_context!())
        .unwrap();
}
```

Just note that it's not as feature rich and powerful as the current backends used by Tauri in production yet, but it still has a lot to it, and we have built an example show casing it at https://github.com/versotile-org/tauri-runtime-verso/tree/main/examples/api

<video controls src="/assets/blog/verso-integration/dev-show-case.mp4" title="Verso integration show case"></video>

#### Features you can see from the video:

- We have all the functions the `tauri-cli` provides
- We're using a modern framework, in this case [`React`](https://react.dev/)
- We have our official log and opener plugins, they work exactly the same as if you're using Tauri with the other backends
- Windowing functions work, including size, position, maximize, minimize, close, ...
- [`Vite`](https://vitejs.dev/)'s css hot reload works as well
- The `data-tauri-drag-region` attribute works

## Future works

Right now, Verso and `tauri-runtime-verso` are still in active development so we'll need to see as we go, but we do have something planned to do next

### Pre-built Verso executable

Releasing an easy to use pre-built Verso executable to help people get started with it quicker and easier, as currently you need to compile Verso yourself to get started

Also if possible, as a long term goal, we would like an evergreen shared Verso, similar to WebView2 on Windows which you would place it on the system and it would update itself automatically, and shared between multiple apps so you don't have to ship the browser inside your app to reduce the bundle size significantly

### More windowing and webview features support

We currently only support a small subset of features in Tauri, and we would like to expand this to include more things, and we have currently planned to support window decorations, window titles and transparency

### Initialization script without temporary files

Currently Servo can only take an userscript directory to run on document start which is ok but for the Tauri's use case, we would like to do this programmatically without the help of files, as that could result in left over temporary files that we never clean up

We have a [PR](https://github.com/servo/servo/pull/35388) merged in Servo just a few days ago and we should just need to use in Verso and then the `tarui-runtime-verso` so this is a coming soon!

### Customization unique to the Verso runtime

Tauri is largely made with the assumption of the underlying webview libraries, so there're very little ways to use many Verso specific futures right now, for example, setting the verso executable path and resources directory are being done through global variables, which is not really applicable to window specific features (for example setting rounded corners), so we would like to add support for that next

## Thank you

At the end we want to thank [NLNet](https://nlnet.nl/) for making this project possible by supporting it financially through grants!
