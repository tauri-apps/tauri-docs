---
title: "Module: http"
sidebar_label: "http"
custom_edit_url: null
hide_title: true
---

# Module: http

Access the HTTP client written in Rust.

## Table of contents

### Enumerations

- [ResponseType](../enums/http.responsetype.md)

### Classes

- [Body](../classes/http.body.md)
- [Client](../classes/http.client.md)

### Interfaces

- [ClientOptions](../interfaces/http.clientoptions.md)
- [HttpOptions](../interfaces/http.httpoptions.md)
- [Response](../interfaces/http.response.md)

## Type aliases

### FetchOptions

Ƭ **FetchOptions**: *Omit*<[*HttpOptions*](../interfaces/http.httpoptions.md), *url*\>

Options for the `fetch` API.

Defined in: [http.ts:107](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L107)

___

### HttpVerb

Ƭ **HttpVerb**: *GET* \| *POST* \| *PUT* \| *DELETE* \| *PATCH* \| *HEAD* \| *OPTIONS* \| *CONNECT* \| *TRACE*

The request HTTP verb.

Defined in: [http.ts:82](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L82)

___

### Part

Ƭ **Part**: *string* \| *number*[]

Defined in: [http.ts:23](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L23)

___

### RequestOptions

Ƭ **RequestOptions**: *Omit*<[*HttpOptions*](../interfaces/http.httpoptions.md), *method* \| *url*\>

Request options.

Defined in: [http.ts:105](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L105)

## Functions

### fetch

▸ **fetch**<T\>(`url`: *string*, `options?`: [*FetchOptions*](http.md#fetchoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Perform an HTTP request using the default client.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | The request URL.   |
`options?` | [*FetchOptions*](http.md#fetchoptions) | The fetch options.   |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

The response object.

Defined in: [http.ts:275](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L275)

___

### getClient

▸ **getClient**(`options?`: [*ClientOptions*](../interfaces/http.clientoptions.md)): *Promise*<[*Client*](../classes/http.client.md)\>

Creates a new client using the specified options.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options?` | [*ClientOptions*](../interfaces/http.clientoptions.md) | Client configuration.    |

**Returns:** *Promise*<[*Client*](../classes/http.client.md)\>

A promise resolving to the client instance.

Defined in: [http.ts:255](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L255)
