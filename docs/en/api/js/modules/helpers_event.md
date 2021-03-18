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

Defined in: [helpers/event.ts:8](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/helpers/event.ts#L8)

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

Defined in: [helpers/event.ts:58](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/helpers/event.ts#L58)

___

### listen

▸ **listen**<T\>(`event`: *string*, `handler`: [*EventCallback*](helpers_event.md#eventcallback)<T\>): *Promise*<void\>

listen to an event from the backend

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | the event name   |
`handler` | [*EventCallback*](helpers_event.md#eventcallback)<T\> | the event handler callback    |

**Returns:** *Promise*<void\>

Defined in: [helpers/event.ts:32](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/helpers/event.ts#L32)

___

### once

▸ **once**<T\>(`event`: *string*, `handler`: [*EventCallback*](helpers_event.md#eventcallback)<T\>): *Promise*<void\>

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

**Returns:** *Promise*<void\>

Defined in: [helpers/event.ts:45](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/helpers/event.ts#L45)
