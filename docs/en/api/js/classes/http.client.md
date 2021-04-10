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

Defined in: [http.ts:74](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L74)

## Properties

### id

• **id**: *number*

Defined in: [http.ts:74](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L74)

## Methods

### delete

▸ **delete**<T\>(`url`: *string*, `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

makes a DELETE request

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | request URL   |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | request options    |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

promise resolving to the response

Defined in: [http.ts:194](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L194)

___

### drop

▸ **drop**(): *Promise*<void\>

drops the client instance

**Returns:** *Promise*<void\>

Defined in: [http.ts:82](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L82)

___

### get

▸ **get**<T\>(`url`: *string*, `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

makes a GET request

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | request URL   |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | request options    |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

promise resolving to the response

Defined in: [http.ts:118](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L118)

___

### patch

▸ **patch**<T\>(`url`: *string*, `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

makes a PATCH request

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | request URL   |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | request options    |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

promise resolving to the response

Defined in: [http.ts:178](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L178)

___

### post

▸ **post**<T\>(`url`: *string*, `body?`: [*Body*](http.body.md), `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

makes a POST request

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | request URL   |
`body?` | [*Body*](http.body.md) | request body   |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | request options    |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

promise resolving to the response

Defined in: [http.ts:135](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L135)

___

### put

▸ **put**<T\>(`url`: *string*, `body?`: [*Body*](http.body.md), `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

makes a PUT request

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | request URL   |
`body?` | [*Body*](http.body.md) | request body   |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | request options    |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

promise resolving to the response

Defined in: [http.ts:157](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L157)

___

### request

▸ **request**<T\>(`options`: [*HttpOptions*](../interfaces/http.httpoptions.md)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

makes a HTTP request

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options` | [*HttpOptions*](../interfaces/http.httpoptions.md) | request options    |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

promise resolving to the response

Defined in: [http.ts:99](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/http.ts#L99)
