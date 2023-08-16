---
title: 'Module tauri_utils::config::build'
editUrl: false
prev: false
next: false
---


Implement `ToTokens` for all config structs, allowing a literal `Config` to be built.

This allows for a build script to output the values in a `Config` to a `TokenStream`, which can
then be consumed by another crate. Useful for passing a config to both the build script and the
application using tauri while only parsing it once (in the build script).
