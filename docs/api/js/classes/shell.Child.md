[@tauri-apps/api](../index.md) / [shell](../modules/shell.md) / Child

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

[shell.ts:183](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/shell.ts#L183)

## Properties

### pid

• **pid**: `number`

The child process `pid`.

#### Defined in

[shell.ts:181](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/shell.ts#L181)

## Methods

### kill

▸ **kill**(): `Promise`<`void`\>

Kills the child process.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[shell.ts:218](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/shell.ts#L218)

___

### write

▸ **write**(`data`): `Promise`<`void`\>

Writes `data` to the `stdin`.

**`example`**
```typescript
const command = new Command('node')
const child = await command.spawn()
await child.write('message')
await child.write([0, 1, 2, 3, 4, 5])
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `Uint8Array` | The message to write, either a string or a byte array. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[shell.ts:201](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/shell.ts#L201)
