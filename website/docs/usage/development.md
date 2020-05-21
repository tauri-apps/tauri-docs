---
id: development
title: 'App Development'
sidebar_label: App Development
---

## Start Your Devserver

Now that you have everything setup, you should start the development server provided by your UI framework. Here are a few examples:

SVELTE using yarn:

```sh
yarn rollup -c -w
```

REACT-CREATE-APP using npm

```sh
npm run craco start
```

QUASAR using global `@quasar/cli`

```sh
quasar dev
```

<div className="alert alert--info" role="alert">
Every framework has its own development tooling. It is outside of the scope of this document to treat them all or keep them up to date.
</div>

## Configure Tauri With Localhost Port

Once your devserver is up and running, be sure that you have configured the `src-tauri/tauri.conf.json` to correctly point at the devserver. The localhost port should be printed to the console in the terminal from which you started your dev server.

Edit src-tauri/tauri.conf.json:

```json
{
  "build": {
    "devPath": "http://localhost:8080"
  }
}
```

## Start Tauri Development Window

```
local install:  yarn tauri dev
global install: tauri dev
```

The first time you run this command, it will take several minutes for the rust package manager to download and build all the required packages. Since they are cached, subsequent builds will be much faster, as only the Tauri components will need rebuilding.

## Notes:

### Cargo.toml and Source Control

In your project repository, you SHOULD commit the `src-tauri/Cargo.toml` to git because you want it to be deterministic. You SHOULD NOT commit the `src-tauri/target` folder or any of its contents.
