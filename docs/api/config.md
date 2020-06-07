---
title: 'Configuration'
---

import { Opening, Closing } from '@theme/CurlyBraces'
import Properties from '@theme/Properties'

The `tauri.conf.json` is a generated file living in your Tauri application source directory (src-tauri).

It's composed of the following properties:

## `build`

<Properties rows={[
{property: "distDir", type: "string", description: `The path—either absolute or relative—to the production-ready webpage/webapp directory that will be bundled by Tauri.

<div class="alert alert--info" role="alert" style="margin-top: 10px;">
  The target directory <em>must</em> contain an index.html file.
</div>`},
{property: "devPath", type: "string", description: `Can be a path—either absolute or relative—to a folder or a URL (like a live reload server).`},
{property: "beforeDevCommand", type: "string", description: `A command to run before starting Tauri in dev mode.`},
{property: "beforeBuildCommand", type: "string", description: `A command to run before starting Tauri in build mode.`}
]}/>

```js title=Example
"build": {
  "distDir": "../dist",
  "devPath": "http://localhost:4000",
  "beforeDevCommand": "",
  "beforeBuildCommand": ""
}
```

## `ctx`

<Properties rows={[
  {
    property: "prod", type: "boolean", description: ``},
  { property: "dev", type: "boolean", description: `` },
  { property: "target", type: "string", description: `` },
  { property: "debug", type: "boolean", description: `` },
  { property: "targetName", type: "string", description: `` },
  { property: "exitOnPanic", type: "boolean", description: `` }
]} />

```js title=Example
"ctx" {
  "prod": false,
  "dev": false,
  "target": "",
  "debug": false,
  "targetName": "",
  "exitOnPanic": false,
}
```

## `tauri`

<Properties rows={[
  {
    property: "embeddedServer", type: "object",
    child: <Properties rows={[{ property: "active", type: "boolean", description: `Set it to <code>false</code> if you plan to serve your application statically.` }]} />
  },
  {
    property: "bundle", type: "object",
    child: <Properties rows={[
      { property: "active", type: "boolean", description: `` },
      { property: "targets", type: "string", description: `` },
      { property: "identifier", type: "string", description: `` },
      { property: "icon", type: "string[]", description: `` },
      { property: "resources", type: "string[]", description: `` },
      { property: "externalBin", type: "string[]", description: `` },
      { property: "copyright", type: "string", description: `` },
      { property: "category", type: "string", description: `` },
      { property: "shortDescription", type: "string", description: `` },
      { property: "longDescription", type: "string", description: `` },
      { property: "deb", type: "object", description: `` },
      { property: "osx", type: "object", description: `` },
      { property: "exceptionDomain", type: "string", description: `` },
    ]} />
  },
  {
    property: "whitelist", type: "object",
    child: <Properties rows={[
      { property: "all", type: "boolean", description: `Use this flag to enable all API features` },
      { property: "answer", type: "boolean", description: `Enable Rust to direct the UI` },
      { property: "event", type: "boolean", description: `Enable listening to messages from webview` },
      { property: "execute", type: "boolean", description: `Enable binary execution` },
      { property: "listFiles", type: "boolean", description: `Get a list of files in a directory` },
      { property: "open", type: "boolean", description: `Open link in the user's default browser` },
      { property: "readBinaryFile", type: "boolean", description: `Read binary file from local filesystem` },
      { property: "readTextFile", type: "boolean", description: `Read text file from local filesystem` },
      { property: "setTitle", type: "boolean", description: `Set the webview window title` },
      { property: "writeFile", type: "boolean", description: `Write file to local filesystem` },
    ]} />
  },
  {
    property: "window", type: "object",
    child: <Properties rows={[
      { property: "title", type: "string", description: `Initial window title` },
      { property: "width", type: "number", description: `Initial window width` },
      { property: "height", type: "number", description: `Initial window height` },
      { property: "resizable", type: "boolean", description: `Enable window resizing` },
      { property: "fullscreen", type: "boolean", description: `Set window as fullscreen` },
    ]} />
  },
  {
    property: "security", type: "object",
    child: <Properties rows={[
      { property: "csp", type: "string", description: `See more <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP">on Mozilla</a>` },
    ]} />
  },
  {
    property: "edge", type: "object",
    child: <Properties rows={[
      { property: "active", type: "boolean", description: `` },
    ]} />
  },
  {
    property: "inliner", type: "object",
    child: <Properties rows={[
      { property: "active", type: "boolean", description: `` },
    ]} />
  },
]} />



```js title=Example
"tauri": {
  "embeddedServer": {
    "active": true
  },
  "bundle": {
    "active": true,
    "identifier": "com.tauri.dev",
    "icon": ["icons/32x32.png", "icons/128x128.png", "icons/128x128@2x.png", "icons/icon.icns", "icons/icon.ico"],
    "resources": [],
    "externalBin": [],
    "copyright": "",
    "category": "DeveloperTool",
    "shortDescription": "",
    "longDescription": "",
    "deb": {
      "depends": []
    },
    "osx": {
      "frameworks": [],
      "minimumSystemVersion": ""
    },
    "exceptionDomain": ""
  },
  "whitelist": {
    "all": true
  },
  "window": {
    "title": "Tauri App",
    "width": 800,
    "height": 600,
    "resizable": true,
    "fullscreen": false
  },
  "security": {
    "csp": "default-src blob: data: filesystem: ws: http: https: 'unsafe-eval' 'unsafe-inline'"
  },
  "edge": {
    "active": true
  },
  "inliner": {
    "active": true
  }
}
```
