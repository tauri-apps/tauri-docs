---
sidebar_label: "Client"
custom_edit_url: null
hide_title: true
---

# Class: Client

[http](../modules/http.md).Client

## Properties

### id

• **id**: `number`

#### Defined in

[http.ts:158](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/http.ts#L158)

## Methods

### delete

▸ **delete**<T\>(`url`, `options?`): `Promise`<[Response](http.response.md)<T\>\>

Makes a DELETE request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [RequestOptions](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[Response](http.response.md)<T\>\>

A promise resolving to the response.

#### Defined in

[http.ts:299](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/http.ts#L299)

___

### drop

▸ **drop**(): `Promise`<void\>

Drops the client instance.

#### Returns

`Promise`<void\>

#### Defined in

[http.ts:169](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/http.ts#L169)

___

### get

▸ **get**<T\>(`url`, `options?`): `Promise`<[Response](http.response.md)<T\>\>

Makes a GET request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [RequestOptions](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[Response](http.response.md)<T\>\>

A promise resolving to the response.

#### Defined in

[http.ts:227](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/http.ts#L227)

___

### patch

▸ **patch**<T\>(`url`, `options?`): `Promise`<[Response](http.response.md)<T\>\>

Makes a PATCH request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [RequestOptions](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[Response](http.response.md)<T\>\>

A promise resolving to the response.

#### Defined in

[http.ts:284](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/http.ts#L284)

___

### post

▸ **post**<T\>(`url`, `body?`, `options?`): `Promise`<[Response](http.response.md)<T\>\>

Makes a POST request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `body?` | [Body](http.body.md) | The body of the request. |
| `options?` | [RequestOptions](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[Response](http.response.md)<T\>\>

A promise resolving to the response.

#### Defined in

[http.ts:243](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/http.ts#L243)

___

### put

▸ **put**<T\>(`url`, `body?`, `options?`): `Promise`<[Response](http.response.md)<T\>\>

Makes a PUT request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `body?` | [Body](http.body.md) | The body of the request. |
| `options?` | [RequestOptions](../modules/http.md#requestoptions) | Request options. |

#### Returns

`Promise`<[Response](http.response.md)<T\>\>

A promise resolving to the response.

#### Defined in

[http.ts:264](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/http.ts#L264)

___

### request

▸ **request**<T\>(`options`): `Promise`<[Response](http.response.md)<T\>\>

Makes an HTTP request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [HttpOptions](../interfaces/http.httpoptions.md) | The request options. |

#### Returns

`Promise`<[Response](http.response.md)<T\>\>

A promise resolving to the response.

#### Defined in

[http.ts:185](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/http.ts#L185)
