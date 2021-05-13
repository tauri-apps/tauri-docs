---
title: "Class: WebviewWindowHandle"
sidebar_label: "WebviewWindowHandle"
custom_edit_url: null
hide_title: true
---

# Class: WebviewWindowHandle

[window](../modules/window.md).WebviewWindowHandle

A webview window handle allows emitting and listening to events from the backend that are tied to the window.

## Hierarchy

* **WebviewWindowHandle**

  ↳ [*WebviewWindow*](window.webviewwindow.md)

## Constructors

### constructor

\+ **new WebviewWindowHandle**(`label`: *string*): [*WebviewWindowHandle*](window.webviewwindowhandle.md)

#### Parameters:

Name | Type |
:------ | :------ |
`label` | *string* |

**Returns:** [*WebviewWindowHandle*](window.webviewwindowhandle.md)

Defined in: [window.ts:128](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L128)

## Properties

### label

• **label**: *string*

Window label.

Defined in: [window.ts:126](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L126)

___

### listeners

• **listeners**: *object*

Local event listeners.

#### Type declaration:

Defined in: [window.ts:128](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L128)

## Methods

### \_handleTauriEvent

▸ **_handleTauriEvent**<T\>(`event`: *string*, `handler`: [*EventCallback*](../modules/event.md#eventcallback)<T\>): *boolean*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`handler` | [*EventCallback*](../modules/event.md#eventcallback)<T\> |

**Returns:** *boolean*

Defined in: [window.ts:192](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L192)

___

### emit

▸ **emit**(`event`: *string*, `payload?`: *string*): *Promise*<void\>

Emits an event to the backend, tied to the webview window.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | Event name.   |
`payload?` | *string* | Event payload.    |

**Returns:** *Promise*<void\>

Defined in: [window.ts:181](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L181)

___

### listen

▸ **listen**<T\>(`event`: *string*, `handler`: [*EventCallback*](../modules/event.md#eventcallback)<T\>): *Promise*<[*UnlistenFn*](../modules/event.md#unlistenfn)\>

Listen to an event emitted by the backend that is tied to the webview window.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | Event name.   |
`handler` | [*EventCallback*](../modules/event.md#eventcallback)<T\> | Event handler.   |

**Returns:** *Promise*<[*UnlistenFn*](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

Defined in: [window.ts:143](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L143)

___

### once

▸ **once**<T\>(`event`: *string*, `handler`: [*EventCallback*](../modules/event.md#eventcallback)<T\>): *Promise*<[*UnlistenFn*](../modules/event.md#unlistenfn)\>

Listen to an one-off event emitted by the backend that is tied to the webview window.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | Event name.   |
`handler` | [*EventCallback*](../modules/event.md#eventcallback)<T\> | Event handler.   |

**Returns:** *Promise*<[*UnlistenFn*](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

Defined in: [window.ts:164](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L164)
