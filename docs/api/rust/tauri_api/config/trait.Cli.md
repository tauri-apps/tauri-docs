---
title: "trait.Cli"
---

# Trait [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[config](/docs/api/rust/tauri_api/index.html)::​[Cli](/docs/api/rust/tauri_api/)

    pub trait Cli {
        fn args(&self) -> Option<&Vec<CliArg>>;

        fn subcommands(&self) -> Option<&HashMap<String, CliSubcommand>>;

        fn description(&self) -> Option<&String>;

        fn long_description(&self) -> Option<&String>;

        fn before_help(&self) -> Option<&String>;

        fn after_help(&self) -> Option<&String>;
    }

## Required methods

### `fn args(&self) -> Option<&Vec<CliArg>>`

### `fn subcommands(&self) -> Option<&HashMap<String, CliSubcommand>>`

### `fn description(&self) -> Option<&String>`

### `fn long_description(&self) -> Option<&String>`

### `fn before_help(&self) -> Option<&String>`

### `fn after_help(&self) -> Option<&String>`

Loading content...

## Implementors

### `impl Cli for CliConfig`

#### `fn args(&self) -> Option<&Vec<CliArg>>`

#### `fn subcommands(&self) -> Option<&HashMap<String, CliSubcommand>>`

#### `fn description(&self) -> Option<&String>`

#### `fn long_description(&self) -> Option<&String>`

#### `fn before_help(&self) -> Option<&String>`

#### `fn after_help(&self) -> Option<&String>`

### `impl Cli for CliSubcommand`

#### `fn args(&self) -> Option<&Vec<CliArg>>`

#### `fn subcommands(&self) -> Option<&HashMap<String, CliSubcommand>>`

#### `fn description(&self) -> Option<&String>`

#### `fn long_description(&self) -> Option<&String>`

#### `fn before_help(&self) -> Option<&String>`

#### `fn after_help(&self) -> Option<&String>`

Loading content...
      