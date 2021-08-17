---
title: Trait tauri::Runtime
sidebar_label: trait.Runtime
custom_edit_url: null
---

  # Trait tauri::Runtime,

```rs
pub trait Runtime: 'static {
    type Dispatcher: Dispatch;
    type Handle: RuntimeHandle;
    type GlobalShortcutManager: GlobalShortcutManager + Clone + Send;
    type ClipboardManager: ClipboardManager + Clone + Send;
    fn new() -> Result<Self, Error>;

    fn handle(&self) -> Self::Handle;

    fn global_shortcut_manager(&self) -> Self::GlobalShortcutManager;

    fn clipboard_manager(&self) -> Self::ClipboardManager;

    fn create_window(
        &self, 
        pending: PendingWindow<Self>
    ) -> Result<DetachedWindow<Self>, Error>;

    fn run<F>(self, callback: F)
    where
        F: 'static + Fn(RunEvent);
}
```

Expand description

The webview runtime interface.

## Associated Types

#### type [Dispatcher](/docs/api/rust/tauri/about:blank#associatedtype.Dispatcher): Dispatch

The message dispatcher.

#### type [Handle](/docs/api/rust/tauri/about:blank#associatedtype.Handle): RuntimeHandle

The runtime handle type.

#### type [GlobalShortcutManager](/docs/api/rust/tauri/about:blank#associatedtype.GlobalShortcutManager): [GlobalShortcutManager](/docs/api/rust/tauri/trait.GlobalShortcutManager "trait tauri::GlobalShortcutManager") + [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send")

The global shortcut manager type.

#### type [ClipboardManager](/docs/api/rust/tauri/about:blank#associatedtype.ClipboardManager): [ClipboardManager](/docs/api/rust/tauri/trait.ClipboardManager "trait tauri::ClipboardManager") + [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send")

The clipboard manager type.

## Required methods

#### fn [new](/docs/api/rust/tauri/about:blank#tymethod.new)() -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;Self, Error>

Creates a new webview runtime.

#### fn [handle](/docs/api/rust/tauri/about:blank#tymethod.handle)(&self) -> Self::[Handle](/docs/api/rust/tauri/trait.Runtime#associatedtype.Handle "type tauri::Runtime::Handle")

Gets a runtime handle.

#### fn [global_shortcut_manager](/docs/api/rust/tauri/about:blank#tymethod.global_shortcut_manager)(&self) -> Self::[GlobalShortcutManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager")

Gets the global shortcut manager.

#### fn [clipboard_manager](/docs/api/rust/tauri/about:blank#tymethod.clipboard_manager)(&self) -> Self::[ClipboardManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager")

Gets the clipboard manager.

#### fn [create_window](/docs/api/rust/tauri/about:blank#tymethod.create_window)( &self, pending: PendingWindow&lt;Self> ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;DetachedWindow&lt;Self>, Error>

Create a new webview window.

#### fn [run](/docs/api/rust/tauri/about:blank#tymethod.run)&lt;F>(self, callback: F) where F: 'static + [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(RunEvent),

Run the webview runtime.

## Implementors

### impl [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime") for [Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry")

#### type [Dispatcher](/docs/api/rust/tauri/about:blank#associatedtype.Dispatcher) = WryDispatcher

#### type [Handle](/docs/api/rust/tauri/about:blank#associatedtype.Handle) = WryHandle

#### type [GlobalShortcutManager](/docs/api/rust/tauri/about:blank#associatedtype.GlobalShortcutManager) = GlobalShortcutManagerHandle

#### type [ClipboardManager](/docs/api/rust/tauri/about:blank#associatedtype.ClipboardManager) = ClipboardManagerWrapper

#### pub fn [new](/docs/api/rust/tauri/about:blank#tymethod.new)() -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry"), Error>

#### pub fn [handle](/docs/api/rust/tauri/about:blank#tymethod.handle)(&self) -> &lt;[Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry") as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[Handle](/docs/api/rust/tauri/trait.Runtime#associatedtype.Handle "type tauri::Runtime::Handle")

#### pub fn [global_shortcut_manager](/docs/api/rust/tauri/about:blank#tymethod.global_shortcut_manager)(&self) -> &lt;[Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry") as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[GlobalShortcutManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager")

#### pub fn [clipboard_manager](/docs/api/rust/tauri/about:blank#tymethod.clipboard_manager)(&self) -> &lt;[Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry") as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[ClipboardManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager")

#### pub fn [create_window](/docs/api/rust/tauri/about:blank#tymethod.create_window)( &self, pending: PendingWindow&lt;[Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry")> ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;DetachedWindow&lt;[Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry")>, Error>

#### pub fn [run](/docs/api/rust/tauri/about:blank#tymethod.run)&lt;F>(self, callback: F) where F: 'static + [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(RunEvent),
  