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

Name | Type | Default value |
:------ | :------ | :------ |
`label` | *string* | - |
`options` | [*WindowOptions*](../interfaces/window.windowoptions.md) | {} |

**Returns:** [*WebviewWindow*](window.webviewwindow.md)

Overrides: WebviewWindowHandle.constructor

Defined in: [window.ts:114](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L114)

## Properties

### label

• **label**: *string*

Inherited from: WebviewWindowHandle.label

Defined in: [window.ts:34](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L34)

___

### listeners

• **listeners**: *object*

#### Type declaration:

Inherited from: WebviewWindowHandle.listeners

Defined in: [window.ts:35](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L35)

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

Inherited from: WebviewWindowHandle._handleTauriEvent

Defined in: [window.ts:99](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L99)

___

### emit

▸ **emit**(`event`: *string*, `payload?`: *string*): *Promise*<void\>

Emits an event to the webview.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | Event name   |
`payload?` | *string* | - |

**Returns:** *Promise*<void\>

Inherited from: WebviewWindowHandle.emit

Defined in: [window.ts:88](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L88)

___

### listen

▸ **listen**<T\>(`event`: *string*, `handler`: [*EventCallback*](../modules/event.md#eventcallback)<T\>): *Promise*<[*UnlistenFn*](../modules/event.md#unlistenfn)\>

Listen to an event emitted by the webview.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | Event name   |
`handler` | [*EventCallback*](../modules/event.md#eventcallback)<T\> | Event handler callback   |

**Returns:** *Promise*<[*UnlistenFn*](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

Inherited from: WebviewWindowHandle.listen

Defined in: [window.ts:50](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L50)

___

### once

▸ **once**<T\>(`event`: *string*, `handler`: [*EventCallback*](../modules/event.md#eventcallback)<T\>): *Promise*<[*UnlistenFn*](../modules/event.md#unlistenfn)\>

Listen to an one-off event emitted by the webview.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | Event name   |
`handler` | [*EventCallback*](../modules/event.md#eventcallback)<T\> | Event handler callback   |

**Returns:** *Promise*<[*UnlistenFn*](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

Inherited from: WebviewWindowHandle.once

Defined in: [window.ts:71](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L71)

___

### getByLabel

▸ `Static`**getByLabel**(`label`: *string*): *null* \| *WebviewWindowHandle*

Gets the WebviewWindow handle for the webview associated with the given label.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`label` | *string* | The webview window label.   |

**Returns:** *null* \| *WebviewWindowHandle*

The handle to communicate with the webview or null if the webview doesn't exist.

Defined in: [window.ts:137](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L137)
