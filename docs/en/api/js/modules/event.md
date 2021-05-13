---
title: "Module: event"
sidebar_label: "event"
custom_edit_url: null
hide_title: true
---

# Module: event

The event system allows you to emit events to the backend and listen to events from it.

## Table of contents

### Interfaces

- [Event](../interfaces/event.event-1.md)

## Type aliases

### EventCallback

Ƭ **EventCallback**<T\>: (`event`: [*Event*](../interfaces/event.event-1.md)<T\>) => *void*

#### Type parameters:

Name |
:------ |
`T` |

#### Type declaration:

▸ (`event`: [*Event*](../interfaces/event.event-1.md)<T\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*Event*](../interfaces/event.event-1.md)<T\> |

**Returns:** *void*

Defined in: [event.ts:23](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/event.ts#L23)

___

### UnlistenFn

Ƭ **UnlistenFn**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [event.ts:25](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/event.ts#L25)

## Functions

### emit

▸ **emit**(`event`: *string*, `payload?`: *string*): *Promise*<void\>

Emits an event to the backend.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | Event name   |
`payload?` | *string* | - |

**Returns:** *Promise*<void\>

Defined in: [event.ts:91](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/event.ts#L91)

___

### listen

▸ **listen**<T\>(`event`: *string*, `handler`: [*EventCallback*](event.md#eventcallback)<T\>): *Promise*<[*UnlistenFn*](event.md#unlistenfn)\>

Listen to an event from the backend.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | Event name   |
`handler` | [*EventCallback*](event.md#eventcallback)<T\> | Event handler callback   |

**Returns:** *Promise*<[*UnlistenFn*](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

Defined in: [event.ts:51](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/event.ts#L51)

___

### once

▸ **once**<T\>(`event`: *string*, `handler`: [*EventCallback*](event.md#eventcallback)<T\>): *Promise*<[*UnlistenFn*](event.md#unlistenfn)\>

Listen to an one-off event from the backend.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | Event name   |
`handler` | [*EventCallback*](event.md#eventcallback)<T\> | Event handler callback   |

**Returns:** *Promise*<[*UnlistenFn*](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

Defined in: [event.ts:74](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/event.ts#L74)
