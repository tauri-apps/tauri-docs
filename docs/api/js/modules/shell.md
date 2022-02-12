[@tauri-apps/api](../index.md) / shell

# Namespace: shell

Access the system shell.
Allows you to spawn child processes and manage files and URLs using their default application.

This package is also accessible with `window.__TAURI__.shell` when `tauri.conf.json > build > withGlobalTauri` is set to true.

The APIs must be allowlisted on `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "shell": {
        "all": true, // enable all shell APIs
        "execute": true, // enable process spawn APIs
        "sidecar": true, // enable spawning sidecars
        "open": true // enable opening files/URLs using the default program
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Security

This API has a scope configuration that forces you to restrict the programs and arguments that can be used.

### Restricting access to the [[`open`]] API

On the allowlist, `open: true` means that the [open](shell.md#open) API can be used with any URL,
as the argument is validated with the `^https?://` regex.
You can change that regex by changing the boolean value to a string, e.g. `open: ^https://github.com/`.

### Restricting access to the [[`Command`]] APIs

The `shell` allowlist object has a `scope` field that defines an array of CLIs that can be used.
Each CLI is a configuration object `{ name: string, command: string, sidecar?: bool, args?: boolean | Arg[] }`.

- `name`: the unique identifier of the command, passed to the [Command constructor](../classes/shell.Command.md#constructor).
If it's a sidecar, this must be the value defined on `tauri.conf.json > tauri > bundle > externalBin`.
- `command`: the program that is executed on this configuration. If it's a sidecar, it must be the same as `name`.
- `sidecar`: whether the object configures a sidecar or a system program.
- `args`: the arguments that can be passed to the program. By default no arguments are allowed.
  - `true` means that any argument list is allowed.
  - `false` means that no arguments are allowed.
  - otherwise an array can be configured. Each item is either a string representing the fixed argument value
    or a `{ validator: string }` that defines a regex validating the argument value.

#### Example scope configuration

CLI: `git commit -m "the commit message"`

Configuration:
```json
{
  "scope": {
    "name": "run-git-commit",
    "command": "git",
    "args": ["commit", "-m", { "validator": "\\S+" }]
  }
}
```
Usage:
```typescript
import { Command } from '@tauri-apps/api/shell'
new Command('run-git-commit', ['commit', '-m', 'the commit message'])
```

Trying to execute any API with a program not configured on the scope results in a promise rejection due to denied access.

## Classes

- [Child](../classes/shell.Child.md)
- [Command](../classes/shell.Command.md)
- [EventEmitter](../classes/shell.EventEmitter.md)

## Interfaces

- [ChildProcess](../interfaces/shell.ChildProcess.md)
- [SpawnOptions](../interfaces/shell.SpawnOptions.md)

## Functions

### open

▸ **open**(`path`, `openWith?`): `Promise`<`void`\>

Opens a path or URL with the system's default app,
or the one specified with `openWith`.

The `openWith` value must be one of `firefox`, `google chrome`, `chromium` `safari`,
`open`, `start`, `xdg-open`, `gio`, gnome-open`, `kde-open` or `wslview`.

**`example`**
```typescript
// opens the given URL on the default browser:
await open('https://github.com/tauri-apps/tauri')
// opens the given URL using `firefox`:
await open('https://github.com/tauri-apps/tauri', 'firefox')
// opens a file using the default program:
await open('/path/to/file')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path or URL to open. This value is matched against the string regex defined on `tauri.conf.json > tauri > allowlist > shell > open`, which defaults to `^https?://`. |
| `openWith?` | `string` | The app to open the file or URL with. Defaults to the system default application for the specified path type. |

#### Returns

`Promise`<`void`\>

#### Defined in

[shell.ts:416](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/shell.ts#L416)
