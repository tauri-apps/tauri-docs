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

## Security

This API has a scope configuration that forces you to restrict the URLs and paths that can be accessed using glob patterns.

For instance, this scope configuration only allows making HTTP requests to the GitHub API for the `tauri-apps` organization:
```json
{
  "tauri": {
    "allowlist": {
      "http": {
        "scope": ["https://api.github.com/repos/tauri-apps/*"]
      }
    }
  }
}
```
Trying to execute any API with a URL not configured on the scope results in a promise rejection due to denied access.

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

[http.ts:151](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L151)

___

### HttpVerb

Ƭ **HttpVerb**: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"DELETE"`` \| ``"PATCH"`` \| ``"HEAD"`` \| ``"OPTIONS"`` \| ``"CONNECT"`` \| ``"TRACE"``

The request HTTP verb.

#### Defined in

[http.ts:126](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L126)

___

### Part

Ƭ **Part**: `string` \| `Uint8Array`

#### Defined in

[http.ts:59](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L59)

___

### RequestOptions

Ƭ **RequestOptions**: `Omit`<[`HttpOptions`](../interfaces/http.HttpOptions.md), ``"method"`` \| ``"url"``\>

Request options.

#### Defined in

[http.ts:149](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L149)

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

[http.ts:369](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L369)

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

[http.ts:349](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L349)
