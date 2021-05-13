---
title: "Class: Body"
sidebar_label: "Body"
custom_edit_url: null
hide_title: true
---

# Class: Body

[http](../modules/http.md).Body

The body object to be used on POST and PUT requests.

## Properties

### payload

• **payload**: *unknown*

Defined in: [http.ts:28](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L28)

___

### type

• **type**: *string*

Defined in: [http.ts:27](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L27)

## Methods

### bytes

▸ `Static`**bytes**(`bytes`: *number*[]): [*Body*](http.body.md)

Creates a new byte array body.

#### Parameters:

Name | Type |
:------ | :------ |
`bytes` | *number*[] |

**Returns:** [*Body*](http.body.md)

The body object ready to be used on the POST and PUT requests.

Defined in: [http.ts:76](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L76)

___

### form

▸ `Static`**form**(`data`: *Record*<string, [*Part*](../modules/http.md#part)\>): [*Body*](http.body.md)

Creates a new form data body.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | *Record*<string, [*Part*](../modules/http.md#part)\> | The body data.    |

**Returns:** [*Body*](http.body.md)

The body object ready to be used on the POST and PUT requests.

Defined in: [http.ts:43](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L43)

___

### json

▸ `Static`**json**(`data`: *Record*<any, any\>): [*Body*](http.body.md)

Creates a new JSON body.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | *Record*<any, any\> | The body JSON object.    |

**Returns:** [*Body*](http.body.md)

The body object ready to be used on the POST and PUT requests.

Defined in: [http.ts:54](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L54)

___

### text

▸ `Static`**text**(`value`: *string*): [*Body*](http.body.md)

Creates a new UTF-8 string body.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* |

**Returns:** [*Body*](http.body.md)

The body object ready to be used on the POST and PUT requests.

Defined in: [http.ts:65](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L65)
