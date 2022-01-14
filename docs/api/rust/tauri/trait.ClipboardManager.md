---
title: Trait tauri::ClipboardManager
sidebar_label: trait.ClipboardManager
custom_edit_url: null
---

  # Trait tauri::ClipboardManager,

```rs
pub trait ClipboardManager: Debug {
    fn write_text<T>(&mut self, text: T) -> Result<(), Error>
    where
        T: Into<String>;

    fn read_text(&self) -> Result<Option<String>, Error>;
}
```

Expand description

Clipboard manager.

## Required methods

#### fn [write_text](/docs/api/rust/tauri/about:blank#tymethod.write_text)&lt;T>(&mut self, text: T) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), Error> where T: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>,

Writes the text into the clipboard as plain text.

## Panics

-   Panics if the event loop is not running yet, usually when called on the `tauri::Builder#setup` closure.
-   Panics when called on the main thread, usually on the `tauri::App#run`closure.

You can spawn a task to use the API using `tauri::async_runtime::spawn` or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### fn [read_text](/docs/api/rust/tauri/about:blank#tymethod.read_text)(&self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>, Error>

Read the content in the clipboard as plain text.

## Panics

-   Panics if the event loop is not running yet, usually when called on the `tauri::Builder#setup` closure.
-   Panics when called on the main thread, usually on the `tauri::App#run`closure.

You can spawn a task to use the API using `tauri::async_runtime::spawn` or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

## Implementations on Foreign Types

### impl [ClipboardManager](/docs/api/rust/tauri/trait.ClipboardManager "trait tauri::ClipboardManager") for ClipboardManagerWrapper

#### pub fn [read_text](/docs/api/rust/tauri/about:blank#tymethod.read_text)(&self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>, Error>

#### pub fn [write_text](/docs/api/rust/tauri/about:blank#tymethod.write_text)&lt;T>(&mut self, text: T) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), Error> where T: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>,

## Implementors
  