---
title: "trait.Runtime"
---

# Trait [tauri](/docs/api/rust/tauri/../index.html)::​[runtime](/docs/api/rust/tauri/index.html)::​[Runtime](/docs/api/rust/tauri/)

    pub trait Runtime: Sized + 'static {
        type Dispatcher: Dispatch<Runtime = Self>;
        fn new() -> Result<Self>;

        fn create_window<P: Params<Runtime = Self>>(
            &mut self, 
            pending: PendingWindow<P>
        ) -> Result<DetachedWindow<P>>;

        fn run(self);
    }

The webview runtime interface.

## Associated Types

### `type Dispatcher: Dispatch<Runtime = Self>`

The message dispatcher.

Loading content...

## Required methods

### `fn new() -> Result<Self>`

Creates a new webview runtime.

### `fn create_window<P: Params<Runtime = Self>>( &mut self, pending: PendingWindow<P> ) -> Result<DetachedWindow<P>>`

Create a new webview window.

### `fn run(self)`

Run the webview runtime.

Loading content...

## Implementors

### `impl Runtime for Wry`

#### `type Dispatcher = WryDispatcher`

#### `fn new() -> Result<Self>`

#### `fn create_window<M: Params<Runtime = Self>>( &mut self, pending: PendingWindow<M> ) -> Result<DetachedWindow<M>>`

#### `fn run(self)`

Loading content...
