---
title: "Module: http"
sidebar_label: "http"
custom_edit_url: null
hide_title: true
---

# Module: http

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

Defined in: [http.ts:68](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L68)

___

### HttpVerb

Ƭ **HttpVerb**: *GET* \| *POST* \| *PUT* \| *DELETE* \| *PATCH* \| *HEAD* \| *OPTIONS* \| *CONNECT* \| *TRACE*

Defined in: [http.ts:46](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L46)

___

### Part

Ƭ **Part**: *string* \| *number*[]

Defined in: [http.ts:18](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L18)

___

### RequestOptions

Ƭ **RequestOptions**: *Omit*<[*HttpOptions*](../interfaces/http.httpoptions.md), *method* \| *url*\>

Defined in: [http.ts:67](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L67)

## Functions

### fetch

▸ **fetch**<T\>(`url`: *string*, `options?`: [*FetchOptions*](http.md#fetchoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`options?` | [*FetchOptions*](http.md#fetchoptions) |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Defined in: [http.ts:215](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L215)

___

### getClient

▸ **getClient**(`options?`: [*ClientOptions*](../interfaces/http.clientoptions.md)): *Promise*<[*Client*](../classes/http.client.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | [*ClientOptions*](../interfaces/http.clientoptions.md) |

**Returns:** *Promise*<[*Client*](../classes/http.client.md)\>

Defined in: [http.ts:203](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L203)
