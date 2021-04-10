---
title: "Module: helpers/event"
sidebar_label: "helpers/event"
custom_edit_url: null
hide_title: true
---

# Module: helpers/event

## Table of contents

### Interfaces

- [Event](../interfaces/helpers_event.event.md)

## Type aliases

### EventCallback

Ƭ **EventCallback**<T\>: (`event`: [*Event*](../interfaces/helpers_event.event.md)<T\>) => *void*

#### Type parameters:

Name |
:------ |
`T` |

#### Type declaration:

▸ (`event`: [*Event*](../interfaces/helpers_event.event.md)<T\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*Event*](../interfaces/helpers_event.event.md)<T\> |

**Returns:** *void*

Defined in: [helpers/event.ts:13](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/helpers/event.ts#L13)

___

### UnlistenFn

Ƭ **UnlistenFn**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [helpers/event.ts:15](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/helpers/event.ts#L15)

## Functions

### emit

▸ **emit**(`event`: *string*, `windowLabel?`: *string*, `payload?`: *string*): *Promise*<void\>

emits an event to the backend

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | the event name   |
`windowLabel?` | *string* | - |
`payload?` | *string* | - |

**Returns:** *Promise*<void\>

Defined in: [helpers/event.ts:84](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/helpers/event.ts#L84)

___

### listen

▸ **listen**<T\>(`event`: *string*, `handler`: [*EventCallback*](helpers_event.md#eventcallback)<T\>): *Promise*<[*UnlistenFn*](helpers_event.md#unlistenfn)\>

listen to an event from the backend

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | the event name   |
`handler` | [*EventCallback*](helpers_event.md#eventcallback)<T\> | the event handler callback   |

**Returns:** *Promise*<[*UnlistenFn*](helpers_event.md#unlistenfn)\>

a promise resolving to a function to unlisten to the event.

Defined in: [helpers/event.ts:55](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/helpers/event.ts#L55)

___

### once

▸ **once**<T\>(`event`: *string*, `handler`: [*EventCallback*](helpers_event.md#eventcallback)<T\>): *Promise*<[*UnlistenFn*](helpers_event.md#unlistenfn)\>

listen to an one-off event from the backend

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | the event name   |
`handler` | [*EventCallback*](helpers_event.md#eventcallback)<T\> | the event handler callback    |

**Returns:** *Promise*<[*UnlistenFn*](helpers_event.md#unlistenfn)\>

Defined in: [helpers/event.ts:68](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/helpers/event.ts#L68)
