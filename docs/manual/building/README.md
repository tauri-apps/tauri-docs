# Introduction

The Tauri Bundler is a Rust harness to compile your binary, package assets, and prepare a final bundle.

It will detect your operating system and build a bundle accordingly. It currently supports:

- Linux: .deb, .appimage
- macOS: .app, .dmg
- Windows: .exe, .msi