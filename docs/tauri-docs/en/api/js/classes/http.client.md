---
title: "Class: Client"
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

[http.ts:139](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/http.ts#L139)

## Methods

### delete

▸ **delete**<T\>(`url`, `options?`): `Promise`<[Response](../interfaces/http.response.md)<T\>\>

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

`Promise`<[Response](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

#### Defined in

[http.ts:256](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/http.ts#L256)

___

### drop

▸ **drop**(): `Promise`<void\>

Drops the client instance.

#### Returns

`Promise`<void\>

#### Defined in

[http.ts:150](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/http.ts#L150)

___

### get

▸ **get**<T\>(`url`, `options?`): `Promise`<[Response](../interfaces/http.response.md)<T\>\>

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

`Promise`<[Response](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

#### Defined in

[http.ts:184](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/http.ts#L184)

___

### patch

▸ **patch**<T\>(`url`, `options?`): `Promise`<[Response](../interfaces/http.response.md)<T\>\>

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

`Promise`<[Response](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

#### Defined in

[http.ts:241](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/http.ts#L241)

___

### post

▸ **post**<T\>(`url`, `body?`, `options?`): `Promise`<[Response](../interfaces/http.response.md)<T\>\>

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

`Promise`<[Response](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

#### Defined in

[http.ts:200](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/http.ts#L200)

___

### put

▸ **put**<T\>(`url`, `body?`, `options?`): `Promise`<[Response](../interfaces/http.response.md)<T\>\>

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

`Promise`<[Response](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

#### Defined in

[http.ts:221](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/http.ts#L221)

___

### request

▸ **request**<T\>(`options`): `Promise`<[Response](../interfaces/http.response.md)<T\>\>

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

`Promise`<[Response](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

#### Defined in

[http.ts:166](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/http.ts#L166)
