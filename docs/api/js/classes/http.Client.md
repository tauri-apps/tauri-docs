[@tauri-apps/api](../index.md) / [http](../modules/http.md) / Client

# Class: Client

[http](../modules/http.md).Client

## Properties

### id

• **id**: `number`

#### Defined in

[http.ts:170](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L170)

## Methods

### delete

▸ **delete**<`T`\>(`url`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a DELETE request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

#### Defined in

[http.ts:314](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L314)

___

### drop

▸ **drop**(): `Promise`<`void`\>

Drops the client instance.

#### Returns

`Promise`<`void`\>

#### Defined in

[http.ts:181](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L181)

___

### get

▸ **get**<`T`\>(`url`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a GET request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

#### Defined in

[http.ts:242](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L242)

___

### patch

▸ **patch**<`T`\>(`url`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a PATCH request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

#### Defined in

[http.ts:299](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L299)

___

### post

▸ **post**<`T`\>(`url`, `body?`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a POST request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `body?` | [`Body`](http.Body.md) | The body of the request. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

#### Defined in

[http.ts:258](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L258)

___

### put

▸ **put**<`T`\>(`url`, `body?`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a PUT request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `body?` | [`Body`](http.Body.md) | The body of the request. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | Request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

#### Defined in

[http.ts:279](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L279)

___

### request

▸ **request**<`T`\>(`options`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes an HTTP request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`HttpOptions`](../interfaces/http.HttpOptions.md) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

#### Defined in

[http.ts:197](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L197)
