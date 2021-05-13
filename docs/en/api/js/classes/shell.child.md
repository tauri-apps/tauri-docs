---
title: "Class: Child"
sidebar_label: "Child"
custom_edit_url: null
hide_title: true
---

# Class: Child

[shell](../modules/shell.md).Child

## Constructors

### constructor

\+ **new Child**(`pid`: *number*): [*Child*](shell.child.md)

#### Parameters:

Name | Type |
:------ | :------ |
`pid` | *number* |

**Returns:** [*Child*](shell.child.md)

Defined in: [shell.ts:115](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L115)

## Properties

### pid

• **pid**: *number*

The child process `pid`.

Defined in: [shell.ts:115](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L115)

## Methods

### kill

▸ **kill**(): *Promise*<void\>

Kills the child process.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [shell.ts:151](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L151)

___

### write

▸ **write**(`data`: *string* \| *number*[]): *Promise*<void\>

Writes `data` to the `stdin`.

**`example`** 
```typescript
const command = new Command('node')
const child = await command.spawn()
await child.write('message')
await child.write([0, 1, 2, 3, 4, 5])
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | *string* \| *number*[] | The message to write, either a string or a byte array.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [shell.ts:135](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L135)
