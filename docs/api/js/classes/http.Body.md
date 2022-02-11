[@tauri-apps/api](../index.md) / [http](../modules/http.md) / Body

# Class: Body

[http](../modules/http.md).Body

The body object to be used on POST and PUT requests.

## Properties

### payload

• **payload**: `unknown`

#### Defined in

[http.ts:45](https://github.com/tauri-apps/tauri/blob/fe0cfea/tooling/api/src/http.ts#L45)

___

### type

• **type**: `string`

#### Defined in

[http.ts:44](https://github.com/tauri-apps/tauri/blob/fe0cfea/tooling/api/src/http.ts#L44)

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

[http.ts:100](https://github.com/tauri-apps/tauri/blob/fe0cfea/tooling/api/src/http.ts#L100)

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

[http.ts:60](https://github.com/tauri-apps/tauri/blob/fe0cfea/tooling/api/src/http.ts#L60)

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

[http.ts:78](https://github.com/tauri-apps/tauri/blob/fe0cfea/tooling/api/src/http.ts#L78)

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

[http.ts:89](https://github.com/tauri-apps/tauri/blob/fe0cfea/tooling/api/src/http.ts#L89)
