[@tauri-apps/api](../index.md) / http

# Namespace: http

Access the HTTP client written in Rust.

This package is also accessible with `window.__TAURI__.http` when `tauri.conf.json > build > withGlobalTauri` is set to true.

The APIs must be allowlisted on `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "http": {
        "all": true, // enable all http APIs
        "request": true // enable HTTP request API
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Enumerations

- [ResponseType](../enums/http.ResponseType.md)

## Classes

- [Body](../classes/http.Body.md)
- [Client](../classes/http.Client.md)
- [Response](../classes/http.Response.md)

## Interfaces

- [ClientOptions](../interfaces/http.ClientOptions.md)
- [HttpOptions](../interfaces/http.HttpOptions.md)

## Type aliases

### FetchOptions

Ƭ **FetchOptions**: `Omit`<[`HttpOptions`](../interfaces/http.HttpOptions.md), ``"url"``\>

Options for the `fetch` API.

#### Defined in

[http.ts:124](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/http.ts#L124)

___

### HttpVerb

Ƭ **HttpVerb**: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"DELETE"`` \| ``"PATCH"`` \| ``"HEAD"`` \| ``"OPTIONS"`` \| ``"CONNECT"`` \| ``"TRACE"``

The request HTTP verb.

#### Defined in

[http.ts:99](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/http.ts#L99)

___

### Part

Ƭ **Part**: ``"string"`` \| `number`[]

#### Defined in

[http.ts:40](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/http.ts#L40)

___

### RequestOptions

Ƭ **RequestOptions**: `Omit`<[`HttpOptions`](../interfaces/http.HttpOptions.md), ``"method"`` \| ``"url"``\>

Request options.

#### Defined in

[http.ts:122](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/http.ts#L122)

## Functions

### fetch

▸ **fetch**<`T`\>(`url`, `options?`): `Promise`<[`Response`](../classes/http.Response.md)<`T`\>\>

Perform an HTTP request using the default client.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`FetchOptions`](http.md#fetchoptions) | The fetch options. |

#### Returns

`Promise`<[`Response`](../classes/http.Response.md)<`T`\>\>

The response object.

#### Defined in

[http.ts:342](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/http.ts#L342)

___

### getClient

▸ **getClient**(`options?`): `Promise`<[`Client`](../classes/http.Client.md)\>

Creates a new client using the specified options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ClientOptions`](../interfaces/http.ClientOptions.md) | Client configuration. |

#### Returns

`Promise`<[`Client`](../classes/http.Client.md)\>

A promise resolving to the client instance.

#### Defined in

[http.ts:322](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/http.ts#L322)
