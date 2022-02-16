---
id: brownfield
sidebar_label: Brownfield
---

# Brownfield Pattern

_**This is the default pattern.**_

This is the simplest and most straightforward pattern to use Tauri with due to it trying to be the most compatible with
existing frontend projects as much as it can. In short, it tries to require nothing additional to what an existing web
frontend might use inside a browser. Not _**everything**_ that works in existing browser applications will work out-of
the box, see the [Incompatibility section](#incompatibilities) for more details.

If you are unfamiliar with Brownfield software development in general, the [Brownfield Wikipedia article](https://en.wikipedia.org/wiki/Brownfield_(software_development))
provides a nice summary of it. For Tauri, the existing software is current browser support and behavior instead of
legacy systems.

## Incompatibilities

The first incompatibility category is easy, any browser-specific APIs will not work properly inside Tauri (even while
using the Brownfield pattern). If the API is not widely supported across browsers, it's likely not going to be supported
across all platforms while using Tauri.

The second incompatibility category is features that are planned for Tauri but are currently not fully implemented. Here
is a list of examples:
* [WebRTC support on Linux](https://github.com/tauri-apps/wry/issues/85)
* [Some permissions APIs](https://github.com/tauri-apps/wry/issues/81)
* [Download Links/Blob as URL](https://github.com/tauri-apps/wry/issues/349)
* [Better i18n](https://github.com/tauri-apps/wry/issues/442)

## Configuration

Because the Brownfield pattern is the default pattern, no configuration option is required to be set. To explicitly set
it, you can use the `tauri > pattern` object in the `tauri.conf.json` configuration file.

```json
{
  "tauri": {
    "pattern": {
      "use": "brownfield"
    }
  }
}
```

_**There are no additional configuration options for the brownfield pattern.**_