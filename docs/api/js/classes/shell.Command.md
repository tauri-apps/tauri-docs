[@tauri-apps/api](../index.md) / [shell](../modules/shell.md) / Command

# Class: Command

[shell](../modules/shell.md).Command

The entry point for spawning child processes.
It emits the `close` and `error` events.

**`example`**
```typescript
const command = new Command('node')
command.on('close', data => {
  console.log(`command finished with code ${data.code} and signal ${data.signal}`)
})
command.on('error', error => console.error(`command error: "${error}"`))
command.stdout.on('data', line => console.log(`command stdout: "${line}"`))
command.stderr.on('data', line => console.log(`command stderr: "${line}"`))

const child = await command.spawn()
console.log('pid:', child.pid)
```

## Hierarchy

- `EventEmitter`<``"close"`` \| ``"error"``\>

  ↳ **`Command`**

## Constructors

### constructor

• **new Command**(`program`, `args?`, `options?`)

Creates a new `Command` instance.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `program` | `string` | `undefined` | The program to execute. |
| `args` | `string` \| `string`[] | `[]` | Program arguments. |
| `options?` | [`SpawnOptions`](../interfaces/shell.SpawnOptions.md) | `undefined` | Spawn options. |

#### Overrides

EventEmitter&lt;&#x27;close&#x27; \| &#x27;error&#x27;\&gt;.constructor

#### Defined in

[shell.ts:216](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/shell.ts#L216)

## Properties

### stderr

• `Readonly` **stderr**: `EventEmitter`<``"data"``\>

Event emitter for the `stderr`. Emits the `data` event.

#### Defined in

[shell.ts:207](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/shell.ts#L207)

___

### stdout

• `Readonly` **stdout**: `EventEmitter`<``"data"``\>

Event emitter for the `stdout`. Emits the `data` event.

#### Defined in

[shell.ts:205](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/shell.ts#L205)

## Methods

### execute

▸ **execute**(): `Promise`<[`ChildProcess`](../interfaces/shell.ChildProcess.md)\>

Executes the command as a child process, waiting for it to finish and collecting all of its output.

**`example`**
```typescript
const output = await new Command('echo', 'message').execute()
assert(output.code === 0)
assert(output.signal === null)
assert(output.stdout === 'message')
assert(output.stderr === '')
```

#### Returns

`Promise`<[`ChildProcess`](../interfaces/shell.ChildProcess.md)\>

A promise resolving to the child process output.

#### Defined in

[shell.ts:292](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/shell.ts#L292)

___

### on

▸ **on**(`event`, `handler`): `EventEmitter`<``"close"`` \| ``"error"``\>

Listen to an event from the child process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` \| ``"error"`` | The event name. |
| `handler` | (`arg`: `any`) => `void` | The event handler. |

#### Returns

`EventEmitter`<``"close"`` \| ``"error"``\>

The `this` instance for chained calls.

#### Inherited from

EventEmitter.on

#### Defined in

[shell.ts:124](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/shell.ts#L124)

___

### spawn

▸ **spawn**(): `Promise`<[`Child`](shell.Child.md)\>

Executes the command as a child process, returning a handle to it.

#### Returns

`Promise`<[`Child`](shell.Child.md)\>

A promise resolving to the child process handle.

#### Defined in

[shell.ts:255](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/shell.ts#L255)

___

### sidecar

▸ `Static` **sidecar**(`program`, `args?`, `options?`): [`Command`](shell.Command.md)

Creates a command to execute the given sidecar program.

**`example`**
```typescript
const command = Command.sidecar('my-sidecar')
const output = await command.execute()
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `program` | `string` | `undefined` | The program to execute. |
| `args` | `string` \| `string`[] | `[]` | Program arguments. |
| `options?` | [`SpawnOptions`](../interfaces/shell.SpawnOptions.md) | `undefined` | Spawn options. |

#### Returns

[`Command`](shell.Command.md)

#### Defined in

[shell.ts:240](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/shell.ts#L240)
