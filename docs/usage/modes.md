---
id: modes
title: App Loading Modes
---

Tauri has two configurations for loading your web app: with or without a localhost server.

## Localhost Server

Shipped by default, this is the easiest way to get up and running. It provides your app with a localhost server that uses an ephemeral port (i.e. a port that changes on every run, based on what is available on the device). Tauri then uses the server to load your web app into the Webview.
In your `src-tauri/tauri.conf.json`:

```json
"tauri": {
  "embeddedServer": {
    "active": true
  }
}
```

## No Server

A more advanced and secure configuration, and currently only available for webpack users, is the no-server mode. The main reason for its complexity is that Tauri needs to rebuild your code by removing dynamic imports. In this mode, Tauri loads your web app directly from the disk, skipping the localhost server entirely.

In your `src-tauri/tauri.conf.json`:

```json
"tauri": {
  "embeddedServer": {
    "active": false
  }
}
```
