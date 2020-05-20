---
id: integration
title: "Tauri integration"
sidebar_label: Tauri integration
---

<div className="alert alert--info" role="alert">
Please note: you must have completed all the steps required for setting up the development environment on your machine. If you haven't done this yet, please see the setup page for your operating system.
</div>
<br/>

1. Install tauri-cli as Dependency:
```bash
cd project-folder

# Optional if you already have a package.json:
# npm init 
# OR
# yarn init

yarn add tauri
# OR
npm install tauri
```

<div className="alert alert--info" role="alert">
Note: You can install tauri as both a local and a global dependency.
</div>
<br/>

2. Check `tauri info` to make sure you have everything you need:
```
local:  yarn tauri info / npm run tauri info
global: tauri info
```

Which should return something like:
```
Operating System - Darwin(16.7.0) - darwin/x64

Node.js environment
  Node.js - 12.14.0
  tauri.js - 0.2.1

Rust environment
  rustc - 1.40.0
  cargo - 1.40.0
  tauri-cli - 0.1.2

Global packages
  NPM - 6.13.4
  yarn - 1.21.1

App directory structure
/.quasar
/build-tauri
/dist
/node_modules
/src
/src-tauri

App
  tauri - 0.3.0
  mode - embedded-server
  build-type - bundle
  CSP - default-src data: filesystem: ws: http: https: 'unsafe-eval' 'unsafe-inline'
  Windows - Edge
  distDir - ../dist/spa
  devPath - http://localhost:7334
```

This information can be very helpful when triaging problems.

3. Initialize tauri
```
local:  yarn tauri init / npm run tauri init
global: tauri init
```

This command will place a new folder in your CWD, `src-tauri`.

```
├── src-tauri
│   ├── Cargo.toml
│   ├── .gitignore
│   ├── icons
│   │   ├── 128x128.png
│   │   ├── 128x128@2x.png
│   │   ├── 32x32.png
│   │   ├── Square107x107Logo.png
│   │   ├── Square142x142Logo.png
│   │   ├── Square150x150Logo.png
│   │   ├── Square284x284Logo.png
│   │   ├── Square30x30Logo.png
│   │   ├── Square310x310Logo.png
│   │   ├── Square44x44Logo.png
│   │   ├── Square71x71Logo.png
│   │   ├── Square89x89Logo.png
│   │   ├── StoreLogo.png
│   │   ├── icon.icns
│   │   ├── icon.ico
│   │   └── icon.png
│   ├── rustfmt.toml
│   └── src
│       ├── build.rs
│       ├── cmd.rs
│       └── main.rs
```

## `src-tauri/tauri.conf.json`

Edit `src-tauri/tauri.conf.json`:
Depending on your development setup, you will probably need to update two important entry points for tauri:
- your bundled assets (`distDir`) - a relative file path from this file's CWD
- your development server (`devPath`) - a localhost
```
{
  "build": {
    "distDir": "../dist/spa",
    "devPath": "http://localhost:7334"
  }
}
```
<div className="alert alert--info" role="alert">
Note: technically you can point the devPath at a folder, and tauri will try to serve those assets statically.
</div>
<br/>

<div className="alert alert--warning" role="alert">
Warning: On some system setups, localhost may not be available. A general rule of thumb is to use exactly the same domain as your devServer. You can try to switch localhost here with:<br/>
- "127.0.0.1"<br/>
- "0.0.0.0"<br/>

On windows, you must enable loopback during development. [todo: add link](https://github.com/tauri-apps/tauri/wiki/04.-MS-Windows-Setup)
</div>
<br/>

## vue-cli-plugin-tauri
See [vue-cli-plugin-tauri's repo](https://github.com/tauri-apps/vue-cli-plugin-tauri).

## tauri-webpack
`todo`