---
sidebar_position: 1
---

# Configuration Files

Since Tauri is a toolkit for building applications there can be a lot of places to configure project settings. Some common files that you may run across are `tauri.conf.json`, `package.json`, `Cargo.toml`, and more. You can use this page as a reference to understand the differences between each of these and where to configure the relevant settings for your project.

## `tauri.conf.json`

This is the file used by the Tauri process. You can define the build settings (such as the [command run prior to `tauri build`][before-build-command] or [`tauri dev`][before-dev-command]), set the [name and version of your app][package-config], [control the Tauri process][tauri-config], and any plugin settings. Find all of the options for this config file in the [`tauri.conf.json` API reference].

## `Cargo.toml`

Cargo's manifest file. You can declare Rust crates your app depends on, metadata about your app, and much more. For the full reference see Cargo's Manifest Format.

## `package.json`

Node.js package file. Learn more at this link yadda yadda

[`tauri.conf.json` api reference]: ../../api/config.md
[before-build-command]: ../../api/config.md#buildconfig.beforebuildcommand
[before-dev-command]: ../../api/config.md#buildconfig.beforedevcommand
[package-config]: ../../api/config#packageconfig
[tauri-config]: ../../api/config#tauriconfig
