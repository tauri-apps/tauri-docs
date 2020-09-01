---
title: Technical Details
---

## CLI

The CLI is node.js based, because it is arguably the most accessible for the majority of the web-development community. Using Tauri requires the latest LTS because we track security patches. In the future we will enable you to use Deno instead of Node if that is your jam.

## User Interface

The first generation user interface in Tauri apps leverages Cocoa/WebKit on macOS, gtk-webkit2 on Linux and Webkit via EdgeHTML / Chakra on Windows. **Tauri** leverages the MIT licensed work known as [webview](https://github.com/webview/webview) that has been incorporated into the officiall [webview_rust](https://github.com/webview/webview_rust) bindings.

<div className="alert alert--warning" role="alert">
  We are currently working on enabling the Web APIs and many of them may not be available on your platform.
</div>

## The `src-tauri` Folder

The `src-tauri` folder contains both the configuration for your Tauri app as well as any native Rust code. It is automatically created and filled with boilerplate code when Tauri is initialized. Configuration is stored in the `src-tauri/tauri.conf.json` file, and the `src-tauri/src` folder contains the native Rust code.

## Components of Tauri

The Node CLI reads your configuration file and gets everything prepped for bundling into a binary, such as configuring the injection of the Tauri API. It also contains a few helpful commands such `tauri icon` command for making icons, `tauri init` for scaffolding an app, and `tauri info` for debugging your environment.

The Tauri Rust Crate is the actual native code that binds to the Webview, creates your app's window, and provides the native API (file read / write, etc.).

The bundler combines your HTML/JS/CSS, native Rust code, and the Tauri Rust Crate into a nice and easy to consume binary for your target OS.

## Why Rust

> Rust is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power performance-critical services, run on embedded devices, and easily integrate with other languages. Rust’s rich type system and ownership model guarantee memory-safety and thread-safety — and enable you to eliminate many classes of bugs at compile-time. Rust has great documentation, a friendly compiler with useful error messages, and top-notch tooling — an integrated package manager and build tool, smart multi-editor support with auto-completion and type inspections, an auto-formatter, and more. - [https://www.rust-lang.org/](https://www.rust-lang.org/)

This combination of power, safety and usability are why we chose Rust to be the default binding for Tauri. It is our intention to provide the most safe and performant app experience (for devs and app consumers), out of the box.

If you want a deep and rather nerdy look into Rust, check out what insider Tony Arcieri has to say in his article, [Rust in 2019. Security, maturity, stability](https://tonyarcieri.com/rust-in-2019-security-maturity-stability).

## Learning Rust 🦀❤️

You don't need to know Rust at all to use (most of) Tauri - but as with all things, the rabbit hole goes as deep as you are willing to fall into it. If you are new to Rust, then we recommend first watching this amazing playlist of tutorials from Team Member [@tensor](https://tensor-programming.com/):

- [Intro to Rust](https://www.youtube.com/playlist?list=PLJbE2Yu2zumDF6BX6_RdPisRVHgzV02NW)
- [Rust Projects](https://www.youtube.com/playlist?list=PLJbE2Yu2zumDD5vy2BuSHvFZU0a6RDmgb)

But if you are like us, just watching awesome people do stuff isn't enough. That's why we absolutely MUST recommend that you immediately curlbash [Rustlings](https://github.com/rust-lang/rustlings):

```bash
curl -L https://git.io/rustlings | bash
```

Why? Because it is an interactive leap into coding with Rust that forces you to solve compiler errors in order to progress in your understanding. It is addictive, so block a few hours and just do it!

At some point, learning about Rust will require a visit to the manual. Check it out:

- [Rust 1.31.0+](https://doc.rust-lang.org/stable/book/) by Steve Klabnik & Carol Nichols

And finally, there are a couple Rust communities on Discord that you can always fall back on if you need extra support:

- [Rust Community Discord](https://bit.ly/rust-community)
- [Rust Development Discord](https://discord.gg/SG3m9pk)
