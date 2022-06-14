[@tauri-apps/api](../README.md) / [shell](../modules/shell.md) / Command

# Class: Command

[shell](../modules/shell.md).Command

The entry point for spawning child processes.
It emits the `close` and `error` events.

**`example`**
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

## Hierarchy

- [`EventEmitter`](shell.EventEmitter.md)<``"close"`` \| ``"error"``\>

  ↳ **`Command`**

## Constructors

### constructor

• **new Command**(`program`, `args?`, `options?`)

Creates a new `Command` instance.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `program` | `string` | `undefined` | The program name to execute. It must be configured on `tauri.conf.json > tauri > allowlist > shell > scope`. |
| `args` | `string` \| `string`[] | `[]` | Program arguments. |
| `options?` | [`SpawnOptions`](../interfaces/shell.SpawnOptions.md) | `undefined` | Spawn options. |

#### Overrides

[EventEmitter](shell.EventEmitter.md).[constructor](shell.EventEmitter.md#constructor)

#### Defined in

[shell.ts:268](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/shell.ts#L268)

## Properties

### stderr

• `Readonly` **stderr**: [`EventEmitter`](shell.EventEmitter.md)<``"data"``\>

Event emitter for the `stderr`. Emits the `data` event.

#### Defined in

[shell.ts:258](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/shell.ts#L258)

___

### stdout

• `Readonly` **stdout**: [`EventEmitter`](shell.EventEmitter.md)<``"data"``\>

Event emitter for the `stdout`. Emits the `data` event.

#### Defined in

[shell.ts:256](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/shell.ts#L256)

## Methods

### execute

▸ **execute**(): `Promise`<[`ChildProcess`](../interfaces/shell.ChildProcess.md)\>

Executes the command as a child process, waiting for it to finish and collecting all of its output.

**`example`**
```typescript
import { Command } from '@tauri-apps/api/shell';
const output = await new Command('echo', 'message').execute();
assert(output.code === 0);
assert(output.signal === null);
assert(output.stdout === 'message');
assert(output.stderr === '');
```

#### Returns

`Promise`<[`ChildProcess`](../interfaces/shell.ChildProcess.md)\>

A promise resolving to the child process output.

#### Defined in

[shell.ts:347](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/shell.ts#L347)

___

### on

▸ **on**(`event`, `handler`): [`EventEmitter`](shell.EventEmitter.md)<``"error"`` \| ``"close"``\>

Listen to an event from the child process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"error"`` \| ``"close"`` | The event name. |
| `handler` | (`arg`: `any`) => `void` | The event handler. |

#### Returns

[`EventEmitter`](shell.EventEmitter.md)<``"error"`` \| ``"close"``\>

The `this` instance for chained calls.

#### Inherited from

[EventEmitter](shell.EventEmitter.md).[on](shell.EventEmitter.md#on)

#### Defined in

[shell.ts:173](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/shell.ts#L173)

___

### spawn

▸ **spawn**(): `Promise`<[`Child`](shell.Child.md)\>

Executes the command as a child process, returning a handle to it.

#### Returns

`Promise`<[`Child`](shell.Child.md)\>

A promise resolving to the child process handle.

#### Defined in

[shell.ts:309](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/shell.ts#L309)

___

### sidecar

▸ `Static` **sidecar**(`program`, `args?`, `options?`): [`Command`](shell.Command.md)

Creates a command to execute the given sidecar program.

**`example`**
```typescript
import { Command } from '@tauri-apps/api/shell';
const command = Command.sidecar('my-sidecar');
const output = await command.execute();
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `program` | `string` | `undefined` | The program to execute. It must be configured on `tauri.conf.json > tauri > allowlist > shell > scope`. |
| `args` | `string` \| `string`[] | `[]` | Program arguments. |
| `options?` | [`SpawnOptions`](../interfaces/shell.SpawnOptions.md) | `undefined` | Spawn options. |

#### Returns

[`Command`](shell.Command.md)

#### Defined in

[shell.ts:294](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/shell.ts#L294)
