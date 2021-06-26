---
title: Trait tauri::command::CommandArg
sidebar_label: trait.CommandArg
custom_edit_url: null
---

# Trait tauri::command::CommandArg,\[−]\[src],\[−],−

```rs
pub trait CommandArg<'de, P: Params>: Sized {
    fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>;
}
```

Trait implemented by command arguments to derive a value from a [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem").

# [Command Arguments](/docs/api/rust/tauri/about:blank#command-arguments)

A command argument is any type that represents an item parsable from a [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem"). Most implementations will use the data stored in [`InvokeMessage`](/docs/api/rust/tauri/../../tauri/struct.InvokeMessage "InvokeMessage") since [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem") is mostly a wrapper around it.

# [Provided Implementations](/docs/api/rust/tauri/about:blank#provided-implementations)

Tauri implements [`CommandArg`](/docs/api/rust/tauri/../../tauri/command/trait.CommandArg "CommandArg") automatically for a number of types.

-   [`crate::Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window "crate::Window")

-   [`crate::State`](/docs/api/rust/tauri/../../tauri/struct.State "crate::State")

-   `T where T: serde::Deserialize`

    -   Any type that implements `Deserialize` can automatically be used as a [`CommandArg`](/docs/api/rust/tauri/../../tauri/command/trait.CommandArg "CommandArg").

## Required methods

### `fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#43 "goto source code")

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem").

If the derivation fails, the corresponding message will be rejected using [`InvokeMessage`](/docs/api/rust/tauri/../../tauri/struct.InvokeMessage#reject "InvokeMessage").

## Implementors

### `impl<'de, D: Deserialize<'de>, P: Params> CommandArg<'de, P> for D`[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#47-52 "goto source code")

Automatically implement [`CommandArg`](/docs/api/rust/tauri/../../tauri/command/trait.CommandArg "CommandArg") for any type that can be deserialized.

#### `fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#48-51 "goto source code")

### `impl<'de, P: Params> CommandArg<'de, P> for AppHandle<P>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/app.rs#137-142 "goto source code")

#### `fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/app.rs#139-141 "goto source code")

Grabs the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window "Window") from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem") and returns the associated [`AppHandle`](/docs/api/rust/tauri/../../tauri/struct.AppHandle "AppHandle"). This will never fail.

### `impl<'de, P: Params> CommandArg<'de, P> for Window<P>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#136-141 "goto source code")

#### `fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#138-140 "goto source code")

Grabs the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window "Window") from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem"). This will never fail.

### `impl<'r, 'de: 'r, T: Send + Sync + 'static, P: Params> CommandArg<'de, P> for State<'r, T>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/state.rs#37-42 "goto source code")

#### `fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/state.rs#39-41 "goto source code")

Grabs the [`State`](/docs/api/rust/tauri/../../tauri/struct.State "State") from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem"). This will never fail.
