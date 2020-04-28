---
id: config
title: 'Configuration'
---

The `tauri.conf.json` is a generated file living in your Tauri application source directory (src-tauri).

It's composed of the following properties:

## build

```js
"build": {
  "distDir": "../dist",
  "devPath": "http://localhost:4000",
  "beforeDevCommand": "",
  "beforeBuildCommand": ""
}
```

### `distDir`

Type: `string`

The path—either absolute or relative—to the production-ready webpage/webapp directory that will be bundled by Tauri.

<div class="alert alert--info" role="alert">
  The target directory <em>must</em> contain an index.html file.
</div>

### `devPath`

Type: `string`

Can be a path - either absolute or relative - to a folder or a URL (like a live reload server).

### `beforeDevCommand`

Type: `string`<br/>
Default: `""`

A command to run before starting Tauri in dev mode.

### `beforeBuildCommand`

Type: `string`<br/>
Default: `""`

A command to run before starting Tauri in build mode.

## ctx

```js
"ctx" {
  "prod": false,
  "dev": false,
  "target": "",
  "debug": false,
  "targetName": "",
  "exitOnPanic": false,
}
```

### `prod`

Type: `boolean`<br/>
Default:

### `dev`

Type: `boolean`<br/>
Default:

### `target`

Type: `string`<br/>
Default:

### `debug`

Type: `boolean`<br/>
Default:

### `targetName`

Type: `string`<br/>
Default:

### `exitOnPanic`

Type: `boolean`<br/>
Default:

## tauri

```js
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

### `embeddedServer`

Type: object<br/>

A property to determine if Tauri should embed a webserver to run your application. <br/>
Set it to `{ "active": false }` if you plan to serve your application statically.

#### `active`

Type: `boolean`<br/>

### `bundle`

Type: `object`<br/>

#### `active`

Type: boolean<br/>

#### `identifier`

Type: `string`<br/>

#### `icon`

Type: `string[]`<br/>

A list of icons that should be used by the bundler.

#### `resources`

Type: `[]`<br/>

#### `externalBin`

Type: `string[]`<br/>

A list of paths—either absolute or relative—to binaries that the bundler should embed.

#### `copyright`

Type: `string`<br/>

#### `category`

Type: `string`<br/>

#### `shortDescription`

Type: `string`<br/>

#### `longDescription`

Type: `string`<br/>

#### `deb`

Type: `string`<br/>

#### `osx`

Type: `string`<br/>

#### `exceptionDomain`

Type: `string`<br/>
