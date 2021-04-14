---
title: "Class: Client"
sidebar_label: "Client"
custom_edit_url: null
hide_title: true
---

# Class: Client

[http](../modules/http.md).Client

## Constructors

### constructor

\+ **new Client**(`id`: *number*): [*Client*](http.client.md)

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *number* |

**Returns:** [*Client*](http.client.md)

Defined in: [http.ts:78](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L78)

## Properties

### id

• **id**: *number*

Defined in: [http.ts:78](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L78)

## Methods

### delete

▸ **delete**<T\>(`url`: *string*, `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Makes a DELETE request.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | Request URL   |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | Request options   |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

Defined in: [http.ts:194](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L194)

___

### drop

▸ **drop**(): *Promise*<void\>

Drops the client instance.

**Returns:** *Promise*<void\>

Defined in: [http.ts:88](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L88)

___

### get

▸ **get**<T\>(`url`: *string*, `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Makes a GET request.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | Request URL   |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | - |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

Defined in: [http.ts:122](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L122)

___

### patch

▸ **patch**<T\>(`url`: *string*, `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Makes a PATCH request.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | Request URL   |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | Request options   |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

Defined in: [http.ts:179](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L179)

___

### post

▸ **post**<T\>(`url`: *string*, `body?`: [*Body*](http.body.md), `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Makes a POST request.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | Request URL   |
`body?` | [*Body*](http.body.md) | - |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | - |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

Defined in: [http.ts:138](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L138)

___

### put

▸ **put**<T\>(`url`: *string*, `body?`: [*Body*](http.body.md), `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Makes a PUT request.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | Request URL   |
`body?` | [*Body*](http.body.md) | - |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | - |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

Defined in: [http.ts:159](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L159)

___

### request

▸ **request**<T\>(`options`: [*HttpOptions*](../interfaces/http.httpoptions.md)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Makes a HTTP request.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options` | [*HttpOptions*](../interfaces/http.httpoptions.md) | Request options   |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

Defined in: [http.ts:104](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/http.ts#L104)
