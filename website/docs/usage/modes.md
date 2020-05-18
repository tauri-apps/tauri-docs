---
id: modes
title: Modes
---

There are two basic modes of tauri: with or without a localhost server.

## Localhost Server

Shipped by default, this is the easiest way to get up and running. It provides your app with a localhost server that uses an ephemeral port (i.e. a port that changes on every run, based on what is available on the device).
In your `src-tauri/tauri.conf.json`:

```json
"tauri": {
  "embeddedServer": {
    "active": true
  }
}
```

## No Server

A more advanced and secure configuration, and currently only available for webpack users, is the no-server. The main reason for its complexity is that tauri needs to rebuild your code by removing dynamic imports.

In your `src-tauri/tauri.conf.json`:

```json
"tauri": {
  "embeddedServer": {
    "active": false
  }
}
```

### webpack

If you are handcrafting your own webpack, you can do this:
`webpack.config.js`

```js
const mode = process.env.NODE_ENV || 'development'
const devMode = mode !== 'production'
const tauriMode = !!process.env.TAURI

const webpackConfig = {
    entry: {
        bundle: ['./src-ui/index.js']
    },
    ... CONFIG HERE
}

if (tauriMode) {
    const merge = require('webpack-merge')
    const tauriWebpackConfig = require('@tauri-apps/tauri-webpack').config()
    module.exports = merge(webpackConfig, tauriWebpackConfig)
}
else {
    module.exports = webpackConfig
}
```

And then in the `scripts` of your package.json:

```
"dev": "webpack-dev-server --content-base .build/ --port 3000 --host 0.0.0.0",
"build": "cross-env NODE_ENV=production webpack",
"build:tauri": "TAURI=1 npm run build",
"dev:tauri": "TAURI=1 npm run dev",
```

The webpack plugin can also be used with `chainWebpack`:

### webpack chain

```js
chainWebpack (chain) {
  require('@tauri-apps/tauri-webpack').chain(chain)
}
```
