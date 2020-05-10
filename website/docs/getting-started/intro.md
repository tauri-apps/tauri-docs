---
id: intro
title: 'Introduction'
---

import Introduction from '@theme/Introduction'

You will find here whatever you need to know to setup Tauri on your environment and to customize it.

If you find something unclear, an error or simply would like to propose an improvement, you have several options:<br />

1. Open an issue.<br />
2. Visit our [Discord server](https://discord.gg/SpmNs4S) and raise your concern.<br />
3. Request to join one of the working groups to gain access (on Discord).

<Introduction />

## How it all works

1. First you make an interface in your GUI framework and prepare the HTML/CSS/JS for consumption
2. The tauri.js CLI takes it and rigs the rust runner according to your configuration.
3. In dev mode it creates a webview window with debugging and hot-module-reloading.
4. In build mode it rigs the bundler and creates a final application according to your settings.

### Setting up Your Environment

We are assuming that you know what the command line is, how to install packages on your operating system and generally know your way around the development side of computing. Obviously, you must first make sure that all required languages / compilers are available and in your PATH. Read more about the details for your local development environment:

- [Linux Setup](setup-linux)
- [MacOS Setup](setup-macos)
- [MS Windows Setup](setup-windows)

### Initializing an App

The initialization phase creates a folder and places a few template files into your project directory. The most important file that it creates is the `src-tauri/tauri.conf.json` file, as this is where you manage the configuration of your project. You can read more about this here:

- [Tauri Integration](../usage/integration)

### Developing an App

There are several methods for developing an App using the built-in development App Window. The most common is to point the Tauri configuration at a localhost port that your front-end framework's development server provides you with. If your framework doesn't provide you with this, or you like everything vanilla, then you can instruct Tauri to serve (and transpile if needed) from a relative file path. In both cases you will have HMR (Hot Module Reloading). Read about this process:

- [App Development](../usage/development)
- [App Debugging](../usage/debugging)

### Making App Icons

Your app will need icons, and Tauri also provides a command for making all the icons your app will need, no matter which platform you are using. Simply place a 1240x1240 png (with transparency) named `app-icon.png` in your project folder and run `tauri icon`. The icons will be placed in `src-tauri/icons` and automatically consumed by Tauri during the build process.

### Bundling an App

The basic process of building a Tauri App is very straightforward and unopinionated. In the Tauri configuration file you reference a distribution folder e.g. `../dist/spa` where your HTML, CSS, JS and other assets can be found. Then you tell the Tauri CLI to build your app. Tauri prepares your code depending upon your configuration and bundles everything up into a nice and tidy binary.

<div class="alert alert--info" role="alert">
The first time you build a project it will take some time to collect the resources that Tauri needs from the relevant Rust Crates, but subsequent builds will be much faster.
</div>

## Technical Details

### CLI

The CLI is node.js based, because it is arguably the most accessible for the majority of the web-development community. Using Tauri requires the latest LTS because we track security patches. In the very near future we will enable you to use DENO instead of NODE if that is your jam.

### User Interface

The first generation User Interface in Tauri apps leverages Cocoa/WebKit on macOS, gtk-webkit2 on Linux and MSHTML (IE10/11) or Webkit via EdgeHTML / Chakra on Windows. **Tauri** leverages the MIT licensed prior work known as [webview](https://github.com/zserge/webview) that has been incorporated into [web-view](https://github.com/Boscop/web-view).

<div class="alert alert--warning" role="alert">
  We are currently working on enabling the Web APIs and many of them may not be available on your platform.
</div>

## The Templates

First is the `src-tauri/tauri.conf.json` file - it is injected into the CWD at tauri init.
Then is the src-tauri folder, which is injected into the CWD and contains the base Rust application that you can extend as you wish.

The node CLI has a bunch of "syntactic" sugar that sets up the dev env or prepares assets for the bundle process (as well as the tauri icon command for making icons.)

The next piece is the actual rust crate that binds web-view, constructs the webview and has the API (file read / write, etc.)

Finally, the bundler, which takes all the pieces and puts them together in a nice and easy to consume binary for the desktop OS's

## Why Rust

> Rust is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power performance-critical services, run on embedded devices, and easily integrate with other languages. Rust’s rich type system and ownership model guarantee memory-safety and thread-safety — and enable you to eliminate many classes of bugs at compile-time. Rust has great documentation, a friendly compiler with useful error messages, and top-notch tooling — an integrated package manager and build tool, smart multi-editor support with auto-completion and type inspections, an auto-formatter, and more. - [https://www.rust-lang.org/](https://www.rust-lang.org/)

This combination of power, safety and usability are why we chose Rust to be the default binding for Tauri. It is our intention to provide the most safe and performant native app experience (for devs and app consumers), out of the box.

If you want a deep and rather nerdy look into Rust, check out what insider Tony Arcieri has to say in his article, [Rust in 2019. Security, maturity, stability](https://tonyarcieri.com/rust-in-2019-security-maturity-stability)

### Learning Rust 🦀❤️

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

And finally, there are a couple Rust communities on Discord that you can always fall back on if you need estra support:

- [Rust Community Discord](https://bit.ly/rust-community)
- [Rust Development Discord](https://discord.gg/SG3m9pk)
