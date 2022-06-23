---
sidebar_position: 1
---

# Introduction

The Tauri Bundler is a Rust harness to compile your binary, package assets, and prepare a final bundle.

It will detect your operating system and build a bundle accordingly. It currently supports:

- [Windows](./windows): .msi
- [macOS](./macos): .app, .dmg
- [Linux](./debian): .deb, .appimage
