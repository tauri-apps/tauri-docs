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

### `from_command`

```rs
fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>
```

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem").

If the derivation fails, the corresponding message will be rejected using [`InvokeMessage`](/docs/api/rust/tauri/../../tauri/struct.InvokeMessage#reject "InvokeMessage").

_Defined in: [command.rs:43](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/command.rs#L43)_

## Implementors

### `Deserialize`

```rs
impl<'de, D: Deserialize<'de>, P: Params> CommandArg<'de, P> for D
```

Automatically implement [`CommandArg`](/docs/api/rust/tauri/../../tauri/command/trait.CommandArg "CommandArg") for any type that can be deserialized.

_Defined in: [command.rs:47-52](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/command.rs#L47-52)_

#### `from_command`

```rs
fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>
```

_Defined in: [command.rs:48-51](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/command.rs#L48-51)_

### `Params`

```rs
impl<'de, P: Params> CommandArg<'de, P> for AppHandle<P>
```

_Defined in: [app.rs:137-142](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L137-142)_

#### `from_command`

```rs
fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>
```

Grabs the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window "Window") from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem") and returns the associated [`AppHandle`](/docs/api/rust/tauri/../../tauri/struct.AppHandle "AppHandle"). This will never fail.

_Defined in: [app.rs:139-141](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L139-141)_

### `Params`

```rs
impl<'de, P: Params> CommandArg<'de, P> for Window<P>
```

_Defined in: [window.rs:140-145](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L140-145)_

#### `from_command`

```rs
fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>
```

Grabs the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window "Window") from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem"). This will never fail.

_Defined in: [window.rs:142-144](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L142-144)_

### `Send`

```rs
impl<'r, 'de: 'r, T: Send + Sync + 'static, P: Params> CommandArg<'de, P> for State<'r, T>
```

_Defined in: [state.rs:37-42](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/state.rs#L37-42)_

#### `from_command`

```rs
fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>
```

Grabs the [`State`](/docs/api/rust/tauri/../../tauri/struct.State "State") from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem"). This will never fail.

_Defined in: [state.rs:39-41](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/state.rs#L39-41)_
