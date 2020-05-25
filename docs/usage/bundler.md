---
id: bundler
title: Bundler
---

The Tauri Bundler is a rust harness for compiling your binary, packaging assets, and preparing a final bundle.

It will detect your operating system and build a bundle accordingly. It currently supports:

- Linux: .deb, .appimage
- MacOS: .app, .dmg
- Windows: .exe, .msi

## Anti Bloat Features

The following links have tutorials on reducing the size of your installers:

- https://github.com/RazrFalcon/cargo-bloat
- https://lifthrasiir.github.io/rustlog/why-is-a-rust-executable-large.html
- https://doc.rust-lang.org/cargo/reference/manifest.html#the-profile-sections

### Rust Compression Features

Add this to your `src-tauri/Cargo.toml`

    [profile.release]
    panic = "abort"
    codegen-units = 1
    lto = true
    incremental = false
    opt-level = "z"

### UPX

UPX, **Ultimate Packer for eXecutables**, is a dinosaur amongst the binary packers. This 23-year old, well-maintained piece of kit is GPL-v2 licensed with a pretty liberal usage declaration. Our understanding of the licensing is that you can use it for any purposes (commercial or otherwise) without needing to change your license unless you modify the source code of UPX.

Basically it compresses the binary and decompresses it at runtime. It should work for pretty much any binary type out there. Read more: https://github.com/upx/upx

> You should know that this technique might flag your binary as a virus on Windows and MacOS - so use at your own discretion, and as always validate with Frida and do real distribution testing!

#### Usage on MacOS

    $ brew install upx
    $ yarn tauri build
    $ upx --ultra-brute src-tauri/target/release/bundle/osx/app.app/Contents/MacOS/app
                           Ultimate Packer for eXecutables
                              Copyright (C) 1996 - 2018
    UPX 3.95        Markus Oberhumer, Laszlo Molnar & John Reiser   Aug 26th 2018

            File size         Ratio      Format      Name
       --------------------   ------   -----------   -----------
        963140 ->    274448   28.50%   macho/amd64   app

## Sidecar (Embedding External Binaries)

You may need to embed depending binaries in order to make your application work or to prevent users having to install additional dependencies (e.g. NodeJS, Python, etc).

To bundle the binaries of your choice, you can add the `externalBin` property to the `tauri` namespace in your `tauri.conf.json`.

`externalBin` expects a list of strings targeting binaries either with absolute or relative paths.

Here is a sample to illustrate the configuration, this is not a complete `tauri.conf.json` file:

```json
{
  "tauri": {
    "bundle": {
      "externalBin": ["/absolute/path/to/bin1", "relative/path/to/bin2"]
    }
  }
}
```

This way, you may [execute commands with Rust](https://doc.rust-lang.org/std/process/struct.Command.html) in your Tauri application.

### Note:

Tauri provides some utilitary functions to handle standard cases (like loading platform specific binaries), such as:

- `tauri::api::command::binary_command`, which will append the current environment triplet to the input (useful for cross-environments). If you're creating your own binary, you'll _have to_ provide a binary **for each platform you're targeting** by specifying the target triplets, e.g. "binaryname-x86_64-apple-darwin".

Target triplets can be found by executing the `rustup target list` command.

- `tauri::api::command::relative_command` that will relatively resolve the path to the binary.
