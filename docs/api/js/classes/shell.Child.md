[@tauri-apps/api](../README.md) / [shell](../modules/shell.md) / Child

# Class: Child

[shell](../modules/shell.md).Child

## Constructors

### constructor

• **new Child**(`pid`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pid` | `number` |

#### Defined in

[shell.ts:183](https://github.com/tauri-apps/tauri/blob/8457ccc/tooling/api/src/shell.ts#L183)

## Properties

### pid

• **pid**: `number`

The child process `pid`.

#### Defined in

[shell.ts:181](https://github.com/tauri-apps/tauri/blob/8457ccc/tooling/api/src/shell.ts#L181)

## Methods

### kill

▸ **kill**(): `Promise`<`void`\>

Kills the child process.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[shell.ts:219](https://github.com/tauri-apps/tauri/blob/8457ccc/tooling/api/src/shell.ts#L219)

___

### write

▸ **write**(`data`): `Promise`<`void`\>

Writes `data` to the `stdin`.

**`example`**
```typescript
import { Command } from '@tauri-apps/api/shell';
const command = new Command('node');
const child = await command.spawn();
await child.write('message');
await child.write([0, 1, 2, 3, 4, 5]);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `Uint8Array` | The message to write, either a string or a byte array. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[shell.ts:202](https://github.com/tauri-apps/tauri/blob/8457ccc/tooling/api/src/shell.ts#L202)
