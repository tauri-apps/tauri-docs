---
title: "trait.Params"
---

# Trait [tauri](/docs/api/rust/tauri/index.html)::​[Params](/docs/api/rust/tauri/)

    pub trait Params: ParamsBase {
        type Event: Tag;
        type Label: Tag;
        type Assets: Assets;
        type Runtime: Runtime;
    }

Types associated with the running Tauri application.

## Associated Types

### `type Event: Tag`

The event type used to create and listen to events.

### `type Label: Tag`

The type used to determine the name of windows.

### `type Assets: Assets`

Assets that Tauri should serve from itself.

### `type Runtime: Runtime`

The underlying webview runtime used by the Tauri application.

Loading content...

## Implementors

Loading content...
