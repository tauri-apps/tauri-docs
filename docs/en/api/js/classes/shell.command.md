---
title: "Class: Command"
sidebar_label: "Command"
custom_edit_url: null
hide_title: true
---

# Class: Command

[shell](../modules/shell.md).Command

## Hierarchy

* *EventEmitter*<*close* \| *error*\>

  ↳ **Command**

## Constructors

### constructor

\+ **new Command**(`program`: *string*, `args?`: *string* \| *string*[]): [*Command*](shell.command.md)

#### Parameters:

Name | Type |
:------ | :------ |
`program` | *string* |
`args` | *string* \| *string*[] |

**Returns:** [*Command*](shell.command.md)

Overrides: void

Defined in: [shell.ts:108](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L108)

## Properties

### args

• **args**: *string*[]

Defined in: [shell.ts:104](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L104)

___

### eventListeners

• **eventListeners**: *object*

#### Type declaration:

Inherited from: void

Defined in: [shell.ts:43](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L43)

___

### pid

• **pid**: *null* \| *number*= null

Defined in: [shell.ts:108](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L108)

___

### program

• **program**: *string*

Defined in: [shell.ts:103](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L103)

___

### sidecar

• **sidecar**: *boolean*= false

Defined in: [shell.ts:105](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L105)

___

### stderr

• **stderr**: *EventEmitter*<*data*\>

Defined in: [shell.ts:107](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L107)

___

### stdout

• **stdout**: *EventEmitter*<*data*\>

Defined in: [shell.ts:106](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L106)

## Methods

### \_emit

▸ **_emit**(`event`: *close* \| *error*, `payload`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* \| *error* |
`payload` | *any* |

**Returns:** *void*

Inherited from: void

Defined in: [shell.ts:57](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L57)

___

### execute

▸ **execute**(): *Promise*<ChildProcess\>

**Returns:** *Promise*<ChildProcess\>

Defined in: [shell.ts:153](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L153)

___

### on

▸ **on**(`event`: *close* \| *error*, `handler`: (`arg`: *any*) => *void*): *EventEmitter*<*close* \| *error*\>

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* \| *error* |
`handler` | (`arg`: *any*) => *void* |

**Returns:** *EventEmitter*<*close* \| *error*\>

Inherited from: void

Defined in: [shell.ts:67](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L67)

___

### spawn

▸ **spawn**(): *Promise*<[*Child*](shell.child.md)\>

**Returns:** *Promise*<[*Child*](shell.child.md)\>

Defined in: [shell.ts:129](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L129)

___

### sidecar

▸ `Static`**sidecar**(`program`: *string*, `args?`: *string* \| *string*[]): [*Command*](shell.command.md)

Creates a command to execute the given sidecar binary

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`program` | *string* | Binary name    |
`args` | *string* \| *string*[] | - |

**Returns:** [*Command*](shell.command.md)

Defined in: [shell.ts:123](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L123)
