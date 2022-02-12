[@tauri-apps/api](../index.md) / [http](../modules/http.md) / Body

# Class: Body

[http](../modules/http.md).Body

The body object to be used on POST and PUT requests.

## Properties

### payload

• **payload**: `unknown`

#### Defined in

[http.ts:64](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L64)

___

### type

• **type**: `string`

#### Defined in

[http.ts:63](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L63)

## Methods

### bytes

▸ `Static` **bytes**(`bytes`): [`Body`](http.Body.md)

Creates a new byte array body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`Body`](http.Body.md)

The body object ready to be used on the POST and PUT requests.

#### Defined in

[http.ts:119](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L119)

___

### form

▸ `Static` **form**(`data`): [`Body`](http.Body.md)

Creates a new form data body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Record`<`string`, [`Part`](../modules/http.md#part)\> | The body data. |

#### Returns

[`Body`](http.Body.md)

The body object ready to be used on the POST and PUT requests.

#### Defined in

[http.ts:79](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L79)

___

### json

▸ `Static` **json**(`data`): [`Body`](http.Body.md)

Creates a new JSON body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Record`<`any`, `any`\> | The body JSON object. |

#### Returns

[`Body`](http.Body.md)

The body object ready to be used on the POST and PUT requests.

#### Defined in

[http.ts:97](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L97)

___

### text

▸ `Static` **text**(`value`): [`Body`](http.Body.md)

Creates a new UTF-8 string body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`Body`](http.Body.md)

The body object ready to be used on the POST and PUT requests.

#### Defined in

[http.ts:108](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L108)
