---
id: development
title: "App development"
sidebar_label: App development
---


## Start your devserver
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
Every framework has its own development tooling. It is outside of the scope of this document to treat them all or keep them up to date - and tauri will not presume to do a better job then your framework.
</div>

## Inform tauri about localhost port
Once your devserver is up and running, be sure that you have configured the `src-tauri/tauri.conf.json` to correctly point at the devserver. Normally, you will be informed about its port in the terminal where you spawned the devserver in the previous step.

Edit src-tauri/tauri.conf.json:
```json
{
  "build": {
    "devPath": "http://localhost:8080"
  }
}
```

## Start tauri development window
```
local:  yarn tauri dev
global: tauri dev
```

The first time you run this command, it will take several minutes for the rust package manager to pull all the required packages for building the windowing service. This only happens on the first time, subsequent builds of the development window will be 10x faster, as only the tauri components will need rebuilding.

## Notes:

### Cargo.toml
In your project repository, you SHOULD commit the `src-tauri/Cargo.toml` to git because you want it to be deterministic. You SHOULD NOT commit the `src-tauri/target` folder or any of its contents.
