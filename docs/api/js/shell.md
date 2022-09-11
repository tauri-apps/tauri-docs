# shell

Access the system shell.
Allows you to spawn child processes and manage files and URLs using their default application.

This package is also accessible with `window.__TAURI__.shell` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

The APIs must be added to [`tauri.allowlist.shell`](https://tauri.app/v1/api/config/#allowlistconfig.shell) in `tauri.conf.json`:
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

### Restricting access to the [`open`](shell.md#open) API

On the allowlist, `open: true` means that the [open](shell.md#open) API can be used with any URL,
as the argument is validated with the `^https?://` regex.
You can change that regex by changing the boolean value to a string, e.g. `open: ^https://github.com/`.

### Restricting access to the [`Command`](shell.md#command) APIs

The `shell` allowlist object has a `scope` field that defines an array of CLIs that can be used.
Each CLI is a configuration object `{ name: string, cmd: string, sidecar?: bool, args?: boolean | Arg[] }`.

- `name`: the unique identifier of the command, passed to the [Command constructor](shell.md#constructor).
If it's a sidecar, this must be the value defined on `tauri.conf.json > tauri > bundle > externalBin`.
- `cmd`: the program that is executed on this configuration. If it's a sidecar, this value is ignored.
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
    "cmd": "git",
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

### Child

#### Constructors

##### constructor

> **new Child**(`pid`: `number`): [`Child`](shell.md#child)

**Parameters**

| Name | Type |
| :------ | :------ |
| `pid` | `number` |

---

#### Properties

##### pid

 **pid**: `number`

The child process `pid`.

**Defined in:** [shell.ts:181](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/shell.ts#L181)

---

#### Methods

##### kill

> **kill**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Kills the child process.

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

---

##### write

> **write**(`data`: `string` \| [`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Writes `data` to the `stdin`.

**Example**

```typescript
import { Command } from '@tauri-apps/api/shell';
const command = new Command('node');
const child = await command.spawn();
await child.write('message');
await child.write([0, 1, 2, 3, 4, 5]);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| [`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) | The message to write, either a string or a byte array. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

---

### Command

The entry point for spawning child processes.
It emits the `close` and `error` events.

**Example**

```typescript
import { Command } from '@tauri-apps/api/shell';
const command = new Command('node');
command.on('close', data => {
  console.log(`command finished with code ${data.code} and signal ${data.signal}`)
});
command.on('error', error => console.error(`command error: "${error}"`));
command.stdout.on('data', line => console.log(`command stdout: "${line}"`));
command.stderr.on('data', line => console.log(`command stderr: "${line}"`));

const child = await command.spawn();
console.log('pid:', child.pid);
```

**Hierarchy**

- [`EventEmitter`](shell.md#eventemitter)<`"close"` \| `"error"`\>
   - **Command**

#### Constructors

##### constructor

> **new Command**(`program`: `string`, `args?`: `string` \| `string`[], `options?`: [`SpawnOptions`](shell.md#spawnoptions)): [`Command`](shell.md#command)

Creates a new `Command` instance.

**Parameters**

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `program` | `string` | `undefined` | The program name to execute. It must be configured on `tauri.conf.json > tauri > allowlist > shell > scope`. |
| `args` | `string` \| `string`[] | `[]` | Program arguments. |
| `options?` | [`SpawnOptions`](shell.md#spawnoptions) | `undefined` | Spawn options. |

**Overrides** [EventEmitter](shell.md#eventemitter).[constructor](shell.md#constructor)

---

#### Properties

##### stderr

`Readonly` **stderr**: [`EventEmitter`](shell.md#eventemitter)<`"data"`\>

Event emitter for the `stderr`. Emits the `data` event.

**Defined in:** [shell.ts:258](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/shell.ts#L258)

---

##### stdout

`Readonly` **stdout**: [`EventEmitter`](shell.md#eventemitter)<`"data"`\>

Event emitter for the `stdout`. Emits the `data` event.

**Defined in:** [shell.ts:256](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/shell.ts#L256)

---

#### Methods

##### execute

> **execute**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChildProcess`](shell.md#childprocess)\>

Executes the command as a child process, waiting for it to finish and collecting all of its output.

**Example**

```typescript
import { Command } from '@tauri-apps/api/shell';
const output = await new Command('echo', 'message').execute();
assert(output.code === 0);
assert(output.signal === null);
assert(output.stdout === 'message');
assert(output.stderr === '');
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChildProcess`](shell.md#childprocess)\>

A promise resolving to the child process output.

---

##### on

> **on**(`event`: `"error"` \| `"close"`, `handler`: `fn`): [`EventEmitter`](shell.md#eventemitter)<`"error"` \| `"close"`\>

Listen to an event from the child process.

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `"error"` \| `"close"` | The event name. |
| `handler` | (`arg`: `any`) => `void` | The event handler. |

**Returns: **[`EventEmitter`](shell.md#eventemitter)<`"error"` \| `"close"`\>

The `this` instance for chained calls.

---

##### spawn

> **spawn**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Child`](shell.md#child)\>

Executes the command as a child process, returning a handle to it.

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Child`](shell.md#child)\>

A promise resolving to the child process handle.

---

##### sidecar

> `Static` **sidecar**(`program`: `string`, `args?`: `string` \| `string`[], `options?`: [`SpawnOptions`](shell.md#spawnoptions)): [`Command`](shell.md#command)

Creates a command to execute the given sidecar program.

**Example**

```typescript
import { Command } from '@tauri-apps/api/shell';
const command = Command.sidecar('my-sidecar');
const output = await command.execute();
```

**Parameters**

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `program` | `string` | `undefined` | The program to execute. It must be configured on `tauri.conf.json > tauri > allowlist > shell > scope`. |
| `args` | `string` \| `string`[] | `[]` | Program arguments. |
| `options?` | [`SpawnOptions`](shell.md#spawnoptions) | `undefined` | Spawn options. |

**Returns: **[`Command`](shell.md#command)

---

### EventEmitter<E\>

**Type parameters**

- `E` *extends* `string`

**Hierarchy**

- **EventEmitter**
   - [`Command`](shell.md#command)

#### Constructors

##### constructor

> **new EventEmitter**<`E`\>(): [`EventEmitter`](shell.md#eventemitter)<`E`\>

**Type parameters**

- `E` *extends* `string`

---

#### Methods

##### on

> **on**(`event`: `E`, `handler`: `fn`): [`EventEmitter`](shell.md#eventemitter)<`E`\>

Listen to an event from the child process.

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `E` | The event name. |
| `handler` | (`arg`: `any`) => `void` | The event handler. |

**Returns: **[`EventEmitter`](shell.md#eventemitter)<`E`\>

The `this` instance for chained calls.

---

## Interfaces

### ChildProcess

#### Properties

##### code

 **code**: `null` \| `number`

Exit code of the process. `null` if the process was terminated by a signal on Unix.

**Defined in:** [shell.ts:95](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/shell.ts#L95)

---

##### signal

 **signal**: `null` \| `number`

If the process was terminated by a signal, represents that signal.

**Defined in:** [shell.ts:97](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/shell.ts#L97)

---

##### stderr

 **stderr**: `string`

The data that the process wrote to `stderr`.

**Defined in:** [shell.ts:101](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/shell.ts#L101)

---

##### stdout

 **stdout**: `string`

The data that the process wrote to `stdout`.

**Defined in:** [shell.ts:99](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/shell.ts#L99)

---

### SpawnOptions

#### Properties

##### cwd

`Optional` **cwd**: `string`

Current working directory.

**Defined in:** [shell.ts:83](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/shell.ts#L83)

---

##### env

`Optional` **env**: { `[name: string]`: `string`;  }

Environment variables. set to `null` to clear the process env.

**Defined in:** [shell.ts:85](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/shell.ts#L85)

---

## Functions

### open

> **open**(`path`: `string`, `openWith?`: `string`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Opens a path or URL with the system's default app,
or the one specified with `openWith`.

The `openWith` value must be one of `firefox`, `google chrome`, `chromium` `safari`,
`open`, `start`, `xdg-open`, `gio`, `gnome-open`, `kde-open` or `wslview`.

**Example**

```typescript
import { open } from '@tauri-apps/api/shell';
// opens the given URL on the default browser:
await open('https://github.com/tauri-apps/tauri');
// opens the given URL using `firefox`:
await open('https://github.com/tauri-apps/tauri', 'firefox');
// opens a file using the default program:
await open('/path/to/file');
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path or URL to open. This value is matched against the string regex defined on `tauri.conf.json > tauri > allowlist > shell > open`, which defaults to `^https?://`. |
| `openWith?` | `string` | The app to open the file or URL with. Defaults to the system default application for the specified path type. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>
