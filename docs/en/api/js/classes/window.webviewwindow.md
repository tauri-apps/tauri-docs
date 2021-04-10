---
title: "Class: WebviewWindow"
sidebar_label: "WebviewWindow"
custom_edit_url: null
hide_title: true
---

# Class: WebviewWindow

[window](../modules/window.md).WebviewWindow

## Hierarchy

* *WebviewWindowHandle*

  ↳ **WebviewWindow**

## Constructors

### constructor

\+ **new WebviewWindow**(`label`: *string*, `options?`: [*WindowOptions*](../interfaces/window.windowoptions.md)): [*WebviewWindow*](window.webviewwindow.md)

#### Parameters:

Name | Type |
:------ | :------ |
`label` | *string* |
`options` | [*WindowOptions*](../interfaces/window.windowoptions.md) |

**Returns:** [*WebviewWindow*](window.webviewwindow.md)

Overrides: void

Defined in: [window.ts:108](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/window.ts#L108)

## Properties

### label

• **label**: *string*

Inherited from: void

Defined in: [window.ts:29](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/window.ts#L29)

___

### listeners

• **listeners**: *object*

#### Type declaration:

Inherited from: void

Defined in: [window.ts:30](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/window.ts#L30)

## Methods

### \_handleTauriEvent

▸ **_handleTauriEvent**<T\>(`event`: *string*, `handler`: [*EventCallback*](../modules/helpers_event.md#eventcallback)<T\>): *boolean*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`handler` | [*EventCallback*](../modules/helpers_event.md#eventcallback)<T\> |

**Returns:** *boolean*

Inherited from: void

Defined in: [window.ts:93](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/window.ts#L93)

___

### emit

▸ **emit**(`event`: *string*, `payload?`: *string*): *Promise*<void\>

emits an event to the webview

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | the event name   |
`payload?` | *string* | - |

**Returns:** *Promise*<void\>

Inherited from: void

Defined in: [window.ts:82](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/window.ts#L82)

___

### listen

▸ **listen**<T\>(`event`: *string*, `handler`: [*EventCallback*](../modules/helpers_event.md#eventcallback)<T\>): *Promise*<[*UnlistenFn*](../modules/helpers_event.md#unlistenfn)\>

Listen to an event emitted by the webview

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | the event name   |
`handler` | [*EventCallback*](../modules/helpers_event.md#eventcallback)<T\> | the event handler callback   |

**Returns:** *Promise*<[*UnlistenFn*](../modules/helpers_event.md#unlistenfn)\>

a promise resolving to a function to unlisten to the event.

Inherited from: void

Defined in: [window.ts:45](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/window.ts#L45)

___

### once

▸ **once**<T\>(`event`: *string*, `handler`: [*EventCallback*](../modules/helpers_event.md#eventcallback)<T\>): *Promise*<[*UnlistenFn*](../modules/helpers_event.md#unlistenfn)\>

Listen to an one-off event emitted by the webview

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | the event name   |
`handler` | [*EventCallback*](../modules/helpers_event.md#eventcallback)<T\> | the event handler callback    |

**Returns:** *Promise*<[*UnlistenFn*](../modules/helpers_event.md#unlistenfn)\>

Inherited from: void

Defined in: [window.ts:65](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/window.ts#L65)

___

### getByLabel

▸ `Static`**getByLabel**(`label`: *string*): *null* \| *WebviewWindowHandle*

Gets the WebviewWindow handle for the webview associated with the given label.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`label` | *string* | the webview window label.    |

**Returns:** *null* \| *WebviewWindowHandle*

the handle to communicate with the webview or null if the webview doesn't exist

Defined in: [window.ts:132](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/window.ts#L132)
