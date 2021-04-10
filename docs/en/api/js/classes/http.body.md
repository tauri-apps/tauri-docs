---
title: "Class: Body"
sidebar_label: "Body"
custom_edit_url: null
hide_title: true
---

# Class: Body

[http](../modules/http.md).Body

## Constructors

### constructor

\+ **new Body**(`type`: *string*, `payload`: *unknown*): [*Body*](http.body.md)

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* |
`payload` | *unknown* |

**Returns:** [*Body*](http.body.md)

Defined in: [http.ts:18](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L18)

## Properties

### payload

• **payload**: *unknown*

Defined in: [http.ts:18](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L18)

___

### type

• **type**: *string*

Defined in: [http.ts:17](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L17)

## Methods

### bytes

▸ `Static`**bytes**(`bytes`: *number*[]): [*Body*](http.body.md)

#### Parameters:

Name | Type |
:------ | :------ |
`bytes` | *number*[] |

**Returns:** [*Body*](http.body.md)

Defined in: [http.ts:37](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L37)

___

### form

▸ `Static`**form**(`data`: *Record*<string, [*Part*](../modules/http.md#part)\>): [*Body*](http.body.md)

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *Record*<string, [*Part*](../modules/http.md#part)\> |

**Returns:** [*Body*](http.body.md)

Defined in: [http.ts:25](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L25)

___

### json

▸ `Static`**json**(`data`: *Record*<any, any\>): [*Body*](http.body.md)

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *Record*<any, any\> |

**Returns:** [*Body*](http.body.md)

Defined in: [http.ts:29](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L29)

___

### text

▸ `Static`**text**(`value`: *string*): [*Body*](http.body.md)

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* |

**Returns:** [*Body*](http.body.md)

Defined in: [http.ts:33](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L33)
