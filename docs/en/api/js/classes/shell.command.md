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

Name | Type | Default value |
:------ | :------ | :------ |
`program` | *string* | - |
`args` | *string* \| *string*[] | [] |

**Returns:** [*Command*](shell.command.md)

Overrides: EventEmitter&lt;&#x27;close&#x27; | &#x27;error&#x27;&gt;.constructor

Defined in: [shell.ts:113](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/shell.ts#L113)

## Properties

### args

• **args**: *string*[]

Defined in: [shell.ts:109](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/shell.ts#L109)

___

### eventListeners

• **eventListeners**: *object*

#### Type declaration:

Inherited from: EventEmitter.eventListeners

Defined in: [shell.ts:48](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/shell.ts#L48)

___

### pid

• **pid**: *null* \| *number*= null

Defined in: [shell.ts:113](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/shell.ts#L113)

___

### program

• **program**: *string*

Defined in: [shell.ts:108](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/shell.ts#L108)

___

### sidecar

• **sidecar**: *boolean*= false

Defined in: [shell.ts:110](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/shell.ts#L110)

___

### stderr

• **stderr**: *EventEmitter*<*data*\>

Defined in: [shell.ts:112](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/shell.ts#L112)

___

### stdout

• **stdout**: *EventEmitter*<*data*\>

Defined in: [shell.ts:111](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/shell.ts#L111)

## Methods

### \_emit

▸ **_emit**(`event`: *close* \| *error*, `payload`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* \| *error* |
`payload` | *any* |

**Returns:** *void*

Inherited from: EventEmitter._emit

Defined in: [shell.ts:62](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/shell.ts#L62)

___

### execute

▸ **execute**(): *Promise*<ChildProcess\>

**Returns:** *Promise*<ChildProcess\>

Defined in: [shell.ts:157](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/shell.ts#L157)

___

### on

▸ **on**(`event`: *close* \| *error*, `handler`: (`arg`: *any*) => *void*): *EventEmitter*<*close* \| *error*\>

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* \| *error* |
`handler` | (`arg`: *any*) => *void* |

**Returns:** *EventEmitter*<*close* \| *error*\>

Inherited from: EventEmitter.on

Defined in: [shell.ts:72](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/shell.ts#L72)

___

### spawn

▸ **spawn**(): *Promise*<[*Child*](shell.child.md)\>

**Returns:** *Promise*<[*Child*](shell.child.md)\>

Defined in: [shell.ts:133](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/shell.ts#L133)

___

### sidecar

▸ `Static`**sidecar**(`program`: *string*, `args?`: *string* \| *string*[]): [*Command*](shell.command.md)

Creates a command to execute the given sidecar binary.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`program` | *string* | - | Binary name   |
`args` | *string* \| *string*[] | [] | - |

**Returns:** [*Command*](shell.command.md)

Defined in: [shell.ts:127](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/shell.ts#L127)
