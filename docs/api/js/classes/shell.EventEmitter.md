[@tauri-apps/api](../README.md) / [shell](../modules/shell.md) / EventEmitter

# Class: EventEmitter<E\>

[shell](../modules/shell.md).EventEmitter

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `string` |

## Hierarchy

- **`EventEmitter`**

  ↳ [`Command`](shell.Command.md)

## Constructors

### constructor

• **new EventEmitter**<`E`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `string` |

## Methods

### on

▸ **on**(`event`, `handler`): [`EventEmitter`](shell.EventEmitter.md)<`E`\>

Listen to an event from the child process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `E` | The event name. |
| `handler` | (`arg`: `any`) => `void` | The event handler. |

#### Returns

[`EventEmitter`](shell.EventEmitter.md)<`E`\>

The `this` instance for chained calls.

#### Defined in

[shell.ts:173](https://github.com/tauri-apps/tauri/blob/bf05c3a/tooling/api/src/shell.ts#L173)
