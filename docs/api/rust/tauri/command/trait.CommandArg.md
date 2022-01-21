---
title: Trait tauri::command::CommandArg
sidebar_label: trait.CommandArg
custom_edit_url: null
---

  # Trait tauri::command::CommandArg,

```rs
pub trait CommandArg<'de, R: Runtime>: Sized {
    fn from_command(command: CommandItem<'de, R>) -> Result<Self, InvokeError>;
}
```

Expand description

Trait implemented by command arguments to derive a value from a [`CommandItem`](/docs/api/rust/tauri/struct.CommandItem "CommandItem").

## Command Arguments

A command argument is any type that represents an item parsable from a [`CommandItem`](/docs/api/rust/tauri/struct.CommandItem "CommandItem"). Most implementations will use the data stored in [`InvokeMessage`](/docs/api/rust/tauri/../struct.InvokeMessage "InvokeMessage") since [`CommandItem`](/docs/api/rust/tauri/struct.CommandItem "CommandItem") is mostly a wrapper around it.

## Provided Implementations

Tauri implements [`CommandArg`](/docs/api/rust/tauri/trait.CommandArg "CommandArg") automatically for a number of types.

-   [`crate::Window`](/docs/api/rust/tauri/../window/struct.Window "crate::Window")

-   [`crate::State`](/docs/api/rust/tauri/../struct.State "crate::State")

-   `T where T: serde::Deserialize`

    -   Any type that implements `Deserialize` can automatically be used as a [`CommandArg`](/docs/api/rust/tauri/trait.CommandArg "CommandArg").

## Required methods

#### fn [from_command](/docs/api/rust/tauri/about:blank#tymethod.from_command)(command: [CommandItem](/docs/api/rust/tauri/struct.CommandItem "struct tauri::command::CommandItem")&lt;'de, R>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;Self, [InvokeError](/docs/api/rust/tauri/../struct.InvokeError "struct tauri::InvokeError")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#47 "goto source code")

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/struct.CommandItem "CommandItem").

If the derivation fails, the corresponding message will be rejected using [`InvokeMessage`](/docs/api/rust/tauri/../struct.InvokeMessage#reject "InvokeMessage").

## Implementors

### impl&lt;'de, D: [Deserialize](https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de>, R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [CommandArg](/docs/api/rust/tauri/trait.CommandArg "trait tauri::command::CommandArg")&lt;'de, R> for D[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#51-56 "goto source code")

Automatically implement [`CommandArg`](/docs/api/rust/tauri/trait.CommandArg "CommandArg") for any type that can be deserialized.

#### fn [from_command](/docs/api/rust/tauri/about:blank#tymethod.from_command)(command: [CommandItem](/docs/api/rust/tauri/struct.CommandItem "struct tauri::command::CommandItem")&lt;'de, R>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;Self, [InvokeError](/docs/api/rust/tauri/../struct.InvokeError "struct tauri::InvokeError")>

[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#52-55 "goto source code")

### impl&lt;'de, R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [CommandArg](/docs/api/rust/tauri/trait.CommandArg "trait tauri::command::CommandArg")&lt;'de, R> for [AppHandle](/docs/api/rust/tauri/../struct.AppHandle "struct tauri::AppHandle")&lt;R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/app.rs#220-225 "goto source code")

#### fn [from_command](/docs/api/rust/tauri/about:blank#tymethod.from_command)(command: [CommandItem](/docs/api/rust/tauri/struct.CommandItem "struct tauri::command::CommandItem")&lt;'de, R>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;Self, [InvokeError](/docs/api/rust/tauri/../struct.InvokeError "struct tauri::InvokeError")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/app.rs#222-224 "goto source code")

Grabs the [`Window`](/docs/api/rust/tauri/../window/struct.Window "Window") from the [`CommandItem`](/docs/api/rust/tauri/struct.CommandItem "CommandItem") and returns the associated [`AppHandle`](/docs/api/rust/tauri/../struct.AppHandle "AppHandle"). This will never fail.

### impl&lt;'de, R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [CommandArg](/docs/api/rust/tauri/trait.CommandArg "trait tauri::command::CommandArg")&lt;'de, R> for [Window](/docs/api/rust/tauri/../window/struct.Window "struct tauri::window::Window")&lt;R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#136-141 "goto source code")

#### fn [from_command](/docs/api/rust/tauri/about:blank#tymethod.from_command)(command: [CommandItem](/docs/api/rust/tauri/struct.CommandItem "struct tauri::command::CommandItem")&lt;'de, R>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;Self, [InvokeError](/docs/api/rust/tauri/../struct.InvokeError "struct tauri::InvokeError")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#138-140 "goto source code")

Grabs the [`Window`](/docs/api/rust/tauri/../window/struct.Window "Window") from the [`CommandItem`](/docs/api/rust/tauri/struct.CommandItem "CommandItem"). This will never fail.

### impl&lt;'r, 'de: 'r, T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static, R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [CommandArg](/docs/api/rust/tauri/trait.CommandArg "trait tauri::command::CommandArg")&lt;'de, R> for [State](/docs/api/rust/tauri/../struct.State "struct tauri::State")&lt;'r, T>[\[src\]](/docs/api/rust/tauri/../../src/tauri/state.rs#40-45 "goto source code")

#### fn [from_command](/docs/api/rust/tauri/about:blank#tymethod.from_command)(command: [CommandItem](/docs/api/rust/tauri/struct.CommandItem "struct tauri::command::CommandItem")&lt;'de, R>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;Self, [InvokeError](/docs/api/rust/tauri/../struct.InvokeError "struct tauri::InvokeError")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/state.rs#42-44 "goto source code")

Grabs the [`State`](/docs/api/rust/tauri/../struct.State "State") from the [`CommandItem`](/docs/api/rust/tauri/struct.CommandItem "CommandItem"). This will never fail.
  