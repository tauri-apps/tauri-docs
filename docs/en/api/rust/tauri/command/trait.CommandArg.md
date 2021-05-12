---
title: "trait.CommandArg"
---

# Trait [tauri](/docs/api/rust/tauri/../index.html)::​[command](/docs/api/rust/tauri/index.html)::​[CommandArg](/docs/api/rust/tauri/)

```rs
pub trait CommandArg<'de, P: Params>: Sized {
    fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>;
}
```

Trait implemented by command arguments to derive a value from a [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem.html "CommandItem").

# [Command Arguments](/docs/api/rust/tauri/about:blank#command-arguments)

A command argument is any type that represents an item parsable from a [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem.html "CommandItem"). Most implementations will use the data stored in [`InvokeMessage`](/docs/api/rust/tauri/../../tauri/struct.InvokeMessage.html "InvokeMessage") since [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem.html "CommandItem") is mostly a wrapper around it.

# [Provided Implementations](/docs/api/rust/tauri/about:blank#provided-implementations)

Tauri implements [`CommandArg`](/docs/api/rust/tauri/../../tauri/command/trait.CommandArg.html "CommandArg") automatically for a number of types.

-   [`crate::Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window.html "crate::Window")

-   [`crate::State`](/docs/api/rust/tauri/../../tauri/struct.State.html "crate::State")

-   `T where T: serde::Deserialize`

    -   Any type that implements `Deserialize` can automatically be used as a [`CommandArg`](/docs/api/rust/tauri/../../tauri/command/trait.CommandArg.html "CommandArg").

## Required methods

### `fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>`

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem.html "CommandItem").

If the derivation fails, the corresponding message will be rejected using [`InvokeMessage`](/docs/api/rust/tauri/../../tauri/struct.InvokeMessage.html#reject "InvokeMessage").

Loading content...

## Implementors

### `impl<'de, D: Deserialize<'de>, P: Params> CommandArg<'de, P> for D`

Automatically implement [`CommandArg`](/docs/api/rust/tauri/../../tauri/command/trait.CommandArg.html "CommandArg") for any type that can be deserialized.

#### `fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>`

### `impl<'de, P: Params> CommandArg<'de, P> for Window<P>`

#### `fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>`

Grabs the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window.html "Window") from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem.html "CommandItem"). This will never fail.

### `impl<'r, 'de: 'r, T: Send + Sync + 'static, P: Params> CommandArg<'de, P> for State<'r, T>`

#### `fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>`

Grabs the [`State`](/docs/api/rust/tauri/../../tauri/struct.State.html "State") from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem.html "CommandItem"). This will never fail.

Loading content...
